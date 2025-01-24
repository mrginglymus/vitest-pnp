import {defineConfig} from 'vitest/config';


export default defineConfig({
  test: {
    browser: {
      enabled: true, instances: [
        {
          browser: "chromium",
        },
      ],
      provider: "playwright",
    },
    include: ['tests/*'],
    coverage: {
      provider: 'istanbul',
    }
  }
});
