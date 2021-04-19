import React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom'

type Props = RouteComponentProps<{ talent: string, id: string }> & {
  ID: string,
  Title: string,
  Youtuber: string,
  Text: string,
  Image: string,
}

const TalentItem: React.FC<Props> = ({ ID, Title, Youtuber, Image, Text, history, match }) => {
  
  const LinkToPage = () => {
    if(ID === match.params.id){
      window.scroll(0,0)
      return
    }
    history.push(`/${match.params.talent}/${ID}`)
    console.log(history, match)
  }
  
  return (
    <li className="Video" onClick={() => LinkToPage() }>
      <div>
        <img src={Image} alt={Title} />
        <p>{Title}</p>
        <p>{Youtuber}</p>
        <span>{Text}</span>
      </div>
    </li>
  );
}

export default withRouter(TalentItem);
