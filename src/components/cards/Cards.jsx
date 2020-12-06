import React from "react";
import "../../App.css";

export default function Cards({ data ,country}) {
  if (!data[0]) {
    return "loading...";
  }
  console.log(country)
  return (
    <React.Fragment >
      <div className="container">
        <div className="row" style={{border:"1px solid #cbd5e0"}}>
          <div className="col-sm-12 pt-3 pb-3">
            <h5>{country ? `${country} Overview`: "Global Overview"} </h5>
          </div>
          <div className="card col-sm-3 mb-3  pb-2 text-center" >
            <h3 className="mb-0 pl-2"  style={{color:"#7CB9E8"}}>{data[data.length - 1].confirmed}</h3>
            <h6 className="text-capitalize pl-2 mt-2">confirmed </h6>
            <small className="pl-2">
              {new Date(data[data.length - 1].date).toDateString()}
            </small>
          </div>
          <div className="card col-sm-3 mb-3  pb-2 text-center" >
            <h3 className="mb-0 pl-2" style={{color:"#32de84"}}>{data[data.length - 1].recovered}</h3>
            <h6 className="text-capitalize pl-2 mt-2">Recovered </h6>
            <small className="pl-2">
              {" "}
              {new Date(data[data.length - 1].date).toDateString()}
            </small>        
          </div>
          <div className="card col-sm-3 mb-3  pb-2 text-center" >
            <h3 className="mb-0 pl-2" style={{color:"#fd5c63"}}>{data[data.length - 1].deaths}</h3>
            <h6 className="text-capitalize pl-2 mt-2">Deaths</h6>
            <small className="pl-2">
              {" "}
              {new Date(data[data.length - 1].date).toDateString()}
            </small>
          </div>
          <div className="card col-sm-3 mb-3  pb-2 text-center" >
            <h3 className="mb-0 pl-2" style={{color:"#FEBE10"}}>{(data[data.length - 1].confirmed)-((data[data.length - 1].deaths)+(data[data.length - 1].recovered))}</h3>
            <h6 className="text-capitalize pl-2 mt-2">Active Cases </h6>
            <small className="pl-2">
              {" "}
              {new Date(data[data.length - 1].date).toDateString()}
            </small>
          </div>
        </div>
        {/* extra work */}
        <div className="row mt-3" >            
          <div className="card col mr-3 pb-3 pt-2 text-center" style={{border:"1px solid #cbd5e0"}}>
            <h3 className="mb-0 pl-2" style={{color:"#fd5c63"}}>{(data[data.length - 1].deaths)-(data[data.length - 2].deaths)}</h3>
            <h6 className="text-capitalize pl-2 mt-2">Deaths reported in one day</h6>
            <small className="pl-2">
              {" "}
              {new Date(data[data.length - 1].date).toDateString()}
            </small>
          </div>
          <div className="card col pb-3 pt-2 text-center" style={{border:"1px solid #cbd5e0"}}>
            <h3 className="mb-0 pl-2" style={{color:"#FEBE10"}}>{(data[data.length - 1].confirmed)-(data[data.length - 2].confirmed)}</h3>
            <h6 className="text-capitalize pl-2 mt-2">Cases Reported in One Day</h6>
            <small className="pl-2">
              {" "}
              {new Date(data[data.length - 1].date).toDateString()}
            </small>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
