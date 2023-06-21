import {useAccount} from 'wagmi';
import Web3 from 'web3';

const useWeb3 = () => {
    const {connector, address} = useAccount();
    const walletAddress = address;

    const provider = connector?.getProvider();
    const web3 = new Web3(provider);

    return {
        web3,
        walletAddress,
        provider
    };
};

export default useWeb3;
