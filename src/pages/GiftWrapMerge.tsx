import { Box, Typography, Paper } from '@mui/material';
import { HiDatabase, HiSwitchHorizontal } from 'react-icons/hi';

export default function GiftWrapMerge() {
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
          GiftWrap Merge
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
            <HiDatabase style={{ fontSize: '1.2rem' }} />
            <HiSwitchHorizontal style={{ fontSize: '1.2rem' }} />
            <HiDatabase style={{ fontSize: '1.2rem' }} />
          </Box>
        </Typography>

        <Box sx={{ mt: 3 }}>          
          <Typography variant="body1" sx={{ mb: 1 }}>
            • Programmed commercial application to transfer data from one GiftWrap database into another (C#, SQL Server)
          </Typography>
          <Typography variant="body1" sx={{ mb: 1 }}>
            • Applied predefined logic to analyze and modify the incoming data on the client (Typed DataSet, XML files) before bulk inserting it into the target database
          </Typography>
          <Typography variant="body1" sx={{ mb: 1 }}>
            • Displayed the process steps on the screen and logged them into the file
          </Typography>
          <Typography variant="body1" sx={{ mb: 1 }}>
            • Created the HTML report with the merge results and errors that have occurred during the data transfer
          </Typography>
        </Box>
      </Paper>
    </Box>
  );
}
