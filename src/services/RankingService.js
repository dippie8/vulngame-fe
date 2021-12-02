import axios from 'axios'

export default class RankingService {

    async getRanking() {

      const instance=axios.create({
        baseURL:'https://ec2-3-82-248-228.compute-1.amazonaws.com/api/scanning/scanresults/v1/',
        headers:{
            'Content-Type':'application/json',
            'Authorization':`Bearer 92fb2686-11c8-4c09-bbd6-ee7cf77a84d9`,
            'Accept': "application/json"
            }
      });

        return instance.get('/ranking').then(res => res.data)
    }
}