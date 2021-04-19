import React from 'react'
import api from '../../api/api';
import TalentItem from './TalentItem.component';

import { Talents } from '../../model/talents.model'

type Props = {}
type State = {
    talents: Talents,
    errorMsg: string
}

class SectionTalents extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props)
        this.state = {
            talents: [],
            errorMsg: ''
        }
    }
    componentDidMount() {
        api.getHololiveTalents((res) => {
            if(res.msg){
                console.log(res.msg)
                this.setState({errorMsg: res.msg})
                return null
            }
            const talents: Talents = res.data
            this.setState({ talents: talents})
        })
    }
    render() {
        const talents = this.state.talents
        const errMsg = this.state.errorMsg
        if(errMsg !== '') {
            return (
                <h1>{ errMsg }</h1>
            )
        }
        if (talents === null) {
            return 'error'
        }
        return (
            <div>
                <ul>
                    {talents.map(({ID, ...otherSectionProps}) => (
                        <TalentItem key={ID} {...otherSectionProps} />
                    ))}
                </ul>
            </div>
        )
    }
    
}

export default SectionTalents