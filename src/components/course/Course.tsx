import React, { type FC } from 'react';
import type { CourseModel } from '../../models/CourseModel';
import './Course.css';

type PropsType = {
  course: CourseModel;
};

const Course: FC<PropsType> = ({ course: { title, monthDuration } }) => {
  return (
    <div className='course'>
      <span>{title}</span>
      <span>{`${monthDuration} months`}</span>
    </div>
  );
};

export default Course;
