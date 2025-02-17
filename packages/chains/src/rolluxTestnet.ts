import { Chain } from './types'

export const rolluxTestnet = {
  id: 57000,
  name: 'Rollux Testnet',
  network: 'rollux-testnet',
  nativeCurrency: {
    decimals: 18,
    name: 'Syscoin',
    symbol: 'SYS',
  },
  rpcUrls: {
    default: {
      http: ['https://rpc-tanenbaum.rollux.com/'],
      websocket: ['wss://rpc-tanenbaum.rollux.com/wss']
    },
    public: { http: ['https://rpc-tanenbaum.rollux.com/'] },
  },
  blockExplorers: {
    default: { name: 'RolluxTestnetExplorer', url: 'https://rollux.tanenbaum.io' },
  },
  contracts: {
    multicall3: {
      address: '0xcA11bde05977b3631167028862bE2a173976CA11',
      blockCreated: 1813675,
    },
  },
} as const satisfies Chain
