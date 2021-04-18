import React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom'

type Props = RouteComponentProps & {
  ID: string,
  Title: string,
  Youtuber: string,
  Text: string,
  Image: string,
}

const TalentItem: React.FC<Props> = ({ ID, Title, Youtuber, Image, Text, history, match }) => {
  return (
    <li className="Video">
        <a href={"https://youtu.be/"+ID} target="_blank" rel="noopener noreferrer">
        <img src={Image} alt={Title} />
        <p>{Title}</p>
        <p>{Youtuber}</p>
        <span>{Text}</span>
        </a>
    </li>
  );
}

export default withRouter(TalentItem);
