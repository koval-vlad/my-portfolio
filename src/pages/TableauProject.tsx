import { Box, Paper, Button } from '@mui/material';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import SlideshowIcon from '@mui/icons-material/Slideshow';
import PDFViewerModal from '../components/PDFViewerModal';
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
  const [pdfOpen, setPdfOpen] = useState(false);

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
          <Box sx={{ mb: 2 }}>
            <Button
              variant="outlined"
              size="small"
              startIcon={<SlideshowIcon />}
              onClick={() => setPdfOpen(true)}
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
          <PDFViewerModal
            open={pdfOpen}
            onClose={() => setPdfOpen(false)}
            pdfUrl={hrDashboardPdf}
            title="HR Dashboard Presentation"
          />
        </>
      );
    }
    if (projectId === 2) {
      return (
        <tableau-viz
          id="tableauViz"
          src="https://public.tableau.com/views/HRDashboard_17648789734670/HRDashboard?:language=en-US&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link"
          width="100%"
          height="800px"
          toolbar="bottom"
          hide-tabs
        ></tableau-viz>
      );
    }
    if (projectId === 3) {
      return (
        <tableau-viz
          id="tableauViz"
          src="https://public.tableau.com/shared/D5J3ZZ2CH?:display_count=n&:origin=viz_share_link"
          width="100%"
          height="800px"
          toolbar="bottom"
          hide-tabs
        ></tableau-viz>
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
