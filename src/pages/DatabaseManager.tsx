import { Box } from '@/components/ui/box';
import { Typography } from '@/components/ui/typography';
import { Paper } from '@/components/ui/paper';
import { HiDatabase, HiUser } from 'react-icons/hi';

export default function DatabaseManager() {
  return (
    <Box className="px-0 py-2">
      <Paper elevation={2} className="p-4 rounded-xl">
        <Typography variant="h4" as="h1" className="flex items-center gap-1">
          Database Manager
          <Box className="flex items-center">
            <HiUser style={{ fontSize: '1.2rem' }} />
            <HiDatabase style={{ fontSize: '1.2rem' }} />
          </Box>
        </Typography>

        <Box className="mt-3">          
          <Typography variant="p" className="mb-1">
            • Designed and implemented Database Manager tool for the MSDE clients
          </Typography>
          <Typography variant="p" className="mb-1">
            • The application not only replicated the essential functionality of SQL Server Enterprise Manager but also had some extra features: rename database, correct user/login mappings etc. (VB6, SQLDMO, OSQL)
          </Typography>
          <Typography variant="p" className="mb-1">
            • Handled MSDE installation support issues, resolved SQL Server connectivity problems in various system/network configurations
          </Typography>  
        </Box>
      </Paper>
    </Box>
  );
}
