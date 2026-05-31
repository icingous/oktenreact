import { useContext } from 'react';
import ThemeContext, { Theme } from '../context/ThemeContext';

const AA = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const onClick = () => setTheme(Theme.light);

  return (
    <div>
      <button disabled={theme === Theme.light} onClick={onClick}>
        Set light theme
      </button>
    </div>
  );
};

export default AA;
