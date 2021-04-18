import React from 'react';
import { RouteComponentProps } from 'react-router-dom'
import SectionVideos from '../../components/SectionVideos/SectionVideos.component'

type PageProps = RouteComponentProps<{ id: string }>

interface State {

}
class TalentPage extends React.Component<PageProps, State>{

    render() {
        return (
            <div className="TalentPage">
                <h1>{this.props.match.params.id} Page</h1>
                <SectionVideos Talent={this.props.match.params.id} />
            </div>
        );
    }
}
export default TalentPage;
