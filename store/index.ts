import {create} from 'zustand';

type Theme = {
  primaryColor: string;
  secondaryColor: string;
  backgroundColor: string;
  textColor: string;
};

type ThemeStore = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};

const useThemeStore = create<ThemeStore>((set) => ({
  theme: {
    primaryColor: process.env.NEXT_PUBLIC_DEFAULT_PRIMARY_COLOR || '#007bff',
    secondaryColor: process.env.NEXT_PUBLIC_DEFAULT_SECONDARY_COLOR || '#6c757d',
    backgroundColor: process.env.NEXT_PUBLIC_DEFAULT_BACKGROUND_COLOR || '#ffffff',
    textColor: process.env.NEXT_PUBLIC_DEFAULT_TEXT_COLOR || '#333333',
  },
  setTheme: (theme) => set({ theme }),
}));

export default useThemeStore;
