import { create } from "zustand";
interface IUserState {
  state: boolean;
  setState: (newState: boolean) => void;
}
export const userAuthed = create<IUserState>()((set) => ({
  state: false,
  setState: (newState) => set((state) => ({state: newState}))
}))