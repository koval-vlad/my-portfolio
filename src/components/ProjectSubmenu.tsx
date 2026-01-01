import { useState, useEffect } from 'react';
import { Box } from '@/components/ui/box';
import { FuturisticCard } from '@/components/ui/futuristic-card';
import { Typography } from '@/components/ui/typography';
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

interface ProjectSubmenuProps {
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

export default function ProjectSubmenu({ category, onClose }: ProjectSubmenuProps) {
  const navigate = useNavigate();
  const [visibleItems, setVisibleItems] = useState<number[]>([]);

  const projects = projectData[category] || [];
  const columnCount = category === 'dotnet' ? 5 : Math.min(projects.length, 5);

  useEffect(() => {
    setVisibleItems([]);
    const timers: NodeJS.Timeout[] = [];

    for (let i = 0; i < projects.length; i++) {
      const timer = setTimeout(() => {
        setVisibleItems(prev => [...prev, i]);
      }, i * 50);
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
    <Box className={`grid gap-3 p-4 rounded-xl bg-background ${
      columnCount === 1 ? 'grid-cols-1' :
      columnCount === 2 ? 'grid-cols-2' :
      columnCount === 3 ? 'grid-cols-3' :
      columnCount === 4 ? 'grid-cols-4' :
      'grid-cols-5'
    } w-max min-w-[300px] max-w-[calc(100vw-12rem)] overflow-hidden`}>
      {projects.map((project, index) => (
        <div key={project.id} className={`transition-opacity duration-500 ${visibleItems.includes(index) ? 'opacity-100' : 'opacity-0'}`}>
          <FuturisticCard className="cursor-pointer transition-all duration-200 w-full max-w-48 hover:-translate-y-1 hover:shadow-lg rounded-xl overflow-hidden" onClick={() => handleProjectClick(project)}>
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-32 object-contain bg-muted"
            />
            <div className="p-2">
              <Typography variant="p" className="text-center font-medium text-xs leading-tight text-foreground">
                {project.title}
              </Typography>
            </div>
          </FuturisticCard>
        </div>
      ))}
    </Box>
  );
}
