import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'wiz-tree',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../../../wizon/gestor/node_modules/@wizsolucoes/wiz-tree',
    },
    {
      type: 'dist-custom-elements-bundle',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
};
