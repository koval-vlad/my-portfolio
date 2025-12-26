import { Box, Typography, Paper } from '@mui/material';
import { HiDatabase, HiUser } from 'react-icons/hi';

export default function DatabaseManager() {
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
          Database Manager
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <HiUser style={{ fontSize: '1.2rem' }} />
            <HiDatabase style={{ fontSize: '1.2rem' }} />                        
          </Box>
        </Typography>

        <Box sx={{ mt: 3 }}>          
          <Typography variant="body1" sx={{ mb: 1 }}>
            • Designed and implemented Database Manager tool for the MSDE clients
          </Typography>
          <Typography variant="body1" sx={{ mb: 1 }}>
            • The application not only replicated the essential functionality of SQL Server Enterprise Manager but also had some extra features: rename database, correct user/login mappings etc. (VB6, SQLDMO, OSQL)
          </Typography>
          <Typography variant="body1" sx={{ mb: 1 }}>
            • Handled MSDE installation support issues, resolved SQL Server connectivity problems in various system/network configurations
          </Typography>  
        </Box>
      </Paper>
    </Box>
  );
}
