import { Box } from '@/components/ui/box';
import { Typography } from '@/components/ui/typography';
import { Paper } from '@/components/ui/paper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGift } from '@fortawesome/free-solid-svg-icons';

export default function GiftWrap() {
  return (
    <Box className="px-0 py-2">
      <Paper elevation={2} className="p-4 rounded-xl">
        <Typography variant="h4" as="h1" className="flex items-center gap-1">
          GiftWrap
          <FontAwesomeIcon icon={faGift} style={{ fontSize: '1.2rem' }} />
        </Typography>

        <Box className="mt-3">
          <Typography variant="p" className="mb-1">
            • Worked in the team of several programmers to migrate a gift planning administration product from the procedural into the object oriented client-server program (FoxPro, VB6, SQL Server, Crystal Reports)
          </Typography>
          <Typography variant="p" className="mb-1">
            • Ported the UI data entry and reporting forms from FoxPro into VB6
          </Typography>
          <Typography variant="p" className="mb-1">
            • Provided the reporting functionality by integrating Crystal Reports into the user interface project
          </Typography>
          <Typography variant="p" className="mb-1">
            • Developed a component to merge the database records with the templated PDF tax forms (VB, FDF Toolkit, Adobe Acrobat)
          </Typography>          
          <Typography variant="p" className="mb-1">
            • Implemented utility libraries for the management of system registry, ODBC data sources, INI files, data encryption, UI dialog boxes etc. (VB6)
          </Typography>
          <Typography variant="p" className="mb-1">
            • Maintained complex install project (InstallShield) that included several third party modules (SQL Server components, Crystal Reports, FDF Toolkit)
          </Typography>
          <Typography variant="p" className="mb-1">
            • Programmed the desktop tool for the batch generation of GiftWrap authorization codes (VB6, FoxPro)
          </Typography>
          <Typography variant="p" className="mb-1">
            • Created the Autorun utility used as an installation menu on the GiftWrap CD
          </Typography>
          <Typography variant="p" className="mb-1">
            • Handled GiftWrap support issues, resolved application conflict situations, troubleshooted product setup and performance
          </Typography>          
        </Box>
      </Paper>
    </Box>
  );
}
