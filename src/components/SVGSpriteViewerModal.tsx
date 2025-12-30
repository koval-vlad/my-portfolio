import { useState, useEffect, useCallback, useMemo } from 'react';
import { Box } from '@/components/ui/box';
import { Typography } from '@/components/ui/typography';
import { Paper } from '@/components/ui/paper';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger, DropdownMenuSeparator } from '@/components/ui/dropdown-menu';
import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight, X, Play, Pause, Presentation, ZoomIn, ZoomOut, Printer, Download, Maximize, Minimize, Shuffle } from 'lucide-react';
import SVGSpriteSlideshow, { TransitionType, transitionVariants } from './SVGSpriteSlideshow';

interface SVGSpriteViewerModalProps {
  open: boolean;
  onClose: () => void;
  pdfUrl: string; // For download
  title?: string;
  slideDirectory?: string; // Directory containing individual slide files
  slideCount?: number; // Number of slides
}

export default function SVGSpriteViewerModal({
  open,
  onClose,
  pdfUrl,
  title = 'Presentation',
  slideDirectory,
  slideCount,
}: SVGSpriteViewerModalProps) {
  const [currentSlideIndex, setCurrentSlideIndex] = useState<number>(0);
  const [currentSlideContent, setCurrentSlideContent] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [isPresenting, setIsPresenting] = useState<boolean>(false);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [scale, setScale] = useState<number>(1.5);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
  const [transitionType, setTransitionType] = useState<TransitionType>('random');

  // Load individual slide file
  const loadSlide = useCallback(async (slideNumber: number) => {
    if (!slideDirectory) return;

    setLoading(true);
    try {
      // Files in public folder are served from root - use correct case extension
      const slideUrl = `${slideDirectory}/Slide${slideNumber}.SVG`;
      console.log('Loading slide from:', slideUrl);

      const response = await fetch(slideUrl);
      if (!response.ok) {
        throw new Error(`Failed to load slide ${slideNumber}: ${response.status} ${response.statusText}`);
      }

      const svgContent = await response.text();
      console.log('Loaded slide content length:', svgContent.length);

      // Basic validation
      if (svgContent.length < 100) {
        throw new Error(`Slide ${slideNumber} content seems too small (${svgContent.length} chars)`);
      }

      // Ensure SVG has proper dimensions for display
      let processedContent = svgContent;
      if (svgContent.includes('<svg')) {
        // If SVG doesn't have width/height, add them
        if (!svgContent.includes('width=')) {
          processedContent = processedContent.replace('<svg', '<svg width="800" height="600"');
        }
        // If SVG doesn't have viewBox, add one
        if (!svgContent.includes('viewBox=')) {
          processedContent = processedContent.replace('<svg', '<svg viewBox="0 0 800 600"');
        }
      }
      setCurrentSlideContent(processedContent);
    } catch (error) {
      console.error('Error loading slide:', error);
      setCurrentSlideContent(`<div style="color: hsl(var(--destructive)); padding: 20px; text-align: center; font-family: var(--font-sans);">
        <h3>Failed to Load Slide ${slideNumber}</h3>
        <p>${error instanceof Error ? error.message : 'Unknown error'}</p>
      </div>`);
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
      setIsFullscreen(false);
    }
  }, [open]);

  // Listen for fullscreen changes
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

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

  const goToFirstSlide = () => {
    setCurrentSlideIndex(0);
  };

  const goToLastSlide = () => {
    if (slideCount) {
      setCurrentSlideIndex(slideCount - 1);
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

  const toggleFullscreen = async () => {
    try {
      if (!document.fullscreenElement) {
        await document.documentElement.requestFullscreen();
      } else {
        await document.exitFullscreen();
      }
    } catch (error) {
      console.error('Error toggling fullscreen:', error);
    }
  };

  // No need for content transformation - we'll use CSS transform instead

  const displayPageNumber = currentSlideIndex + 1;
  const totalSlides = slideCount || 0;

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className={`${
        isFullscreen
          ? 'w-screen h-screen max-w-none rounded-none bg-black [&>button]:hidden'
          : 'w-[95vw] h-[95vh] max-w-[1400px] max-h-[900px] [&>button]:hidden'
      } flex flex-col overflow-hidden transition-all duration-300 p-0 gap-0 bg-card`}>
        {/* Hidden DialogTitle for accessibility */}
        <DialogTitle className="sr-only">
          {title || 'Presentation Viewer'}
        </DialogTitle>

        {/* Header */}
        <div className="flex justify-between items-center p-1 bg-card border-b border-border min-h-8 mb-0">
          {/* Left: Navigation */}
          {!isPresenting && (
            <div className="flex items-center gap-0.5">
              <Button onClick={goToFirstSlide} disabled={currentSlideIndex <= 0} size="sm" variant="ghost" className="h-7 w-7 p-0" title="First Slide">
                <ChevronsLeft className="h-3.5 w-3.5" />
              </Button>
              <Button onClick={goToPrevSlide} disabled={currentSlideIndex <= 0} size="sm" variant="ghost" className="h-7 w-7 p-0" title="Previous Slide">
                <ChevronLeft className="h-3.5 w-3.5" />
              </Button>
              <span className="min-w-8 text-center text-xs px-1 text-foreground">
                {displayPageNumber}/{totalSlides}
              </span>
              <Button onClick={goToNextSlide} disabled={currentSlideIndex >= totalSlides - 1} size="sm" variant="ghost" className="h-7 w-7 p-0" title="Next Slide">
                <ChevronRight className="h-3.5 w-3.5" />
              </Button>
              <Button onClick={goToLastSlide} disabled={currentSlideIndex >= totalSlides - 1} size="sm" variant="ghost" className="h-7 w-7 p-0" title="Last Slide">
                <ChevronsRight className="h-3.5 w-3.5" />
              </Button>
            </div>
          )}

          {/* Center: Zoom and Presentation Controls */}
          <div className="flex items-center gap-0.5">
            {/* Zoom Controls - show in both modes */}
            <Button onClick={zoomOut} disabled={scale <= 0.5} size="sm" variant="ghost" className="h-7 w-7 p-0" title="Zoom Out">
              <ZoomOut className="h-3.5 w-3.5" />
            </Button>
            <span className="min-w-8 text-center text-xs px-0.5 text-foreground">
              {Math.round(scale * 100)}%
            </span>
            <Button onClick={zoomIn} disabled={scale >= 3.0} size="sm" variant="ghost" className="h-7 w-7 p-0" title="Zoom In">
              <ZoomIn className="h-3.5 w-3.5" />
            </Button>

            {/* Transition Type Selector */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  size="sm"
                  variant="ghost"
                  className="h-7 px-2 text-xs"
                  title={`Transition: ${transitionType === 'random' ? 'Random' : transitionType} (click to select)`}
                >
                  <Shuffle className="h-3.5 w-3.5 mr-1" />
                  {transitionType === 'random' ? 'Random' : transitionType}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-96 p-2" align="end">
                <div className="grid grid-cols-4 gap-1">
                  {/* Random - Special highlighted category */}
                  <div className="space-y-1 col-span-4 border-b border-primary/30 pb-2 mb-2">
                    <div className="text-xs font-bold text-primary px-2 py-1 bg-primary/10 rounded">✨ RANDOM</div>
                    <DropdownMenuItem
                      onClick={() => setTransitionType('random')}
                      className={`text-sm font-semibold ${transitionType === 'random' ? 'bg-primary text-primary-foreground' : 'bg-accent'}`}
                    >
                      🎲 Random Transition
                    </DropdownMenuItem>
                  </div>

                  {/* Subtle & Professional */}
                  <div className="space-y-1">
                    <div className="text-xs font-medium text-muted-foreground px-2 py-1">Subtle</div>
                    {transitionVariants.slice(0, 3).map((variant) => (
                      <DropdownMenuItem
                        key={variant.name}
                        onClick={() => setTransitionType(variant.name as TransitionType)}
                        className={`text-xs ${transitionType === variant.name ? 'bg-accent' : ''}`}
                      >
                        {variant.name}
                      </DropdownMenuItem>
                    ))}
                  </div>

                  {/* Directional Push */}
                  <div className="space-y-1">
                    <div className="text-xs font-medium text-muted-foreground px-2 py-1">Push</div>
                    {transitionVariants.slice(3, 7).map((variant) => (
                      <DropdownMenuItem
                        key={variant.name}
                        onClick={() => setTransitionType(variant.name as TransitionType)}
                        className={`text-xs ${transitionType === variant.name ? 'bg-accent' : ''}`}
                      >
                        {variant.name}
                      </DropdownMenuItem>
                    ))}
                  </div>

                  {/* Zoom & Scale */}
                  <div className="space-y-1">
                    <div className="text-xs font-medium text-muted-foreground px-2 py-1">Zoom</div>
                    {transitionVariants.slice(7, 10).map((variant) => (
                      <DropdownMenuItem
                        key={variant.name}
                        onClick={() => setTransitionType(variant.name as TransitionType)}
                        className={`text-xs ${transitionType === variant.name ? 'bg-accent' : ''}`}
                      >
                        {variant.name}
                      </DropdownMenuItem>
                    ))}
                  </div>

                  {/* 3D & Perspective */}
                  <div className="space-y-1">
                    <div className="text-xs font-medium text-muted-foreground px-2 py-1">3D</div>
                    {transitionVariants.slice(10, 14).map((variant) => (
                      <DropdownMenuItem
                        key={variant.name}
                        onClick={() => setTransitionType(variant.name as TransitionType)}
                        className={`text-xs ${transitionType === variant.name ? 'bg-accent' : ''}`}
                      >
                        {variant.name}
                      </DropdownMenuItem>
                    ))}
                  </div>

                  {/* Wipes & Masks */}
                  <div className="space-y-1">
                    <div className="text-xs font-medium text-muted-foreground px-2 py-1">Wipes</div>
                    {transitionVariants.slice(14, 17).map((variant) => (
                      <DropdownMenuItem
                        key={variant.name}
                        onClick={() => setTransitionType(variant.name as TransitionType)}
                        className={`text-xs ${transitionType === variant.name ? 'bg-accent' : ''}`}
                      >
                        {variant.name}
                      </DropdownMenuItem>
                    ))}
                  </div>

                  {/* Dynamic & Playful */}
                  <div className="space-y-1">
                    <div className="text-xs font-medium text-muted-foreground px-2 py-1">Dynamic</div>
                    {transitionVariants.slice(17, 20).map((variant) => (
                      <DropdownMenuItem
                        key={variant.name}
                        onClick={() => setTransitionType(variant.name as TransitionType)}
                        className={`text-xs ${transitionType === variant.name ? 'bg-accent' : ''}`}
                      >
                        {variant.name}
                      </DropdownMenuItem>
                    ))}
                  </div>

                  {/* Sci-Fi / Tech */}
                  <div className="space-y-1">
                    <div className="text-xs font-medium text-muted-foreground px-2 py-1">Sci-Fi</div>
                    {transitionVariants.slice(20, 23).map((variant) => (
                      <DropdownMenuItem
                        key={variant.name}
                        onClick={() => setTransitionType(variant.name as TransitionType)}
                        className={`text-xs ${transitionType === variant.name ? 'bg-accent' : ''}`}
                      >
                        {variant.name}
                      </DropdownMenuItem>
                    ))}
                  </div>

                  {/* Misc / Creative */}
                  <div className="space-y-1">
                    <div className="text-xs font-medium text-muted-foreground px-2 py-1">Creative</div>
                    {transitionVariants.slice(23).map((variant) => (
                      <DropdownMenuItem
                        key={variant.name}
                        onClick={() => setTransitionType(variant.name as TransitionType)}
                        className={`text-xs ${transitionType === variant.name ? 'bg-accent' : ''}`}
                      >
                        {variant.name}
                      </DropdownMenuItem>
                    ))}
                  </div>
                </div>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Presentation Controls */}
            {isPresenting ? (
              <>
                <Button onClick={togglePlayPause} size="sm" variant="default" className="h-7 px-2" title={isPlaying ? 'Pause' : 'Play'}>
                  {isPlaying ? <Pause className="h-3.5 w-3.5" /> : <Play className="h-3.5 w-3.5" />}
                </Button>
                <span className="text-xs px-1 hidden sm:inline text-foreground">
                  {isPlaying ? 'Playing' : 'Paused'}
                </span>
              </>
            ) : (
              <Button onClick={startPresentation} size="sm" variant="default" className="h-7 px-2" title="Start Presentation">
                <Presentation className="h-3.5 w-3.5" />
              </Button>
            )}
          </div>

          {/* Right: Actions */}
          <div className="flex items-center gap-0.5">
            {/* Actions - only show when not presenting */}
            {!isPresenting && (
              <>
                <Button onClick={handleDownload} size="sm" variant="ghost" className="h-7 w-7 p-0" title="Download PDF">
                  <Download className="h-3.5 w-3.5" />
                </Button>
                <Button onClick={handlePrint} size="sm" variant="ghost" className="h-7 w-7 p-0" title="Print All Slides">
                  <Printer className="h-3.5 w-3.5" />
                </Button>
                <Button onClick={toggleFullscreen} size="sm" variant="ghost" className="h-7 w-7 p-0" title={isFullscreen ? "Exit Fullscreen" : "Enter Fullscreen"}>
                  {isFullscreen ? <Minimize className="h-3.5 w-3.5" /> : <Maximize className="h-3.5 w-3.5" />}
                </Button>
              </>
            )}
            <Button onClick={isPresenting ? stopPresentation : onClose} size="sm" variant="ghost" className="h-7 w-7 p-0" title={isPresenting ? "Exit Presentation" : "Close"}>
              <X className="h-3.5 w-3.5" />
            </Button>
          </div>
        </div>

        {/* Slide Content */}
        <div className="flex-1 overflow-auto flex justify-center items-center bg-background p-4">
          {loading ? (
            <div className="flex items-center">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
              <span className="ml-2 text-muted-foreground">Loading slide...</span>
            </div>
          ) : currentSlideContent ? (
            currentSlideContent.includes('<div style="color: red') ? (
              <div dangerouslySetInnerHTML={{ __html: currentSlideContent }} />
            ) : (
              <div
                key={`slide-${currentSlideIndex}-${scale}`}
                className={`w-full h-full flex justify-center items-center ${
                  isFullscreen ? 'overflow-hidden p-0' : 'overflow-auto p-4'
                }`}
              >
                  <div
                    style={{
                      width: '100%',
                      height: isFullscreen ? '95vh' : '100%', // Use full available height
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: isFullscreen ? 'flex-start' : 'center',
                      backgroundColor: isFullscreen ? 'transparent' : 'hsl(var(--card))', // No background in fullscreen
                      borderRadius: isFullscreen ? '0' : '8px',
                      boxShadow: isFullscreen ? 'none' : '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                      overflow: 'hidden',
                      marginTop: isFullscreen ? '2.5vh' : '0' // Smaller margin for better use of space
                    }}
                >
                  <div
                    style={{
                      transform: `scale(${scale})`,
                      transformOrigin: 'center center',
                      transition: 'transform 0.2s ease-in-out',
                      width: '100%',
                      height: '100%',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: isFullscreen ? 'flex-start' : 'center'
                    }}
                  >
                    <SVGSpriteSlideshow
                      currentSlide={currentSlideIndex}
                      svgContent={currentSlideContent}
                      transitionType={transitionType}
                      className="w-full h-full"
                    />
                  </div>
                </div>
              </div>
            )
          ) : (
            <span className="text-muted-foreground">No slides to display</span>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
