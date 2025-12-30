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
        className="flex items-center w-full py-2 px-6 text-primary text-sm hover:bg-accent"
      >
        Formal Degree
      </button>
      <button
        onClick={() => handleNavigation('/education/certificates')}
        className="flex items-center w-full py-2 px-6 text-primary text-sm hover:bg-accent"
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
        className="flex items-center w-full py-2 px-6 text-primary text-sm hover:bg-accent"
      >
        Pluralsight
      </button>
      <button
        onClick={() => handleNavigation('/education/oracle-university')}
        className="flex items-center w-full py-2 px-6 text-primary text-sm hover:bg-accent"
      >
        Oracle University
      </button>
      <button
        onClick={() => handleNavigation('/education/other')}
        className="flex items-center w-full py-2 px-6 text-primary text-sm hover:bg-accent"
      >
        Other
      </button>
    </Box>
  );
}
