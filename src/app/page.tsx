"use client";
import { SiteThemeProvider } from '@/components/sections/ThemeProvider';
import SimpleHero from '@/components/sections/layouts/hero/SimpleHero';
import MinimalAbout from '@/components/sections/layouts/about/MinimalAbout';
import Tokenomics from '@/components/sections/layouts/tokenomics/SimpleTokenomics';

export default function Page() {
  return (
    <SiteThemeProvider theme={{ styleVariant: 'funAndTrendy', colorTemplate: 1, textAnimation: 'slide' }}>
      <SimpleHero 
        title="Welcome to QuantumFrame"
        description="Explore our photography portfolio"
        primaryButtonText="View Gallery"
        secondaryButtonText="Contact Us"
      />
      <MinimalAbout 
        description="QuantumFrame is dedicated to capturing memorable moments through stunning photography."
      />
      <Tokenomics 
        title="Our Tokenomics"
        description="Learn about our project and the value we bring."
        kpiItems={[{ value: '100%', description: 'Completed Projects' }]} 
      />
    </SiteThemeProvider>
  );
}
