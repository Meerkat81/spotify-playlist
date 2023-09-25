let accessToken = false;
const CLIENT_ID = process.env.REACT_APP_SPOTIFY_CLIENT_ID;
const CLIENT_SECRET = process.env.REACT_APP_SPOTIFY_CLIENT_SECRET;

const secretHash = new Buffer.from(CLIENT_ID + ":" + CLIENT_SECRET).toString(
  "base64"
);
let secret = "Basic " + secretHash;

async function postData(url = "", data = {}) {
  // Default options are marked with *
  let request = {
    method: data.method || "POST", // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, *cors, same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, *same-origin, omit
    headers: {
      //'Content-Type': 'application/json',
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: data.auth || secret,
    },
    redirect: "follow", // manual, *follow, error
    referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: new URLSearchParams(data), // body data type must match "Content-Type" header
  };
  if (data.method === "GET") delete request.body;
  try {
    const res = await fetch(url, request);
    if (!res.ok) throw Error("Something went wrong");
    return res.json();
  } catch (err) {
    return { err };
  } // parses JSON response into native JavaScript objects
}

async function getAccessToken() {
  if (accessToken) return accessToken;
  let res = await postData("https://accounts.spotify.com/api/token", {
    grant_type: "client_credentials",
  });
  if (res.access_token) accessToken = res.access_token;
  return;
}

async function playListSearch(term) {
  await getAccessToken();
  const header = "Bearer " + accessToken;
  let data = await postData(
    `https://api.spotify.com/v1/search?q=${term}&type=playlist&offset=10&limit=10`,
    { auth: header, method: "GET" }
  );
  if (data.err) return data.err;
  let playlists = data.playlists.items;
  let total = data.playlists.total;
  return [playlists, total];
}

export { playListSearch };
