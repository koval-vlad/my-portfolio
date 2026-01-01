import { useState } from 'react';
import { List, ListItem, ListItemButton, ListItemText } from '@/components/ui/list';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { Box } from '@/components/ui/box';
import { Divider } from '@/components/ui/divider';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import MobileProjectSubmenu from './MobileProjectSubmenu';
import MobileResumeSubmenu from './MobileResumeSubmenu';
import MobileEducationSubmenu from './MobileEducationSubmenu';

interface MobileNavProps {
  currentPath: string;
  onClose: () => void;
}

export default function MobileNav({ currentPath, onClose }: MobileNavProps) {
  const navigate = useNavigate();
  const [openMenus, setOpenMenus] = useState<{ [key: string]: boolean }>({});

  const handleToggle = (menuName: string) => {
    setOpenMenus({ ...openMenus, [menuName]: !openMenus[menuName] });
  };

  const handleNavigate = (path: string) => {
    navigate(path);
    onClose();
  };

  const isActive = (path: string) => {
    if (path === '/') return currentPath === '/';
    return currentPath.startsWith(path);
  };

  const menuItems = [
    { label: 'Home', path: '/', expandable: false, category: '' },
    { label: 'Tableau', path: '/tableau', expandable: true, category: 'tableau' },
    { label: '.NET', path: '/dotnet', expandable: true, category: 'dotnet' },
    { label: 'VB', path: '/vb', expandable: true, category: 'vb' },
    { label: 'Education', path: '/education', expandable: true, category: 'education' },
    { label: 'Resume', path: '/resume', expandable: true, category: '' },
  ];

  return (
    <Box className="w-full max-w-72 pt-2 overflow-hidden">
      <List className="w-full overflow-hidden">
        {menuItems.map((item) => (
          <Box key={item.label}>
            <Collapsible open={openMenus[item.label]} onOpenChange={() => handleToggle(item.label)}>
              <ListItem>
                {item.expandable ? (
                  <CollapsibleTrigger asChild>
                    <ListItemButton className={`justify-start text-foreground ${isActive(item.path) ? 'bg-accent text-accent-foreground font-semibold' : ''}`}>
                      <ListItemText className="text-left text-foreground">{item.label}</ListItemText>
                      {openMenus[item.label] ? <ChevronUp className="h-4 w-4 ml-auto text-foreground" /> : <ChevronDown className="h-4 w-4 ml-auto text-foreground" />}
                    </ListItemButton>
                  </CollapsibleTrigger>
                ) : (
                  <ListItemButton
                    onClick={() => handleNavigate(item.path)}
                    className={`justify-start text-foreground ${isActive(item.path) ? 'bg-accent text-accent-foreground font-semibold' : ''}`}
                  >
                    <ListItemText className="text-left text-foreground">{item.label}</ListItemText>
                  </ListItemButton>
                )}
              </ListItem>

              <CollapsibleContent className="w-full overflow-hidden" style={{ transition: 'all 0.2s ease-out' }}>
                <Box className="w-full overflow-hidden">
                  {item.expandable && item.label !== 'Resume' && item.label !== 'Education' && item.category && (
                    <MobileProjectSubmenu
                      category={item.category}
                      onClose={onClose}
                    />
                  )}

                  {item.label === 'Education' && (
                    <MobileEducationSubmenu onClose={onClose} />
                  )}

                  {item.label === 'Resume' && (
                    <MobileResumeSubmenu onClose={onClose} />
                  )}
                </Box>
              </CollapsibleContent>
            </Collapsible>

            <Divider />
          </Box>
        ))}
      </List>
    </Box>
  );
}
