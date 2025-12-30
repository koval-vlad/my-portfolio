import { Box } from '@/components/ui/box';
import { Typography } from '@/components/ui/typography';
import { Paper } from '@/components/ui/paper';
import { HiDatabase, HiSwitchHorizontal } from 'react-icons/hi';

export default function GiftWrapMerge() {
  return (
    <Box className="px-0 py-2">
      <Paper elevation={2} className="p-4 rounded-xl">
        <Typography variant="h4" as="h1" className="flex items-center gap-1">
          GiftWrap Merge
          <Box className="flex items-center gap-0.5">
            <HiDatabase style={{ fontSize: '1.2rem' }} />
            <HiSwitchHorizontal style={{ fontSize: '1.2rem' }} />
            <HiDatabase style={{ fontSize: '1.2rem' }} />
          </Box>
        </Typography>

        <Box className="mt-3">          
          <Typography variant="p" className="mb-1">
            • Programmed commercial application to transfer data from one GiftWrap database into another (C#, SQL Server)
          </Typography>
          <Typography variant="p" className="mb-1">
            • Applied predefined logic to analyze and modify the incoming data on the client (Typed DataSet, XML files) before bulk inserting it into the target database
          </Typography>
          <Typography variant="p" className="mb-1">
            • Displayed the process steps on the screen and logged them into the file
          </Typography>
          <Typography variant="p" className="mb-1">
            • Created the HTML report with the merge results and errors that have occurred during the data transfer
          </Typography>
        </Box>
      </Paper>
    </Box>
  );
}
