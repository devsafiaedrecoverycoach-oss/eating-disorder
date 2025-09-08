"use client";
import { Box, Button, Grid, Typography } from "@mui/material";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useRouter } from "next/navigation";

function Conatiner() {
  const router = useRouter();

  const Handleclick = () => {
    router.push("/about#expect");
  };

  useEffect(() => {
    AOS.init({
      duration: 500,
      once: true,
    });
  }, []);

  return (
    <>
      <Box
        sx={{
          backgroundColor: "var(--bg-container)",
          width: "100%",
          height: { xs: "auto", md: "80vh", lg: "auto" },
          py: { xs: 4, md: 0, lg: 10 },
          pt: { xs: 0, lg: 10 },
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Grid
          container
          justifyContent={"center"}
          alignItems={"center"}
          maxWidth={"1200px"}
          spacing={{ xs: 2, md: 0 }}
        >
          {/* Right Text */}
          <Grid
            size={{ xs: 12, md: 6 }}
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"center"}
            sx={{
              maxWidth: "1500px",
              px: { xs: 2, sm: 2 },
              pt: { xs: 4, md: 0 },
              textAlign: { xs: "center", sm: "center", md: "start" },
              gap: { xs: 4, md: 2 },
            }}
            // data-aos="fade-up-right"
          >
            <Box display={"flex"} flexDirection={"column"}>
              <Typography
                sx={{
                  fontFamily: "var(--font-family-hand)",
                  fontWeight: 400,
                  fontSize: { xs: "25px", md: "30px" },
                }}
              >
                What to Expect From Eating Disorder Recovery Coaching with Safia
              </Typography>
            </Box>
            <Box display={"flex"} flexDirection={"column"} mt={1}>
              <Typography
                sx={{
                  fontFamily: "var(--font-family-hand)",
                  fontWeight: 700,
                  fontSize: "15px",
                }}
              >
                Professional Training & Personal Experience
              </Typography>
              <Typography
                sx={{
                  fontFamily: "var(--font-family-hand)",
                  fontWeight: 400,
                  fontSize: "15px",
                  lineHeight: 2,
                }}
              >
              My approach blends a lived experience of an eating disorder and recovery with accredited, specialised training through the Carolyn Costin Institute.
                <Box
                  component="span"
                  sx={{ display: { xs: "none", sm: "inline", md: "inline" } }}
                >
                  <br />
                </Box>
              </Typography>
            </Box>
            <Box display={"flex"} flexDirection={"column"} mt={1}>
              <Typography
                sx={{
                  fontFamily: "var(--font-family-hand)",
                  fontWeight: 700,
                  fontSize: "15px",
                }}
              >
                Weekly Coaching Sessions
              </Typography>
              <Typography
                sx={{
                  fontFamily: "var(--font-family-hand)",
                  fontWeight: 400,
                  fontSize: "15px",
                  lineHeight: 2,
                }}
              >
                I meet with clients weekly via video sessions, offering
                flexible, fully online support no matter where you are. Each
                session is tailored to your goals.
                <Box
                  component="span"
                  sx={{ display: { xs: "none", sm: "inline", md: "inline" } }}
                >
                  <br />
                </Box>
              </Typography>
            </Box>
            <Box display={"flex"} flexDirection={"column"} mt={1}>
              <Typography
                sx={{
                  fontFamily: "var(--font-family-hand)",
                  fontWeight: 700,
                  fontSize: "15px",
                }}
              >
                24/7 Support
              </Typography>
              <Typography
                sx={{
                  fontFamily: "var(--font-family-hand)",
                  fontWeight: 400,
                  fontSize: "15px",
                  lineHeight: 2,
                }}
              >
                In between sessions, I’m available 7 days a week via WhatsApp
                for support, accountability, and encouragement.
                <Box
                  component="span"
                  sx={{ display: { xs: "none", sm: "inline", md: "inline" } }}
                >
                  <br />
                </Box>
              </Typography>
            </Box>
            <Box display={"flex"} flexDirection={"column"} mt={1}>
              <Typography
                sx={{
                  fontFamily: "var(--font-family-hand)",
                  fontWeight: 700,
                  fontSize: "15px",
                }}
              >
                Whole-Person Approach
              </Typography>
              <Typography
                sx={{
                  fontFamily: "var(--font-family-hand)",
                  fontWeight: 400,
                  fontSize: "15px",
                  lineHeight: 2,
                }}
              >
                True recovery goes far beyond food and weight — it’s about
                reconnecting with who you are at your core.
                <Box
                  component="span"
                  sx={{ display: { xs: "none", sm: "inline", md: "inline" } }}
                >
                  <br />
                </Box>
              </Typography>
            </Box>
            <Box
              display="flex"
              justifyContent={{ xs: "center", md: "flex-start" }}
              mt={2}
            >
              <Button
                onClick={Handleclick}
                variant="contained"
                sx={{
                  width: "160px",
                  bgcolor: "black",
                  borderRadius: "60px",
                  px: 4,
                  py: 1,
                  fontFamily: "var(--font-family-hand)",
                  fontSize: "15px",
                  color: "var(--white-bg)",
                  textTransform: "capitalize",
                  fontWeight: 400,
                  transition: "transform 0.3s !importnat",
                  "&:hover": {
                    cursor: "pointer",
                    transform: "translatex(10px) !important",
                    transition: "0.3s",
                  },
                }}
                data-aos="fade-up"
              >
                Learn More
              </Button>
            </Box>
          </Grid>
          {/* Left Image */}
          <Grid
            size={{ xs: 12, md: 6 }}
            display={"flex"}
            justifyContent={"center"}
            // data-aos="fade-left"
          >
            <Box sx={{ position: "relative", display: "inline-block" }}>
              {/* Background Border Frame */}
              <Box
                sx={{
                  position: "absolute",
                  top: { xs: 15, md: 15 }, // adjust offset vertically
                  left: { xs: 15, md: 15 }, // adjust offset horizontally
                  width: { xs: "260px", sm: "360px", md: "450px" },
                  height: { xs: "280px", sm: "360px", md: "450px" },
                  // backgroundColor: "#EFEBD2", // light beige/yellow frame color
                  border: "6px solid #FFFFFF",
                  zIndex: 0,
                }}
              />
              {/* Base Image */}
              <Box
                component="img"
                src="/images/container.png"
                alt="Container Image"
                sx={{
                  width: { xs: "260px", sm: "360px", md: "450px" },
                  height: { xs: "280px", sm: "360px", md: "450px" },
                  objectFit: "cover",
                  position: "relative",
                }}
              />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default Conatiner;
