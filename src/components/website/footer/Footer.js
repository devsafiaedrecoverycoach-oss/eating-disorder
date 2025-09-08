"use client";

import NextLink from "next/link";
import {
  Box,
  Grid,
  Typography,
  Link as MUILink,
  Stack,
  IconButton,
  Divider,
} from "@mui/material";
import PodcastIcon from "@mui/icons-material/Podcasts";
import EmailIcon from "@mui/icons-material/Email";
import InstagramIcon from "@mui/icons-material/Instagram";

export default function Footer() {
  const footerLinks = [
    { name: "Home", path: "/" },
    { name: "About Me", path: "/about" },
    { name: "Packages", path: "/package" },
    { name: "Course", path: "/course" },
    { name: "Contact Me", path: "/contact" },
  ];

  const socialLinks = [
    { icon: PodcastIcon, label: "View Our Podcast", href: "https://open.spotify.com/episode/7CEkvNC2p2XBhgq1a5LU1c?si=v8W5rKR_RKqd8OFDgk3CxQ" },
    { icon: EmailIcon, label: "Message Us Now", href: "/contact" },
    { icon: InstagramIcon, label: "View My Instagram", href: "https://www.instagram.com/safia_edrecoverycoach?igsh=djlrMDJ2eWZkNGc4&utm_source=qr" },
  ];

  return (
    <Box sx={{ bgcolor: "#1A1A1A", color: "#fff", py: 6 }}>
      <Grid
        container
        spacing={8}
        px={{ xs: 2, md: 10 }}
        sx={{
          // maxWidth:"1200px",
          margin: "o auto",
        }}
      >
        {/* Column 1 */}
        <Grid size={{ xs: 12, sm: 6 }}>
          <Box>
            <Box
              component="img"
              src="/images/logo.png"
              sx={{
                width: "40%",
                height: "20%",
              }}
            />
            <Typography
              sx={{
                fontFamily: "var(--font-family-hand)",
                fontSize: "15px",
                lineHeight: 2,
                fontWeight: 400,
                width: "70%",
              }}
            >
              <strong>Safia</strong> provides compassionate, evidence‑based
              eating‑disorder coaching to help women worldwide break free from
              disordered eating and reclaim their lives.
            </Typography>
          </Box>
        </Grid>

        {/* Column 2 */}
        <Grid size={{ xs: 12, sm: 3 }}>
          <Box>
            <Typography
              sx={{
                fontFamily: "var(--font-family-hand)",
                fontSize: 20,
                fontWeight: 500,
                mb: 2,
              }}
            >
              Quick Links
            </Typography>

            <Stack gap={1}>
              {footerLinks.map((link) => (
                <MUILink
                  key={link.name}
                  component={NextLink}
                  href={link.path}
                  underline="none"
                  sx={{
                    fontWeight: 400,
                    fontSize: "var(--font-sm)",
                    fontFamily: "var(--font-family-hand)",
                    color: "var(--white-bg)",
                    px: 1,
                    py: 0.5,
                    borderRadius: 1,
                    transition: "all 0.2s ease",
                    "&:hover": {
                      textDecoration: "underline",
                      color: "white",
                    },
                  }}
                >
                  {link.name}
                </MUILink>
              ))}
            </Stack>
          </Box>
        </Grid>

        {/* Column 3 */}
        <Grid size={{ xs: 12, sm: 3 }}>
          <Stack gap={1}>
            {socialLinks.map(({ icon: Icon, label, href }) => (
              <Stack direction="row" gap={1} alignItems="center" key={label}>
                <IconButton sx={{ backgroundColor: "var(--white-bg)", "&:hover": {
                  backgroundColor:"var(--white-bg)"
                } }}>
                  <Icon
                    sx={{
                      color: "black",
                      fontSize: { xs: "16px", sm: "24px" },
                    }}
                  />
                </IconButton>
                <MUILink
                  component={NextLink}
                  href={href}
                  underline="hover"
                  sx={{
                    fontSize: 14,
                    fontFamily: "var(--font-family-hand)",
                    color: "inherit",
                    "&:hover": { color: "white" },
                  }}
                >
                  {label}
                </MUILink>
              </Stack>
            ))}
          </Stack>
        </Grid>
      </Grid>
      <Box sx={{ width: "100%" }}>
        <Divider
          sx={{
            borderColor: "#FFFFFF", // visible line on white background
            borderBottomWidth: 1, // thickness
            mt: 6, // vertical margin (theme spacing * 2)
          }}
        />
      </Box>

     <Box
  display="flex"
  flexDirection={{ xs: "column", md: "row" }}
  justifyContent={{  xs:'center', sm: "start" }}
  alignItems="center"
  px={{ xs: 4, md: 8 }} // left and right padding
  gap={{ xs: 4, md: 18 }} // left and right padding
  mt={4}
>
  <Typography
    sx={{
      fontWeight: 500,
      fontSize: { xs: "10px", sm: "15px" },
      fontFamily: "var(--font-family-hand)",
      color: "#A7A7A7",
      maxWidth: 600, // limit width so it doesn't stretch too wide
      textAlign: "justify",
      lineHeight:1.7
    }}
  >
    All information contained on this website is intended
    for educational purposes only. It does not establish a professional
    coach-client relationship and is not intended to substitute for
    medical diagnosis, advice, or treatment. It is also not intended to
    substitute for professional talk therapy.
  </Typography>
  <Typography
    sx={{
      fontWeight: 500,
      fontSize: { xs: "8px", sm: "10px" },
      fontFamily: "var(--font-family-hand)",
      color: "#FFFFFF",
      maxWidth: 400,
      textAlign: "justify",
      lineHeight:2
    }}
  >
    NEVER DISREGARD PROFESSIONAL MEDICAL ADVICE OR DELAY SEEKING MEDICAL
    TREATMENT BECAUSE OF INFORMATION YOU RECEIVED VIA THE WEBSITE.
  </Typography>
</Box>

    </Box>
  );
}
