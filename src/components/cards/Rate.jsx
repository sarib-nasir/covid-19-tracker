import React from "react";
import "../../App.css";

export default function Rate({ data ,country}) {
  if (!data[0]) {
    return "loading...";
  }
  console.log(country)
  var fatel = Math.round(( (data[data.length - 1].deaths)/(data[data.length - 1].confirmed))* 100)
  var recovery = Math.round(( (data[data.length - 1].recovered)/(data[data.length - 1].confirmed))* 100)
  console.log(recovery)
  
  return (
    <React.Fragment >
      <div className="container mt-3">
        <div className="row" >

          <div className="card col-sm-5 mb-3  pb-2 text-center" style={{border:"1px solid #cbd5e0"}}>
            <div className={`progress-circle p${fatel}`} style={{position:'relative'}}>
              <span>{fatel}%</span>
              <div className="left-half-clipper">
                  <div className="first50-bar"></div>
                  <div className="value-bar"></div>
              </div>
            </div>
            <div style={{position:'absolute',paddingLeft:'35%',paddingTop:'6%'}}>
              <h4 className="text-capitalize pl-2 mt-2">Fatality Rate </h4>
              <h6 className="text-capitalize pl-2 mt-2">of Total Cases </h6>
            </div>
          </div>
          <div className="card offset-sm-2 col-sm-5 mb-3  pb-2 text-center" style={{border:"1px solid #cbd5e0"}}>
            <div className={recovery <= 0 ?  `progress-circle p${recovery}`:`progress-circle over50 p${recovery}` } style={{position:'relative'}}>
              <span>{recovery}%</span>
              <div className="left-half-clipper">
                  <div className="first50-bar"></div>
                  <div className="value-bar"></div>
              </div>
            </div>
            <div style={{position:'absolute',paddingLeft:'35%',paddingTop:'6%'}}>
              <h4 className="text-capitalize pl-2 mt-2">Recovery Rate </h4>
              <h6 className="text-capitalize pl-2 mt-2">of Total Cases </h6>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
