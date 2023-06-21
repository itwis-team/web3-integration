import {useWeb3Modal} from '@web3modal/react';
import {useAccount} from 'wagmi';
import {ellipseAddress} from '../utils/elipseAddress';

export const ConnectButton = () => {
    const {open, close} = useWeb3Modal();

    const {address, isConnected} = useAccount({
        onConnect: async ({connector}) => {
            const chainId = await connector.getChainId();

            if (chainId !== 56) {
                connector.switchChain(56).catch(() => {
                    connector.disconnect()
                })
            }

            console.log('Connected')
        },
        onDisconnect: () => {
            console.log('Disconnected')
        },
    });

    return <a className="btn btn-primary shadow wallet-connect" role="button" onClick={() => open()}>
        {isConnected ? ellipseAddress(address, 5) : "Connect Wallet"}
    </a>
}
