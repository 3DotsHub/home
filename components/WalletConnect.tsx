'use client';

import { useWeb3Modal } from '@web3modal/wagmi/react';
import { useEffect, useState } from 'react';
import { useAccount } from 'wagmi';
import AppButton from './AppButton';

export default function WalletConnect() {
	const [isLoaded, setLoaded] = useState<boolean>(false);
	const Web3Modal = useWeb3Modal();
	const { isConnected } = useAccount();

	useEffect(() => {
		setLoaded(isConnected);
	}, [isConnected]);

	if (isLoaded) {
		return (
			<div className="flex items-center gap-2 font-bold">
				<w3m-button balance="hide" />
			</div>
		);
	} else {
		return (
			<AppButton width="w-42" onClick={() => Web3Modal.open()}>
				Connect Wallet
			</AppButton>
		);
	}
}
