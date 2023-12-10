import { create } from "zustand";

interface UseSideBarMenuModalStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const useSideBarMenuModal = create<UseSideBarMenuModalStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default useSideBarMenuModal;
