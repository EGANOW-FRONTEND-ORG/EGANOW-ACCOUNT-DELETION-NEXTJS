// store/themeStore.ts
import {create} from 'zustand';

type Theme = {
  primaryColor: string;
  secondaryColor: string;
  // Add other theme colors as needed
};

type ThemeStore = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};

const useThemeStore = create<ThemeStore>((set) => {
  const currentTheme = process.env.CURRENT_THEME || 'ifinance';

  // Define theme colors based on the current theme
  let primaryColor;
  let secondaryColor;

  switch (currentTheme) {
    case 'juaben':
      primaryColor = process.env.JUABEN_PRIMARY_COLOR || '#ff5733';
      secondaryColor = process.env.JUABEN_SECONDARY_COLOR || '#ffd633';
      break;
    case 'eganow':
      primaryColor = process.env.EGANOW_PRIMARY_COLOR || '#4287f5';
      secondaryColor = process.env.EGANOW_SECONDARY_COLOR || '#2cb67d';
      break;
    case 'dci':
      primaryColor = process.env.DCI_PRIMARY_COLOR || '#ff3366';
      secondaryColor = process.env.DCI_SECONDARY_COLOR || '#66ff33';
      break;
    case 'ifinance':
      primaryColor = process.env.IFINANCE_PRIMARY_COLOR || '#454545';
      secondaryColor = process.env.IFINANCE_SECONDARY_COLOR || '#ffcc00';
      break;
    default:
      primaryColor = '#6666dd';
      secondaryColor = '#ffd633';
      break;
  }

  // Define initial theme using colors based on the current theme
  const initialTheme: Theme = {
    primaryColor,
    secondaryColor,
    
  };

  return {
    theme: initialTheme,
    setTheme: (theme) => set({ theme }),
  };
});

export default useThemeStore;
