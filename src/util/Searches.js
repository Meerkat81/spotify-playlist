let accessToken;
const Secret = 'Basic NzRhNDRjODI1ZGRkNDQ1N2ExMjBiMGY2MjE2ODJlMjE6YzZlNmQyZDZmOWE1NDA3Nzk4MmZlYjU1NmNkNzUzNzU='

const Spotify = {
  async postData(url = '', data = {}) {
    // Default options are marked with *
    let request = {
      method: (data.method || 'POST'), // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        //'Content-Type': 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization' : (data.auth || Secret),
      },
      redirect: 'follow', // manual, *follow, error
      referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: new URLSearchParams(data) // body data type must match "Content-Type" header
    };
    if(data.method === 'GET') delete request.body
    const response = await fetch(url, request);
    return response.json(); // parses JSON response into native JavaScript objects
  },
  async getAccessToken(){
    if(accessToken){
      return accessToken
    }
    let data = await Spotify.postData('https://accounts.spotify.com/api/token', { grant_type: 'client_credentials' })
    accessToken = data.access_token
    return accessToken
  },
  
  async playlistsearch(){
    const accessToken = await Spotify.getAccessToken()
    console.log(accessToken)
    const header = "Bearer " + accessToken
    
    console.log(header)
    Spotify.postData(`https://api.spotify.com/v1/search?q=90s&type=playlist&limit=10`, {auth: header, method: 'GET'})
    .then(data => {
      console.log(data)
    });
  },
}

export default Spotify