import { Box, Typography, Paper } from '@mui/material';
import CasesIcon from '@mui/icons-material/Cases';

export default function PortfolioModeler() {
  return (
    <Box sx={{ px: '8px', py: 2 }}>
      <Paper
        elevation={2}
        sx={{
          p: 4,
          borderRadius: '10px',
          backgroundColor: '#fff',
        }}
      >
        <Typography variant="h6" component="h1" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          Portfolio Modeler
          <CasesIcon sx={{ fontSize: '1.5rem' }} />
        </Typography>

        <Box sx={{ mt: 3 }}>
          <Typography variant="body1" sx={{ mb: 1 }}>
            •	Added ability to generate orders and send them to Xip for trading in the Global Portfolio Modeler (C#, Sybase, InterSystems Cache).
          </Typography>
          <Typography variant="body1" sx={{ mb: 1 }}>
            •	Enabled pre-trade compliance check and the option to send for the rules override to the compliance officer.
          </Typography>
          <Typography variant="body1" sx={{ mb: 1 }}>
            •	Created save/restore application configuration views section. Improved error handling framework.
          </Typography>
          <Typography variant="body1" sx={{ mb: 1 }}>
            •	Worked on Order Manager API that allowed to integrate Blotter, Proposed Orders and Order windows into Portfolio Modeler.
          </Typography>
          <Typography variant="body1" sx={{ mb: 1 }}>
            •	Participated in the Portfolio Modeler release that was supposed to add the ability for the Quant team to generate equity orders based on the imported model. During development process worked on the stability of the import functionality, introduced warnings for duplicate issuer/oversell/overcover, fixed exclude position functionality.
          </Typography>
          <Typography variant="body1" sx={{ mb: 1 }}>
            •	Routed Portfolio Modeler orders to Charles River trading system instead of Xip which was being phased out. Removed all other references to the obsolete Xip system in Portfolio Modeler application. Made sure the models that did not pass compliance are sent from Order Manager to Charles River when the compliance officer overridden the fails.
          </Typography>
          <Typography variant="body1" sx={{ mb: 1 }}>
            •	Collaborated closely with other developers, business analysts, and stakeholders to gather requirements and ensure successful Portfolio Modelling Tool migration into the new .Net Core trading application which is sending 80% of company stock orders to Charles River Investment Management System running in Azure.
          </Typography>
          <Typography variant="body1" sx={{ mb: 1 }}>
            •	Took the lead in designing, architecting, and developing authorization, health check, emailing, client logging, performance recording and data retrieval Grpc/Web API microservices for the new Modelling Tool.
          </Typography>
          <Typography variant="body1" sx={{ mb: 1 }}>
            •	Following best practices and coding standards implemented generic service API libraries, logging and a rule engine components to be utilized in .Net Core services and new Modelling client.
          </Typography>
          <Typography variant="body1" sx={{ mb: 1 }}>
            •	Contributed to the design and architecture of new Modelling Tool screens and workflows, implemented user input validation and business logic functions.
          </Typography>
          <Typography variant="body1" sx={{ mb: 1 }}>
            •	Worked on integration of model approval process with MS Teams located in Azure so portfolio managers can approve or deny portfolio rebalance scenarios.
          </Typography>
        </Box>
      </Paper>
    </Box>
  );
}
