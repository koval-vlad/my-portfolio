"use client"

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Box } from '@/components/ui/box';
import Header from './components/Header';
import { ThemeProvider } from './components/ThemeProvider';
import { useTheme } from 'next-themes';
import { useEffect } from 'react';
import Home from './pages/Home';
import ModernHRDashboard from './pages/ModernHRDashboard';
import HRAnalyticsDashboard from './pages/HRAnalyticsDashboard';
import TitanicSurvivorStory from './pages/TitanicSurvivorStory';
import DynamoSoftware from './pages/DynamoSoftware';
import CRDTradingSystem from './pages/CRDTradingSystem';
import PortfolioModeler from './pages/PortfolioModeler';
import IPOModule from './pages/IPOModule';
import AssetMix from './pages/AssetMix';
import OrderManager from './pages/OrderManager';
import GiftWrapMerge from './pages/GiftWrapMerge';
import GiftCalcs from './pages/GiftCalcs';
import CorporateWebSite from './pages/CorporateWebSite';
import HurricaneReport from './pages/HurricaneReport';
import GiftWrap from './pages/GiftWrap';
import DatabaseManager from './pages/DatabaseManager';
import FormalDegree from './pages/FormalDegree';
import Certificates from './pages/Certificates';
import Pluralsight from './pages/Pluralsight';
import OracleUniversity from './pages/OracleUniversity';
import OtherEducation from './pages/OtherEducation';
import Resume from './pages/Resume';

function AppContent() {
  const { theme } = useTheme();

  // Apply theme class to document element for proper modal theming
  useEffect(() => {
    if (theme) {
      // Get current classes to preserve non-theme classes
      const currentClasses = Array.from(document.documentElement.classList);
      const classesToPreserve = currentClasses.filter(cls =>
        !cls.startsWith('theme-')
      );

      // Remove all theme classes
      document.documentElement.classList.remove(
        'theme-bold-tech',
        'theme-midnight-bloom',
        'theme-amethyst-haze',
        'theme-catppuccin'
      );

      // Add the new theme
      document.documentElement.classList.add(theme);

      // Ensure preserved classes are still there
      classesToPreserve.forEach(cls => {
        document.documentElement.classList.add(cls);
      });
    }
  }, [theme]);

  return (
    <Router>
      <Box className="min-h-screen bg-background relative">
        <Header />
        <Box className="pt-2 px-6 relative z-10">
          <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/tableau/modern-hr-dashboard" element={<ModernHRDashboard />} />
                <Route path="/tableau/hr-analytics-dashboard" element={<HRAnalyticsDashboard />} />
                <Route path="/tableau/titanic-survivor-story" element={<TitanicSurvivorStory />} />
                <Route path="/dotnet/dynamo-software" element={<DynamoSoftware />} />
                <Route path="/dotnet/crd-trading-system" element={<CRDTradingSystem />} />
                <Route path="/dotnet/portfolio-modeler" element={<PortfolioModeler />} />
                <Route path="/dotnet/ipo-module" element={<IPOModule />} />
                <Route path="/dotnet/asset-mix" element={<AssetMix />} />
                <Route path="/dotnet/order-manager" element={<OrderManager />} />
                <Route path="/dotnet/gift-wrap-merge" element={<GiftWrapMerge />} />
                <Route path="/dotnet/gift-calcs" element={<GiftCalcs />} />
                <Route path="/vb/corporate-website" element={<CorporateWebSite />} />
                <Route path="/dotnet/hurricane-report" element={<HurricaneReport />} />
                <Route path="/vb/gift-wrap" element={<GiftWrap />} />
                <Route path="/vb/database-manager" element={<DatabaseManager />} />
                <Route path="/education/formal-degree" element={<FormalDegree />} />
                <Route path="/education/certificates" element={<Certificates />} />
                <Route path="/education/pluralsight" element={<Pluralsight />} />
                <Route path="/education/oracle-university" element={<OracleUniversity />} />
                <Route path="/education/other" element={<OtherEducation />} />
                <Route path="/resume" element={<Resume />} />
              </Routes>
            </Box>
          </Box>
        </Router>
  );
}

function App() {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="theme-bold-tech"
      themes={["theme-bold-tech", "theme-midnight-bloom", "theme-amethyst-haze", "theme-catppuccin"]}
      enableSystem
      disableTransitionOnChange
    >
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
