import { micropodConfig } from '../../micropods.config';

export default micropodConfig({
  name: 'pod_ui',
  port: 80,
  outputAssetPrefix: 'https://app.theinci.in/ui',
  exposes: {
    './config': './src/config.ts',
    './UIProvider': './src/providers/UIProvider.tsx',
    './Button': './src/components/button/Button.tsx',
    './Input': './src/components/input/Input.tsx',
    './Skeleton': './src/components/skeleton/Skeleton.tsx',
  },
  tools: {
    rspack: {
      module: {
        rules: [
          {
            test: /\.css$/i,
            use: ['postcss-loader'],
          },
        ],
      },
    },
  },
});
