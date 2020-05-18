import React from "react";
import "../../App.css";

export default function Cards({ data }) {
  if (!data[0]) {
    return "loading...";
  }
  // console.log(data[data.length - 1].confirmed);
  return (
    <React.Fragment>
      <div className="card border-primary mb-3">
        <h4 className="text-capitalize pl-2 mt-2">total cases </h4>
        <p className="mb-0 pl-2">{data[data.length - 1].confirmed}</p>
        <small className="pl-2">
          {new Date(data[data.length - 1].date).toDateString()}
        </small>
        <strong className="pl-2">Total Infected people from COVID-19</strong>
        <div className="card-footer bg-primary"></div>
      </div>
      <div className="card border-success mb-3">
        <h4 className="text-capitalize pl-2 mt-2">total Recovered </h4>
        <p className="mb-0 pl-2">{data[data.length - 1].recovered}</p>
        <small className="pl-2">
          {" "}
          {new Date(data[data.length - 1].date).toDateString()}
        </small>
        <strong className="pl-2">Total Recovered people from COVID-19</strong>
        <div className="card-footer bg-success"></div>
      </div>
      <div className="card border-danger">
        <h4 className="text-capitalize pl-2 mt-2">total Deaths </h4>
        <p className="mb-0 pl-2">{data[data.length - 1].deaths}</p>
        <small className="pl-2">
          {" "}
          {new Date(data[data.length - 1].date).toDateString()}
        </small>

        <strong className="pl-2">Total Deaths people from COVID-19</strong>

        <div className="card-footer bg-danger"></div>
      </div>
    </React.Fragment>
  );
}
