let accessToken;
const Secret =
  "Basic NzRhNDRjODI1ZGRkNDQ1N2ExMjBiMGY2MjE2ODJlMjE6YzZlNmQyZDZmOWE1NDA3Nzk4MmZlYjU1NmNkNzUzNzU=";

const SpotifyAPI = {
  async postData(url = "", data = {}) {
    // Default options are marked with *
    let request = {
      method: data.method || "POST", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, *same-origin, omit
      headers: {
        //'Content-Type': 'application/json',
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: data.auth || Secret,
      },
      redirect: "follow", // manual, *follow, error
      referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: new URLSearchParams(data), // body data type must match "Content-Type" header
    };
    if (data.method === "GET") delete request.body;
    const response = await fetch(url, request);
    return response.json(); // parses JSON response into native JavaScript objects
  },

  async getAccessToken() {
    if (accessToken) return accessToken;
    try {
      let res = await SpotifyAPI.postData(
        "https://accounts.spotify.com/api/token",
        { grant_type: "client_credentials" }
      );
      console.log("getAccesToken", res);
      accessToken = res.access_token;
      if (res.error) throw new Error("Something Went Wrong");

      return accessToken;
    } catch (err) {}
  },

  async playListSearch(term) {
    const accessToken = await SpotifyAPI.getAccessToken();
    const header = "Bearer " + accessToken;

    try {
      let data = await SpotifyAPI.postData(
        `https://api.spotify.com/v1/search?q=${term}&type=playlist&offset=10&limit=10`,
        { auth: header, method: "GET" }
      );
      console.log("playListSearch", data);
      if (data.error) throw new Error("Something Went Wrong");
      let playlists = data.playlists.items;
      let total = data.playlists.total;
      return [playlists, total];
    } catch (err) {
      return err;
    }
  },

  async tracklist(playlistid) {
    const accessToken = await SpotifyAPI.getAccessToken();
    const header = "Bearer " + accessToken;

    let data = await SpotifyAPI.postData(
      `https://api.spotify.com/v1/playlists/${playlistid}/tracks`,
      { auth: header, method: "GET" }
    );
    let tracks = data.items;
    return tracks;
  },
};

export default SpotifyAPI;
