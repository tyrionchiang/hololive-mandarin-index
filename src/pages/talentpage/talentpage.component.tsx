import React from 'react';
import {RouteComponentProps} from 'react-router-dom'

type PageProps = RouteComponentProps<{id: string}>

const TalentPage: React.FC<PageProps> = props => {
    console.log(props)
  return (
    <div className="TalentPage">
      <h1>{props.match.params.id} Page</h1>
        
    </div>
  );
}

export default TalentPage;
