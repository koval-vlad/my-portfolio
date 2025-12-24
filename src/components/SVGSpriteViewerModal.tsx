import { useState, useEffect, useCallback } from 'react';
import { Modal, Paper, Typography, Button, Box, IconButton, CircularProgress } from '@mui/material';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import CloseIcon from '@mui/icons-material/Close';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import SlideshowIcon from '@mui/icons-material/Slideshow';
import ZoomInIcon from '@mui/icons-material/ZoomIn';
import ZoomOutIcon from '@mui/icons-material/ZoomOut';
import PrintIcon from '@mui/icons-material/Print';
import DownloadIcon from '@mui/icons-material/Download';

interface SVGSpriteViewerModalProps {
  open: boolean;
  onClose: () => void;
  svgUrl?: string; // For backwards compatibility with sprite files
  pdfUrl: string; // For download
  title?: string;
  slidePrefix?: string; // e.g., "icon-Slide"
  slideDirectory?: string; // Directory containing individual slide files
  slideCount?: number; // Number of slides
}

export default function SVGSpriteViewerModal({
  open,
  onClose,
  svgUrl,
  pdfUrl,
  title = 'Presentation',
  slidePrefix = 'icon-Slide',
  slideDirectory,
  slideCount,
}: SVGSpriteViewerModalProps) {
  const [currentSlideIndex, setCurrentSlideIndex] = useState<number>(0);
  const [currentSlideContent, setCurrentSlideContent] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [isPresenting, setIsPresenting] = useState<boolean>(false);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [scale, setScale] = useState<number>(1.0);

  // Load individual slide file
  const loadSlide = useCallback(async (slideNumber: number) => {
    if (!slideDirectory) return;

    setLoading(true);
    try {
      const slideUrl = `${slideDirectory}/Slide${slideNumber}.SVG`;
      console.log('Loading slide:', slideUrl);

      const response = await fetch(slideUrl);
      if (!response.ok) {
        throw new Error(`Failed to load slide ${slideNumber}: ${response.status}`);
      }

      const svgContent = await response.text();
      setCurrentSlideContent(svgContent);
      console.log('Loaded slide', slideNumber, 'content length:', svgContent.length);
    } catch (error) {
      console.error('Error loading slide', slideNumber, ':', error);
      setCurrentSlideContent(`<div style="color: red; padding: 20px; text-align: center;">Error loading slide ${slideNumber}</div>`);
    } finally {
      setLoading(false);
    }
  }, [slideDirectory]);

  // Load slide when modal opens or slide index changes
  useEffect(() => {
    if (open && slideDirectory && slideCount && slideCount > 0) {
      const slideNumber = currentSlideIndex + 1; // slides are 1-indexed in filenames
      loadSlide(slideNumber);
    }
  }, [open, currentSlideIndex, slideDirectory, slideCount, loadSlide]);

  // Reset state when modal closes
  useEffect(() => {
    if (!open) {
      setCurrentSlideIndex(0);
      setCurrentSlideContent('');
      setLoading(false);
      setIsPresenting(false);
      setIsPlaying(false);
      setScale(1.0);
    }
  }, [open]);

  // Auto-advance slides during presentation
  useEffect(() => {
    if (isPlaying && isPresenting && slideCount) {
      const interval = setInterval(() => {
        setCurrentSlideIndex((prev) => {
          if (prev >= slideCount - 1) {
            // Stop at the last slide
            setIsPlaying(false);
            return prev;
          }
          return prev + 1;
        });
      }, 10000); // 10 seconds

      return () => clearInterval(interval);
    }
  }, [isPlaying, isPresenting, slideCount]);

  const goToPrevSlide = () => {
    if (currentSlideIndex > 0) {
      setCurrentSlideIndex(currentSlideIndex - 1);
    }
  };

  const goToNextSlide = () => {
    if (slideCount && currentSlideIndex < slideCount - 1) {
      setCurrentSlideIndex(currentSlideIndex + 1);
    }
  };

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = title || 'presentation.pdf';
    link.click();
  };

  const handlePrint = () => {
    // Open PDF in new window for printing
    const printWindow = window.open(pdfUrl, '_blank');
    if (printWindow) {
      // Wait for PDF to load, then trigger print
      printWindow.onload = () => {
        setTimeout(() => {
          printWindow.print();
        }, 1000); // Give PDF time to load
      };
    } else {
      // Fallback: open PDF directly if popup blocked
      window.open(pdfUrl, '_blank');
      alert('Please use your browser\'s print function to print the PDF.');
    }
  };

  const startPresentation = () => {
    setIsPresenting(true);
    setIsPlaying(true);
    // Go to first slide when starting presentation
    setCurrentSlideIndex(0);
  };

  const stopPresentation = () => {
    setIsPresenting(false);
    setIsPlaying(false);
  };

  const togglePlayPause = () => {
    setIsPlaying((prev) => !prev);
  };

  const zoomIn = () => {
    setScale((prev) => Math.min(prev + 0.25, 3.0)); // Max zoom 300%
  };

  const zoomOut = () => {
    setScale((prev) => Math.max(prev - 0.25, 0.5)); // Min zoom 50%
  };

  const displayPageNumber = currentSlideIndex + 1;
  const totalSlides = slideCount || 0;

  return (
    <Modal
      open={open}
      onClose={onClose}
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Paper
        sx={{
          width: '95%',
          height: '95%',
          maxWidth: '1400px',
          maxHeight: '900px',
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          borderRadius: '8px',
          overflow: 'hidden',
        }}
      >
        {/* Header */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            p: 0.5,
            backgroundColor: '#f5f5f5',
            borderBottom: '1px solid #e0e0e0',
            minHeight: '40px',
          }}
        >
          {/* Left: Navigation */}
          {!isPresenting && (
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <IconButton onClick={goToPrevSlide} disabled={currentSlideIndex <= 0} size="small" title="Previous Slide">
                <NavigateBeforeIcon />
              </IconButton>
              <Typography variant="body2" sx={{ minWidth: '40px', textAlign: 'center' }}>
                {displayPageNumber} / {totalSlides}
              </Typography>
              <IconButton onClick={goToNextSlide} disabled={currentSlideIndex >= totalSlides - 1} size="small" title="Next Slide">
                <NavigateNextIcon />
              </IconButton>
            </Box>
          )}

          {/* Center: Zoom and Presentation Controls */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            {/* Zoom Controls - show in both modes */}
            <IconButton onClick={zoomOut} disabled={scale <= 0.5} size="small" title="Zoom Out">
              <ZoomOutIcon />
            </IconButton>
            <Typography variant="body2" sx={{ minWidth: '35px', textAlign: 'center', fontSize: '0.75rem' }}>
              {Math.round(scale * 100)}%
            </Typography>
            <IconButton onClick={zoomIn} disabled={scale >= 3.0} size="small" title="Zoom In">
              <ZoomInIcon />
            </IconButton>

            {/* Presentation Controls */}
            {isPresenting ? (
              <>
                <IconButton onClick={togglePlayPause} size="small" color="primary" title={isPlaying ? 'Pause' : 'Play'}>
                  {isPlaying ? <PauseIcon /> : <PlayArrowIcon />}
                </IconButton>
                <Typography variant="body2" sx={{ minWidth: '50px', fontSize: '0.7rem' }}>
                  {isPlaying ? 'Playing' : 'Paused'}
                </Typography>
              </>
            ) : (
              <IconButton onClick={startPresentation} size="small" color="primary" title="Start Presentation">
                <SlideshowIcon />
              </IconButton>
            )}
          </Box>

          {/* Right: Actions */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            {/* Actions - only show when not presenting */}
            {!isPresenting && (
              <>
                <IconButton onClick={handleDownload} size="small" title="Download PDF">
                  <DownloadIcon />
                </IconButton>
                <IconButton onClick={handlePrint} size="small" title="Print All Slides">
                  <PrintIcon />
                </IconButton>
              </>
            )}
            <IconButton onClick={isPresenting ? stopPresentation : onClose} size="small" title={isPresenting ? "Exit Presentation" : "Close"}>
              <CloseIcon />
            </IconButton>
          </Box>
        </Box>

        {/* Slide Content */}
        <Box
          sx={{
            flex: 1,
            overflow: 'auto', // Always allow scrolling for zoomed content
            display: 'flex',
            justifyContent: 'center',
            alignItems: scale > 1 ? 'flex-start' : 'center', // Align to top when zoomed for better scrolling
            backgroundColor: '#f9f9f9',
            p: scale > 1 ? 0.5 : 2, // Reduce padding when zoomed
            minHeight: 0, // Allow flex shrinking
          }}
        >
          {loading ? (
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <CircularProgress />
              <Typography sx={{ ml: 2 }}>Loading slide...</Typography>
            </Box>
          ) : currentSlideContent ? (
            <Box
              key={`slide-${currentSlideIndex}-${scale}`} // Force re-render on slide or scale change
              sx={{
                width: '100%',
                height: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                '& svg': {
                  width: `${100 * scale}%`,
                  height: `${100 * scale}%`,
                  maxWidth: scale > 1 ? `${100 * scale}%` : '100%',
                  maxHeight: scale > 1 ? `${100 * scale}%` : '100%',
                  backgroundColor: 'white',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                  borderRadius: '4px',
                  transition: 'all 0.2s ease-in-out',
                  flexShrink: 0, // Prevent SVG from shrinking
                }
              }}
              dangerouslySetInnerHTML={{ __html: currentSlideContent }}
            />
          ) : (
            <Typography>No slides to display</Typography>
          )}
        </Box>
      </Paper>
    </Modal>
  );
}
