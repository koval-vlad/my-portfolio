import { Box, Paper, Typography } from '@mui/material';
import { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShip } from '@fortawesome/free-solid-svg-icons';

export default function TitanicSurvivorStory() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://public.tableau.com/javascripts/api/tableau.embedding.3.latest.min.js';
    script.type = 'module';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <Box sx={{ px: '8px', py: 2 }}>
      <Paper
        elevation={2}
        sx={{
          p: 2,
          borderRadius: '10px',
          backgroundColor: '#fff',
        }}
      >
        <Typography variant="h6" component="h2" sx={{ mb: 2, display: 'flex', alignItems: 'center', gap: 1 }}>
          Titanic Survivor Story
          <FontAwesomeIcon icon={faShip} style={{ fontSize: '1.2rem' }} />
        </Typography>
        <Typography variant="body1" sx={{ mb: 3 }}>
          An interactive data story exploring the Titanic disaster through passenger data,
          survival rates, and demographic analysis.
        </Typography>
        <tableau-viz
          id="tableauViz"
          src="https://public.tableau.com/shared/D5J3ZZ2CH?:display_count=n&:origin=viz_share_link"
          width="100%"
          height="800px"
          toolbar="bottom"
          hide-tabs
        ></tableau-viz>
      </Paper>
    </Box>
  );
}
