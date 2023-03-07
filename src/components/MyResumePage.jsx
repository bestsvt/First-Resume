import {
  skillDataGraphic,
  skillDataProgramming,
  skillDataSoft,
} from "../raw-data/skill-data";
import { educationData } from "../raw-data/education-data";
import { experienceData } from "../raw-data/experience-data";
import { hobbiesData } from "../raw-data/hobbies-data";

import logoGame from "../assets/hobbies/playinggame.png"

function MyResumePage() {
  return (
    <div className="container-myResumePage">
      <h1 className="text-myResume">My Resume</h1>
      <div className="container-myResume">
        <div className="leftContent">
            {hobbiesData.map((item,index)=>{
                return (
                    <div className="hobbies">
                        <p>{item.name}</p>
                        <img src={item.image} alt="" />
                    </div>
                )
            })}
        </div>
        <hr />
        <div className="rightContent">
          <p className="text-resume-aboutme">
          Although I have experience in graphic design, I am interested in transitioning to the tech industry. Currently, I am pursuing a Full-Stack Software Developer Bootcamp to gain skills in programming and eventually evolve into a UI/UX design role. I am excited to continue learning and growing professionally in this dynamic field.
          </p>
          <div className="skills-header-container">
            <h2 className="text-h2">SKILLS</h2>
            <div className="skills-container graphic">
              <h2>Graphic</h2>
              {skillDataGraphic.map((item, index) => {
                return (
                  <>
                    <div className="skills" key={index}>
                      <div className="skills-title">
                        <img src={item.image} alt={`${item.name}-logo`} />
                        <h2>{item.name}</h2>
                      </div>
                      <h2>{item.rating}</h2>
                    </div>
                    <hr />
                  </>
                );
              })}
            </div>
            <div className="skills-container programming">
              <h2>Programming Languages</h2>
              {skillDataProgramming.map((item, index) => {
                return (
                  <>
                    <div className="skills" key={index}>
                      <div className="skills-title">
                        <img src={item.image} alt={`${item.name}-logo`} />
                        <h2>{item.name}</h2>
                      </div>
                      <h4>{item.rating}</h4>
                    </div>
                    <hr />
                  </>
                );
              })}
            </div>
            <div className="skills-container programming">
              <h2>Soft Skills</h2>
              {skillDataSoft.map((item, index) => {
                return (
                  <>
                    <div className="skills" key={index}>
                      <div className="skills-title">
                        <img src={item.image} alt={`${item.name}-logo`} />
                        <h2>{item.name}</h2>
                      </div>
                    </div>
                    <hr />
                  </>
                );
              })}
            </div>
          </div>
          <div className="education-experience-container">
            <div className="education-header-container">
              <h2 className="text-h2">EDUCATION</h2>
              {educationData.map((item, index) => {
                return (
                  <>
                    <div className="education-item" key={index}>
                      <p>{item.date}</p>
                      <h4>{item.degree}</h4>
                      {item.department !== null ? (
                        <h3>({item.department})</h3>
                      ) : null}
                      <p>{item.name}</p>
                    </div>
                    <hr />
                  </>
                );
              })}
            </div>
            <div className="experience-header-container">
              <h2 className="text-h2">EXPERIENCE</h2>
              {experienceData.map((item, index) => {
                return (
                  <>
                    <div className="experience-item">
                      <p>{item.date}</p>
                      <h4>{item.name}</h4>
                      <p>{item.position}</p>
                      <div>
                        <p>• {item.aboutwork1}</p>
                        {item.aboutwork2 !== null ? (
                          <p>• {item.aboutwork2}</p>
                        ) : null}
                      </div>
                    </div>
                    <hr />
                  </>
                );
              })}
            </div>
          </div>
          <a href="">
            <button>Download Resume</button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default MyResumePage;
