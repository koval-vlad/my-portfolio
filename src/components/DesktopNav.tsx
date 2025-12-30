import { useState } from 'react';
import { Box } from '@/components/ui/box';
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import ProjectSubmenu from './ProjectSubmenu';
import ResumeSubmenu from './ResumeSubmenu';
import EducationSubmenu from './EducationSubmenu';

interface DesktopNavProps {
  currentPath: string;
}

export default function DesktopNav({ currentPath }: DesktopNavProps) {
  const navigate = useNavigate();
  const [openMenus, setOpenMenus] = useState<Record<string, boolean>>({});

  const handleMenuToggle = (menuKey: string, open: boolean) => {
    setOpenMenus(prev => ({ ...prev, [menuKey]: open }));
  };

  const handleCloseMenu = (menuKey: string) => {
    setOpenMenus(prev => ({ ...prev, [menuKey]: false }));
  };

  const menuItems = [
    { label: 'Home', path: '/', expandable: false, category: '' },
    { label: 'Tableau', path: '/tableau', expandable: true, category: 'tableau' },
    { label: '.NET', path: '/dotnet', expandable: true, category: 'dotnet' },
    { label: 'VB/ASP', path: '/vb', expandable: true, category: 'vb' },
    { label: 'Education', path: '/education', expandable: true, category: 'education' },
    { label: 'Resume', path: '/resume', expandable: true, category: '' },
  ];

  const isActive = (path: string) => {
    if (path === '/') return currentPath === '/';
    return currentPath.startsWith(path);
  };

  return (
    <Box className="flex gap-0.5 bg-muted rounded-xl p-0.5">
      {menuItems.map((item) => (
        <Box key={item.label}>
          {item.expandable ? (
            <DropdownMenu open={openMenus[item.label] || false} onOpenChange={(open) => handleMenuToggle(item.label, open)}>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="text-sm font-medium px-2 py-1 transition-colors text-foreground hover:bg-accent hover:rounded-lg"
                >
                  {item.label}
                  {openMenus[item.label] ? (
                    <ChevronUp className="ml-1 h-4 w-4" />
                  ) : (
                    <ChevronDown className="ml-1 h-4 w-4" />
                  )}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                side="bottom"
                align="start"
                avoidCollisions={true}
                collisionPadding={16}
                sideOffset={8}
                className="bg-white border rounded-xl shadow-lg p-0 animate-in slide-in-from-top-2 fade-in duration-200 z-50"
                style={{
                  maxWidth: 'calc(100vw - 12rem)',
                  overflow: 'hidden'
                }}
              >
                {item.label === 'Education' && (
                  <EducationSubmenu onClose={() => handleCloseMenu(item.label)} />
                )}
                {item.label === 'Resume' && (
                  <ResumeSubmenu onClose={() => handleCloseMenu(item.label)} />
                )}
                {item.label !== 'Resume' && item.label !== 'Education' && (
                  <ProjectSubmenu
                    category={item.category}
                    onClose={() => handleCloseMenu(item.label)}
                  />
                )}
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Button
              variant="ghost"
              onClick={() => navigate(item.path)}
              className="text-sm font-medium px-2 py-1 transition-colors text-foreground hover:bg-accent hover:rounded-lg"
            >
              {item.label}
            </Button>
          )}
        </Box>
      ))}
    </Box>
  );
}
