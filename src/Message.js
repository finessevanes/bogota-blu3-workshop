import {
  useAccount,
  useEnsAvatar,
  useEnsName,
  useDisconnect,
} from "@web3modal/react";

function Message() {
  const disconnect = useDisconnect();
  const { address: userAddress } = useAccount();

  const {
    data: ensName,
    isLoading: isLoadingEnsName,
    error: errorEnsName
  } = useEnsName({
    address: userAddress
  });

  const { data: avatarImage, isLoading: isLoadingAvatarImage } = useEnsAvatar({
    addressOrName: userAddress
  });

  return (
    <div className="flex justify-center">
      {avatarImage === undefined || isLoadingAvatarImage || isLoadingEnsName ? (
        <h1>Loading</h1>
      ) : (
        <div className="flex flex-col justify-start">
          <div>
            <button
              onClick={disconnect}
              type="button"
              className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 "
            >
              Disconnect
            </button>
          </div>
          <div className="rounded-3xl overflow-hidden shadow-xl max-w-xs my-3 bg-black">
            <img src="https://i.ibb.co/TW3bPTc/Medium-Background.jpg" className="w-full" />
            <div className="flex justify-center -mt-8">
              <img
                src={avatarImage}
                className="rounded-full border-solid border-white border-2 -mt-3 w-20 h-20"
              />
            </div>
            <div className="text-center px-3 pb-6 pt-2">
              <h3 className="text-white text-sm bold font-sans">{ensName}</h3>
              <p className="mt-2 font-sans font-light text-white">
                Hello, i'm from another the other side!
              </p>
            </div>
            <div className="flex justify-center pb-3 text-white">
              <div className="text-center mr-3 border-r pr-3">
                <h2>34</h2>
                <span>Photos</span>
              </div>
              <div className="text-center">
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

export default Message;
