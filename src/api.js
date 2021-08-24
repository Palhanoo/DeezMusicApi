import axios from 'axios';

export default {
    getMusics: async () => {
      let res = await axios.get(`https://deezerdevs-deezer.p.rapidapi.com/search/`, {
          params: {q: 'eminem'},
          headers: {
              'x-rapidapi-host': 'deezerdevs-deezer.p.rapidapi.com',
              'x-rapidapi-key': '50214f88e8msh9bbe49044c64bb9p1ae9fcjsn404c56eaab9f'
          }
      });
      const json = await res.data.data;
      return json;
  }
}