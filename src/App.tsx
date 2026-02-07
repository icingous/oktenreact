import Family from './components/family-component/FamilyComponent';
import { simpsons } from './assets/arrays';
import './App.css';

function App() {
  return (
    <>
      <h1>
        FE. ДЗ 1 <span className='hint'>#kLZQR7Q98</span>
      </h1>
      <section className='simpsons'>
        <h2>Simpsons</h2>

        <Family members={simpsons} />
      </section>
    </>
  );
}

export default App;

