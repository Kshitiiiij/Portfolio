const Info = () => {
    return (
        <div className="about__info grid">
            <div className="about__box">
            <i class='bx bxs-award about__icon'></i>
                <h3 className="about__title">Education</h3>
                <span className="about__subtitles">NIT Hamirpur</span>
            </div>

            <div className="about__box">
            <i class='bx bxs-briefcase-alt-2 about__icon'></i>
                <h3 className="about__title">Projects</h3>
                <span className="about__subtitles">5 Projects</span>
            </div>

            <div className="about__box">
            <i class='bx bx-expand-horizontal about__icon' ></i>
                <h3 className="about__title">Ambitions</h3>
                <span className="about__subtitles">NIT Hamirpur</span>
            </div>
        </div>
    )
}

export default Info
