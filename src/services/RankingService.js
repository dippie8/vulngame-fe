import axios from 'axios'

export default class RankingService {

    async getRanking() {
        return axios.get('https://ec2-3-82-248-228.compute-1.amazonaws.com/api/scanning/scanresults/v1/ranking').then(res => res.data)
    }
}