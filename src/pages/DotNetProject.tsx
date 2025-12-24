import { Box, Typography, Paper, Button, Modal, IconButton } from '@mui/material';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import SlideshowIcon from '@mui/icons-material/Slideshow';
import SVGSpriteViewerModal from '../components/SVGSpriteViewerModal';
import hurricanePdf from '../assets/Hurricane-Presentation.pdf';
import CloseIcon from '@mui/icons-material/Close';

const projectData = [
  { id: 1, label: 'Dynamo Software' },
  { id: 2, label: 'CRD Trading System' },
  { id: 3, label: 'Portfolio Modeler' },
  { id: 4, label: 'IPO Module' },
  { id: 5, label: 'Asset Mix' },
  { id: 6, label: 'Order Manager' },
  { id: 7, label: 'GiftWrap Merge' },
  { id: 8, label: 'Gift Calcs' },
  { id: 9, label: 'Batch Calcs' },
  { id: 10, label: 'Hurricane Report' },
];

export default function DotNetProject() {
  const { id } = useParams<{ id: string }>();
  const projectId = parseInt(id || '1', 10);
  const project = projectData.find(p => p.id === projectId) || projectData[0];
  const [presentationOpen, setPresentationOpen] = useState(false);
  const [giftOpen, setGiftOpen] = useState(false);

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
        <Typography variant="h3" component="h1">
          {project.label}
        </Typography>

        {projectId === 10 && (
          <>
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
                sx={{ mt: 0 }}
              >
                View Presentation
              </Button>
            </Box>
            <SVGSpriteViewerModal
              open={presentationOpen}
              onClose={() => setPresentationOpen(false)}
              pdfUrl={hurricanePdf}
              title="Hurricane Presentation"
              slideDirectory="/images/hurricane-presentation"
              slideCount={28}
            />
          </>
        )}
        {projectId === 8 && (
          <>
            <Box sx={{ mt: 3 }}>
              <Box sx={{ mt: 2 }}>
                <Button
                  variant="contained"
                  startIcon={<SlideshowIcon />}
                  onClick={() => setGiftOpen(true)}
                  sx={{
                    backgroundColor: '#1976d2',
                    '&:hover': { backgroundColor: '#1565c0' },
                  }}
                >
                  View GiftCalcs
                </Button>
              </Box>
            </Box>

            <Modal open={giftOpen} onClose={() => setGiftOpen(false)} aria-labelledby="giftcalcs-modal">
              <Paper
                elevation={8}
                sx={{
                  width: '90%',
                  height: '90%',
                  maxWidth: '1200px',
                  maxHeight: '800px',
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  display: 'flex',
                  flexDirection: 'column',
                  borderRadius: '10px',
                  overflow: 'hidden',
                }}
              >
                <Box sx={{ display: 'flex', justifyContent: 'flex-end', p: 1, backgroundColor: '#f5f5f5', borderBottom: '1px solid #e0e0e0' }}>
                  <IconButton size="small" onClick={() => setGiftOpen(false)} title="Close">
                    <CloseIcon />
                  </IconButton>
                </Box>
                <Box sx={{ flex: 1, p: 0 }}>
                  <iframe
                    title="PGCalc Gift Calculator"
                    src="https://www.pgcalc.com/service/giftcalcs-demo"
                    style={{ width: '100%', height: '100%', border: 0 }}
                    allowFullScreen
                  />
                </Box>
              </Paper>
            </Modal>
          </>
        )}
      </Paper>
    </Box>
  );
}
