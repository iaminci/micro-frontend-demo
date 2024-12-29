import { micropodConfig } from '../../micropods.config';

export default micropodConfig({
  name: 'pod_server',
  port: 80,
  outputAssetPrefix: 'https://app.theinci.in/server',
  exposes: {
    './providers/ServerProvider': './src/providers/ServerProvider.tsx',
    './hooks/useAuth': './src/hooks/useAuth/useAuth.ts',
    './hooks/useData': './src/hooks/useData/useData.ts',
  },
});
