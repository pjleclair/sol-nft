"use client"

import React, { ReactElement } from 'react';

import {
    WalletDisconnectButton,
    WalletMultiButton
} from '@solana/wallet-adapter-react-ui';

const Home = (): ReactElement => {

    return (
        <div>
            <div className='
                flex
                justify-center
                m-2
                p-2
                gap-2
            '>
                <WalletMultiButton />
                <WalletDisconnectButton />
            </div>
            <div className='
                flex
                justify-center
            '>Connect wallet here!</div>
        </div>
    )
}

export default Home;