import { List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import DownloadIcon from '@mui/icons-material/Download';
import { useNavigate } from 'react-router-dom';
import resumePdf from '../assets/vkoval@gmail.com.Resume.pdf';

interface MobileResumeSubmenuProps {
  onClose: () => void;
}

export default function MobileResumeSubmenu({ onClose }: MobileResumeSubmenuProps) {
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
    <List sx={{ pl: 2, backgroundColor: '#fafafa' }}>
      <ListItem disablePadding>
        <ListItemButton onClick={handleView}>
          <ListItemIcon sx={{ minWidth: 40 }}>
            <VisibilityIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="View" />
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
        <ListItemButton onClick={handleDownload}>
          <ListItemIcon sx={{ minWidth: 40 }}>
            <DownloadIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Download PDF" />
        </ListItemButton>
      </ListItem>
    </List>
  );
}
