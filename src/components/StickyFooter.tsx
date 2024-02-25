'use client'

import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align='center'>
      {'Made by '}
      <Link color="inherit" href="https://mahee.me/" target="_blank">
        Mahee
      </Link>
    </Typography>
  );
}

export default function StickyFooter() {
  return (
    <Box
      component="footer"
      sx={{
        position: "fixed",
        bottom: 0,
        py: 3,
        px: 2,
        mt: 'auto',
        width: '100%',
        backgroundColor: (theme) =>
          theme.palette.mode === 'light'
            ? theme.palette.grey[200]
            : theme.palette.grey[800],
        boxShadow: '0 0 4px 2px rgba(0, 0, 0, 0.7)',
      }}
    >
      <Container maxWidth="sm">
        {/* <Typography variant="body2" color="text.secondary" align='center'>
          My sticky footer can be found here.
        </Typography> */}
        <Copyright />
      </Container>
    </Box>
  );
}