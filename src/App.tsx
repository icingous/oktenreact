import './App.css';

import { coursesTitleArray } from './assets/arrays';

function App() {
  return (
    <>
      <h1>FE. ДЗ 1</h1>
      <section className='homework'>
        <h2>#gi01MZ6v</h2>

        <ul className='course-titles'>
          {coursesTitleArray.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </section>
    </>
  );
}

export default App;

