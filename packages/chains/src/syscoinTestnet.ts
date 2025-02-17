import { Chain } from './types'

export const syscoinTestnet = {
  id: 5700,
  name: 'Syscoin Tanenbaum Testnet',
  network: 'syscoin-testnet',
  nativeCurrency: {
    decimals: 18,
    name: 'Syscoin',
    symbol: 'SYS',
  },
  rpcUrls: {
    default: {
      http: ['https://rpc.tanenbaum.io'],
      websocket: ['wss://rpc.tanenbaum.io/wss']
    },
    public: { http: ['https://rpc.tanenbaum.io'] },
  },
  blockExplorers: {
    default: { name: 'SyscoinTestnetExplorer', url: 'https://tanenbaum.io' },
  },
  contracts: {
    multicall3: {
      address: '0xcA11bde05977b3631167028862bE2a173976CA11',
      blockCreated: 271288,
    },
  },
} as const satisfies Chain
