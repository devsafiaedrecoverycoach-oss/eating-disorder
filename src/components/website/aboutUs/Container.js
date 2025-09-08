"use client";
import { Box, Grid, Typography } from "@mui/material";
import React from "react";

function Container() {
  const meetdata = [
    {
      heading: "Professional Training & Personal Experience",
      content:
        "My approach blends a lived experience of an eating disorder and recovery with accredited, specialised training through the Carolyn Costin Institute.",
    },
    {
      heading: "24/7 Support",
      content:
        "In between sessions, I’m available 7 days a week via WhatsApp for support, accountability, and encouragement. Whether you have a quick question, need help navigating a tough moment, or just want a reminder that you're not doing this alone — I’m here.",
    },
    {
      heading: "Weekly Coaching Sessions",
      content:
        "I meet with clients weekly via video sessions, offering flexible, fully online support no matter where you are. Each session is tailored to your goals, using a personalised coaching approach that evolves with your needs. Together, we’ll create a structure that fits your life — whether you're studying, working, a busy mum or rebuilding routine — so recovery feels both supported and sustainable. I also work alongside wider treatment teams to help create a cohesive network around you.",
    },
    {
      heading: "Whole-Person Approach",
      content: `True recovery goes far beyond food and weight — it’s about reconnecting with who you are at your core. In our work together, we’ll look at the bigger picture: your values, relationships, routines, identity, and the deeper beliefs that shape how you see yourself.\nWhether it’s rediscovering what brings you joy, learning how to set boundaries, or rebuilding trust with your body, we explore the parts of your life that matter most — not just to survive recovery, but to build a life that feels meaningful, fulfilling, and fully your own.`,
    },
  ];

  return (
    <Box id="expect" sx={{ width: "100%", bgcolor: "#fff", py: { xs: 4, md: 10 } }}>
      <Grid
        container
        // spacing={0}
        sx={{
          maxWidth: "1200px",
          mx: "auto",
          px: { xs: 2, md: 2 },
        }}
      >
        {/* Left Text Content */}
        <Grid size={{ xs: 12, md: 7 }} >
          <Typography
            sx={{
              fontWeight: 600,
              fontSize: { xs: "20px", md: "25px" },
              textAlign: { xs: "center", sm: "start" },
              fontFamily: "var(--font-family-hand)",
              lineHeight: 1.6,
              mb: 4,
            }}
          >
            What to Expect From Eating Disorder Recovery Coaching with Safia
          </Typography>

          {/* First Two Items */}
          <Box
            display="flex"
            flexDirection="row"
            justifyContent={"space-between"}
            gap={4}
            flexWrap="wrap"
            mb={4}
          >
            {meetdata.slice(0, 2).map((item, index) => (
              <Box key={index} flex={1} minWidth="260px">
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontWeight: 600,
                    fontFamily: "var(--font-family-hand)",
                    mb: 1,
                  }}
                >
                  {item.heading}
                </Typography>
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontFamily: "var(--font-family-hand)",
                    fontWeight: 400,
                    textAlign: "justify",
                    whiteSpace: "pre-line",
                  }}
                >
                  {item.content}
                </Typography>
              </Box>
            ))}
          </Box>

          {/* Next Two Items */}
          <Box display="flex" flexDirection="row" gap={4} flexWrap="wrap">
            {meetdata.slice(2).map((item, index) => (
              <Box key={index} flex={1} minWidth="250px">
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontWeight: 600,
                    fontFamily: "var(--font-family-hand)",
                    mb: 1,
                  }}
                >
                  {item.heading}
                </Typography>
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontFamily: "var(--font-family-hand)",
                    fontWeight: 400,
                    textAlign: "justify",
                    whiteSpace: "pre-line",
                  }}
                >
                  {item.content}
                </Typography>
              </Box>
            ))}
          </Box>
        </Grid>

        {/* Right Image */}
        <Grid size={{ xs: 12, md: 5 }} >
          <Box
            sx={{
              display: "flex",
              justifyContent: { xs: "center", sm: "flex-end" },
              alignItems: "center",
              height: "100%",
              mt: { xs: 2, sm: 0 },
            }}
          >
            <Box sx={{ position: "relative" }}>
              {/* Outer Border Box */}
              <Box
                sx={{
                  position: "absolute",
                  top: { xs: 12, sm: 14, md: 18 },
                  left: { xs: 12, sm: 14, md: 18 },
                  width: { xs: "300px", sm: "350px", md: "400px" },
                  height: { xs: "340px", sm: "390px", md: "420px" },
                  border: "6px solid #EFEBD2",
                  zIndex: 0,
                }}
              />
              {/* Actual Image */}
              <Box
                component="img"
                src="/images/aboutsafia.jpg"
                sx={{
                  width: { xs: "300px", sm: "350px", md: "400px" },
                  height: { xs: "340px", sm: "390px", md: "420px" },
                  objectFit: "cover",
                  position: "relative",
                  zIndex: 1,
                }}
              />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Container;
