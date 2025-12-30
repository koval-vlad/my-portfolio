import { Box } from '@/components/ui/box';
import { Paper } from '@/components/ui/paper';
import { Typography } from '@/components/ui/typography';
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
    <Box className="px-0 py-2">
      <Paper elevation={2} className="p-2 rounded-xl">
        <Typography variant="h4" as="h2" className="mb-2 flex items-center gap-1">
          HR Analytics Dashboard
          <BarChartIcon style={{ fontSize: '1.5rem' }} />
        </Typography>
        <Typography variant="p" className="mb-3">
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
