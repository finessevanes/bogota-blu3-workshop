import {
  useAccount,
  useEnsAvatar,
  useEnsName,
  useDisconnect,
} from "@web3modal/react";

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
  BioStyle,
} from "./styles";

function Profile() {
  const disconnect = useDisconnect();
  const { address: userAddress } = useAccount();
  const { data: ensName, isLoading: isLoadingEnsName } = useEnsName({
    address: userAddress,
  });
  const { data: avatarImage, isLoading: isLoadingAvatarImage } = useEnsAvatar({
    addressOrName: userAddress,
  });

  return (
    <div className={ContainerStyle}>
      {avatarImage === undefined || isLoadingAvatarImage || isLoadingEnsName ? (
        <h1>Loading</h1>
      ) : (
        <div className={ProfileContainerStyle}>
          <button
            onClick={disconnect}
            type="button"
            className={DisconnectBtnStyle}
          >
            Disconnect
          </button>
          <div className={ProfileCardStyle}>
            <img
              src="https://i.ibb.co/TW3bPTc/Medium-Background.jpg"
              className={BgImageStyle}
            />
            <div className={AvatarContainer}>
              <img
                src={
                  avatarImage === null
                    ? "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__480.png"
                    : avatarImage
                }
                className={AvatarStyle}
              />
            </div>
            <div className={BioContainer}>
              <h3 className={EnsNameStyle}>{ensName}</h3>
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
      )}
    </div>
  );
}

export default Profile;
