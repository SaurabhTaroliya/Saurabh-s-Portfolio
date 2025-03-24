import React from 'react';
import skillList from './data/skillList.json';

export const Skills = () => {
  return (
    <>
      <div className="container skills" id='skills'>
        <h1>Skills</h1>
        <div className="items" >
          {skillList.map((skill)=>{
            return(
              <>
                <div className="item"
                data-aos="flip-left"
                data-aos-duration="1000"
                >
                  <img src={`/assets/${skill.imageSrc}`} alt="" />
                  <h3>{skill.title}</h3>
                </div>
              </>
            )
          })}
        </div>
        
        
      </div>
    </>
  )
}

export default Skills;
