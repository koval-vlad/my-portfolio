import { useState, useEffect } from 'react';
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
  const [activeMenuItem, setActiveMenuItem] = useState<string | null>(null);

  // Initialize active menu item based on current path
  useEffect(() => {
    const currentItem = menuItems.find(item => {
      if (item.path === '/') return currentPath === '/';
      return currentPath.startsWith(item.path);
    });
    if (currentItem) {
      setActiveMenuItem(currentItem.label);
    }
  }, [currentPath]);

  const handleToggle = (menuName: string) => {
    setOpenMenus({ ...openMenus, [menuName]: !openMenus[menuName] });
    setActiveMenuItem(menuName);
  };

  const handleNavigate = (path: string) => {
    navigate(path);
    onClose();
    // Find the menu item that matches this path and set it as active
    const menuItem = menuItems.find(item => item.path === path);
    if (menuItem) {
      setActiveMenuItem(menuItem.label);
    }
  };

  const isActive = (itemLabel: string) => {
    // If we have a manually set active item, use that
    if (activeMenuItem) {
      return activeMenuItem === itemLabel;
    }
    // Otherwise, fall back to path-based logic
    const item = menuItems.find(menuItem => menuItem.label === itemLabel);
    if (!item) return false;
    if (item.path === '/') return currentPath === '/';
    return currentPath.startsWith(item.path);
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
                    <button className={`flex items-center justify-between w-full py-2 px-4 text-foreground text-sm hover:bg-accent hover:text-accent-foreground cursor-pointer ${isActive(item.label) ? 'bg-accent !text-accent-foreground font-semibold' : ''}`}>
                      <span className="text-left">{item.label}</span>
                      {openMenus[item.label] ? <ChevronUp className="h-4 w-4 flex-shrink-0 text-foreground" /> : <ChevronDown className="h-4 w-4 flex-shrink-0 text-foreground" />}
                    </button>
                  </CollapsibleTrigger>
                ) : (
                  <button
                    onClick={() => handleNavigate(item.path)}
                    className={`flex items-center w-full py-2 px-4 text-foreground text-sm hover:bg-accent hover:text-accent-foreground cursor-pointer ${isActive(item.label) ? 'bg-accent !text-accent-foreground font-semibold' : ''}`}
                  >
                    {item.label}
                  </button>
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
