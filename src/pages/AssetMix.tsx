import { Box } from '@/components/ui/box';
import { Typography } from '@/components/ui/typography';
import { Paper } from '@/components/ui/paper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartPie } from '@fortawesome/free-solid-svg-icons';

export default function AssetMix() {
  return (
    <Box className="px-0 py-2">
      <Paper elevation={2} className="p-4 rounded-xl">
        <Typography variant="h4" as="h1" className="flex items-center gap-1">
          Asset Mix
          <FontAwesomeIcon icon={faChartPie} style={{ fontSize: '1.2rem' }} />
        </Typography>

        <Box className="mt-3">
          <Typography variant="p" className="mb-1">
            •	Automated and standardized existing manual process of allocating funds to Asset Mix clients.
          </Typography>
          <Typography variant="p" className="mb-1">
            •	Implemented a module to automate the re-balance of Canadian private client accounts.
          </Typography>
          <Typography variant="p" className="mb-1">
            •	Created a workflow that provided notifications and approval process for orders created as a result of the asset mix re-balance exercise (C#, Sybase).
          </Typography>
        </Box>
      </Paper>
    </Box>
  );
}
