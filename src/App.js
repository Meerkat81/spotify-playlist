import React from "react";
import AppLayout from "./Pages/AppLayout";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//Show Search Box
//Get Spotify token
//Query Spotify playlists
//TODO: Show play list
//TODO: List Songs of playlist
//TODO: Break songs up by category into line graph

const dummyPlayListsData = [
  [
    {
      collaborative: false,
      description: "",
      external_urls: {
        spotify: "https://open.spotify.com/playlist/2Z1R5fZMscHc8iwAaUHPXb",
      },
      href: "https://api.spotify.com/v1/playlists/2Z1R5fZMscHc8iwAaUHPXb",
      id: "2Z1R5fZMscHc8iwAaUHPXb",
      images: [
        {
          height: 640,
          url: "https://mosaic.scdn.co/640/ab67616d0000b273381371cb8ce680d0dc324600ab67616d0000b273519038856cb5329dc27f5916ab67616d0000b273738fbaa134106eafb7772552ab67616d0000b273e7b53d0f9fb616521cdbfc03",
          width: 640,
        },
        {
          height: 300,
          url: "https://mosaic.scdn.co/300/ab67616d0000b273381371cb8ce680d0dc324600ab67616d0000b273519038856cb5329dc27f5916ab67616d0000b273738fbaa134106eafb7772552ab67616d0000b273e7b53d0f9fb616521cdbfc03",
          width: 300,
        },
        {
          height: 60,
          url: "https://mosaic.scdn.co/60/ab67616d0000b273381371cb8ce680d0dc324600ab67616d0000b273519038856cb5329dc27f5916ab67616d0000b273738fbaa134106eafb7772552ab67616d0000b273e7b53d0f9fb616521cdbfc03",
          width: 60,
        },
      ],
      name: "What's Up? – 4 Non Blondes 2",
      owner: {
        display_name: "Jose Peñaloza",
        external_urls: {
          spotify: "https://open.spotify.com/user/12139445670",
        },
        href: "https://api.spotify.com/v1/users/12139445670",
        id: "12139445670",
        type: "user",
        uri: "spotify:user:12139445670",
      },
      primary_color: null,
      public: null,
      snapshot_id:
        "MTE5LDljYTg2YWQ4ZWQ2MjU2MDRhOTU1N2UzNDY5Mjg5MTQ2NDIyZjlmNmU=",
      tracks: {
        href: "https://api.spotify.com/v1/playlists/2Z1R5fZMscHc8iwAaUHPXb/tracks",
        total: 87,
      },
      type: "playlist",
      uri: "spotify:playlist:2Z1R5fZMscHc8iwAaUHPXb",
    },
    {
      collaborative: false,
      description:
        "Cowabunga Mix from the Mutant Mayhem Soundtrack | New Teenage Mutant Ninja Turtles Soundtrack | TMNT Mutant Mayhem 2023 | Mutant Mayhem OST | Cowabunga Mix",
      external_urls: {
        spotify: "https://open.spotify.com/playlist/0an2E5AneCU8pMYPnxQtgE",
      },
      href: "https://api.spotify.com/v1/playlists/0an2E5AneCU8pMYPnxQtgE",
      id: "0an2E5AneCU8pMYPnxQtgE",
      images: [
        {
          height: null,
          url: "https://i.scdn.co/image/ab67706c0000bebb3eb4f5ae2f07986dfa66f267",
          width: null,
        },
      ],
      name: "Teenage Mutant Ninja Turtles Mutant Mayhem Soundtrack (Original Motion Picture Soundtrack) Radio",
      owner: {
        display_name: "Clean Music",
        external_urls: {
          spotify: "https://open.spotify.com/user/qrdhybl0o8gnlvyy9djg5waw7",
        },
        href: "https://api.spotify.com/v1/users/qrdhybl0o8gnlvyy9djg5waw7",
        id: "qrdhybl0o8gnlvyy9djg5waw7",
        type: "user",
        uri: "spotify:user:qrdhybl0o8gnlvyy9djg5waw7",
      },
      primary_color: null,
      public: null,
      snapshot_id:
        "MTAzMyxlY2Y5OWZkNDMxODMxNzYwNDBlYzMxYzMzZGY3MzBjMmZhMWU2ZGYx",
      tracks: {
        href: "https://api.spotify.com/v1/playlists/0an2E5AneCU8pMYPnxQtgE/tracks",
        total: 26,
      },
      type: "playlist",
      uri: "spotify:playlist:0an2E5AneCU8pMYPnxQtgE",
    },
    {
      collaborative: false,
      description: "y otros",
      external_urls: {
        spotify: "https://open.spotify.com/playlist/3h1fYqmE2miapnevZ8jXzG",
      },
      href: "https://api.spotify.com/v1/playlists/3h1fYqmE2miapnevZ8jXzG",
      id: "3h1fYqmE2miapnevZ8jXzG",
      images: [
        {
          height: 640,
          url: "https://mosaic.scdn.co/640/ab67616d0000b27305a41288f037a08fb45db5e2ab67616d0000b273e2dd4e821bcc3f70dc0c8ffdab67616d0000b273e523d15ff106aec2804a24afab67616d0000b273f3bc1c5d9a1aa59885171126",
          width: 640,
        },
        {
          height: 300,
          url: "https://mosaic.scdn.co/300/ab67616d0000b27305a41288f037a08fb45db5e2ab67616d0000b273e2dd4e821bcc3f70dc0c8ffdab67616d0000b273e523d15ff106aec2804a24afab67616d0000b273f3bc1c5d9a1aa59885171126",
          width: 300,
        },
        {
          height: 60,
          url: "https://mosaic.scdn.co/60/ab67616d0000b27305a41288f037a08fb45db5e2ab67616d0000b273e2dd4e821bcc3f70dc0c8ffdab67616d0000b273e523d15ff106aec2804a24afab67616d0000b273f3bc1c5d9a1aa59885171126",
          width: 60,
        },
      ],
      name: "The Cranberries, No Doubt, Hoobastank, Evanescence, Oasis, 4 Non Blondes, Alanis Morissette, Oasis",
      owner: {
        display_name: "Mónica Dumerauf",
        external_urls: {
          spotify: "https://open.spotify.com/user/11154235048",
        },
        href: "https://api.spotify.com/v1/users/11154235048",
        id: "11154235048",
        type: "user",
        uri: "spotify:user:11154235048",
      },
      primary_color: null,
      public: null,
      snapshot_id:
        "MTI3LGIyNjQ5Y2YwZTgzMzg0MjQ1NTE2NDg4NjgzMTQ4NDY2ZTJkYTllNjI=",
      tracks: {
        href: "https://api.spotify.com/v1/playlists/3h1fYqmE2miapnevZ8jXzG/tracks",
        total: 106,
      },
      type: "playlist",
      uri: "spotify:playlist:3h1fYqmE2miapnevZ8jXzG",
    },
    {
      collaborative: false,
      description: "",
      external_urls: {
        spotify: "https://open.spotify.com/playlist/1q8NMenrTqMMRIk3B60C3V",
      },
      href: "https://api.spotify.com/v1/playlists/1q8NMenrTqMMRIk3B60C3V",
      id: "1q8NMenrTqMMRIk3B60C3V",
      images: [
        {
          height: 640,
          url: "https://mosaic.scdn.co/640/ab67616d0000b273381371cb8ce680d0dc324600ab67616d0000b27359afd13f40fa2b0aab89bb0eab67616d0000b2737e09670f90cd47b3fb9a23e0ab67616d0000b273b2bcbfcf7d8e8c326ab8481b",
          width: 640,
        },
        {
          height: 300,
          url: "https://mosaic.scdn.co/300/ab67616d0000b273381371cb8ce680d0dc324600ab67616d0000b27359afd13f40fa2b0aab89bb0eab67616d0000b2737e09670f90cd47b3fb9a23e0ab67616d0000b273b2bcbfcf7d8e8c326ab8481b",
          width: 300,
        },
        {
          height: 60,
          url: "https://mosaic.scdn.co/60/ab67616d0000b273381371cb8ce680d0dc324600ab67616d0000b27359afd13f40fa2b0aab89bb0eab67616d0000b2737e09670f90cd47b3fb9a23e0ab67616d0000b273b2bcbfcf7d8e8c326ab8481b",
          width: 60,
        },
      ],
      name: "4 Non Blondes Radio",
      owner: {
        display_name: "andyerridge",
        external_urls: {
          spotify: "https://open.spotify.com/user/andyerridge",
        },
        href: "https://api.spotify.com/v1/users/andyerridge",
        id: "andyerridge",
        type: "user",
        uri: "spotify:user:andyerridge",
      },
      primary_color: null,
      public: null,
      snapshot_id: "Miw3NTMzOGNmNjBiYzc4MTdkYjZkODliOTExMDFlNWJkMDQ2YmYxODQz",
      tracks: {
        href: "https://api.spotify.com/v1/playlists/1q8NMenrTqMMRIk3B60C3V/tracks",
        total: 50,
      },
      type: "playlist",
      uri: "spotify:playlist:1q8NMenrTqMMRIk3B60C3V",
    },
    {
      collaborative: false,
      description: "",
      external_urls: {
        spotify: "https://open.spotify.com/playlist/1vhINxVzWUoo1LcmUOYNVt",
      },
      href: "https://api.spotify.com/v1/playlists/1vhINxVzWUoo1LcmUOYNVt",
      id: "1vhINxVzWUoo1LcmUOYNVt",
      images: [
        {
          height: null,
          url: "https://image-cdn-ak.spotifycdn.com/image/ab67706c0000bebbfde9529d3fed7b2d8a301447",
          width: null,
        },
      ],
      name: "Linda Perry & 4 Non Blondes",
      owner: {
        display_name: "Juan Sin Miedo",
        external_urls: {
          spotify: "https://open.spotify.com/user/21h2iuhwecd5a7c6sez2ocvga",
        },
        href: "https://api.spotify.com/v1/users/21h2iuhwecd5a7c6sez2ocvga",
        id: "21h2iuhwecd5a7c6sez2ocvga",
        type: "user",
        uri: "spotify:user:21h2iuhwecd5a7c6sez2ocvga",
      },
      primary_color: null,
      public: null,
      snapshot_id:
        "MTksMzdiNTg2N2U0OTQzMjc5NTMyOGU2MzZjNjUzMjg4ZTY4N2UzMTU2MA==",
      tracks: {
        href: "https://api.spotify.com/v1/playlists/1vhINxVzWUoo1LcmUOYNVt/tracks",
        total: 26,
      },
      type: "playlist",
      uri: "spotify:playlist:1vhINxVzWUoo1LcmUOYNVt",
    },
    {
      collaborative: false,
      description: "",
      external_urls: {
        spotify: "https://open.spotify.com/playlist/7fQKSSe7AuI3Ouuv1iy7tc",
      },
      href: "https://api.spotify.com/v1/playlists/7fQKSSe7AuI3Ouuv1iy7tc",
      id: "7fQKSSe7AuI3Ouuv1iy7tc",
      images: [
        {
          height: 640,
          url: "https://mosaic.scdn.co/640/ab67616d0000b273381371cb8ce680d0dc324600ab67616d0000b273757a1aa49c9dfedf621cb855ab67616d0000b273adb3dff58170a432c1d685abab67616d0000b273e88a017e11d2dc06ff391761",
          width: 640,
        },
        {
          height: 300,
          url: "https://mosaic.scdn.co/300/ab67616d0000b273381371cb8ce680d0dc324600ab67616d0000b273757a1aa49c9dfedf621cb855ab67616d0000b273adb3dff58170a432c1d685abab67616d0000b273e88a017e11d2dc06ff391761",
          width: 300,
        },
        {
          height: 60,
          url: "https://mosaic.scdn.co/60/ab67616d0000b273381371cb8ce680d0dc324600ab67616d0000b273757a1aa49c9dfedf621cb855ab67616d0000b273adb3dff58170a432c1d685abab67616d0000b273e88a017e11d2dc06ff391761",
          width: 60,
        },
      ],
      name: "4 Non Blondes — What's Up?",
      owner: {
        display_name: "Barbara Taylor",
        external_urls: {
          spotify: "https://open.spotify.com/user/11181977034",
        },
        href: "https://api.spotify.com/v1/users/11181977034",
        id: "11181977034",
        type: "user",
        uri: "spotify:user:11181977034",
      },
      primary_color: null,
      public: null,
      snapshot_id:
        "MzUzMSwxYTA2MDE0NTg0YjUyMzAyNGYxOTMyZGYxMDRiNmE3YzhjMDMwZDVm",
      tracks: {
        href: "https://api.spotify.com/v1/playlists/7fQKSSe7AuI3Ouuv1iy7tc/tracks",
        total: 2909,
      },
      type: "playlist",
      uri: "spotify:playlist:7fQKSSe7AuI3Ouuv1iy7tc",
    },
    {
      collaborative: false,
      description: "",
      external_urls: {
        spotify: "https://open.spotify.com/playlist/6If1pAmT1DkkImfkvtQF6m",
      },
      href: "https://api.spotify.com/v1/playlists/6If1pAmT1DkkImfkvtQF6m",
      id: "6If1pAmT1DkkImfkvtQF6m",
      images: [
        {
          height: 640,
          url: "https://mosaic.scdn.co/640/ab67616d0000b273338ef055d7501cf241e7437eab67616d0000b2737d419ac975423c069995c7bbab67616d0000b273b6661e358246261816ca707eab67616d0000b273fbc18145a2997ddd18c961ec",
          width: 640,
        },
        {
          height: 300,
          url: "https://mosaic.scdn.co/300/ab67616d0000b273338ef055d7501cf241e7437eab67616d0000b2737d419ac975423c069995c7bbab67616d0000b273b6661e358246261816ca707eab67616d0000b273fbc18145a2997ddd18c961ec",
          width: 300,
        },
        {
          height: 60,
          url: "https://mosaic.scdn.co/60/ab67616d0000b273338ef055d7501cf241e7437eab67616d0000b2737d419ac975423c069995c7bbab67616d0000b273b6661e358246261816ca707eab67616d0000b273fbc18145a2997ddd18c961ec",
          width: 60,
        },
      ],
      name: "4 Non Blondes — What's Up?",
      owner: {
        display_name: "Chris Turner",
        external_urls: {
          spotify: "https://open.spotify.com/user/223wfdi4eb6whsnydesw26qsy",
        },
        href: "https://api.spotify.com/v1/users/223wfdi4eb6whsnydesw26qsy",
        id: "223wfdi4eb6whsnydesw26qsy",
        type: "user",
        uri: "spotify:user:223wfdi4eb6whsnydesw26qsy",
      },
      primary_color: null,
      public: null,
      snapshot_id:
        "Mzk1LGIzYmRhZDcwMjk5NjYxZjdiYTk1NmI1YTY5MTVlMmFhOGYwNWIxMDY=",
      tracks: {
        href: "https://api.spotify.com/v1/playlists/6If1pAmT1DkkImfkvtQF6m/tracks",
        total: 159,
      },
      type: "playlist",
      uri: "spotify:playlist:6If1pAmT1DkkImfkvtQF6m",
    },
    {
      collaborative: false,
      description: "",
      external_urls: {
        spotify: "https://open.spotify.com/playlist/0yCDv9wh0voTK0QCcNsXh0",
      },
      href: "https://api.spotify.com/v1/playlists/0yCDv9wh0voTK0QCcNsXh0",
      id: "0yCDv9wh0voTK0QCcNsXh0",
      images: [
        {
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b273381371cb8ce680d0dc324600",
          width: 640,
        },
      ],
      name: "Four Non Blondes what's going on",
      owner: {
        display_name: "bigrodneys56",
        external_urls: {
          spotify: "https://open.spotify.com/user/bigrodneys56",
        },
        href: "https://api.spotify.com/v1/users/bigrodneys56",
        id: "bigrodneys56",
        type: "user",
        uri: "spotify:user:bigrodneys56",
      },
      primary_color: null,
      public: null,
      snapshot_id: "NSw3ODYyYzljN2M1ZTRlYjJlMDJlMTVmZTk3ZDA5N2I1YjEzZDhlZGE3",
      tracks: {
        href: "https://api.spotify.com/v1/playlists/0yCDv9wh0voTK0QCcNsXh0/tracks",
        total: 3,
      },
      type: "playlist",
      uri: "spotify:playlist:0yCDv9wh0voTK0QCcNsXh0",
    },
    {
      collaborative: false,
      description: "",
      external_urls: {
        spotify: "https://open.spotify.com/playlist/1dJkRe6eARDtvILXVxbhmM",
      },
      href: "https://api.spotify.com/v1/playlists/1dJkRe6eARDtvILXVxbhmM",
      id: "1dJkRe6eARDtvILXVxbhmM",
      images: [
        {
          height: 640,
          url: "https://mosaic.scdn.co/640/ab67616d0000b273381371cb8ce680d0dc324600ab67616d0000b27373b063d18cd9be91eb12284aab67616d0000b273e2213d84fabb15100c425198ab67616d0000b273e2dd4e821bcc3f70dc0c8ffd",
          width: 640,
        },
        {
          height: 300,
          url: "https://mosaic.scdn.co/300/ab67616d0000b273381371cb8ce680d0dc324600ab67616d0000b27373b063d18cd9be91eb12284aab67616d0000b273e2213d84fabb15100c425198ab67616d0000b273e2dd4e821bcc3f70dc0c8ffd",
          width: 300,
        },
        {
          height: 60,
          url: "https://mosaic.scdn.co/60/ab67616d0000b273381371cb8ce680d0dc324600ab67616d0000b27373b063d18cd9be91eb12284aab67616d0000b273e2213d84fabb15100c425198ab67616d0000b273e2dd4e821bcc3f70dc0c8ffd",
          width: 60,
        },
      ],
      name: "What's Up? – 4 Non Blondes",
      owner: {
        display_name: "Josue Tabora",
        external_urls: {
          spotify: "https://open.spotify.com/user/sdh4oba521kdggrzsbpio36mu",
        },
        href: "https://api.spotify.com/v1/users/sdh4oba521kdggrzsbpio36mu",
        id: "sdh4oba521kdggrzsbpio36mu",
        type: "user",
        uri: "spotify:user:sdh4oba521kdggrzsbpio36mu",
      },
      primary_color: null,
      public: null,
      snapshot_id:
        "NDU4LDg0NzRiNmEyN2FiZTQyODQ0YjcxNmVjYjBkMDljZGI5ODI1ZmEyMjU=",
      tracks: {
        href: "https://api.spotify.com/v1/playlists/1dJkRe6eARDtvILXVxbhmM/tracks",
        total: 383,
      },
      type: "playlist",
      uri: "spotify:playlist:1dJkRe6eARDtvILXVxbhmM",
    },
    {
      collaborative: false,
      description:
        "Teenage Mutant Ninja Turtles: Mutant Mayhem - Only In theatres August 2, 2023",
      external_urls: {
        spotify: "https://open.spotify.com/playlist/4M3jBKWlcmOX3pXD6RwZJd",
      },
      href: "https://api.spotify.com/v1/playlists/4M3jBKWlcmOX3pXD6RwZJd",
      id: "4M3jBKWlcmOX3pXD6RwZJd",
      images: [
        {
          height: null,
          url: "https://i.scdn.co/image/ab67706c0000bebb31e8a12dd738fe0f99fbc1ad",
          width: null,
        },
      ],
      name: "Teenage Mutant Ninja Turtles: Mutant Mayhem Inspired By Official Playlist",
      owner: {
        display_name: "Paramount Pictures",
        external_urls: {
          spotify: "https://open.spotify.com/user/egb3k4srro5982q5ftqxi2m36",
        },
        href: "https://api.spotify.com/v1/users/egb3k4srro5982q5ftqxi2m36",
        id: "egb3k4srro5982q5ftqxi2m36",
        type: "user",
        uri: "spotify:user:egb3k4srro5982q5ftqxi2m36",
      },
      primary_color: null,
      public: null,
      snapshot_id:
        "MjUsNmJlNTNkZDkxOTBhZjNhMmQ2NjE5MmViN2FlNTRlM2UwOGJhNzIyNA==",
      tracks: {
        href: "https://api.spotify.com/v1/playlists/4M3jBKWlcmOX3pXD6RwZJd/tracks",
        total: 19,
      },
      type: "playlist",
      uri: "spotify:playlist:4M3jBKWlcmOX3pXD6RwZJd",
    },
  ],
  212,
];

const dummyListTracks = {
  href: "https://api.spotify.com/v1/me/shows?offset=0&limit=20",
  limit: 20,
  next: "https://api.spotify.com/v1/me/shows?offset=1&limit=1",
  offset: 0,
  previous: "https://api.spotify.com/v1/me/shows?offset=1&limit=1",
  total: 4,
  items: [
    {
      added_at: "string",
      added_by: {
        external_urls: {
          spotify: "string",
        },
        followers: {
          href: "string",
          total: 0,
        },
        href: "string",
        id: "string",
        type: "user",
        uri: "string",
      },
      is_local: false,
      track: {
        album: {
          album_type: "compilation",
          total_tracks: 9,
          available_markets: ["CA", "BR", "IT"],
          external_urls: {
            spotify: "string",
          },
          href: "string",
          id: "2up3OPMp9Tb4dAKM2erWXQ",
          images: [
            {
              url: "https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228",
              height: 300,
              width: 300,
            },
          ],
          name: "string",
          release_date: "1981-12",
          release_date_precision: "year",
          restrictions: {
            reason: "market",
          },
          type: "album",
          uri: "spotify:album:2up3OPMp9Tb4dAKM2erWXQ",
          artists: [
            {
              external_urls: {
                spotify: "string",
              },
              href: "string",
              id: "string",
              name: "string",
              type: "artist",
              uri: "string",
            },
          ],
        },
        artists: [
          {
            external_urls: {
              spotify: "string",
            },
            followers: {
              href: "string",
              total: 0,
            },
            genres: ["Prog rock", "Grunge"],
            href: "string",
            id: "string",
            images: [
              {
                url: "https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228",
                height: 300,
                width: 300,
              },
            ],
            name: "string",
            popularity: 0,
            type: "artist",
            uri: "string",
          },
        ],
        available_markets: ["string"],
        disc_number: 0,
        duration_ms: 0,
        explicit: false,
        external_ids: {
          isrc: "string",
          ean: "string",
          upc: "string",
        },
        external_urls: {
          spotify: "string",
        },
        href: "string",
        id: "string",
        is_playable: false,
        linked_from: {},
        restrictions: {
          reason: "string",
        },
        name: "string",
        popularity: 0,
        preview_url: "string",
        track_number: 0,
        type: "track",
        uri: "string",
        is_local: false,
      },
    },
  ],
};

const App = (props) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<AppLayout />} />
      </Routes>
    </BrowserRouter>
  );
};
function ErrorMessage({ message }) {
  return (
    <div className="error">
      <span>{message}</span>
    </div>
  );
}
export default App;
