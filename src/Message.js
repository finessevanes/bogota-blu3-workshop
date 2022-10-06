import { useAccount, useEnsAvatar } from '@web3modal/react'

function Message(){
    const {address} = useAccount();
    const { data, error, isLoading, refetch } = useEnsAvatar({
        addressOrName: address
      })

    console.log()
    return(
        <h1>You are connected</h1>
    )
}

export default Message;