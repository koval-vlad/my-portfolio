import { Box, Typography, Paper } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartPie } from '@fortawesome/free-solid-svg-icons';

export default function AssetMix() {
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
          Asset Mix
          <FontAwesomeIcon icon={faChartPie} style={{ fontSize: '1.2rem' }} />  
        </Typography>

        <Box sx={{ mt: 3 }}>
          <Typography variant="body1" sx={{ mb: 1 }}>
            •	Automated and standardized existing manual process of allocating funds to Asset Mix clients. 
          </Typography>
          <Typography variant="body1" sx={{ mb: 1 }}>
            •	Implemented a module to automate the re-balance of Canadian private client accounts. 
          </Typography>
          <Typography variant="body1" sx={{ mb: 1 }}>
            •	Created a workflow that provided notifications and approval process for orders created as a result of the asset mix re-balance exercise (C#, Sybase).
          </Typography>
        </Box>
      </Paper>
    </Box>
  );
}
