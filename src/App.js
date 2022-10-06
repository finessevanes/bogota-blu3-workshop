import { ConnectButton, useAccount } from '@web3modal/react'
import {AppStyle} from './styles'
import Profile from './Profile'

function App() {
  const { isConnected } = useAccount()

  return (
    <div className={AppStyle}>
      { isConnected ? <Profile /> : <div><ConnectButton /></div>}
    </div>
  );
}

export default App;
