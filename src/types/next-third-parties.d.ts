declare module "@next/third-parties/google" {
  import type { FC } from "react";
  export const GoogleTagManager: FC<{ gtmId: string }>;
  export const GoogleAnalytics: FC<{ gaId: string }>;
}


