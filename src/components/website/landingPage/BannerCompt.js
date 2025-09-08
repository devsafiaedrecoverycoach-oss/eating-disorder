"use client";
import { Box, Button, Grid, Typography } from "@mui/material";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function BannerCompt() {
  useEffect(() => {
    AOS.init({
      duration: 500,
      once: true,
    });
  }, []);

  return (
    <Box
      sx={{
        bgcolor: "var(--bg-color)",
        minHeight: { xs: "auto", md: "100%" },
        width: "100%",
        pt: { xs: 6, md: 0 },
        position: "relative",
        overflow: "hidden",

      }}
    >
      <Grid
        container
        spacing={4}
        alignItems="stretch"
        justifyContent="space-between"
      >
        {/* Left Text */}
        <Grid
          size={{ xs: 12, md: 6.8 }}
          sx={{ display: "flex", alignItems: "center" }}
        >
          {/* Top Left Ellipse 1 */}
          <Box
            component="img"
            src="/images/ellipse1.png"
            alt="Ellipse 1"
            sx={{
              position: "absolute",
              top: "-37px",
              left: "-20px",
              width: { xs: "100px", sm: "130px", md: "250px" },
              zIndex: 0,
              border: "4px soild red",
            }}
          />

          {/* Top Left Ellipse 2 (on top of ellipse1) */}
          <Box
            component="img"
            src="/images/ellipse2.png"
            alt="Ellipse 2"
            sx={{
              position: "absolute",
              top: "0px",
              left: "20px",
              width: { xs: "150px", sm: "100px", md: "250px", lg: "300px" },
              zIndex: 0,
              opacity: "60%",
            }}
          />
          <Box mx={{ xs: 3, md: 6 }} mt={{ xs: 4, md: 10 }}>
              <Typography
                component="div"
                sx={{
                  fontSize: { xs: "28px", sm: "34px", md:"45px" , lg: "50px" },
                  fontWeight: 400,
                  fontFamily: "var(--font-family-hand)",
                }}
              >
                Recovery is possible —    let's start together 
                {/* <Box
                  component="span"
                  sx={{ display: { xs: "none", md: "inline" } }}
                >
                  <br />{" "}
                </Box> */}
                {/* let's start together  */}
              </Typography>

            <Typography
              sx={{
                fontSize: { xs: "16px", md: "18px" },
                fontFamily: "var(--font-family-hand)",
                mt: 2,
                lineHeight:1.7,
              }}
              data-aos="fade-right"
            >
              Supporting women around the world to recover from their eating disorders.
              <Box
                component="span"
                sx={{ display: { xs: "none", md: "inline" } , mt:1}}
              >
                <br />
              </Box>
              {/* eating disorders */}
            </Typography>

            <Button
            href="/contact"
              variant="contained"
              sx={{
                mt: 2,
                bgcolor: "black",
                color: "var(--white-bg)",
                fontFamily: "var(--font-family-hand)",
                fontSize: "15px",
                fontWeight: 400,
                textTransform: "capitalize",
                borderRadius: "60px",
                p: "5px 28px 5px 28px",
                mb: { xs: 4, md: 2 },
                  transition:"transform 0.3s !importnat",
                  "&:hover": {
                    cursor: "pointer",
                  transform:"translateY(-5px) !important",
                  transition:"0.3s",
              }
             }}
              data-aos="fade-down"
            >
              Get Started
            </Button>
          </Box>
        </Grid>

        {/* Right Image */}
        <Grid
          size={{ xs: 12, md: 5.2 }}
          sx={{ display: "flex", alignItems: "center", textAlign: "center" }}
          data-aos="fade-left"
        >
          <Box
            sx={{
              position: "relative",
              width: "100%",
              // height: {
              //   xs: '300px',
              //   sm: '350px',   // better for tablets
              //   md: '400px',   // better for laptops
              //   lg: '600px'    // for large screens
              // },
              // height: { xs: 'auto', md: 'auto' },
              height: "100%",
            }}
          >
            <Box
              component="img"
              src="/images/banner.png"
              alt="Banner"
              sx={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                // display: 'block',
              }}
            />

            <Box
              sx={{
                position: "absolute",
                top: { xs: "60%", md: "55%" },
                left: { xs: "15%", sm: "14%", md: "16%", lg: "15%", xl:"13%" },
                transform: {
                  xs: "translate(-50%, -50%)",
                  md: "translate(-50%, -50%)",
                },
                textAlign: { xs: "center", md: "start" },
                width: { xs: "100%", md: "auto" },
              }}
            >
           <Box 
           component="img"
           src="/images/bannerimgtext.png"
           sx={{
            width: {xs:"120px", sm: "140px" , lg:"160px" },
            height:"auto"
           }}
           />
            </Box>
          </Box>
        </Grid>
      </Grid>

      <Box sx={{ bgcolor: "black", width: "100%", height: "10px" }} />
    </Box>
  );
}

export default BannerCompt;
