import { create } from "zustand";

interface RedeemRewardsModalStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const useRedeemRewardsModal = create<RedeemRewardsModalStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default useRedeemRewardsModal;
