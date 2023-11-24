const Experiences = ({ companyName, position, date, location , job }) => {
    return (
      <div className="experience-box">
        <h3>{companyName}</h3>
        <h4>{position}</h4>
        <h5>{date}, {location}</h5>
        <h5>
            {job}
        </h5>
      </div>
    );
  };
  

export default Experiences;