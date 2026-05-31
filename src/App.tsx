import A from './components/A';
import B from './components/B';
import './App.css';
import { useContext } from 'react';
import ThemeContext from './context/ThemeContext';

function App() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`${theme} flex justify-center gap-4 p-4`}>
      <A />
      <B />
    </div>
  );
}

export default App;
