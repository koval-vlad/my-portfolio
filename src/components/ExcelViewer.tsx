import { useState } from 'react';
import { Box, IconButton, Typography } from '@mui/material';
import ZoomInIcon from '@mui/icons-material/ZoomIn';
import ZoomOutIcon from '@mui/icons-material/ZoomOut';

interface ExcelViewerProps {
  src: string;
  title?: string;
  initialZoom?: number;
  minZoom?: number;
  maxZoom?: number;
  zoomStep?: number;
  excelContainerHeight?: number;
}

export default function ExcelViewer({
  src,
  title = "Excel Workbook",
  initialZoom = 1.0,
  minZoom = 0.1,
  maxZoom = 2.0,
  zoomStep = 0.1,
  excelContainerHeight = 1000,
}: ExcelViewerProps) {
  const [zoom, setZoom] = useState<number>(initialZoom);

  const handleZoomIn = () => {
    setZoom((prevZoom) => Math.min(prevZoom + zoomStep, maxZoom));
  };

  const handleZoomOut = () => {
    setZoom((prevZoom) => Math.max(prevZoom - zoomStep, minZoom));
  };

  return (
    <Box>
      {/* Zoom Controls */}
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1, mb: 1 }}>
        <IconButton onClick={handleZoomOut} disabled={zoom <= minZoom} size="small" title="Zoom Out">
          <ZoomOutIcon />
        </IconButton>
        <Typography variant="body2" sx={{ minWidth: '60px', textAlign: 'center', fontSize: '0.75rem' }}>
          {Math.round(zoom * 100)}%
        </Typography>
        <IconButton onClick={handleZoomIn} disabled={zoom >= maxZoom} size="small" title="Zoom In">
          <ZoomInIcon />
        </IconButton>
      </Box>

      {/* Excel Viewer Container */}
      <Box sx={{
        width: '100%',
        height: `${excelContainerHeight}px`,
        border: '1px solid #e0e0e0',
        borderRadius: '8px',
        overflow: 'hidden',
        position: 'relative'
      }}>
        <Box sx={{
          width: '100%',
          height: '100%',
          zoom: zoom,
          transformOrigin: 'top left'
        }}>
          <iframe
            src={src}
            style={{
              width: '100%',
              height: '100%',
              border: 'none'
            }}
            title={title}
          />
        </Box>
      </Box>
    </Box>
  );
}
