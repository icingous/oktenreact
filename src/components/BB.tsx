import { useContext } from 'react';
import ThemeContext, { Theme } from '../context/ThemeContext';

const BB = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const onClick = () => setTheme(Theme.dark);

  return (
    <div>
      <button disabled={theme === Theme.dark} onClick={onClick}>
        Set dark theme
      </button>
    </div>
  );
};

export default BB;
