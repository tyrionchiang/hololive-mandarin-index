import React from 'react';
import { TalentInfo } from '../../model/talents.model'

interface Props {
  talentInfo: TalentInfo
}

const Talent: React.FC<Props> = props => {
  const info = props.talentInfo
  return (
    <div className="Talent">
      <img src={info.Image} alt={info.Name} />
      <p>{info.Name}</p>
      <span>{info.Text}</span>
    </div>
  );
}

export default Talent;
