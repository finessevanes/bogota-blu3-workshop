import { ConnectButton, useAccount } from '@web3modal/react'
import Message from './Message'

function App() {
  const { isConnected } = useAccount()

  return (
    <div className='flex justify-center items-center min-h-screen'>
      { isConnected ? <Message /> : <div><ConnectButton /></div>}
    </div>
  );
}

export default App;
