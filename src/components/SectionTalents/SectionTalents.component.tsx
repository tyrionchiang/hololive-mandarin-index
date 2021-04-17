import React from 'react'
import api from '../../api/api';
import Talent from './Talent.component';

import { Talents } from '../../model/talents.model'

type Props = {}
type State = {
    talents: Talents
}

class SectionTalents extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props)
        this.state = {
            talents: []
        }
    }
    componentDidMount() {
        const _this = this;
        api.getHololiveTalents((res) => {
            if(res.msg){
                console.log(res.msg)
                return null
            }
            const talents: Talents = res.data
            _this.setState({ talents: talents})
        })
    }
    render() {
        const talents = this.state.talents
        if (talents === null) {
            return 'error'
        }
        const clicktalentHandler = (text: string) => {
            console.log(text)
        }
        return (
            <div>
                <ul>
                    {talents.map(({ID, ...otherSectionProps}) => (
                        <Talent key={ID} {...otherSectionProps} />
                    ))}
                </ul>
            </div>
        )
    }
    
}

export default SectionTalents