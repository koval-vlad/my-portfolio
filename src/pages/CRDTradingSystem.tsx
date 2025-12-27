import { Box, Typography, Paper } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoneyBillTrendUp } from '@fortawesome/free-solid-svg-icons';
import { faLandmark } from '@fortawesome/free-solid-svg-icons';
import { faPeopleRoof } from '@fortawesome/free-solid-svg-icons';

export default function CRDTradingSystem() {
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
          CRD Trading System
          <FontAwesomeIcon icon={faPeopleRoof} style={{ fontSize: '1.2rem' }} />             
          <FontAwesomeIcon icon={faMoneyBillTrendUp} style={{ fontSize: '1.2rem' }} />  
          <FontAwesomeIcon icon={faLandmark} style={{ fontSize: '1.2rem' }} />        
        </Typography>

        <Box sx={{ mt: 3 }}>
          <Typography variant="body1" sx={{ mb: 1 }}>
            •	Worked on the company wide initiative of integrating in-house order management client applications into newly adopted CRD Trading System. That included routing equity orders to CRD, performing compliance rule checks in the new trading system and overriding those rules.
          </Typography>
          <Typography variant="body1" sx={{ mb: 1 }}>
            •	Created and improved WCF ETL services used to enable the flow of issuers, orders and unavailable shares into CRD Trading system. Worked on identifying split/merged CRD orders. (IBM MQ, C# Windows service, CRD API, Oracle).
          </Typography>
          <Typography variant="body1" sx={{ mb: 1 }}>
            •	Designed and implemented Portfolio Manager Approval and Plugin services along with several UI add-ins to customize CRD Workbench order modelling. In the process created CRD result sets and workflow rules for trading data retrieval and updates, configured portfolio manager/specialist trading blotter layouts.
          </Typography>
          <Typography variant="body1" sx={{ mb: 1 }}>
            •	Made changes to the Order Generation module to process all orders send to CRD in one transaction: if one order fails - all the orders would fail. Introduced CRD broker check for IPO orders created in MFS Order Manager. Consolidated all the CRD validation messages in order to return an easy to display list to client applications (C# WCF Windows service).
          </Typography>
          <Typography variant="body1" sx={{ mb: 1 }}>
            •	Created Intraday Issuer service to enable the flow of issuer information from Eagle to CRD and internal order data system (IBM MQ, C# Windows service, CRD API, Oracle).
          </Typography>
          <Typography variant="body1" sx={{ mb: 1 }}>
            •	Worked on identifying split/merged CRD orders in MFS Trade Domain service and displaying the trade blotter of MFS Order Manager. Created refreshing cache mechanism used as a source of broker and user validation. Notified support with emails if validation detected any order issues. (IBM MQ, C# Windows service, Oracle, HTML email).
          </Typography>
          <Typography variant="body1" sx={{ mb: 1 }}>
            •	Made sure Crd trade blotter module supplies average price and fund group to MFS Order Manager (C# WCF Windows service, Oracle).
          </Typography>
        </Box>
      </Paper>
    </Box>
  );
}
