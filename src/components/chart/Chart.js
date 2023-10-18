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
      name: "Year",
      id: "year",
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

  playlistDetail.items.forEach((song) => {
    series[0].data.push([
      song.track.popularity,
      dateFormat(song.track.album.release_date),
    ]);
  });
  return (
    <Sticky style={{ marginTop: "6em" }}>
      <Segment>
        <HighchartsReact highcharts={Highcharts} options={scatterOptions} />
      </Segment>
    </Sticky>
  );
}

export default Chart;
