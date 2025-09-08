// "use client";
// import { Box, Typography, Grid, Paper } from "@mui/material";
// import Image from "next/image";
// import React from "react";

// function Podcast() {
//   return (
//     <Box
//       sx={{
//         width: "100%",
//         bgcolor: "#FDF6F9",
//         py: 8,
//         px: { xs: 2, sm: 4, md: 6 },
//       }}
//     >
//       {/* Podcast Logo & Title */}
//       <Box sx={{ textAlign: "center", mb: 6 }}>
//         <Box
//           sx={{
//             width: "180px",
//             height: "180px",
//             borderRadius: "20px",
//             overflow: "hidden",
//             mx: "auto",
//             mb: 3,
//           }}
//         >
//           <Image
//             src="/images/pod.png" // put logo in public folder
//             alt="Rewired Podcast Logo"
//             width={180}
//             height={180}
//             style={{ borderRadius: "20px" }}
//           />
//         </Box>
//         <Typography
//           sx={{
//             fontWeight: 600,
//             fontSize: { xs: "22px", sm: "28px", md: "32px" },
//             fontFamily: "var(--font-family-hand)",
//             color: "#5C3C58",
//           }}
//         >
//           Rewired Podcast — with Safia & Meg
//         </Typography>
//       </Box>

//       {/* Podcast Description */}
//       <Box sx={{ maxWidth: "800px", mx: "auto", mb: 8 }}>
//         <Typography
//           sx={{
//             fontSize: { xs: "14px", sm: "16px" },
//             color: "#5C3C58",
//             fontFamily: "var(--font-family-hand)",
//             lineHeight: 1.8,
//             textAlign: "center",
//           }}
//         >
//           We created Rewired as two friends who have fully recovered from eating
//           disorders after working with the same incredible therapist, and went on
//           to train as recovery coaches. With the support of our husbands and
//           therapist, we learned the importance of taking action and holding onto
//           motivation even when you lose sight of why you’re recovering.
//           <br />
//           <br />
//           Now, through this podcast, we reflect on the challenges we faced, share
//           the lessons we’ve learned, and hope to inspire and support others. Some
//           episodes are just the two of us, diving into key topics in recovery,
//           while others feature guests who bring their own expertise and insights.
//           Our mission is to make recovery feel possible, practical, sustainable —
//           and so worth it.
//         </Typography>
//       </Box>

//       {/* Featured Guest Episodes */}
//       <Box sx={{ textAlign: "center", mb: 4 }}>
//         <Typography
//           sx={{
//             fontWeight: 600,
//             fontSize: { xs: "20px", sm: "24px" },
//             fontFamily: "var(--font-family-hand)",
//             color: "#7A4E7E",
//             mb: 3,
//           }}
//         >
//           Featured Guest Episodes
//         </Typography>
//       </Box>

//       <Grid container spacing={4} justifyContent="center">
//         {/* Ep 1 */}
//         <Grid size={{xs:12,md:6}}>
//           <Paper
//             elevation={3}
//             sx={{
//               p: 3,
//               borderRadius: "20px",
//               backgroundColor: "#fff",
//               textAlign: "center",
//               transition: "0.3s",
//               "&:hover": { transform: "translateY(-5px)" },
//             }}
//           >
//             <Typography
//               sx={{
//                 fontWeight: 600,
//                 fontSize: "18px",
//                 fontFamily: "var(--font-family-hand)",
//                 color: "#5C3C58",
//                 mb: 2,
//               }}
//             >
//               Ramadan and Eating Disorder Recovery with Safia Malik
//             </Typography>
//             <a
//               href="https://open.spotify.com/episode/13NbO3gi34lm3OKD2IDZmn?si=TgAffI5fTjqCznee7UZVKA"
//               target="_blank"
//               rel="noopener noreferrer"
//               style={{
//                 color: "#7A4E7E",
//                 fontWeight: "600",
//                 textDecoration: "none",
//               }}
//             >
//               Listen on Spotify
//             </a>
//           </Paper>
//         </Grid>

//         {/* Ep 2 */}
//         <Grid size={{xs:12,md:6}}>
//           <Paper
//             elevation={3}
//             sx={{
//               p: 3,
//               borderRadius: "20px",
//               backgroundColor: "#fff",
//               textAlign: "center",
//               transition: "0.3s",
//               "&:hover": { transform: "translateY(-5px)" },
//             }}
//           >
//             <Typography
//               sx={{
//                 fontWeight: 600,
//                 fontSize: "18px",
//                 fontFamily: "var(--font-family-hand)",
//                 color: "#5C3C58",
//                 mb: 2,
//               }}
//             >
//               Rewired Podcast Guest Episode
//             </Typography>
//             <a
//               href="https://open.spotify.com/episode/7CEkvNC2p2XBhgq1a5LU1c?si=v8W5rKR_RKqd8OFDgk3CxQ"
//               target="_blank"
//               rel="noopener noreferrer"
//               style={{
//                 color: "#7A4E7E",
//                 fontWeight: "600",
//                 textDecoration: "none",
//               }}
//             >
//               Listen on Spotify
//             </a>
//           </Paper>
//         </Grid>
//       </Grid>
//     </Box>
//   );
// }

// export default Podcast


// "use client";
// import { Box, Typography, Grid, Paper } from "@mui/material";
// import Image from "next/image";
// import { keyframes } from "@mui/system";
// import React from "react";
// import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
// import { ArrowForward } from "@mui/icons-material";

// // Animation for arrow (left-right movement)
// const bounceArrow = keyframes`
//   0% { transform: translateX(0); }
//   50% { transform: translateX(6px); }
//   100% { transform: translateX(0); }
// `;

// function Podcast() {
//   return (
//     <Box
//       sx={{
//         width: "100%",
//         bgcolor: "#FDF6F9",
//         py: 8,
//         px: { xs: 2, sm: 4, md: 6 },
//       }}
//     >
//       {/* Podcast Logo & Title */}
//       <Box sx={{ textAlign: "center", mb: 6 }}>
//         <Box
//           sx={{
//             width: "180px",
//             height: "180px",
//             borderRadius: "20px",
//             overflow: "hidden",
//             mx: "auto",
//             mb: 3,
//           }}
//         >
//           <Image
//             src="/images/pod.png" // put logo in public folder
//             alt="Rewired Podcast Logo"
//             width={180}
//             height={180}
//             style={{ borderRadius: "20px" }}
//           />
//         </Box>
//         <Typography
//           sx={{
//             fontWeight: 600,
//             fontSize: { xs: "22px", sm: "28px", md: "32px" },
//             fontFamily: "var(--font-family-hand)",
//             color: "#5C3C58",
//           }}
//         >
//           Rewired Podcast — with Safia & Meg
//         </Typography>
//       </Box>

//       {/* Podcast Description */}
//       <Box sx={{ maxWidth: "800px", mx: "auto", mb: 8 }}>
//         <Typography
//           sx={{
//             fontSize: { xs: "14px", sm: "16px" },
//             color: "#5C3C58",
//             fontFamily: "var(--font-family-hand)",
//             lineHeight: 1.8,
//             textAlign: "center",
//           }}
//         >
//           We created Rewired as two friends who have fully recovered from eating
//           disorders after working with the same incredible therapist, and went on
//           to train as recovery coaches. With the support of our husbands and
//           therapist, we learned the importance of taking action and holding onto
//           motivation even when you lose sight of why you’re recovering.
//           <br />
//           <br />
//           Now, through this podcast, we reflect on the challenges we faced, share
//           the lessons we’ve learned, and hope to inspire and support others. Some
//           episodes are just the two of us, diving into key topics in recovery,
//           while others feature guests who bring their own expertise and insights.
//           Our mission is to make recovery feel possible, practical, sustainable —
//           and so worth it.
//         </Typography>
//       </Box>

//       {/* Featured Guest Episodes */}
//       <Box sx={{ textAlign: "center", mb: 4 }}>
//         <Typography
//           sx={{
//             fontWeight: 600,
//             fontSize: { xs: "20px", sm: "24px" },
//             fontFamily: "var(--font-family-hand)",
//             color: "#7A4E7E",
//             mb: 3,
//           }}
//         >
//           Featured Guest Episodes
//         </Typography>
//       </Box>

//       <Grid container spacing={4} justifyContent="center">
//         {/* Ep 1 */}
//         <Grid item xs={12} md={6}>
//           <Paper
//             elevation={3}
//             sx={{
//               p: 3,
//               borderRadius: "20px",
//               backgroundColor: "#fff",
//               textAlign: "center",
//               transition: "0.3s",
//               "&:hover": { transform: "translateY(-5px)" },
//             }}
//           >
//             <Typography
//               sx={{
//                 fontWeight: 600,
//                 fontSize: "18px",
//                 fontFamily: "var(--font-family-hand)",
//                 color: "#5C3C58",
//                 mb: 2,
//               }}
//             >
//               Ramadan and Eating Disorder Recovery with Safia Malik
//             </Typography>
//             <Box
//               href="https://open.spotify.com/episode/13NbO3gi34lm3OKD2IDZmn?si=TgAffI5fTjqCznee7UZVKA"
//               target="_blank"
//               rel="noopener noreferrer"
//              variant="contained"
//               sx={{
//                 background: "#7A4E7E",
//                 borderRadius: "50px",
//                 px: 3,
//                 py: 1,
//                 textTransform: "none",
//                 fontWeight: 600,
//                 fontFamily: "var(--font-family-hand)",
//                 "&:hover": { background: "#693E6D" },
//               }}
//               endIcon={
//                 <ArrowForward
//                   sx={{
//                     fontSize: "20px",
//                     animation: `${bounceArrow} 1.4s infinite ease-in-out`,
//                   }}
//                 />
//               }
//             >
//               Listen on Spotify
           
//             </Box>
//           </Paper>
//         </Grid>

//         {/* Ep 2 */}
//         <Grid item xs={12} md={6}>
//           <Paper
//             elevation={3}
//             sx={{
//               p: 3,
//               borderRadius: "20px",
//               backgroundColor: "#fff",
//               textAlign: "center",
//               transition: "0.3s",
//               "&:hover": { transform: "translateY(-5px)" },
//             }}
//           >
//             <Typography
//               sx={{
//                 fontWeight: 600,
//                 fontSize: "18px",
//                 fontFamily: "var(--font-family-hand)",
//                 color: "#5C3C58",
//                 mb: 2,
//               }}
//             >
//               Rewired Podcast Guest Episode
//             </Typography>
//             <a
//               href="https://open.spotify.com/episode/7CEkvNC2p2XBhgq1a5LU1c?si=v8W5rKR_RKqd8OFDgk3CxQ"
//               target="_blank"
//               rel="noopener noreferrer"
//               style={{
//                 color: "#7A4E7E",
//                 fontWeight: "600",
//                 textDecoration: "none",
//                 display: "inline-flex",
//                 alignItems: "center",
//                 gap: "6px",
//               }}
//             >
//               Listen on Spotify
//               <ArrowForwardIcon
//                 sx={{
//                   fontSize: "20px",
//                   animation: `${bounceArrow} 1.2s infinite ease-in-out`,
//                 }}
//               />
//             </a>
//           </Paper>
//         </Grid>
//       </Grid>
//     </Box>
//   );
// }

// export default Podcast;


// "use client";
// import { Box, Typography, Grid, Paper, Button } from "@mui/material";
// import Image from "next/image";
// import { keyframes } from "@mui/system";
// import React from "react";
// import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

// // Animation for arrow (left-right movement)
// const bounceArrow = keyframes`
//   0% { transform: translateX(0); }
//   50% { transform: translateX(6px); }
//   100% { transform: translateX(0); }
// `;

// function Podcast() {
//   return (
//     <Box
//       sx={{
//         width: "100%",
//         bgcolor: "#FDF6F9",
//         py: 8,
//         px: { xs: 2, sm: 4, md: 6 },
//       }}
//     >
//       {/* Podcast Logo & Title */}
//       <Box sx={{ textAlign: "center", mb: 6 }}>
//         <Box
//           sx={{
//             width: "180px",
//             height: "180px",
//             borderRadius: "20px",
//             overflow: "hidden",
//             mx: "auto",
//             mb: 3,
//           }}
//         >
//           <Image
//             src="/images/pod.png" // put logo in public folder
//             alt="Rewired Podcast Logo"
//             width={180}
//             height={180}
//             style={{ borderRadius: "20px" }}
//           />
//         </Box>
//         <Typography
//           sx={{
//             fontWeight: 600,
//             fontSize: { xs: "22px", sm: "28px", md: "32px" },
//             fontFamily: "var(--font-family-hand)",
//             color: "#5C3C58",
//           }}
//         >
//           Rewired Podcast — with Safia & Meg
//         </Typography>
//       </Box>

//       {/* Podcast Description */}
//       <Box sx={{ maxWidth: "800px", mx: "auto", mb: 8 }}>
//         <Typography
//           sx={{
//             fontSize: { xs: "14px", sm: "16px" },
//             color: "#5C3C58",
//             fontFamily: "var(--font-family-hand)",
//             lineHeight: 1.8,
//             textAlign: "center",
//           }}
//         >
//           We created Rewired as two friends who have fully recovered from eating
//           disorders after working with the same incredible therapist, and went on
//           to train as recovery coaches. With the support of our husbands and
//           therapist, we learned the importance of taking action and holding onto
//           motivation even when you lose sight of why you’re recovering.
//           <br />
//           <br />
//           Now, through this podcast, we reflect on the challenges we faced, share
//           the lessons we’ve learned, and hope to inspire and support others. Some
//           episodes are just the two of us, diving into key topics in recovery,
//           while others feature guests who bring their own expertise and insights.
//           Our mission is to make recovery feel possible, practical, sustainable —
//           and so worth it.
//         </Typography>
//       </Box>

//       {/* Featured Guest Episodes */}
//       <Box sx={{ textAlign: "center", mb: 4 }}>
//         <Typography
//           sx={{
//             fontWeight: 600,
//             fontSize: { xs: "20px", sm: "24px" },
//             fontFamily: "var(--font-family-hand)",
//             color: "#7A4E7E",
//             mb: 3,
//           }}
//         >
//           Featured Guest Episodes
//         </Typography>
//       </Box>

//       <Grid container spacing={4} justifyContent="center">
//         {/* Ep 1 */}
//         <Grid size={{xs:12,md:6}}>
//           <Paper
//             elevation={3}
//             sx={{
//               p: 3,
//               borderRadius: "20px",
//               backgroundColor: "#fff",
//               textAlign: "center",
//               transition: "0.3s",
//               "&:hover": { transform: "translateY(-5px)" },
//             }}
//           >
//             <Typography
//               sx={{
//                 fontWeight: 600,
//                 fontSize: "18px",
//                 fontFamily: "var(--font-family-hand)",
//                 color: "#5C3C58",
//                 mb: 3,
//               }}
//             >
//               Ramadan and Eating Disorder Recovery with Safia Malik
//             </Typography>
//             <Button
//               component="a"
//               href="https://open.spotify.com/episode/13NbO3gi34lm3OKD2IDZmn?si=TgAffI5fTjqCznee7UZVKA"
//               target="_blank"
//               rel="noopener noreferrer"
//               variant="contained"
//               sx={{
//                 background: "#7A4E7E",
//                 color: "#fff",
//                 borderRadius: "50px",
//                 px: 4,
//                 py: 1.2,
//                 fontWeight: 600,
//                    maxWidth:"280px",
//                 fontFamily: "var(--font-family-hand)",
//                 textTransform: "none",
//                 mx: "auto",
//                 display: "flex",
//                 justifyContent: "center",
//                 "&:hover": { background: "#693E6D" },
//               }}
//               endIcon={
//                 <ArrowForwardIcon
//                   sx={{
//                     fontSize: "20px",
//                     animation: `${bounceArrow} 1.4s infinite ease-in-out`,
//                   }}
//                 />
//               }
//             >
//               Listen on Spotify
//             </Button>
//           </Paper>
//         </Grid>

//         {/* Ep 2 */}
//         <Grid size={{xs:12,md:6}}>
//           <Paper
//             elevation={3}
//             sx={{
//               p: 3,
//               borderRadius: "20px",
//               backgroundColor: "#fff",
//               textAlign: "center",
//               transition: "0.3s",
//               "&:hover": { transform: "translateY(-5px)" },
//             }}
//           >
//             <Typography
//               sx={{
//                 fontWeight: 600,
//                 fontSize: "18px",
//                 fontFamily: "var(--font-family-hand)",
//                 color: "#5C3C58",
//                 mb: 3,
//               }}
//             >
//               Rewired Podcast Guest Episode
//             </Typography>
//             <Button
//               component="a"
//               href="https://open.spotify.com/episode/7CEkvNC2p2XBhgq1a5LU1c?si=v8W5rKR_RKqd8OFDgk3CxQ"
//               target="_blank"
//               rel="noopener noreferrer"
//               variant="contained"
//               sx={{
//                 background: "#7A4E7E",
//                 color: "#fff",
//                 borderRadius: "50px",
//                 px: 4,
//                 maxWidth:"280px",
//                 py: 1.2,
//                 fontWeight: 600,
//                 fontFamily: "var(--font-family-hand)",
//                 textTransform: "none",
//                 mx: "auto",
//                 display: "flex",
//                 justifyContent: "center",
//                 "&:hover": { background: "#693E6D" },
//               }}
//               endIcon={
//                 <ArrowForwardIcon
//                   sx={{
//                     fontSize: "20px",
//                     animation: `${bounceArrow} 1.4s infinite ease-in-out`,
//                   }}
//                 />
//               }
//             >
//               Listen on Spotify
//             </Button>
//           </Paper>
//         </Grid>
//       </Grid>
//     </Box>
//   );
// }

// export default Podcast;
"use client";
import { Box, Typography, Grid, Paper, Button, Stack } from "@mui/material";
import Image from "next/image";
import { keyframes } from "@mui/system";
import React from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

// 🔗 Replace with the real Instagram handle
const INSTAGRAM_URL = "https://www.instagram.com/your_instagram_handle";
// ✅ Client-correct Spotify SHOW (Rewired Podcast)
const REWIRED_SHOW_URL = "https://open.spotify.com/show/5vAvXHq2E2HXHruHRLTk0D";

// Animation for arrow (left-right movement)
const bounceArrow = keyframes`
  0% { transform: translateX(0); }
  50% { transform: translateX(6px); }
  100% { transform: translateX(0); }
`;

function Podcast() {
  return (
    <Box sx={{ width: "100%", bgcolor: "#FDF6F9", py: 8, px: { xs: 2, sm: 4, md: 6 } }}>
      {/* Podcast Logo & Title */}
      <Box sx={{ textAlign: "center", mb: 6 }}>
        <Box
          sx={{
            width: 180,
            height: 180,
            borderRadius: "20px",
            overflow: "hidden",
            mx: "auto",
            mb: 3,
          }}
        >
          <Image
            src="/images/pod.png" // put logo in /public/images
            alt="Rewired Podcast Logo"
            width={180}
            height={180}
            style={{ borderRadius: "20px" }}
            priority
          />
        </Box>
        <Typography
          sx={{
            fontWeight: 600,
            fontSize: { xs: "22px", sm: "28px", md: "32px" },
            fontFamily: "var(--font-family-hand)",
            color: "#5C3C58",
          }}
        >
          Rewired Podcast — with Safia & Meg
        </Typography>

        {/* Top CTAs: Instagram + View Our Podcast (correct link) */}
        <Stack direction="row" spacing={2} justifyContent="center" mt={3} flexWrap="wrap">
          <Button
            component="a"
            href={REWIRED_SHOW_URL}
            target="_blank"
            rel="noopener noreferrer"
            variant="contained"
            sx={{
              background: "#7A4E7E",
              color: "#fff",
              borderRadius: "50px",
              px: 3,
              py: 1.1,
              fontWeight: 600,
              textTransform: "none",
              "&:hover": { background: "#693E6D" },
            }}
            endIcon={<ArrowForwardIcon sx={{ animation: `${bounceArrow} 1.4s infinite ease-in-out` }} />}
          >
            View Our Podcast
          </Button>

          <Button
            component="a"
            href={"https://www.instagram.com/safia_edrecoverycoach?igsh=djlrMDJ2eWZkNGc4&utm_source=qr"}
            target="_blank"
            rel="noopener noreferrer"
            variant="outlined"
            sx={{
              borderRadius: "50px",
              px: 3,
              py: 1.1,
              fontWeight: 600,
              textTransform: "none",
              borderColor: "#7A4E7E",
              color: "#7A4E7E",
              "&:hover": { borderColor: "#693E6D", color: "#693E6D" },
            }}
          >
            Follow on Instagram
          </Button>
        </Stack>
      </Box>

      {/* Podcast Description */}
      <Box sx={{ maxWidth: 800, mx: "auto", mb: 8 }}>
        <Typography
          sx={{
            fontSize: { xs: "14px", sm: "16px" },
            color: "#5C3C58",
            fontFamily: "var(--font-family-hand)",
            lineHeight: 1.8,
            textAlign: "center",
          }}
        >
          We created Rewired as two friends who have fully recovered from eating disorders after
          working with the same incredible therapist, and went on to train as recovery coaches. With
          the support of our husbands and therapist, we learned the importance of taking action and
          holding onto motivation even when you lose sight of why you’re recovering.
          <br />
          <br />
          Now, through this podcast, we reflect on the challenges we faced, share the lessons we’ve
          learned, and hope to inspire and support others. Some episodes are just the two of us,
          diving into key topics in recovery, while others feature guests who bring their own
          expertise and insights. Our mission is to make recovery feel possible, practical,
          sustainable — and so worth it.
        </Typography>
      </Box>

      {/* Featured guest note (per client request) */}
      <Box sx={{ textAlign: "center", mb: 4 }}>
        <Typography
          sx={{
            fontWeight: 600,
            fontSize: { xs: "20px", sm: "24px" },
            fontFamily: "var(--font-family-hand)",
            color: "#7A4E7E",
            mb: 3,
          }}
        >
          Featured as a guest on the Beyond Body Podcast
        </Typography>
      </Box>

      <Grid container spacing={4} justifyContent="center">
        {/* Guest Episode Card 1 (keep if needed, or replace link) */}
        <Grid size={{xs:12,md:6}}>
          <Paper
            elevation={3}
            sx={{
              p: 3,
              borderRadius: "20px",
              backgroundColor: "#fff",
              textAlign: "center",
              transition: "0.3s",
              "&:hover": { transform: "translateY(-5px)" },
            }}
          >
            <Typography
              sx={{
                fontWeight: 600,
                fontSize: "18px",
                fontFamily: "var(--font-family-hand)",
                color: "#5C3C58",
                mb: 3,
              }}
            >
              Ramadan and Eating Disorder Recovery with Safia Malik
            </Typography>
            <Button
              component="a"
              href="https://open.spotify.com/episode/13NbO3gi34lm3OKD2IDZmn?si=TgAffI5fTjqCznee7UZVKA"
              target="_blank"
              rel="noopener noreferrer"
              variant="contained"
              sx={{
                background: "#7A4E7E",
                color: "#fff",
                borderRadius: "50px",
                px: 4,
                py: 1.2,
                fontWeight: 600,
                maxWidth: 280,
                textTransform: "none",
                mx: "auto",
                display: "flex",
                justifyContent: "center",
                "&:hover": { background: "#693E6D" },
              }}
              endIcon={
                <ArrowForwardIcon
                  sx={{ fontSize: 20, animation: `${bounceArrow} 1.4s infinite ease-in-out` }}
                />
              }
            >
              Listen on Spotify
            </Button>
          </Paper>
        </Grid>

        {/* Guest Episode Card 2 — renamed per client */}
        <Grid size={{xs:12,md:6}}>
          <Paper
            elevation={3}
            sx={{
              p: 3,
              borderRadius: "20px",
              backgroundColor: "#fff",
              textAlign: "center",
              transition: "0.3s",
              "&:hover": { transform: "translateY(-5px)" },
            }}
          >
            <Typography
              sx={{
                fontWeight: 600,
                fontSize: "18px",
                fontFamily: "var(--font-family-hand)",
                color: "#5C3C58",
                mb: 3,
              }}
            >
              You can’t think your way out of an Eating Disorder
            </Typography>
            <Button
              component="a"
              href="https://open.spotify.com/episode/7CEkvNC2p2XBhgq1a5LU1c?si=v8W5rKR_RKqd8OFDgk3CxQ"
              target="_blank"
              rel="noopener noreferrer"
              variant="contained"
              sx={{
                background: "#7A4E7E",
                color: "#fff",
                borderRadius: "50px",
                px: 4,
                py: 1.2,
                fontWeight: 600,
                maxWidth: 280,
                textTransform: "none",
                mx: "auto",
                display: "flex",
                justifyContent: "center",
                "&:hover": { background: "#693E6D" },
              }}
              endIcon={
                <ArrowForwardIcon
                  sx={{ fontSize: 20, animation: `${bounceArrow} 1.4s infinite ease-in-out` }}
                />
              }
            >
              Listen on Spotify
            </Button>
          </Paper>
        </Grid>

        {/* Our show — separate, links to correct show URL */}
        <Grid size={{xs:12}}>
          <Paper
            elevation={3}
            sx={{
              p: 3,
              mt: 1,
              borderRadius: "20px",
              backgroundColor: "#fff",
              textAlign: "center",
              transition: "0.3s",
              "&:hover": { transform: "translateY(-5px)" },
            }}
          >
            <Typography
              sx={{
                fontWeight: 600,
                fontSize: "18px",
                fontFamily: "var(--font-family-hand)",
                color: "#5C3C58",
                mb: 2,
              }}
            >
              The Rewired Podcast (our show)
            </Typography>
            <Button
              component="a"
              href={REWIRED_SHOW_URL}
              target="_blank"
              rel="noopener noreferrer"
              variant="contained"
              sx={{
                background: "#7A4E7E",
                color: "#fff",
                borderRadius: "50px",
                px: 4,
                py: 1.2,
                fontWeight: 600,
                maxWidth: 280,
                textTransform: "none",
                mx: "auto",
                display: "flex",
                justifyContent: "center",
                "&:hover": { background: "#693E6D" },
              }}
              endIcon={
                <ArrowForwardIcon
                  sx={{ fontSize: 20, animation: `${bounceArrow} 1.4s infinite ease-in-out` }}
                />
              }
            >
              View Our Podcast
            </Button>
          </Paper>
        </Grid>
      </Grid>

      {/* Bottom CTA — also to correct podcast */}
      <Box sx={{ textAlign: "center", mt: 6 }}>
        {/* <Button
          component="a"
          href={REWIRED_SHOW_URL}
          target="_blank"
          rel="noopener noreferrer"
          variant="contained"
          sx={{
            background: "#7A4E7E",
            color: "#fff",
            borderRadius: "50px",
            px: 4,
            py: 1.2,
            fontWeight: 600,
            textTransform: "none",
            "&:hover": { background: "#693E6D" },
          }}
          endIcon={<ArrowForwardIcon sx={{ animation: `${bounceArrow} 1.4s infinite ease-in-out` }} />}
        >
          View Our Podcast
        </Button> */}
      </Box>
    </Box>
  );
}

export default Podcast;
