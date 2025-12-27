import { Box, Typography, Paper } from '@mui/material';
import AnalyticsIcon from '@mui/icons-material/AssessmentOutlined';

export default function DynamoSoftware() {
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
          Dynamo Software
          <AnalyticsIcon sx={{ fontSize: '1.5rem' }} />
        </Typography>

        <Box sx={{ mt: 3 }}>
          <Typography variant="body1" sx={{ mb: 1 }}>
            •	Communicated with project managers, product owners and development team to facilitate understanding of deliverables, estimates, and prioritization for ASP.NET Core FinTech Research and Portfolio Management SaaS platform solving challenges across the alternative investment landscape.
          </Typography>
          <Typography variant="body1" sx={{ mb: 1 }}>
            •	Delivered Composite benchmarks feature to automatically populate synthetic benchmark values based on the weighted combination of constituent index values (C#, SQL Server).
          </Typography>
          <Typography variant="body1" sx={{ mb: 1 }}>
            •	Developed Dynamic benchmarks for LP clients to compare the performance of their portfolio to the return of a benchmark which automatically took into consideration the changing weight of investment asset classes during the holding period. Created composite investment for each asset class in the account so users could assign a primary benchmark to it and use its portfolio NAV % to reflect exposure category weight for a specific period.
          </Typography>
          <Typography variant="body1" sx={{ mb: 1 }}>
            •	Implemented What-if scenario module which calculated projected portfolio exposures based on selected cash flow and statistics models. The feature took into account not only existing investment positions but also the impact of hypothetical future transactions (ASP.NET Core, REST API, JavaScript).
          </Typography>
          <Typography variant="body1" sx={{ mb: 1 }}>
            •	Created and executed unit tests to ensure the robustness and reliability of the application. Worked closely with QA team to identify issues and devise solutions to them (MSTest).
          </Typography>
          <Typography variant="body1" sx={{ mb: 1 }}>
            •	Provided resolution for tenant issues reported by client support and deployment teams from production and staging application slots.
          </Typography>
        </Box>
      </Paper>
    </Box>
  );
}
