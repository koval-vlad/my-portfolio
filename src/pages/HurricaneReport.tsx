import { Box, Typography, Paper, Button } from '@mui/material';
import { useState } from 'react';
import SlideshowIcon from '@mui/icons-material/Slideshow';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTornado } from '@fortawesome/free-solid-svg-icons';
import SVGSpriteViewerModal from '../components/SVGSpriteViewerModal';
import ExcelViewer from '../components/ExcelViewer';
import hurricanePdf from '/docs/Hurricane-Presentation.pdf';

export default function HurricaneReport() {
  const [presentationOpen, setPresentationOpen] = useState(false);

  const excelSrc = `https://view.officeapps.live.com/op/embed.aspx?src=${window.location.origin}/docs/Hurricanes-Report.xlsx?version=${new Date().getTime()}`;
  const slideshowImageCount = 28;

  // Note: SVG files are served from public/images/hurricane-presentation/
  // They are loaded dynamically by SVGSpriteViewerModal

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
          Hurricane Report
          <FontAwesomeIcon icon={faTornado} style={{ fontSize: '1.2rem' }} />
        </Typography>

        <Typography variant="body1" sx={{ mt: 2, mb: 3 }}>
          Excel report based on the NOAA Best Track Data to identify all hurricanes that have made landfall in Florida since 1900 for risk assessment and emergency planning.
        </Typography>

        <Box sx={{ mt: 3, mb: 3 }}>
          <Button
            variant="outlined"
            size="small"
            startIcon={<SlideshowIcon />}
            onClick={() => setPresentationOpen(true)}
            sx={{ mt: 0, mr: 2 }}
          >
            View Presentation
          </Button>
        </Box>

        <ExcelViewer
          src={excelSrc}
          title="Hurricane Report Excel Workbook"
          initialZoom={0.1}
          excelContainerHeight={800}
        />

        <SVGSpriteViewerModal
          open={presentationOpen}
          onClose={() => setPresentationOpen(false)}
          pdfUrl={hurricanePdf}
          title="Hurricane Presentation"
          slideDirectory="/images/hurricane-presentation"
          slideCount={slideshowImageCount}
        />
      </Paper>
    </Box>
  );
}
