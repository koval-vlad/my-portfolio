import { useState } from 'react';
import { Box, Button, Menu } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { useNavigate } from 'react-router-dom';
import ProjectSubmenu from './ProjectSubmenu';
import ResumeSubmenu from './ResumeSubmenu';
import EducationSubmenu from './EducationSubmenu';

interface DesktopNavProps {
  currentPath: string;
}

export default function DesktopNav({ currentPath }: DesktopNavProps) {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState<{
    [key: string]: HTMLElement | null;
  }>({});

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>, menuName: string) => {
    setAnchorEl({ ...anchorEl, [menuName]: event.currentTarget });
  };

  const handleMenuClose = (menuName: string) => {
    setAnchorEl({ ...anchorEl, [menuName]: null });
  };

  const isMenuOpen = (menuName: string) => Boolean(anchorEl[menuName]);

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
    <Box
      sx={{
        display: 'flex',
        gap: 0.5,
        backgroundColor: '#e0e0e0',
        borderRadius: 2,
        p: 0.5,
      }}
    >
      {menuItems.map((item) => (
        <Box key={item.label}>
          <Button
            onClick={(e) => {
              if (item.expandable) {
                handleMenuOpen(e, item.label);
              } else {
                navigate(item.path);
              }
            }}
            endIcon={
              item.expandable ? (
                isMenuOpen(item.label) ? (
                  <KeyboardArrowUpIcon sx={{ color: '#000' }} />
                ) : (
                  <KeyboardArrowDownIcon sx={{ color: '#000' }} />
                )
              ) : null
            }
            sx={{
              color: isActive(item.path) ? '#1976d2' : '#000',
              textTransform: 'none',
              fontSize: '0.95rem',
              fontWeight: 500,
              px: 2,
              py: 1,
              borderRadius: 1.5,
              '&:hover': {
                backgroundColor: '#bdbdbd',
              },
            }}
          >
            {item.label}
          </Button>

          {item.expandable && item.label !== 'Resume' && item.label !== 'Education' && (
            <Menu
              anchorEl={anchorEl[item.label]}
              open={isMenuOpen(item.label)}
              onClose={() => handleMenuClose(item.label)}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              PaperProps={{
                sx: {
                  mt: 1,
                  borderRadius: 2,
                  boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                },
              }}
            >
              <ProjectSubmenu
                category={item.category}
                onClose={() => handleMenuClose(item.label)}
              />
            </Menu>
          )}

          {item.label === 'Education' && (
            <Menu
              anchorEl={anchorEl[item.label]}
              open={isMenuOpen(item.label)}
              onClose={() => handleMenuClose(item.label)}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              PaperProps={{
                sx: {
                  mt: 1,
                  borderRadius: 3,
                  boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
                  overflow: 'visible',
                },
              }}
            >
              <EducationSubmenu onClose={() => handleMenuClose(item.label)} />
            </Menu>
          )}

          {item.label === 'Resume' && (
            <Menu
              anchorEl={anchorEl[item.label]}
              open={isMenuOpen(item.label)}
              onClose={() => handleMenuClose(item.label)}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              PaperProps={{
                sx: {
                  mt: 1,
                  borderRadius: 2,
                  boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                },
              }}
            >
              <ResumeSubmenu onClose={() => handleMenuClose(item.label)} />
            </Menu>
          )}
        </Box>
      ))}
    </Box>
  );
}
