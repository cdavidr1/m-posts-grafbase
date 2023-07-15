"use client";
import { connectWallet, getCurrentWalletConnected } from '@/util/interact';
import React from 'react';

type Web3User = {
    wallet: string;
}

const ConnectWeb3 = () => {
    const [userInfo, setUserInfo] = React.useState<Web3User | null>(null);

    const connectWalletPressed = async () => {
        const walletResponse = await connectWallet();
        setUserInfo({wallet:(walletResponse as any).address});
    };

    React.useEffect(() => {
        async function fetchWallet() {
            const { address } = await getCurrentWalletConnected();
            setUserInfo({wallet:address});
        }
        fetchWallet();
        addWalletListener();
    }, []);

    function addWalletListener() {
        if ((window as any).ethereum) {
            (window as any).ethereum.on("accountsChanged", (accounts: string | any[]) => {
                if (accounts.length > 0) {
                    setUserInfo({wallet:accounts[0]});
                } else {
                    return setUserInfo(null);
                }
            });
        }
    }

    return (
        <button className='
            rounded-full 
            bg-green-300'
            onClick={connectWalletPressed}>Connect Web3 {userInfo?.wallet ? "- " + userInfo.wallet : ""}</button>
    )
}

export default ConnectWeb3