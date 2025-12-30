import { Box } from '@/components/ui/box';
import { Typography } from '@/components/ui/typography';
import { Paper } from '@/components/ui/paper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRocket } from '@fortawesome/free-solid-svg-icons';

export default function IPOModule() {
  return (
    <Box className="px-0 py-2">
      <Paper elevation={2} className="p-4 rounded-xl">
        <Typography variant="h4" as="h1" className="flex items-center gap-1">
          IPO Module
          <FontAwesomeIcon icon={faRocket} style={{ fontSize: '1.2rem' }} />
        </Typography>

        <Box className="mt-3">          
          <Typography variant="p" className="mb-1">
            •	Worked with the team of developers to migrate IPO Deals functionality into a new module in order to standardize the Limited Offering order creation process. 
          </Typography>
          <Typography variant="p" className="mb-1">
            •	Created a new Blotter for managing Limited Offerings and Indications.
          </Typography>
          <Typography variant="p" className="mb-1">
            •	Adapted existing Order window for the creation of the limited offering Indication.
          </Typography>
          <Typography variant="p" className="mb-1">
            •	Added validation, allocation normalization, allocate residual shares functionality to LO Final Allocation window which was designed to create a resulting proposed order.
          </Typography>         
        </Box>
      </Paper>
    </Box>
  );
}
