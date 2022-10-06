import {
  useAccount,
  useEnsAvatar,
  useEnsName,
  useDisconnect,
} from "@web3modal/react";

function Message() {
  const disconnect = useDisconnect();
  const { address } = useAccount();
  const { data: ensName } = useEnsName(
    "0x9150C94dE175C6FA4d766a4e951E9c7ed204Ad1a"
  );
  const { data: avatarImage, isLoading: isLoadingAvatarImage } = useEnsAvatar({
    addressOrName: "0x9150C94dE175C6FA4d766a4e951E9c7ed204Ad1a",
  });

  console.log(isLoadingAvatarImage);
  console.log('ensName', ensName)

  return (
    <div className="flex border-red-600 border-2 justify-center">
      {isLoadingAvatarImage ? (
        <h1>Loading</h1>
      ) : (
        <div className="rounded-3xl overflow-hidden shadow-xl max-w-xs my-3 bg-blue-500">
          <img src="https://i.imgur.com/dYcYQ7E.png" className="w-full" />
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
      )}
    </div>
  );
}

export default Message;
