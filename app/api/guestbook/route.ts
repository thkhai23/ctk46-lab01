import { NextRequest, NextResponse } from "next/server";	
import { guestbookEntries } from "@/data/guestbook";	
	
// GET /api/guestbook — Lấy danh sách tất cả lời nhắn	
export async function GET() {	
  return NextResponse.json(guestbookEntries);	
}	
	
// POST /api/guestbook — Thêm lời nhắn mới	
export async function POST(request: NextRequest) {	
  const body = await request.json();	
	
  // Kiểm tra dữ liệu đầu vào	
  const { name, message } = body;

// 🔥 VALIDATION NAME
if (!name || name.length < 2 || name.length > 50) {
  return NextResponse.json(
    { error: "Tên phải từ 2 đến 50 ký tự" },
    { status: 400 }
  );
}

// 🔥 VALIDATION MESSAGE
if (!message || message.length < 1 || message.length > 500) {
  return NextResponse.json(
    { error: "Nội dung phải từ 1 đến 500 ký tự" },
    { status: 400 }
  );
}
	
  // Tạo entry mới	
  const newEntry = {	
    id: Date.now().toString(),	
    name: body.name,	
    message: body.message,	
    createdAt: new Date().toISOString(),	
  };	
	
  // Thêm vào đầu mảng (hiển thị mới nhất trước)	
  guestbookEntries.unshift(newEntry);	
	
  return NextResponse.json(newEntry, { status: 201 });	
}