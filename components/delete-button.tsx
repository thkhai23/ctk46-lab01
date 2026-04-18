"use client";

import { useActionState } from "react";
import { deleteGuestbookEntry, ActionState } from "@/app/guestbook/actions";

const initialState: ActionState = { success: false };

export default function DeleteButton({ id }: { id: string }) {
  const [state, formAction] = useActionState(
    async (prevState: ActionState, formData: FormData) => {
      if (!confirm("Bạn có chắc muốn xóa lời nhắn này?")) {
        return prevState;
      }
      return await deleteGuestbookEntry(id);
    },
    initialState
  );

  return (
    <form action={formAction} className="inline">
      <button
        type="submit"
        className="text-xs text-red-400 hover:text-red-600 transition-colors"
      >
        Xóa
      </button>
    </form>
  );
}