'use client';

import { ApolloClient, InMemoryCache } from '@apollo/client';
import { cookieStorage, createConfig, createStorage, http } from '@wagmi/core';
import { injected, coinbaseWallet, walletConnect } from '@wagmi/connectors';
import { mainnet, polygon, Chain } from '@wagmi/core/chains';
import axios from 'axios';

if (process.env.NEXT_PUBLIC_WAGMI_ID === undefined) throw new Error('NEXT_PUBLIC_WAGMI_ID not available');
if (process.env.NEXT_PUBLIC_RPC_URL_MAINNET === undefined) throw new Error('NEXT_PUBLIC_RPC_URL_MAINNET not available');
if (process.env.NEXT_PUBLIC_RPC_URL_POLYGON === undefined) throw new Error('NEXT_PUBLIC_RPC_URL_POLYGON not available');

// Config
export type ConfigEnv = { landing: string; app: string; api: string; indexer: string; rpc: string; wagmiId: string; chain: Chain };
export const CONFIG: ConfigEnv = {
	landing: process.env.NEXT_PUBLIC_LANDINGPAGE_URL || 'https://3dotshub.com',
	app: process.env.NEXT_PUBLIC_APP_URL || 'https://app.3dotshub.com',
	api: process.env.NEXT_PUBLIC_API_URL || 'https://api.3dotshub.com',
	indexer: process.env.NEXT_PUBLIC_INDEXER_URL || 'https://indexer.3dotshub.com',
	chain: process.env.NEXT_PUBLIC_CHAIN_NAME === 'mainnet' ? mainnet : polygon,
	wagmiId: process.env.NEXT_PUBLIC_WAGMI_ID,
	rpc:
		process.env.NEXT_PUBLIC_CHAIN_NAME === 'mainnet'
			? process.env.NEXT_PUBLIC_RPC_URL_MAINNET
			: process.env.NEXT_PUBLIC_RPC_URL_POLYGON,
};

console.log('YOU ARE USING THIS CONFIG PROFILE:');
console.log(CONFIG);

// PONDER CLIENT
export const PONDER_CLIENT = new ApolloClient({
	uri: CONFIG.indexer,
	cache: new InMemoryCache(),
});

// API CLIENT
export const API_CLIENT = axios.create({
	baseURL: CONFIG.api,
});

// WAGMI CONFIG
export const WAGMI_CHAIN = CONFIG.chain;
export const WAGMI_METADATA = {
	name: '3Dotshub',
	description: 'Web3 Application to interact with 3Dotshub Tools',
	url: CONFIG.landing,
	icons: [],
};
export const WAGMI_CONFIG = createConfig({
	chains: [WAGMI_CHAIN],
	transports: {
		[CONFIG.chain.id]: http(CONFIG.rpc),
	},
	batch: {
		multicall: {
			wait: 200,
		},
	},
	connectors: [
		walletConnect({ projectId: CONFIG.wagmiId, metadata: WAGMI_METADATA, showQrModal: false }),
		injected({ shimDisconnect: true }),
		coinbaseWallet({
			appName: WAGMI_METADATA.name,
			appLogoUrl: WAGMI_METADATA.icons[0],
		}),
	],
	ssr: true,
	storage: createStorage({
		storage: cookieStorage,
	}),
});
