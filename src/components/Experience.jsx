import React from "react";
import experience from "./data/experience.json";

export const Experience = () => {
  return (
    <>
      <div className="container exp" id="experience">
        <h1>EXPERIENCE</h1>
        {experience.map((data) => {
          return (
            <>
              <div key={data.id} className="exp-items text-center my-5"
              data-aos="zoom-in"
              data-aos-duration="1000"
              >
                {/* {" "} */}
                {/*my-5 means margin:5 */}
                <div className="left">
                  <img src={`/assets/${data.imageSrc}`} alt="" />
                </div>
                <div className="right">
                  <h2>{data.role}</h2>
                  <h4>
                    <span className="date">
                      {data.startDate}
                      {" - "}
                      {data.endDate}{" "}
                    </span>
                    <span className="location">{data.location}</span>
                  </h4>
                  <h5 className="ex">{data.experiences[0]} </h5>
                  <h5 className="ex">{data.experiences[1]} </h5>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Experience;
