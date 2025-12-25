import { Box, Typography, Paper, Button } from '@mui/material';
import { useState } from 'react';
import SlideshowIcon from '@mui/icons-material/Slideshow';
import GetAppIcon from '@mui/icons-material/GetApp';
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
        <Typography variant="h6" component="h1">
          Hurricane Report
        </Typography>

        <Typography variant="body1" sx={{ mt: 2, mb: 3 }}>
          A comprehensive reporting system for tracking and analyzing hurricane data,
          providing detailed analytics and visualizations for risk assessment and emergency planning.
        </Typography>
        <Box sx={{ mt: 3 }}>
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
          height: '1500px',
          border: '1px solid #e0e0e0',
          borderRadius: '8px',
          overflow: 'hidden'
        }}>
          <iframe
            src="https://view.officeapps.live.com/op/embed.aspx?src=http://localhost:3000/docs/Hurricanes-Report.xlsx"
            /*src="https://view.officeapps.live.com/op/view.aspx?src=https%3A%2F%2Fkoval%2Dvlad%2Dportfolio%2Evercel%2Eapp%3A443%2Fdocs%2FHurricanes%2DReport%2Exlsx"*/
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
