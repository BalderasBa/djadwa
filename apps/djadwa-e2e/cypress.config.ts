import { nxE2EPreset } from '@nx/cypress/plugins/cypress-preset';

import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    ...nxE2EPreset(__filename, {
      cypressDir: 'src',
      webServerCommands: {
        default: 'nx run djadwa:serve',
        production: 'nx run djadwa:preview',
      },
      ciWebServerCommand: 'nx run djadwa:serve-static',
    }),
    baseUrl: 'http://localhost:4200',
  },
});
