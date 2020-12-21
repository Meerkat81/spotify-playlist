import axios from 'axios'
import qs from 'qs';
let accessToken
let expiresIn

const Spotify = async () => {
    const Secret = 'Basic NzRhNDRjODI1ZGRkNDQ1N2ExMjBiMGY2MjE2ODJlMjE6YzZlNmQyZDZmOWE1NDA3Nzk4MmZlYjU1NmNkNzUzNzU='
    
    const headers = {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization' : Secret
    },
    
    };
  const data = {
    grant_type: 'client_credentials',
  };

  try {
    const response = await axios.post(
      'https://accounts.spotify.com/api/token',
      qs.stringify(data),
      headers
    );
    
    accessToken = response.data.access_token
    expiresIn = response.data.expires_in
    console.log(expiresIn);
    return accessToken
    return expiresIn
  } catch (error) {
    console.log(error);
  }

}

export default Spotify;

