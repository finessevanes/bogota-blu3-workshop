import {
  DisconnectBtnStyle,
  ProfileCardStyle,
  AvatarStyle,
  ContainerStyle,
  ProfileContainerStyle,
  EnsNameStyle,
  DetailsConatinerStyle,
  PhotosConatinerStyle,
  FriendsConatinerStyle,
  BgImageStyle,
  AvatarContainer,
  BioContainer,
  BioStyle
} from "./styles";

function Profile() {
  return (
    <div className={ContainerStyle}>
        <div className={ProfileContainerStyle}>
          <div className={ProfileCardStyle}>
            <img
              src="https://i.ibb.co/TW3bPTc/Medium-Background.jpg"
              className={BgImageStyle}
            />
            <div className={AvatarContainer}>
              <img
                src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__480.png"
                className={AvatarStyle}
              />
            </div>
            <div className={BioContainer}>
              <h3 className={EnsNameStyle}></h3>
              <p className={BioStyle}>hello, i'm vanes and i like to run</p>
            </div>
            <div className={DetailsConatinerStyle}>
              <div className={PhotosConatinerStyle}>
                <h2>34</h2>
                <span>Photos</span>
              </div>
              <div className={FriendsConatinerStyle}>
                <h2>42</h2>
                <span>Friends</span>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
}

export default Profile;
