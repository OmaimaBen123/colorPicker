function ProfilePic() {
    const imageUrl = './src/assets/oprah1.jpeg';
    const handleClick = (e) => e.target.style.display='none'
    return (
        <img  onClick={(e) => handleClick(e)} src={imageUrl} alt="oprah" />
    );
}
export default ProfilePic;