import React from "react";
import { Segment } from "semantic-ui-react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const series = [
  {
    name: "Year",
    id: "year",
    marker: { symbol: "circle" },
    data: [],
  },
];
const playListSongs = {
  items: [
    {
      track: {
        album: {
          release_date: "2023-10-14",
        },
        popularity: 0,
      },
    },
    {
      track: {
        album: {
          release_date: "2023-08-04",
        },
        popularity: 19,
      },
    },
    {
      track: {
        album: {
          release_date: "2021-12-10",
        },
        popularity: 5,
      },
    },
    {
      track: {
        album: {
          release_date: "2021-12-10",
        },
        popularity: 4,
      },
    },
    {
      track: {
        album: {
          release_date: "2021-12-10",
        },
        popularity: 4,
      },
    },
    {
      track: {
        album: {
          release_date: "2021-12-10",
        },
        popularity: 4,
      },
    },
    {
      track: {
        album: {
          release_date: "2021-12-10",
        },
        popularity: 4,
      },
    },
    {
      track: {
        album: {
          release_date: "2021-12-10",
        },
        popularity: 4,
      },
    },
    {
      track: {
        album: {
          release_date: "2020-08-27",
        },
        popularity: 20,
      },
    },
    {
      track: {
        album: {
          release_date: "2020-08-27",
        },
        popularity: 20,
      },
    },
    {
      track: {
        album: {
          release_date: "2020-08-27",
        },
        popularity: 19,
      },
    },
    {
      track: {
        album: {
          release_date: "2020-08-27",
        },
        popularity: 19,
      },
    },
    {
      track: {
        album: {
          release_date: "2020-08-27",
        },
        popularity: 19,
      },
    },
    {
      track: {
        album: {
          release_date: "2020-08-27",
        },
        popularity: 19,
      },
    },
    {
      track: {
        album: {
          release_date: "2017-08-04",
        },
        popularity: 19,
      },
    },
    {
      track: {
        album: {
          release_date: "2018-04-02",
        },
        popularity: 20,
      },
    },
    {
      track: {
        album: {
          release_date: "2022-12-10",
        },
        popularity: 20,
      },
    },
    {
      track: {
        album: {
          release_date: "2022-12-10",
        },
        popularity: 20,
      },
    },
    {
      track: {
        album: {
          release_date: "2022-12-10",
        },
        popularity: 20,
      },
    },
    {
      track: {
        album: {
          release_date: "2022-12-10",
        },
        popularity: 19,
      },
    },
    {
      track: {
        album: {
          release_date: "2022-12-10",
        },
        popularity: 19,
      },
    },
    {
      track: {
        album: {
          release_date: "2022-12-10",
        },
        popularity: 19,
      },
    },
    {
      track: {
        album: {
          release_date: "2022-12-10",
        },
        popularity: 19,
      },
    },
    {
      track: {
        album: {
          release_date: "2022-10-07",
        },
        popularity: 87,
      },
    },
    {
      track: {
        album: {
          release_date: "2023-06-02",
        },
        popularity: 88,
      },
    },
    {
      track: {
        album: {
          release_date: "2021",
        },
        popularity: 19,
      },
    },
    {
      track: {
        album: {
          release_date: "2021",
        },
        popularity: 19,
      },
    },
    {
      track: {
        album: {
          release_date: "2021",
        },
        popularity: 20,
      },
    },
    {
      track: {
        album: {
          release_date: "2022-12-10",
        },
        popularity: 6,
      },
    },
    {
      track: {
        album: {
          release_date: "2022-12-10",
        },
        popularity: 11,
      },
    },
    {
      track: {
        album: {
          release_date: "2022-12-10",
        },
        popularity: 5,
      },
    },
    {
      track: {
        album: {
          release_date: "2022-12-10",
        },
        popularity: 10,
      },
    },
    {
      track: {
        album: {
          release_date: "2022-12-10",
        },
        popularity: 10,
      },
    },
    {
      track: {
        album: {
          release_date: "2022-12-10",
        },
        popularity: 5,
      },
    },
    {
      track: {
        album: {
          release_date: "2021",
        },
        popularity: 0,
      },
    },
    {
      track: {
        album: {
          release_date: "2021",
        },
        popularity: 1,
      },
    },
    {
      track: {
        album: {
          release_date: "2021",
        },
        popularity: 1,
      },
    },
    {
      track: {
        album: {
          release_date: "2021",
        },
        popularity: 1,
      },
    },
    {
      track: {
        album: {
          release_date: "2021",
        },
        popularity: 2,
      },
    },
    {
      track: {
        album: {
          release_date: "2021",
        },
        popularity: 0,
      },
    },
    {
      track: {
        album: {
          release_date: "2021",
        },
        popularity: 18,
      },
    },
    {
      track: {
        album: {
          release_date: "2021",
        },
        popularity: 18,
      },
    },
    {
      track: {
        album: {
          release_date: "2021",
        },
        popularity: 0,
      },
    },
    {
      track: {
        album: {
          release_date: "2021",
        },
        popularity: 0,
      },
    },
    {
      track: {
        album: {
          release_date: "2021",
        },
        popularity: 0,
      },
    },
    {
      track: {
        album: {
          release_date: "2021",
        },
        popularity: 18,
      },
    },
    {
      track: {
        album: {
          release_date: "2023-08-04",
        },
        popularity: 19,
      },
    },
    {
      track: {
        album: {
          release_date: "2023-10-14",
        },
        popularity: 0,
      },
    },
    {
      track: {
        album: {
          release_date: "2021",
        },
        popularity: 1,
      },
    },
    {
      track: {
        album: {
          release_date: "2021",
        },
        popularity: 1,
      },
    },
    {
      track: {
        album: {
          release_date: "2020-08-27",
        },
        popularity: 5,
      },
    },
    {
      track: {
        album: {
          release_date: "2020-08-27",
        },
        popularity: 6,
      },
    },
    {
      track: {
        album: {
          release_date: "2023-10-14",
        },
        popularity: 0,
      },
    },
    {
      track: {
        album: {
          release_date: "2023-08-04",
        },
        popularity: 19,
      },
    },
  ],
};

function dateFormat(date) {
  return Number(date.substring(0, 4));
}
playListSongs.items.forEach((song) => {
  series[0].data.push([
    song.track.popularity,
    dateFormat(song.track.album.release_date),
  ]);
});
const scatterOptions = {
  chart: {
    type: "scatter",
    zoomType: "xy",
  },
  title: {
    text: "Tracks Popularity and Year",
    align: "center",
  },
  xAxis: {
    title: {
      text: "Popularity",
    },
    labels: {
      format: "{value}",
    },
    startOnTick: true,
    endOnTick: true,
    showLastLabel: true,
  },
  yAxis: {
    title: {
      text: "Year",
    },
    labels: {
      format: "{value}",
    },
  },
  plotOptions: {
    scatter: {
      marker: {
        radius: 2.5,
        symbol: "circle",
        states: {
          hover: {
            enabled: true,
            lineColor: "rgb(100,100,100)",
          },
        },
      },
      states: {
        hover: {
          marker: {
            enabled: false,
          },
        },
      },
      jitter: {
        x: 0.005,
      },
    },
  },
  series,
};
function Chart({ playlistDetail }) {
  playlistDetail.items.forEach((song) => {
    series[0].data.push([
      song.track.popularity,
      dateFormat(song.track.album.release_date),
    ]);
  });
  return (
    <Segment>
      <HighchartsReact highcharts={Highcharts} options={scatterOptions} />
    </Segment>
  );
}

export default Chart;
