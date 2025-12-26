import { Box, Typography, Paper } from '@mui/material';

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
        <Typography variant="h6" component="h1">
          Asset Mix
        </Typography>
      </Paper>
    </Box>
  );
}
