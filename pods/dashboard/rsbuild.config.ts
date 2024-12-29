import { micropodConfig } from '../../micropods.config';

export default micropodConfig({
  name: 'pod_dashboard',
  port: 80,
  outputAssetPrefix: 'https://app.theinci.in/dashboard',
  exposes: {
    './App': './src/App.tsx',
    './translations': './translations.json',
  },
  remotes: [{ name: 'pod_ui' }, { name: 'pod_server' }],
});
