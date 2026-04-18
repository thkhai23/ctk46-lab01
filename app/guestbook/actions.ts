"use server";	
	
import { z } from "zod";	
import { revalidatePath } from "next/cache";	
import { guestbookEntries } from "@/data/guestbook";	
	
// Lưu trữ các message gần đây để kiểm tra trùng lặp (server-side memory)	
let recentMessages: Array<{name: string, message: string, timestamp: number}> = [];	
	
// Định nghĩa schema validation cho guestbook	
const guestbookSchema = z.object({	
  name: z	
    .string()	
    .min(2, "Tên phải có ít nhất 2 ký tự")	
    .max(50, "Tên không được quá 50 ký tự"),	
  message: z	
    .string()	
    .min(1, "Lời nhắn không được để trống")	
    .max(500, "Lời nhắn không được quá 500 ký tự"),	
});	
	
export interface ActionState {	
  success: boolean;	
  errors?: {	
    name?: string[];	
    message?: string[];	
  };	
}	
	
export async function createGuestbookEntry(	
  prevState: ActionState,	
  formData: FormData	
): Promise<ActionState> {
    // Lấy dữ liệu từ form	
  const rawData = {	
    name: formData.get("name") as string,	
    message: formData.get("message") as string,	
  };	
	
  // Validate bằng Zod	
  const result = guestbookSchema.safeParse(rawData);	
	
  if (!result.success) {	
    return {	
      success: false,	
      errors: result.error.flatten().fieldErrors,	
    };	
  }	
	
  // Kiểm tra trùng lặp trong 1 phút	
  const oneMinuteAgo = Date.now() - 60000;	
  const duplicateMessage = recentMessages.find(msg => {	
    return msg.name === result.data.name && 	
           msg.message === result.data.message && 	
           msg.timestamp > oneMinuteAgo;	
  });	
	
  if (duplicateMessage) {	
    return {	
      success: false,	
      errors: { message: ["Bạn đã gửi lời nhắn này trong vòng 1 phút qua. Vui lòng chờ trước khi gửi lại."] },	
    };	
  }	
	
  // Thêm entry mới vào mảng	
  const newEntry = {	
    id: Date.now().toString(),	
    name: result.data.name,	
    message: result.data.message,	
    createdAt: new Date().toISOString(),	
  };	
	
  guestbookEntries.unshift(newEntry);	
	
  // Lưu vào recentMessages để kiểm tra trùng lặp (chỉ giữ trong 1 phút)	
  recentMessages.push({	
    name: result.data.name,	
    message: result.data.message,	
    timestamp: Date.now()	
  });	
	
  // Dọn dẹp các message cũ hơn 1 phút	
  recentMessages = recentMessages.filter(msg => msg.timestamp > oneMinuteAgo);	
	
  // Revalidate trang guestbook để hiển thị data mới	
  revalidatePath("/guestbook");	
	
  return { success: true };	
}	
	
export async function deleteGuestbookEntry(id: string): Promise<ActionState> {	
  const index = guestbookEntries.findIndex((entry) => entry.id === id);	
	
  if (index === -1) {	
    return { success: false, errors: { message: ["Không tìm thấy lời nhắn"] } };	
  }	
	
  guestbookEntries.splice(index, 1);	
  revalidatePath("/guestbook");	
	
  return { success: true };	
}