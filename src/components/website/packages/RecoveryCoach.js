"use client";
import { Box, Grid, Typography } from "@mui/material";
import React from "react";

function RecoveryCoach() {
  return (
    <Grid id="meet" container sx={{ width: "100%", mb:50 }}>

            {/* Left  Section */}
      <Grid size={{ xs: 12, md: 5 }}>
        <Box
          component="img"
          src="/images/packagerecovery.png"
          alt="Banner Image"
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
          }}
        />
      </Grid>


      {/* Right  Section */}
      <Grid size={{ xs: 12, md: 7 }}>
        <Box
          sx={{
            width: "100%",
            height: "100%",
            backgroundColor: "#1E1E1E",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            px: { xs: 2, sm: 4, md: 6 },
            py: { xs: 4, sm: 4, md: 6, xl: 2 }, // Padding top/bottom for small devices
            gap: { xs: "20px", xl: "60px" },
            boxSizing: "border-box",
          }}
        >
          <Typography
            sx={{
              color: "var(--white-bg)",
              fontSize: { xs: "28px", sm: "32px", lg: "50px" },
              fontFamily: "var(--font-family-hand)",
              fontWeight: 400,
              lineHeight: 2,
              position: "relative",
              display: "inline-block",
              zIndex: 2,
            }}
          >
            Meet your Recovery Coach
          </Typography>

          <Typography
            sx={{
              color: "var(--white-bg)",
              fontSize: { xs: "14px", sm: "17px" },
              fontFamily: "var(--font-family-hand)",
              fontWeight: 400,
              lineHeight: 1.5,
              textAlign:"justify"
            }}
          >
            I’m a certified Carolyn Costin Institute (CCI) Eating Disorder
            Recovery Coach, a former social worker and teacher, and someone who
            has walked the recovery path myself. My own journey began when I
            developed anorexia and became obsessed with exercise — later
            shifting into orthorexia. At one point, I realised that if I wanted
            to stay in Dubai with my husband and have a family, I needed to
            truly get better. With his support, I made progress on my own, but
            it wasn’t until I worked with an incredible therapist that I reached
            full recovery. That experience changed everything — and I now live
            the life I once only dreamed of: still in Dubai, with my husband and
            our three young children.
          </Typography>

          <Typography
            sx={{
              color: "var(--white-bg)",
              fontSize: { xs: "14px", sm: "17px" },
              fontFamily: "var(--font-family-hand)",
              fontWeight: 400,
              lineHeight: 1.5,
              textAlign:"justify"
            }}
          >
            My passion for helping others reclaim their lives led me to train as
            a CCI coach. I bring not just clinical tools and structure, but
            lived experience, deep empathy, and a belief that full recovery is
            possible. I also co-host the Rewired podcast with my incredible
            friend and fellow CCI recovery coach Meg, where we share honest
            conversations about recovery and healing. Originally from the UK
            with English and Pakistani roots, I’ve been living in Dubai for 11
            years. I find joy in the simple things — time with family and
            friends, meaningful work, and seeing my clients move from surviving
            to truly living.
          </Typography>
        </Box>
      </Grid>

  
    </Grid>
  );
}

export default RecoveryCoach