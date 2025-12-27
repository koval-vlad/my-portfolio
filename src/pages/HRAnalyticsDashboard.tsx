import { Box, Paper, Typography } from '@mui/material';
import { useEffect } from 'react';
import BarChartIcon from '@mui/icons-material/AreaChartOutlined';

export default function HRAnalyticsDashboard() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://public.tableau.com/javascripts/api/tableau.embedding.3.latest.min.js';
    script.type = 'module';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <Box sx={{ px: '8px', py: 2 }}>
      <Paper
        elevation={2}
        sx={{
          p: 2,
          borderRadius: '10px',
          backgroundColor: '#fff',
        }}
      >
        <Typography variant="h6" component="h2" sx={{ mb: 2, display: 'flex', alignItems: 'center', gap: 1 }}>
          HR Analytics Dashboard          
          <BarChartIcon style={{ fontSize: '1.5rem' }} />
        </Typography>
        <Typography variant="body1" sx={{ mb: 3 }}>
          Advanced analytics dashboard for human resources data analysis, featuring interactive visualizations
          and key performance indicators for HR decision making.
        </Typography>
        <tableau-viz
          id="tableauViz"
          src="https://public.tableau.com/views/HRDashboard_17648789734670/HRDashboard?:language=en-US&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link"
          width="100%"
          height="800px"
          toolbar="bottom"
          hide-tabs
        ></tableau-viz>
      </Paper>
    </Box>
  );
}
