import { Box } from '@/components/ui/box';
import { Typography } from '@/components/ui/typography';
import { useNavigate } from 'react-router-dom';
import educationLogo from '../assets/education.svg';

interface EducationSubmenuProps {
  onClose: () => void;
}

export default function EducationSubmenu({ onClose }: EducationSubmenuProps) {
  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    navigate(path);
    onClose();
  };

  const secondaryEducationItems = [
    { label: 'Formal Degree', path: '/education/formal-degree' },
    { label: 'Certificates', path: '/education/certificates' },
  ];

  const professionalDevItems = [
    { label: 'Pluralsight', path: '/education/pluralsight' },
    { label: 'Oracle University', path: '/education/oracle-university' },
    { label: 'Other', path: '/education/other' },
  ];

  return (
    <Box className="flex gap-4 p-4 min-w-[400px] max-w-[calc(100vw-12rem)] bg-background rounded-xl">
      {/* Left side - Education logo only */}
      <Box className="flex items-center justify-center pr-4 border-r border-border">
        <img
          src={educationLogo}
          alt="Education Logo"
          className="w-32 h-24 object-contain"
        />
      </Box>

      {/* Right side - Two columns */}
      <Box className="flex gap-16 flex-1">
        {/* Secondary Education Column */}
        <Box className="min-w-37.5">
          <Typography variant="subtitle2" className="font-semibold text-foreground mb-4 text-sm">
            Secondary Education
          </Typography>

          <Box className="flex flex-col gap-1">
            {secondaryEducationItems.map((item) => (
              <Typography
                key={item.path}
                onClick={() => handleNavigation(item.path)}
                className="text-foreground text-sm cursor-pointer py-0.5 hover:bg-accent hover:text-accent-foreground px-1 rounded"
              >
                {item.label}
              </Typography>
            ))}
          </Box>
        </Box>

        {/* Professional Development Column */}
        <Box className="min-w-37.5">
          <Typography variant="subtitle2" className="font-semibold text-foreground mb-4 text-sm">
            Professional Development
          </Typography>

          <Box className="flex flex-col gap-1">
            {professionalDevItems.map((item) => (
              <Typography
                key={item.path}
                onClick={() => handleNavigation(item.path)}
                className="text-foreground text-sm cursor-pointer py-0.5 hover:bg-accent hover:text-accent-foreground px-1 rounded"
              >
                {item.label}
              </Typography>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
