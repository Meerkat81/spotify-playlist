import React from "react";
import { Segment, Sticky } from "semantic-ui-react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

function dateFormat(date) {
  return Number(date.substring(0, 4));
}
function Chart({ playlistDetail }) {
  const series = [
    {
      name: "Track",
      id: "track",
      marker: { symbol: "circle" },
      data: [],
    },
  ];

  const scatterOptions = {
    chart: {
      type: "scatter",
      zoomType: "xy",
    },
    credits: {
      enabled: false,
    },
    title: {
      text: "Tracks Popularity and Year",
      align: "center",
    },
    xAxis: {
      floor: 0,
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
      floor: 1400,
      allowDecimals: false,
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
    tooltip: {
      pointFormat:
        "Spotify Popularity: {point.x} <br/> Year: {point.y} <br/> Track name: {point.custom.trackName} <br/> Album name:  {point.custom.album}",
    },
    series,
  };
  playlistDetail.items.forEach((song) => {
    if (!song.track.album.release_date) return;
    series[0].data.push({
      x: song.track.popularity,
      y: dateFormat(song.track.album.release_date),
      custom: { album: song.track.album.name, trackName: song.track.name },
    });
  });
  return (
    <Segment>
      <HighchartsReact highcharts={Highcharts} options={scatterOptions} />
    </Segment>
  );
}

export default Chart;
