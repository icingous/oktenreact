import { type FC } from 'react';
import Member from '../character-component/CharacterComponent';
import type { ISimpsonModel } from '../../models/SimpsonModel';
import './FamilyComponent.css';

type PropType = {
  members: ISimpsonModel[];
};

const FamilyComponent: FC<PropType> = ({ members }) => {
  return (
    <ul className='family'>
      {members.map((item, i) => (
        <Member key={i} character={item}>
          {item.info}
        </Member>
      ))}
    </ul>
  );
};

export default FamilyComponent;
