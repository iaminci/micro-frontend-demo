import { micropodConfig } from '../../micropods.config';

export default micropodConfig({
  name: 'pod_shell',
  port: 80,
  outputAssetPrefix: 'https://app.theinci.in',
  remotes: [
    { name: 'pod_ui' },
    { name: 'pod_server' },
    { name: 'pod_dashboard' },
    { name: 'pod_invoices' },
  ],
});
