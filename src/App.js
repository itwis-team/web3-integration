import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import {useEffect} from 'react';

import {NotificationContainer} from 'react-notifications';

import {Home} from './pages/home/home';
import {Pool} from './pages/pool/pool';
import {CreatePool} from "./pages/pool_create/create_pool";
import {CreateFarm} from "./pages/farm_create/create_farm";
import {Nav} from './components/nav';
import {Footer} from './components/footer';
import Moralis from 'moralis';
import {EthereumClient, w3mConnectors, w3mProvider} from '@web3modal/ethereum'
import {Web3Modal} from '@web3modal/react'
import {configureChains, createConfig, WagmiConfig} from 'wagmi'
import {bsc} from 'wagmi/chains'

async function moralis_start() {
  await Moralis.start({
    apiKey: "epT1hDYq9X9bHqceWqkeVNowMjrS79w9TQLxFstYrok4lbkt2XibAGK4hvChS0Td",
  });
}

moralis_start();

function App() {
  const chains = [bsc]
  const projectId = '8468ce8558c454461f3985d74f27324b';

  const {publicClient} = configureChains(chains, [w3mProvider({projectId})])
  const wagmiConfig = createConfig({
    autoConnect: true,
    connectors: w3mConnectors({projectId, version: 1, chains}),
    publicClient
  })
  const ethereumClient = new EthereumClient(wagmiConfig, chains)

  return (
    <>
      <WagmiConfig config={wagmiConfig}>
        <Router>
          <Nav />
          <Routes>
            <Route path="/" element={<Pool />} />
            <Route path="/farm" element={<Home />} />
            <Route path="/pool" element={<Pool />} />
            <Route path="/single" element={<CreatePool />} />
            <Route path="/lp" element={<CreateFarm />} />
          </Routes>
          <NotificationContainer />
          <Footer />
        </Router>
      </WagmiConfig>

      <Web3Modal projectId={projectId} ethereumClient={ethereumClient} themeVariables={{
        '--w3m-font-family': 'Roboto, sans-serif',
        '--w3m-accent-color': '#a50404',
        '--w3m-background-color': '#a50404',
      }} />
    </>
  );
}

export default App;
