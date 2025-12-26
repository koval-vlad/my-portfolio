import { Box, Typography, Paper, Button } from '@mui/material';
import { useState } from 'react';
import SlideshowIcon from '@mui/icons-material/Slideshow';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTornado } from '@fortawesome/free-solid-svg-icons';
import SVGSpriteViewerModal from '../components/SVGSpriteViewerModal';
import hurricanePdf from '/docs/Hurricane-Presentation.pdf';

export default function HurricaneReport() {
  const [presentationOpen, setPresentationOpen] = useState(false);


  // Helper function to parse Excel file to FortuneSheet format

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
        <Box sx={{ mt: 3, mb: 2 }}>
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

        <Box sx={{
          width: '100%',
          height: '1200px',
          border: '1px solid #e0e0e0',
          borderRadius: '8px',
          overflow: 'hidden'
        }}>
          <iframe
            src={`https://view.officeapps.live.com/op/embed.aspx?src=${window.location.origin}/docs/Hurricanes-Report.xlsx?version=${new Date().getTime()}`}
            /*src="https://view.officeapps.live.com/op/view.aspx?src=https%3A%2F%2Fkoval%2Dvlad%2Dportfolio%2Evercel%2Eapp%3A443%2Fdocs%2FHurricanes%2DReport%2Exlsx%3Fversion%3D1766702206525"*/
            width="100%"
            height="100%"
            frameBorder="0"
            title="Hurricane Report Excel Workbook"
          />
        </Box>

        <SVGSpriteViewerModal
          open={presentationOpen}
          onClose={() => setPresentationOpen(false)}
          pdfUrl={hurricanePdf}
          title="Hurricane Presentation"
          slideDirectory="/images/hurricane-presentation"
          slideCount={28}
        />
      </Paper>
    </Box>
  );
}
