import { Box } from '@/components/ui/box';
import { Eye, Download } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import resumePdf from '/docs/vkoval@gmail.com.Resume.pdf';

interface ResumeSubmenuProps {
  onClose: () => void;
}

export default function ResumeSubmenu({ onClose }: ResumeSubmenuProps) {
  const navigate = useNavigate();

  const handleView = () => {
    navigate('/resume');
    onClose();
  };

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = resumePdf;
    link.download = 'vkoval@gmail.com.Resume.pdf';
    document.body.appendChild(link);
    link.click();
    link.remove();
    onClose();
  };

  return (
    <Box className="w-full bg-background">
      <button
        onClick={handleView}
        className="flex items-center w-full py-2 px-4 text-foreground text-sm hover:bg-accent hover:text-accent-foreground hover:cursor-pointer transition-colors"
      >
        <Eye className="h-4 w-4 mr-3 text-foreground" />
        View
      </button>
      <button
        onClick={handleDownload}
        className="flex items-center w-full py-2 px-4 text-foreground text-sm hover:bg-accent hover:text-accent-foreground hover:cursor-pointer transition-colors"
      >
        <Download className="h-4 w-4 mr-3 text-foreground" />
        Download PDF
      </button>
    </Box>
  );
}
