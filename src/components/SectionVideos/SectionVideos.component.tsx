import React from 'react'
import api from '../../api/api';
import { Videos } from '../../model/videos.model'
import TalentItem from './VideoItem.component'

type Props = {
    Talent: string
}
type State = {
    videos: Videos
}

class SectionVideos extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props)
        this.state = {
            videos: []
        }
    }
    componentDidMount() {
        const _this = this;
        api.getHololiveVideos( this.props.Talent , (res) => {
            if(res.msg){
                console.log(res.msg)
                return null
            }
            const videos: Videos = res.data
            _this.setState({ videos: videos })
        })
    }
    render() {
        const videos = this.state.videos
        if (videos === null) {
            return 'error'
        }
        return (
            <div>
                <ul>
                    {videos.map(({ID, ...otherSectionProps}) => (
                        <TalentItem key={ID} ID={ID} {...otherSectionProps} />
                    ))}
                </ul>
            </div>
        )
    }
    
}

export default SectionVideos