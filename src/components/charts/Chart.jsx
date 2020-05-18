import React, { useState, useEffect } from "react";
import { virusDailyData } from "../../api";
import { Line } from "react-chartjs-2";
const Chart = ({ data, country }) => {
  const [getData, setData] = useState([]);
  useEffect(() => {
    const virusData = async () => {
      setData(await virusDailyData(country));
    };
    virusData();
  }, [country]);
  const lineChart = getData.length ? (
    <Line
      data={{
        labels: getData.map(({ date }) => new Date(date).toDateString()),
        datasets: [
          {
            data: getData.map(({ confirmed }) => confirmed),
            label: "infected",
            borderColor: "#3333ff",
            fill: true,
          },
          {
            data: getData.map(({ recovered }) => recovered),
            label: "recovered",
            borderColor: "rgba(0,255,0)",
            backgroundColor: "rgba(0, 255, 0, 0.5)",
            fill: true,
          },
          {
            data: getData.map(({ deaths }) => deaths),
            label: "deaths",
            borderColor: "rgba(255,0,0)",
            backgroundColor: "rgba(255,0,0,0.7)",
            fill: true,
          },
        ],
      }}
    />
  ) : null;
  return <div>{lineChart}</div>;
};
export default Chart;
