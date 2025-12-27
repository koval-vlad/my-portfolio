import { Box, Typography, Paper, Button } from '@mui/material';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalculator } from '@fortawesome/free-solid-svg-icons';
import TableViewIcon from '@mui/icons-material/TableView';

export default function GiftCalcs() {
  return (
    <Box sx={{ px: '8px', py: 2 }}>
      <Paper
        elevation={2}
        sx={{
          p: 4,
          borderRadius: '10px',
          backgroundColor: '#fff',
        }}
      >
        <Typography variant="h6" component="h1" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          Gift Calcs        
          <FontAwesomeIcon icon={faCalculator} style={{ fontSize: '1.2rem' }} />
        </Typography>

        <Box sx={{ mt: 3 }}>
          <Box sx={{ mt: 2 }}>
            <Button
              variant="contained"
              startIcon={<OpenInNewIcon />}
              onClick={() => window.open('https://www.pgcalc.com/service/giftcalcs-demo', '_blank')}
              sx={{
                backgroundColor: '#1976d2',
                '&:hover': { backgroundColor: '#1565c0' },
              }}
            >
              View GiftCalcs
            </Button>
          </Box>

          <Box sx={{ mt: 3 }}>
            <Typography variant="body1" sx={{ mb: 1 }}>
              • Developed commercial charitable deduction calculator that could be customized to match a client's web site look and feel (ASP, JavaScript, VBScript, HTML)
            </Typography>
            <Typography variant="body1" sx={{ mb: 1 }}>
              • Ported the ASP version to the ASP.NET object oriented application (ASP.NET, C#, VB.NET, SQL Server 2000)
            </Typography>
            <Typography variant="body1" sx={{ mb: 1 }}>
              • Totally restructured FoxPro data storage into the normalized SQL Server database
            </Typography>
            <Typography variant="body1" sx={{ mb: 1 }}>
              • Created a .NET tool to programmatically migrate data into the new database
            </Typography>
            <Typography variant="body1" sx={{ mb: 1 }}>
              • Replaced SQL statements used for the data access with stored procedures to separate the scripts from the application code and improve performance
            </Typography>
            <Typography variant="body1" sx={{ mb: 1 }}>
              • Created the library of customized ASP.NET server controls to simplify UI development and enhance user experience
            </Typography>
            <Typography variant="body1" sx={{ mb: 1 }}>
              • Completely redesigned the UI to make it more usable and attractive to the clients
            </Typography>
            <Typography variant="body1" sx={{ mb: 1 }}>
              • Improved performance by using the customized SQL data and ViewState caching, stored procedure parameter caching, preloading of static SQL tables, complete code pre-compilation
            </Typography>
            <Typography variant="body1" sx={{ mb: 1 }}>
              • Extended program features by adding templated HTML email broadcaster with asynchronous SMTP send feature
            </Typography>
            <Typography variant="body1" sx={{ mb: 1 }}>
              • Strengthened security model by creating several access layers based on the application entry point and the level of the purchased product. Encrypted most sensitive information (database connection string and critical Url parameters). Properly set application folder and file access permissions.
            </Typography>
            <Typography variant="body1" sx={{ mb: 1 }}>
              • Implemented a Windows service configurable from the OS system tray for temporary file cleanup and handling bulk email files (VB.NET, C#)
            </Typography>
            <Typography variant="body1" sx={{ mb: 1 }}>
              • Made sure the application is compatible with the variety of browsers
            </Typography>
            <Typography variant="body1" sx={{ mb: 1 }}>
              • Created database diagrams, documented solution projects as well as stored procedures and tables (SQL Enterprise Manager, WestWind Help Builder)
            </Typography>
            <Typography variant="body1" sx={{ mb: 1 }}>
              • Developed InstallShield project and custom windows application for the rapid deployment onto the production server
            </Typography>
            <Typography variant="body1" sx={{ mb: 1 }}>
              • Secured and versioned the code in Visual Source Safe
            </Typography>
            <Typography variant="body1" sx={{ mb: 1 }}>
              • Gradually migrated the application to NET Framework 2.0 from version 1.0 and 1.1
            </Typography>
            <Typography variant="body1" sx={{ mb: 1 }}>
              • Worked on the integration of a gift presentation slideshow (GiftStory) into the GiftCalcs code base (ASP.NET, Flash)
            </Typography>
            <Typography variant="body1" sx={{ mb: 1 }}>
              • Developed a tool to update the GiftCalcs database schema and data on the live server to suit the new product needs (C# desktop application)
            </Typography>
          </Box>
        </Box>
      </Paper>

      <Paper
        elevation={2}
        sx={{
          p: 4,
          borderRadius: '10px',
          backgroundColor: '#fff',
          mt: 2,
        }}
      >
        <Typography variant="h6" component="h1" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          Batch Calculator
          <TableViewIcon style={{ fontSize: '1.6rem' }} />
        </Typography>

        <Box sx={{ mt: 3 }}>
          <Typography variant="body1" sx={{ mb: 1 }}>
            • Designed and implemented charitable deductions calculator capable of accepting a set of records from various data sources based on the common interface (C# desktop application)
          </Typography>
          <Typography variant="body1" sx={{ mb: 1 }}>
            • Created a record-by-record error handling log in case of invalid data
          </Typography>
          <Typography variant="body1" sx={{ mb: 1 }}>
            • Displayed the step-by-step process on the screen
          </Typography>
        </Box>
      </Paper>
    </Box>
  );
}
