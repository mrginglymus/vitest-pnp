import {defineConfig} from 'vitest/config';

export default defineConfig({
  test: {
    coverage: {
      enabled: true,
      provider: 'istanbul',
      include: [".yarn/__virtual__/**/*", "packages/**/*"],
      exclude: ["!.yarn/__virtual/**/*"],
      excludeAfterRemap: true
    }
  }
})