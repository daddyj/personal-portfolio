import type { NextConfig } from "next";
import { withTamagui } from '@tamagui/next-plugin'

const tamaguiPlugin = withTamagui({
  config: './tamagui.config.ts',
  components: ['tamagui'],
  appDir: true,
})

const nextConfig: NextConfig = {
  /* config options here */
  ...tamaguiPlugin
};

export default nextConfig;
