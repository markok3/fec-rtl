import create from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface ISelectedLanguage {
  selectedLanguage: string;
  setSelectedLanguage: (language: string) => void;
}

const useSelectedLanguage = create(
  persist<ISelectedLanguage>(
    (set) => ({
      selectedLanguage: "en",
      setSelectedLanguage: (language: string) =>
        set({ selectedLanguage: language }),
    }),
    {
      name: "selectedLanguage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useSelectedLanguage;
