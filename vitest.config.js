import {defineConfig} from 'vitest/config';

export default defineConfig({
  test: {
    include: ['tests/*'],
    coverage: {
      provider: 'istanbul',
      include: [".yarn/__virtual__/**/*", "packages/add/**/*"],
      exclude: ["!.yarn/__virtual/**/*"],
      excludeAfterRemap: true
    }
  }
})