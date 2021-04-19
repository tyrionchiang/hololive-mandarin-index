import React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom'

type Props = RouteComponentProps & {
  Talent: string,
  Image: string,
  Text: string
}

const TalentItem: React.FC<Props> = ({ Talent, Image, Text, history, match }) => {
  return (
    <li className="Talent" onClick={() => history.push(`${match.url}${Talent}`)}>
        <img src={Image} alt={Talent} />
        <p>{Talent}</p>
        <span>{Text}</span>
    </li>
  );
}

export default withRouter(TalentItem);
