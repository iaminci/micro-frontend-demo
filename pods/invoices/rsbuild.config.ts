import { micropodConfig } from '../../micropods.config';

export default micropodConfig({
  name: 'pod_invoices',
  port: 80,
  outputAssetPrefix: 'https://app.theinci.in/invoices',
  exposes: {
    './App': './src/App.tsx',
    './translations': './translations.json',
  },
  remotes: [
    { name: 'pod_ui' },
    { name: 'pod_server' },
    { name: 'pod_dashboard' },
  ],
});
