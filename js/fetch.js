console.log('fetch');

const fetchGames = () =>{
const baseURL = 'https://api.sampleapis.com/switch/games';
fetch(baseURL)
  .then(resp => resp.json())
  .then(data => displayData(data));

}
fetchGames()