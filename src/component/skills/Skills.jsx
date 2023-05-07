import './Skill.css'
import WhatSkills from './WhatSkills'

const Skills = () => {
  return (
    <section className="skills section" id="skills">
      <h2 className="section__title">Skills</h2>
      <span className="section__subtitle">My technical levels</span>

      <div className="skills__container container grid">


        <div className="skills__content">
          <h3 className="skills__title">Frontend</h3>
          <div className="skills__box">
            <div className="skills__group">
              <WhatSkills
                skill='HTML'
                level='Basic'
              />
              <WhatSkills
                skill='CSS'
                level='Intermediate'
              />
              <WhatSkills
                skill='Javascript'
                level='Intermediate'
              />
            </div>
            <div className="skills__group">
              <WhatSkills
                skill='TypeScript'
                level='Intermediate'
              />
              <WhatSkills
                skill='React'
                level='Intermediate'
              />
              <WhatSkills
                skill='Next JS'
                level='Basic'
              />
            </div>
            {/* <WhatSkills
              skill='Next Js'
              level='Basic'
            /> */}
          </div>
        </div>


        <div className="">
          <div className="skills__content">
            <h3 className="skills__title">Backend</h3>
            <div className="skills__box">
              <div className="skills__group">
                <WhatSkills
                  skill='Node JS'
                  level='Intermediate'
                />
                <WhatSkills
                  skill='MongoDB'
                  level='Intermediate'
                />
                <WhatSkills
                  skill='Express'
                  level='Intermediate'
                />
              </div>
              <div className="skills__group">
                <WhatSkills
                  skill='Mongoose'
                  level='Intermediate'
                />
                <WhatSkills
                  skill='MySQL'
                  level='Basic'
                />
                 <WhatSkills
                  skill='Prisma'
                  level='Basic'
                />
              </div>
            </div>
          </div>
        </div>


      </div>
    </section>
  )
}

export default Skills
