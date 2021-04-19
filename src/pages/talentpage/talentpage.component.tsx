import React from 'react';
import { RouteComponentProps } from 'react-router-dom'
import SectionVideos from '../../components/SectionVideos/SectionVideos.component'
import SectionPlayer from '../../components/SectionPlayer.component'


type PageProps = RouteComponentProps<{ talent: string, id: string }>

interface State {

}
class TalentPage extends React.Component<PageProps, State>{

    render() {
        const ShowSectionPlayers = () => {
            const { id } = this.props.match.params
            if (id) {
              return <SectionPlayer ID={id}/>;
            } 
        }
        const { talent } = this.props.match.params
        return (
            <div className="TalentPage">
                { ShowSectionPlayers() }
                <h1>{talent} Page</h1>
                <SectionVideos Talent={talent} />
            </div>
        );
    }
}
export default TalentPage;
