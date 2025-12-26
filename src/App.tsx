import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Box, CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import Header from './components/Header';
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

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Box sx={{ minHeight: '100vh', backgroundColor: '#f5f5f5' }}>
          <Header />
          <Box component="main" sx={{ pt: 2 }}>
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
    </ThemeProvider>
  );
}

export default App;
