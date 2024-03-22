// store/themeStore.ts
import { create } from "zustand";

type Theme = {
  primaryColor: string;
};

type ThemeStore = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};

const JUABEN = "#6666ff";
const EGANOW =  "#CC0229";
const DCI =  "#ff3366";
const IFINANCE =  "#454545";

const currentTheme = process.env.NEXT_PUBLIC_CURRENT_THEME 
console.log("CURRENT THEME: ", currentTheme) 

const useThemeStore = create<ThemeStore>((set) => {
  // Define theme colors based on the current theme
  let primaryColor;

  switch (currentTheme) {
    case "juaben":
      primaryColor = JUABEN;
      break;
    case "eganow":
      primaryColor =  EGANOW;
      break;
    case "dci":
      primaryColor =  DCI;
      break;
    case "ifinance":
      primaryColor =  IFINANCE;
      break;
    default:
      primaryColor = EGANOW;
      break;
  }

  // Define initial theme using colors based on the current theme
  const initialTheme: Theme = {
    primaryColor,
  };

  // Set the initial theme
  set({ theme: initialTheme });

  return {
    theme: initialTheme,
    setTheme: (theme) => set({ theme }),
  };
});

export default useThemeStore;
