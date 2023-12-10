import { create } from "zustand";

interface ShareYourPageModalStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const useShareYourPageModal = create<ShareYourPageModalStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default useShareYourPageModal;
