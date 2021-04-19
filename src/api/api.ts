import axios from 'axios'
import { Talents } from '../model/talents.model'
import { Videos } from '../model/videos.model'

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
                console.log(error);
                const res = {data: null, msg: "some error: " + error}
                cb(res)
            });
    },
    getHololiveVideos( talent: string , cb: CB) {
        axios.get<Videos>(`${REQUEST_URL}hololive_videos/${talent}`)
            .then((response) => {
                // handle success
                console.log("handle success")
                const res = {data: response.data, msg: ''}
                cb(res)
            })
            .catch(function (error) {
                // handle error
                console.log(error);
                const res = {data: null, msg: "some error: " + error}
                cb(res)
            });
    }
}