import { Box } from '@/components/ui/box';
import { Typography } from '@/components/ui/typography';
import { useNavigate } from 'react-router-dom';

interface MobileEducationSubmenuProps {
  onClose: () => void;
}

export default function MobileEducationSubmenu({ onClose }: MobileEducationSubmenuProps) {
  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    navigate(path);
    onClose();
  };

  return (
    <Box className="w-full max-w-full overflow-hidden bg-background">
      {/* Secondary Education Section */}
      <Box className="px-4 py-2">
        <Typography variant="subtitle2" className="font-semibold text-foreground text-xs">
          Secondary Education
        </Typography>
      </Box>
      <button
        onClick={() => handleNavigation('/education/formal-degree')}
        className="flex items-center w-full py-2 px-6 text-foreground text-sm hover:bg-accent hover:text-accent-foreground cursor-pointer"
      >
        Formal Degree
      </button>
      <button
        onClick={() => handleNavigation('/education/certificates')}
        className="flex items-center w-full py-2 px-6 text-foreground text-sm hover:bg-accent hover:text-accent-foreground cursor-pointer"
      >
        Certificates
      </button>

      {/* Professional Development Section */}
      <Box className="px-4 py-2 pt-4">
        <Typography variant="subtitle2" className="font-semibold text-foreground text-xs">
          Professional Development
        </Typography>
      </Box>
      <button
        onClick={() => handleNavigation('/education/pluralsight')}
        className="flex items-center w-full py-2 px-6 text-foreground text-sm hover:bg-accent hover:text-accent-foreground cursor-pointer"
      >
        Pluralsight
      </button>
      <button
        onClick={() => handleNavigation('/education/oracle-university')}
        className="flex items-center w-full py-2 px-6 text-foreground text-sm hover:bg-accent hover:text-accent-foreground cursor-pointer"
      >
        Oracle University
      </button>
      <button
        onClick={() => handleNavigation('/education/other')}
        className="flex items-center w-full py-2 px-6 text-foreground text-sm hover:bg-accent hover:text-accent-foreground cursor-pointer"
      >
        Other
      </button>
    </Box>
  );
}
