import { Box } from '@/components/ui/box';
import { Paper } from '@/components/ui/paper';
import { Button } from '@/components/ui/button';
import { Typography } from '@/components/ui/typography';
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
    <Box className="px-0 py-2">
      <Paper elevation={2} className="p-2 rounded-xl">
        <Typography variant="h4" as="h2" className="mb-2 flex items-center gap-1">
          Modern HR Dashboard
          <HiOutlinePresentationChartLine style={{ fontSize: '1.5rem' }} />
        </Typography>
        <Typography variant="p" className="mb-3">
          An interactive Tableau dashboard providing comprehensive analytics for human resources management,
          including employee demographics, performance metrics, and organizational insights.
        </Typography>
        <Box className="mb-6">
          <Button
            variant="super3d"
            size="sm"
            onClick={() => setPresentationOpen(true)}
            className="mt-0"
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
