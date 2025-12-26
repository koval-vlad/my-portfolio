import { useState, useEffect } from 'react';
import {
  List,
  ListItem,
  ListItemButton,
  Box,
  Typography,
  Fade,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

// Tableau images
import tableauModernHrDash from '../assets/tableau-modern-hr-dash.svg';
import tableauHrDash from '../assets/tableau-hr-dash.svg';
import tableauTitanicStory from '../assets/tableau-titanic-story.svg';

// .NET images
import netDynamoSoft from '../assets/net-dynamo-soft.svg';
import netMfsCrims from '../assets/net-mfs-crims.svg';
import netMfsGpm from '../assets/net-mfs-gpm.svg';
import netMfsIpo from '../assets/net-mfs-ipo.svg';
import netMfsAssetMix from '../assets/net-mfs-asset-mix.svg';
import netMfsMom from '../assets/net-mfs-mom.svg';
import netPgcalcGiftWrapMerge from '../assets/net-pgcalc-gift-wrap-merge.svg';
import netPgcalcGiftCalcs from '../assets/net-pgcalc-gift-calcs.svg';
import vbWebSite from '../assets/vb-web-site.svg';
import netKccHurricane from '../assets/net-kcc-hurricane.svg';

// VB images
import vbPgcalcGiftWrap from '../assets/vb-pgcalc-gift-wrap.svg';
import vbPgcalcDbManager from '../assets/vb-pgcalc-db-manager.svg';

interface MobileProjectSubmenuProps {
  category: string;
  onClose: () => void;
}

interface Project {
  id: number;
  title: string;
  image: string;
  route: string;
}

const projectData: Record<string, Project[]> = {
  tableau: [
    { id: 1, title: 'Modern HR Dashboard', image: tableauModernHrDash, route: 'modern-hr-dashboard' },
    { id: 2, title: 'HR Analytics Dashboard', image: tableauHrDash, route: 'hr-analytics-dashboard' },
    { id: 3, title: 'Titanic Survivor Story', image: tableauTitanicStory, route: 'titanic-survivor-story' },
  ],
  dotnet: [
    { id: 1, title: 'Dynamo Software', image: netDynamoSoft, route: 'dynamo-software' },
    { id: 2, title: 'CRD Trading System', image: netMfsCrims, route: 'crd-trading-system' },
    { id: 3, title: 'Portfolio Modeler', image: netMfsGpm, route: 'portfolio-modeler' },
    { id: 4, title: 'IPO Module', image: netMfsIpo, route: 'ipo-module' },
    { id: 5, title: 'Asset Mix', image: netMfsAssetMix, route: 'asset-mix' },
    { id: 6, title: 'Order Manager', image: netMfsMom, route: 'order-manager' },
    { id: 7, title: 'GiftWrap Merge', image: netPgcalcGiftWrapMerge, route: 'gift-wrap-merge' },
    { id: 8, title: 'Gift Calcs', image: netPgcalcGiftCalcs, route: 'gift-calcs' },
    { id: 9, title: 'Hurricane Report', image: netKccHurricane, route: 'hurricane-report' },
  ],
  vb: [
    { id: 1, title: 'GiftWrap', image: vbPgcalcGiftWrap, route: 'gift-wrap' },
    { id: 2, title: 'Database Manager', image: vbPgcalcDbManager, route: 'database-manager' },
    { id: 3, title: 'Corporate Web Site', image: vbWebSite, route: 'corporate-website' },
  ],
};

export default function MobileProjectSubmenu({
  category,
  onClose,
}: MobileProjectSubmenuProps) {
  const navigate = useNavigate();
  const [visibleItems, setVisibleItems] = useState<number[]>([]);

  const projects = projectData[category] || [];

  useEffect(() => {
    setVisibleItems([]);
    const timers: NodeJS.Timeout[] = [];

    for (let i = 0; i < projects.length; i++) {
      const timer = setTimeout(() => {
        setVisibleItems(prev => [...prev, i]);
      }, i * 80);
      timers.push(timer);
    }

    return () => {
      timers.forEach(timer => clearTimeout(timer));
    };
  }, [category, projects.length]);

  const handleProjectClick = (project: Project) => {
    navigate(`/${category}/${project.route}`);
    onClose();
  };

  return (
    <List sx={{ pl: 2, backgroundColor: '#fafafa' }}>
      {projects.map((project, index) => (
        <Fade key={project.id} in={visibleItems.includes(index)} timeout={400}>
          <ListItem disablePadding>
            <ListItemButton
              onClick={() => handleProjectClick(project)}
              sx={{
                display: 'flex',
                gap: 2,
                py: 1.5,
              }}
            >
              <Box
                component="img"
                src={project.image}
                alt={project.title}
                sx={{
                  width: 104,
                  height: 80,
                  objectFit: 'contain',
                  backgroundColor: '#f5f5f5',
                  borderRadius: 1,
                }}
              />
              <Typography variant="body2">{project.title}</Typography>
            </ListItemButton>
          </ListItem>
        </Fade>
      ))}
    </List>
  );
}
