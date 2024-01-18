// import Csharp from '../images/CSharp.svg';

const Interests = ({ image, name }) => {
    return (
      <div className="image-box">
        <img src={image} width="96px" height="96px"></img>
        <h4>{name}</h4>
      </div>
    );
  };

export default Interests;