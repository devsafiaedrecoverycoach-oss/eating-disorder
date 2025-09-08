"use client";
import { Box, Button, Typography } from "@mui/material";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useRouter } from "next/navigation";

function RecoveryCoach() {
  const router = useRouter();
  const Handleclick = () => {
    router.push("/about#meet");
  };
  useEffect(() => {
    AOS.init({
      duration: 500,
      once: true,
    });
  }, []);

  return (
    <Box
      sx={{
        minHeight: { xs: "auto", md: "50vh", lg: "40vh" },
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        px: 2,
        textAlign: "center",
        gap: 4,
        py: { xs: 4, md: 8 },
      }}
    >
      {/* Title with underline */}
      <Box
        sx={{
          position: "relative",
          display: "inline-block",
        }}
        data-aos="fade-down"
      >
        <Typography
          component="span"
          sx={{
            fontFamily: "var(--font-family-hand)",
            fontSize: { xs: "18px", sm: "25px", md: "30px" },
            fontWeight: 400,
            position: "relative",
            zIndex: 2,
          }}
        >
          Meet Your ED Recovery Coach
        </Typography>

        <Box
          component="img"
          src="/images/vector.png"
          alt="underline"
          sx={{
            position: "absolute",
            top: "80%",
            left: "40%",
            transform: "translateX(-50%)",
            width: "80%",
            zIndex: 1,
            objectFit: "cover",
            pointerEvents: "none",
          }}
        />
      </Box>

      {/* Paragraph */}
      {/* <Typography
        sx={{
          fontSize: "15px",
          fontFamily: "var(--font-family-hand)",
          fontWeight: 400,
          textAlign: { xs: "justify", md: "center" },
          lineHeight: 1.7,
        }}
        data-aos="fade-down"
      >
        Hi, I’m <span style={{ fontWeight: 700 }}>Safia</span>, I’m a certified
        Carolyn Costin Institute (CCI) Eating Disorder Recovery Coach, a former
        social worker and
        <Box component="span" sx={{ display: { xs: "none", md: "inline" } }}>
          <br />
        </Box>
        teacher, and someone who has walked the recovery path myself. My own
        journey began when I developed anorexia and
        <Box component="span" sx={{ display: { xs: "none", md: "inline" } }}>
          <br />
        </Box>
        became obsessed with exercise — later shifting into orthorexia.
      </Typography> */}
     <Typography
        sx={{
          fontSize: "15px",
          fontFamily: "var(--font-family-hand)",
          fontWeight: 400,
          maxWidth:"880px",
          textAlign: { xs: "justify", md: "center" },
          lineHeight: 1.7,
        }}
        data-aos="fade-down"
      >
       Hello – I'm so happy you're here! I'm <span style={{ fontWeight: 700 }}>Safia</span>, a certified Carolyn Costin Institute (CCI) Eating Disorder Recovery Coach, a former social worker and teacher, and someone who has walked the recovery path myself. My own journey began when I developed anorexia and became obsessed with exercise — later shifting into orthorexia.
        {/* <Box component="span" sx={{ display: { xs: "none", md: "inline" } }}>
          <br />
        </Box> */}

        <Box component="span" sx={{ display: { xs: "none", md: "inline" } }}>
          {/* <br /> */}
        </Box>
        
      </Typography>
      {/* Button */}
      <Button
        onClick={Handleclick}
        variant="contained"
        sx={{
          bgcolor: "black",
          borderRadius: "60px",
          px: 6,
          py: 1.5,
          fontFamily: "var(--font-family-hand)",
          fontSize: "15px",
          color: "var(--white-bg)",
          textTransform: "capitalize",
          fontWeight: 400,
          transition: "transform 0.3s !importnat",
          "&:hover": {
            cursor: "pointer",
            transform: "translateY(5px) !important",
            transition: "0.3s",
          },
        }}
        data-aos="fade-up"
      >
        Read Story
      </Button>
    </Box>
  );
}

export default RecoveryCoach;
