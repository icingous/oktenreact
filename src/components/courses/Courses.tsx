import React, { type FC } from 'react';
import type { CourseModel } from '../../models/CourseModel';
import Course from '../course/Course';
import './Courses.css';

type PropsType = { courses: CourseModel[] };

const Courses: FC<PropsType> = ({ courses }) => {
  return (
    <ul className='courses'>
      {courses.map((item, i) => (
        <li key={i}>
          <Course course={item} />
        </li>
      ))}
    </ul>
  );
};

export default Courses;
