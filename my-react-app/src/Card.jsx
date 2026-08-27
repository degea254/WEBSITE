import profilePic from "./assets/2.jpg";

function Card() {
  return (
    <div className="card">
      <img className="card-image" src={profilePic} alt="profile picture"></img>
      <h2 className="card-title">Degea</h2>
      <p className="card-text">i code and play video games</p>
    </div>
  );
}

export default Card;
