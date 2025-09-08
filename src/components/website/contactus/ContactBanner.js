"use client";
import { Box, Typography } from '@mui/material';
import React from 'react';

function ContactBanner() {
  return (
     <Box
      sx={{
        backgroundColor: "#E2DEC8",
        width: '100%',
        height: { xs: "150px", sm: "180px", md: "200px" },
        display: 'flex',
        justifyContent: 'center',
        position: 'relative', 
      }}
    >
      <Typography
        sx={{
          fontFamily: "var(--font-family-hand)",
          fontSize: { xs: "40px", sm: "50px", md: "60px", lg: "70px" },
          fontWeight: 400,
          lineHeight: 1,
          position: 'absolute',
          py: { xs: '90px',  md: '100px' }, 
        }}
      >
        Contact Me
      </Typography>
    </Box>
  )
}

export default ContactBanner