import { createContext, useState, type FC, type ReactNode } from 'react';

export interface IThemeContext {
  theme: string;
  setTheme: (theme: string) => void;
}

export const Theme = {
  light: 'light',
  dark: 'dark',
} as const;

const defaultTheme: IThemeContext = { theme: Theme.light, setTheme: () => {} };

const ThemeContext = createContext<IThemeContext>(defaultTheme);

export const ThemeContextProvider: FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [theme, setTheme] = useState<string>(Theme.light);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
