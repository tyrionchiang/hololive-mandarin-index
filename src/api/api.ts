import axios from 'axios'
import { Talents } from '../model/talents.model'

type CB = (res:{data: any, msg: string}) => void

const REQUEST_URL = 'http://localhost:3003/'

export default {
    getHololiveTalents(cb: CB) {
        axios.get<Talents>(`${REQUEST_URL}hololive_members`)
            .then((response) => {
                // handle success
                console.log("handle success")
                const res = {data: response.data, msg: ''}
                cb(res)
            })
            .catch(function (error) {
                // handle error
                console.log("some error: " + error);
                const res = {data: null, msg: error}
                cb(res)
            });
    }
}