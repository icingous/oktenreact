import { type FC, type ReactNode } from 'react';
import './CharacterComponent.css';
import type { ISimpsonModel } from '../../models/SimpsonModel';

type PropType = {
  character: ISimpsonModel;
  children: ReactNode;
};

const CharacterComponent: FC<PropType> = ({ character, children }) => {
  const { age, name, photo, surname } = character;

  return (
    <div className='character'>
      <img src={photo} alt={`${name} photo`} />
      <h3>{`${name} ${surname}, ${age}`}</h3>
      {children}
    </div>
  );
};

export default CharacterComponent;
