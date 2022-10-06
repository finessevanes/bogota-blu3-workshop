import { ConnectButton, useAccount } from '@web3modal/react'
import Message from './Message'

function App() {
  const { isConnected } = useAccount()

  return (
    <div>
      { isConnected ? <Message /> : <ConnectButton />}
    </div>
  );
}

export default App;
