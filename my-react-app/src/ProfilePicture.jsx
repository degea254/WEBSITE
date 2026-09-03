function ProfilePicture(size) {
  const imageUrl = "./src/assets/2.jpg";

  const styles = {
    width: size,
    height: size,
    borderRadius: "50%",
    objectFit: "cover",
  };

  const handleClick = (e) => {
    e.target.style.border = "5px solid red";
  };

  return (
    <img onClick={(e) => handleClick(e)} src={imageUrl} style={styles}></img>
  );
}

export default ProfilePicture;
