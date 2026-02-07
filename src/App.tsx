import './App.css';

import { coursesAndDurationArray } from './assets/arrays';
import Courses from './components/courses/Courses';

function App() {
  return (
    <>
      <h1>FE. ДЗ 1</h1>
      <section className='homework'>
        <h2>#Fs05Kiho</h2>

        <Courses courses={coursesAndDurationArray} />
      </section>
    </>
  );
}

export default App;

