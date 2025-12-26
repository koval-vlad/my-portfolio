import { Box, Typography, Paper } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';

export default function CorporateWebSite() {
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
          Corporate Web Site
          <FontAwesomeIcon icon={faGlobe} style={{ fontSize: '1.2rem' }} />
        </Typography>

        <Box sx={{ mt: 3 }}>
          <Typography variant="body1" sx={{ mb: 1 }}>
            • Provided a web utility to generate/decode GiftWrap and PGM authentication codes (ASP)
          </Typography>
          <Typography variant="body1" sx={{ mb: 1 }}>
            • Enhanced and improved the internal employee sign-in scheduler (ASP, FoxPro)
          </Typography>
          <Typography variant="body1" sx={{ mb: 1 }}>
            • Developed web site resources section giving the visitors the information on planned giving publications, company partner services and other useful online information related to the field. Provided the intranet tool to manage planned giving resources data (ASP, FoxPro)
          </Typography>
          <Typography variant="body1" sx={{ mb: 1 }}>
            • Made available to the public the schedule of conferences where the company president and top managers would give speeches on various planned giving subjects. Created the admin utility to add and modify new conferences and speeches (ASP, FoxPro, Java applet)
          </Typography>
          <Typography variant="body1" sx={{ mb: 1 }}>
            • Added planned giving training service calendar and session registration section to the web site. Implemented the intranet tool to manage training sessions and classes (ASP, FoxPro)
          </Typography>
          <Typography variant="body1" sx={{ mb: 1 }}>
            • Programmed shopping capabilities of the site to promote new products (like planned giving manuals) and introduce discounted prices for the existing ones: PGM, GiftWrap, GiftCalcs (ASP, FoxPro)
          </Typography>
        </Box>
      </Paper>
    </Box>
  );
}
