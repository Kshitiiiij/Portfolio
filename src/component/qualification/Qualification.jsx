import './qualification.css';

const Qualification = () => {
    return (
        <section className='qualification section'>
            <h2 className='section__title'>Qualifcations</h2>
            <span className='section__subtitle'>
                My personal journey
            </span>
            <div className="qualification__container qualification">
                <div className="qualification__tab">
                    <div className="qualification__button button--flex">
                        <i className="uli uli-graduation-cap qualification__icon"></i>Education
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Qualification;