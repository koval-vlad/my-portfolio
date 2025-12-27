import { Box, Paper, Button, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import SlideshowIcon from '@mui/icons-material/Slideshow';
import { HiOutlinePresentationChartLine } from 'react-icons/hi';
import SVGSpriteViewerModal from '../components/SVGSpriteViewerModal';
import hrDashboardPdf from '/docs/HR-Dashboard.pdf';

export default function ModernHRDashboard() {
  const [presentationOpen, setPresentationOpen] = useState(false);
  const slideshowImageCount = 16;

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
          Modern HR Dashboard          
          <HiOutlinePresentationChartLine style={{ fontSize: '1.5rem' }} />
        </Typography>
        <Typography variant="body1" sx={{ mb: 3 }}>
          An interactive Tableau dashboard providing comprehensive analytics for human resources management,
          including employee demographics, performance metrics, and organizational insights.
        </Typography>
        <Box sx={{ mb: 2 }}>
          <Button
            variant="outlined"
            size="small"
            startIcon={<SlideshowIcon />}
            onClick={() => setPresentationOpen(true)}
            sx={{ mt: 0 }}
          >
            View Presentation
          </Button>
        </Box>
        <tableau-viz
          id="tableauViz"
          src="https://public.tableau.com/views/ModernHRDashboard_17655530147630/HRDashboard?:language=en-US&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link"
          width="100%"
          height="800px"
          toolbar="bottom"
          hide-tabs
        ></tableau-viz>
        <SVGSpriteViewerModal
          open={presentationOpen}
          onClose={() => setPresentationOpen(false)}
          pdfUrl={hrDashboardPdf}
          title="HR Dashboard Presentation"
          slideDirectory="/images/hr-dashboard-presentation"
          slideCount={slideshowImageCount}
        />
      </Paper>
    </Box>
  );
}
