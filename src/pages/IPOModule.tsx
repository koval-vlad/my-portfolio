import { Box, Typography, Paper } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRocket } from '@fortawesome/free-solid-svg-icons';

export default function IPOModule() {
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
          IPO Module         
          <FontAwesomeIcon icon={faRocket} style={{ fontSize: '1.2rem' }} />
        </Typography>

        <Box sx={{ mt: 3 }}>          
          <Typography variant="body1" sx={{ mb: 1 }}>
            •	Worked with the team of developers to migrate IPO Deals functionality into a new module in order to standardize the Limited Offering order creation process. 
          </Typography>
          <Typography variant="body1" sx={{ mb: 1 }}>
            •	Created a new Blotter for managing Limited Offerings and Indications.
          </Typography>
          <Typography variant="body1" sx={{ mb: 1 }}>
            •	Adapted existing Order window for the creation of the limited offering Indication.
          </Typography>
          <Typography variant="body1" sx={{ mb: 1 }}>
            •	Added validation, allocation normalization, allocate residual shares functionality to LO Final Allocation window which was designed to create a resulting proposed order.
          </Typography>         
        </Box>
      </Paper>
    </Box>
  );
}
