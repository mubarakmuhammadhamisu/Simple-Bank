// toggleStore.ts
import { create } from "zustand";
type ToggleStore = {
  isOpen: boolean;
  toggle: () => void;
  setOpen: (value: boolean) => void;
};

// Create a store (global state)
export const useToggleStore = create<ToggleStore>((set) => ({
  isOpen: false, // global boolean variable
  toggle: () => set((state) => ({ isOpen: !state.isOpen })), // switch true/false
  setOpen: (value: boolean) => set({ isOpen: value }), // manually set true/false
}));
