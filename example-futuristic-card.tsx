// Example usage of the FuturisticCard component

import { FuturisticCard, FuturisticCardHeader, FuturisticCardTitle, FuturisticCardContent } from '@/components/ui/futuristic-card';

// Basic usage
<FuturisticCard>
  <FuturisticCardHeader>
    <FuturisticCardTitle>Amazing Project</FuturisticCardTitle>
  </FuturisticCardHeader>
  <FuturisticCardContent>
    <p>This card has amazing 3D effects and glow!</p>
  </FuturisticCardContent>
</FuturisticCard>

// Custom glow color
<FuturisticCard glowColor="oklch(0.7 0.3 280)">
  <FuturisticCardContent>
    <p>Custom glow color!</p>
  </FuturisticCardContent>
</FuturisticCard>

// Custom tilt intensity
<FuturisticCard tiltIntensity={25}>
  <FuturisticCardContent>
    <p>More intense 3D tilt effect!</p>
  </FuturisticCardContent>
</FuturisticCard>
