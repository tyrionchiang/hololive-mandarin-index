import React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom'

type Props = RouteComponentProps & {
  Name: string,
  Image: string,
  Text: string
}

const TalentItem: React.FC<Props> = ({ Name, Image, Text, history, match }) => {
  return (
    <li className="Talent" onClick={() => history.push(`${match.url}${Name}`)}>
        <img src={Image} alt={Name} />
        <p>{Name}</p>
        <span>{Text}</span>
    </li>
  );
}

export default withRouter(TalentItem);
