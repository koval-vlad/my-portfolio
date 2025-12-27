import { Box, Typography, Paper } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileInvoiceDollar } from '@fortawesome/free-solid-svg-icons';

export default function OrderManager() {
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
          Order Manager          
          <FontAwesomeIcon icon={faFileInvoiceDollar} style={{ fontSize: '1.2rem' }} />
        </Typography>

        <Box sx={{ mt: 3 }}>
          <Typography variant="body1" sx={{ mb: 1 }}>
            •	Led the development of the order management system designed for investment portfolio managers and specialists to check pre-trade compliance and send tickets to the trading system for execution (C# WinForms, Sybase/RapCache, Oracle).
          </Typography>
          <Typography variant="body1" sx={{ mb: 1 }}>
            •	Introduced critical workflow changes in the compliance workspace by incorporating all XIP compliance into the override process. This has streamlined the communication between program traders and front-end compliance groups.
          </Typography>
          <Typography variant="body1" sx={{ mb: 1 }}>
            •	Improved performance of the compliance execution module by introducing multiple tasks running in parallel in order to process different compliance rules.
          </Typography>
          <Typography variant="body1" sx={{ mb: 1 }}>
            •	Added Xip Blotter in MOM that provided users with read only view of traded orders. Data for this real time view was coming from Xip message queue with visual notifications for new and updated orders.
          </Typography>
          <Typography variant="body1" sx={{ mb: 1 }}>
            •	Developed functionality allowing to create and execute Total Return Swap orders for PMs and traders. Introduced a swappable control in the trade form that encapsulated UI elements and behaviors specific to different asset classes. Created new execution modules to clearly separate business logic from UI.  The ability to add new swaps on the fly allowed for easy integration of other equity Swaps.
          </Typography>
          <Typography variant="body1" sx={{ mb: 1 }}>
            •	Automated the entry of Interest Rate Swaps (including zero-coupon Brazilian IRS) in Mom which were created previously with paper tickets and manual entry in Eagle. A Swap product management section was introduced to drive the automatic security setup when the IRS Swap order was created. Numerous modifications were made to the Order, Trade and Confirmation windows in MOM to support IRS Swaps.
          </Typography>
          <Typography variant="body1" sx={{ mb: 1 }}>
            •	Created Split/Combine Chain window to display a read-only graphical representation of the split/combine operations performed on the Swap order, along with the grid that had more detailed information.
          </Typography>
          <Typography variant="body1" sx={{ mb: 1 }}>
            •	Worked with Fixed Income developers to create Fincad library wrapper for MOM in order to calculate Swap accrued interest.
          </Typography>          
          <Typography variant="body1" sx={{ mb: 1 }}>
            •	Added performance and functional enhancements to the import orders module and to proposed orders which allow resuming program orders flow through Mom.
          </Typography>
          <Typography variant="body1" sx={{ mb: 1 }}>
            •	Modified order ticket in order to enable options trading. This made the orders for this asset class a subject to pre-trade compliance and reduced a risk to the firm.
          </Typography>
          <Typography variant="body1" sx={{ mb: 1 }}>
            •	Participated in the Security Ratings project that enabled users to receive warnings when creating orders for certain instruments that have a lower than preferred rating values.
          </Typography>
          <Typography variant="body1" sx={{ mb: 1 }}>
            •	Enabled MOM to send equity orders to CRD trading system. Added functionality that would allow MOM running simultaneously with both Xip and CRD during the adaptation period. Made sure the transition from Xip to Charles River application is seamless after the users are comfortable to switch to the new trading platform. Added ability to validate orders in CRD when compliance check is performed. Expanded MOM functionality to override CRD broker compliance fails.
          </Typography>
          <Typography variant="body1" sx={{ mb: 1 }}>
            •	Enhanced user visual experience by adding company specific application styles (Black, White, Green). Fixed saving/restoring of application configuration settings.
          </Typography>
          <Typography variant="body1" sx={{ mb: 1 }}>
            •	Saved send to trading statistics from all MOM windows in order to simplify performance monitoring.
          </Typography>
          <Typography variant="body1" sx={{ mb: 1 }}>
            •	Speeded up application start time by code restructuring and parallel loading of cached data sets.
          </Typography>
          <Typography variant="body1" sx={{ mb: 1 }}>
            •	Made sure MOM workflow and functionality meets security standards and audit requirements by employing configurable role-based security features offered by MS Enterprise Library.
          </Typography>
          <Typography variant="body1" sx={{ mb: 1 }}>
            •	Updated Compliance Override SSRS report to properly handle GPM basket compliance fails.
          </Typography>
        </Box>
      </Paper>
    </Box>
  );
}
