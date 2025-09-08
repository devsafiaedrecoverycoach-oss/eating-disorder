// "use client"


// import React, { useState } from "react";
// import {
//   Container,
//   Card,
//   CardContent,
//   Typography,
//   Button,
//   Collapse,
//   Divider,
//   Box,
// } from "@mui/material";
// import Navbar from "../navbar/Navbar";
// import Footer from "../footer/Footer";

// function Courses() {
//   const [showMore, setShowMore] = useState(false);

//   const testimonials = [
//     {
//       text: "I loved that real one to one personalised feeling, I felt so held, safe and reassured that you both really were there every step of the way!",
//       author: "K.M.",
//     },
//     {
//       text: "It’s honestly beyond anything I could’ve wished for and more! I have a whole bursting toolbox to take away not only now but forever and it’s all invaluable treasure I’ll hold on to!",
//       author: "K.M.",
//     },
//     {
//       text: "Hearing from your experience and realizing that a lot of what I feel others feel too helped me the most. It makes me believe more in myself.",
//       author: "P.H.",
//     },
//     {
//       text: "The part I loved the most was you two, you being so natural, talking so openly about your experience with this, your personalities, your authenticity.",
//       author: "M.T.",
//     },
//     {
//       text: "I thought the pace was great. I like how the tools were drip fed over the month and feel that helped give me a chance to try them all out.",
//       author: "H.S.",
//     },
//     {
//       text: "The pace and amount of content was just right. It gave us time to write goals and consider tools, so it kept up the momentum.",
//       author: "B.S.",
//     },
//     {
//       text: "I've found RIA to be incredibly helpful. The content was well thought out and each Sunday session where one or two tools were explained was at a good pace.",
//       author: "S.C.",
//     },
//   ];

//   return (
//  <>
//  <Navbar/>

//      <Box
//        sx={{
//          backgroundColor: "#E2DEC8",
//          width: '100%',
//          height: { xs: "150px", sm: "180px", md: "200px" },
//          display: 'flex',
//          justifyContent: 'center',
//          position: 'relative', 
//        }}
//      >
//        <Typography
//          sx={{
//            fontFamily: "var(--font-family-hand)",
//            fontSize: { xs: "40px", sm: "50px", md: "60px", lg: "70px" },
//            fontWeight: 400,
//            lineHeight: 1,
//            position: 'absolute',
//            py: { xs: '90px',  md: '100px' }, 
//          }}
//        >
//          Courses
//        </Typography>
//      </Box>
//     <Container
//       maxWidth="md"
//       sx={{
//         fontFamily: "'Poppins', sans-serif",
//         paddingY: 5,
//         mt:5
//       }}
//     >
//       <Card
//         sx={{
//           borderRadius: 3,
//           boxShadow: 3,
//           padding: 3,
//           backgroundColor: "#fff",
//         }}
//       >
//         <CardContent>
//           <Typography
//             variant="h4"
//             sx={{
//               fontFamily: "'Lora', serif",
//               textAlign: "center",
//               color: "black",
//               marginBottom: 3,  fontFamily: 'var(--font-family-hand)',
//             }}
//           >
//             Welcome to the Recovery in Action Course
//           </Typography>

//           <Typography variant="body1" sx={{   fontFamily: 'var(--font-family-hand)',mb:1}}>
//             <strong>Hosted by:</strong> Safia & Meg (Certified CCI Eating Disorder Recovery Coaches and Co-Hosts of The Rewired Podcast).
//           </Typography>
//           <Typography variant="body1" sx={{   fontFamily: 'var(--font-family-hand)',mb:1}}>
//             The Recovery In Action course is a unique one-month program teaching you practical tools to use in the moment in order to reach your recovery goals.
//           </Typography>
//           <Typography variant="body1" sx={{   fontFamily: 'var(--font-family-hand)',mb:1}}>
//             Have you ever had that moment where you tell yourself, <em>“I can’t go on like this”</em> — only to find yourself repeating the same patterns and struggling to break free?
//           </Typography>
//           <Typography variant="body1" sx={{   fontFamily: 'var(--font-family-hand)',mb:1}}>
//             That’s why we created Recovery in Action — a weekly live course designed to help you bridge the gap between good intentions and real change.
//           </Typography>

//           <Typography
//             variant="h6"
//             sx={{
//               textAlign: "center",
//               fontWeight: 600,
//               color: "black",
//               marginTop: 3,
//                 fontFamily: 'var(--font-family-hand)',mb:1
//             }}
//           >
//             You don’t need to face recovery alone. We’re here to guide, support, and cheer you on every step of the way.
//           </Typography>

//           <Box textAlign="center" mt={4}>
//             <Button
//               variant="contained"
//               size="large"
//               sx={{
//                 backgroundColor: "black",
//                 "&:hover": {
//                   backgroundColor: "black",
//                 },
//                 borderRadius: 2,
//                 textTransform: "none",
//                 fontSize: "16px",
//                 paddingX: 3,
//                   fontFamily: 'var(--font-family-hand)',mb:1
//               }}
//               onClick={() => setShowMore(!showMore)}
//             >
//               {showMore ? "Hide Testimonials" : "Read More Testimonials"}
//             </Button>
//           </Box>

//           <Collapse in={showMore} timeout={600}>
//             <Box
//               sx={{
//                 marginTop: 3,
//                 padding: 2,
//                 border: "1px solid #ddd",
//                 borderRadius: 2,
//                 backgroundColor: "#f9f9f9",
//                 maxHeight: 400,
//                 overflowY: "auto",
//               }}
//             >
//               {testimonials.map((item, index) => (
//                 <Box key={index} sx={{ marginBottom: 2 }}>
//                   <Typography
//                     variant="body1"
//                     sx={{
//                       fontStyle: "italic",
//                       color: "#555",
//                       marginBottom: 1,
//                     }}
//                   >
//                     "{item.text}"
//                   </Typography>
//                   <Typography
//                     variant="subtitle2"
//                     sx={{
//                       fontWeight: "bold",
//                       color: "#FFE332",
//                     }}
//                   >
//                     - {item.author}
//                   </Typography>
//                   {index < testimonials.length - 1 && <Divider sx={{ marginY: 2 }} />}
//                 </Box>
//               ))}
//             </Box>
//           </Collapse>
//         </CardContent>
//       </Card>
//     </Container>
//     <Footer/>
//  </>
//   );
// }

// export default Courses;
"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import {
  Container,
  Card,
  CardContent,
  Typography,
  Divider,
  Box,
  MobileStepper,
  IconButton,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

/* Soft palette like CoachingPackages */
const COLORS = {
  bg: "#FDF6F9",
  accent: "#F8D9E8",
  primary: "#7A4E7E",
  text: "#5C3C58",
};

function Courses() {
  const testimonials = [
    {
      text:
        "I loved that real one to one personalised feeling, I felt so held, safe and reassured that you both really were there every step of the way!",
      author: "K.M.",
    },
    {
      text:
        "It’s honestly beyond anything I could’ve wished for and more! I have a whole bursting toolbox to take away not only now but forever and it’s all invaluable treasure I’ll hold on to!",
      author: "K.M.",
    },
    {
      text:
        "Hearing from your experience and realizing that a lot of what I feel others feel too helped me the most. It makes me believe more in myself.",
      author: "P.H.",
    },
    {
      text:
        "The part I loved the most was you two, you being so natural, talking so openly about your experience with this, your personalities, your authenticity.",
      author: "M.T.",
    },
    {
      text:
        "I thought the pace was great. I like how the tools were drip fed over the month and feel that helped give me a chance to try them all out.",
      author: "H.S.",
    },
    {
      text:
        "The pace and amount of content was just right. It gave us time to write goals and consider tools, so it kept up the momentum.",
      author: "B.S.",
    },
    {
      text:
        "I've found RIA to be incredibly helpful. The content was well thought out and each Sunday session where one or two tools were explained was at a good pace.",
      author: "S.C.",
    },
  ];

  const theme = useTheme();
  const maxSteps = testimonials.length;

  const autoplay = useRef(
    Autoplay({ delay: 5500, stopOnInteraction: false, stopOnMouseEnter: true })
  );
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start", duration: 20 },
    [autoplay.current]
  );
  const [activeStep, setActiveStep] = useState(0);

  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);
  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setActiveStep(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    onSelect();
    return () => emblaApi.off("select", onSelect);
  }, [emblaApi]);

  return (
    <>
      <Navbar />

      {/* Banner — color SAME */}
      <Box
        sx={{
          backgroundColor: "#E2DEC8",
          width: "100%",
          height: { xs: "150px", sm: "180px", md: "200px" },
          display: "flex",
          justifyContent: "center",
          position: "relative",
        }}
      >
        <Typography
          sx={{
            fontFamily: "var(--font-family-hand)",
            fontSize: { xs: "40px", sm: "50px", md: "60px", lg: "70px" },
            fontWeight: 400,
            lineHeight: 1,
            position: "absolute",
            py: { xs: "90px", md: "100px" },
          }}
        >
          Courses
        </Typography>
      </Box>

      {/* Soft section like CoachingPackages */}
      <Box sx={{ bgcolor: COLORS.bg, py: { xs: 6, md: 8 }, px: { xs: 2, md: 4 } }}>
        <Container maxWidth="md">
          <Card
            elevation={0}
            sx={{
              borderRadius: 4,
              backgroundColor: "#fff",
              boxShadow: "0 8px 20px rgba(122, 78, 126, 0.12)",
              overflow: "hidden",
            }}
          >
            <CardContent sx={{ p: { xs: 3, md: 4 } }}>
              <Typography
                variant="h4"
                sx={{
                  textAlign: "center",
                  color: COLORS.primary,
                  fontFamily: "var(--font-family-hand)",
                  mb: 3,
                  fontWeight: 700,
                }}
              >
                Welcome to the Recovery in Action Course
              </Typography>

              {/* <Typography variant="body1" sx={{ fontFamily: "var(--font-family-hand)", color: COLORS.text, mb: 1 }}>
                <strong>Hosted by:</strong> Safia (Certified CCI Eating Disorder Recovery
                Coaches and Co-Hosts of The Rewired Podcast).
              </Typography> */}
              <Typography variant="body1" sx={{ fontFamily: "var(--font-family-hand)", color: COLORS.text, mb: 1 }}>
  <strong>Hosted by:</strong> Safia & Meg (Certified CCI Eating Disorder Recovery Coaches and Co-Hosts of The Rewired Podcast).
</Typography>
              <Typography variant="body1" sx={{ fontFamily: "var(--font-family-hand)", color: COLORS.text, mb: 1 }}>
                The Recovery In Action course is a unique one-month program teaching you practical
                tools to use in the moment in order to reach your recovery goals.
              </Typography>
              <Typography variant="body1" sx={{ fontFamily: "var(--font-family-hand)", color: COLORS.text, mb: 1 }}>
                Have you ever had that moment where you tell yourself,{" "}
                <em>“I can’t go on like this”</em> — only to find yourself repeating the same
                patterns and struggling to break free?
              </Typography>
              <Typography variant="body1" sx={{ fontFamily: "var(--font-family-hand)", color: COLORS.text, mb: 1 }}>
                That’s why we created Recovery in Action — a weekly live course designed to help you
                bridge the gap between good intentions and real change.
              </Typography>

              {/* <Typography
                variant="h6"
                sx={{
                  textAlign: "center",
                  fontWeight: 700,
                  color: COLORS.primary,
                  mt: 3,
                  fontFamily: "var(--font-family-hand)",
                  mb: 2,
                }}
              >
                You don’t need to face recovery alone. I’m here to guide, support, and cheer you
                on every step of the way.
              </Typography> */}
              <Typography
  variant="h6"
  sx={{
    textAlign: "center",
    fontWeight: 700,
    color: COLORS.primary,
    mt: 3,
    fontFamily: "var(--font-family-hand)",
    mb: 2,
  }}
>
  You don’t need to face recovery alone. We’re here to guide, support, and cheer you on every step of the way.
</Typography>

              {/* Testimonials — always visible */}
              <Box
                sx={{
                  mt: 4,
                  border: `1px solid ${COLORS.accent}`,
                  borderRadius: 3,
                  overflow: "hidden",
                  backgroundColor: "#fff",
                }}
              >
                <Box ref={emblaRef} sx={{ overflow: "hidden", width: "100%" }}>
                  <Box sx={{ display: "flex" }}>
                    {testimonials.map((item, index) => (
                      <Box
                        key={index}
                        sx={{
                          minWidth: "100%",
                          flex: "0 0 100%",
                          px: { xs: 3, md: 5 },
                          py: { xs: 3, md: 5 },
                          bgcolor: index % 2 === 0 ? COLORS.bg : "#fff",
                        }}
                      >
                        <Typography
                          variant="body1"
                          sx={{
                            fontStyle: "italic",
                            color: COLORS.text,
                            mb: 1.5,
                            lineHeight: 1.8,
                          }}
                        >
                          “{item.text}”
                        </Typography>
                        <Typography
                          variant="subtitle2"
                          sx={{
                            fontWeight: 700,
                            color: COLORS.primary,
                          }}
                        >
                          – {item.author}
                        </Typography>
                      </Box>
                    ))}
                  </Box>
                </Box>

                <Divider />

                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    px: 1,
                  }}
                >
                  <IconButton onClick={scrollPrev} size="large">
                    {theme.direction === "rtl" ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
                  </IconButton>

                  <MobileStepper
                    variant="dots"
                    steps={maxSteps}
                    position="static"
                    activeStep={activeStep}
                    sx={{
                      flex: 1,
                      background: "transparent",
                      ".MuiMobileStepper-dot": {
                        backgroundColor: "rgba(122,78,126,0.25)",
                        width: 8,
                        height: 8,
                        mx: 0.5,
                      },
                      ".MuiMobileStepper-dotActive": {
                        backgroundColor: COLORS.primary,
                        width: 24,
                        borderRadius: 999,
                      },
                    }}
                    nextButton={
                      <IconButton onClick={scrollNext} size="large">
                        {theme.direction === "rtl" ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
                      </IconButton>
                    }
                    backButton={<span />}
                  />
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Container>
      </Box>

      <Footer />
    </>
  );
}

export default Courses;
