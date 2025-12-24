import { Box, Paper, Button, Typography } from '@mui/material';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import SlideshowIcon from '@mui/icons-material/Slideshow';
import SVGSpriteViewerModal from '../components/SVGSpriteViewerModal';
import hrDashboardPdf from '../assets/HR-Dashboard.pdf';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'tableau-viz': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        id?: string;
        src?: string;
        width?: string;
        height?: string;
        toolbar?: string;
        'hide-tabs'?: boolean;
      };
    }
  }
}

export default function TableauProject() {
  const { id } = useParams<{ id: string }>();
  const projectId = parseInt(id || '1', 10);
  const [presentationOpen, setPresentationOpen] = useState(false);

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

  const renderContent = () => {
    if (projectId === 1) {
      return (
        <>
          <Typography variant="h4" component="h2" sx={{ mb: 2 }}>
            Modern HR Dashboard
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
            slideCount={16}
          />
        </>
      );
    }
    if (projectId === 2) {
      return (
        <>
          <Typography variant="h4" component="h2" sx={{ mb: 2 }}>
            HR Analytics Dashboard
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
        </>
      );
    }
    if (projectId === 3) {
      return (
        <>
          <Typography variant="h4" component="h2" sx={{ mb: 2 }}>
            Titanic Survivor Story
          </Typography>
          <Typography variant="body1" sx={{ mb: 3 }}>
            An interactive data story exploring the Titanic disaster through passenger data,
            survival rates, and demographic analysis.
          </Typography>
          <tableau-viz
            id="tableauViz"
            src="https://public.tableau.com/shared/D5J3ZZ2CH?:display_count=n&:origin=viz_share_link"
            width="100%"
            height="800px"
            toolbar="bottom"
            hide-tabs
          ></tableau-viz>
        </>
      );
    }
    return null;
  };

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
        {renderContent()}
      </Paper>
    </Box>
  );
}
