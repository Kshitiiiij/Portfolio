import './Skill.css'
const WhatSkills = ({ skill, level }) => {
    return (
        <>
            <div className="skills__data">
                <i class='bx bxs-badge-check'></i>
                <div>
                    <h3 className="skills__name">{skill}</h3>
                    <span className="skills__level">{level}</span>
                </div>
            </div>
        </>

    )
}

export default WhatSkills
