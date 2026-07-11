import passportPic from "./assets/passportPhoto.png";

function Card() {
  return (
    <div className="card">
      <img className="card-image" src={passportPic} alt="passport Photo" />
      <h2 className="card-title">Chuppala Anusha</h2>
      <p className="card-text">
        I am a graduate student and opting the role of front - end development
      </p>
    </div>
  );
}

export default Card;
