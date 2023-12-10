import { create } from "zustand";

interface RecordCustomerPointsAndRewardsStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const useRecordCustomerPointsAndRewards =
  create<RecordCustomerPointsAndRewardsStore>((set) => ({
    isOpen: false,
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false }),
  }));

export default useRecordCustomerPointsAndRewards;
