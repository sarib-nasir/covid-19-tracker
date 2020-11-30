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
    <>
      <Line
        data={{
          labels: getData.map(({ date }) => new Date(date).toDateString()),
          datasets: [
            {
              data: getData.map(({ confirmed }) => confirmed),
              label: "infected",
              borderColor: "rgb(124, 185, 232)",
              backgroundColor: "rgba(124, 185, 232, 0.7)",
              fill: true,
            }
          ],
        }}
      />
    </>
    ):null
    const lineChartx = getData.length ? (
      <>
        <Line
          data={{
            labels: getData.map(({ date }) => new Date(date).toDateString()),
            datasets: [
              {
                data: getData.map(({ recovered }) => recovered),
                label: "recovered",
                borderColor: "rgb(50, 222, 132)",
                backgroundColor: "rgba(50, 222, 132, 0.7)",
                fill: true,
              },
            ],
          }}
        />
      </>
    ):null
    const lineChartxx = getData.length ? (
      <>
        <Line
          data={{
            labels: getData.map(({ date }) => new Date(date).toDateString()),
            datasets: [
              {
                data: getData.map(({ deaths }) => deaths),
                label: "deaths",
                borderColor: "rgb(253, 92, 99)",
                backgroundColor: "rgba(253, 92, 99,0.7)",
                fill: true,
              }
            ],
          }}
        />
      </>
    ):null
    const lineChartxxx = getData.length ? (
      <>
        <Line
          data={{
            labels: getData.map(({ date }) => new Date(date).toDateString()),
            datasets: [
              {
                data: getData.map(({ deaths,recovered,confirmed }) => (confirmed-(recovered+deaths))),
                label: "active cases",
                borderColor: "rgb(254, 190, 16)",
                backgroundColor: "rgba(254, 190, 16,0.7)",
                fill: true,
              },
            ],
          }}
        />
      </>
  ) : null;
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-6 mt-3" style={{paddingLeft: '0px',paddingRight:' 0px'}}>{lineChart}</div>
        <div className="col-sm-6 mt-3" style={{paddingLeft: '0px',paddingRight:' 0px'}}>{lineChartx}</div>
      </div>
      <div className="row">
        <div className="col-sm-6 mt-3" style={{paddingLeft: '0px',paddingRight:' 0px'}}>{lineChartxx}</div>
        <div className="col-sm-6 mt-3" style={{paddingLeft: '0px',paddingRight:' 0px'}}>{lineChartxxx}</div>
      </div>
    </div>
    )
};
export default Chart;
