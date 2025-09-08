// "use client";
// import { Box, Grid, Typography, Button, Paper, Divider } from "@mui/material";
// import React from "react";
// import { Checkbox, FormControlLabel } from "@mui/material";

// function CoachingPackage() {
//   const packages = [
//     {
//       title: "4-Week Virtual Coaching Package",
//       price: "$600",
//       features: [
//         "Weekly sessions (4 sessions, 50-min each)",
//         "Individualized goals and assignments for the work",
//         "WhatsApp support between sessions",
//         "Communication with treatment team",
//       ],
//     },
//     {
//       title: "12-Week Virtual Coaching Package",
//       price: "$1620",
//       features: [
//         "Weekly sessions (12 sessions, 50-min each)",
//         "Individualized goals and assignments for the work",
//         "WhatsApp support between sessions",
//         "Communication with treatment  team",
//       ],
//     },
//   ];

//   return (
//     <Box
//       sx={{
//         width: "100%",
//         bgcolor: "#fff",
//         py: 8,
//         px: { xs: 2, sm: 4, md: 6 },
//       }}
//     >
//       <Box
//         sx={{
//           display: "flex",
//           flexDirection: "column",
//           justifyContent: "center",
//           alignItems: "center",
//           gap: 4,
//         }}
//       >
//         {/* Heading Section */}
//         <Box
//           sx={{
//             backgroundColor: "#FFE332",
//             width: "280px",
//             // display: "flex", // ➜ add this
//             // justifyContent: "center", // ➜ horizontally center text
//             // alignItems: "center", // ➜ vertically center if needed
//             p: "8px 20px 8px 25px",
//             borderRadius: "60px",
//           }}
//         >
//           <Typography
//             sx={{
//               fontWeight: 500,
//               fontSize: { xs: "12px", sm: "18px" },
//               textAlign: "center",
//               fontFamily: "var(--font-family-hand)",
//             }}
//           >
//             Coaching Packages
//           </Typography>
//         </Box>
//         <Typography
//           sx={{
//             fontWeight: 500,
//             fontSize: { xs: "20px", sm: "24px", md: "30px" },
//             fontFamily: "var(--font-family-hand)",
//             textAlign: "center",
//             lineHeight: 2,
//             mb: 4,
//           }}
//         >
//           Virtual Eating Disorder Recovery Coaching
//         </Typography>
//       </Box>

//       <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
//         {/* Packages Grid */}
//         <Grid
//           container
//           spacing={8}
//           sx={{
//             //   maxWidth: "1200px",
//             mx: "auto",
//           }}
//         >
//           {packages.map((pkg, index) => (
//             <Grid size={{ xs: 12, sm: 6 }} key={index}>
//               <Paper
//                 elevation={3}
//                 sx={{
//                   width: "100%",
//                   maxWidth: "400px",
//                   borderRadius: "60px",
//                   transition: "0.3s",
//                   "&:hover": {
//                     cursor: "pointer",
//                     transform: "translateY(-5px)",
//                     transition: "0.3s",
//                   },

//                   backgroundColor: "#1E1E1E",
//                 }}
//               >
//                 <Box sx={{ p: 4 }}>
//                   {/* Package Title */}
//                   <Typography
//                     sx={{
//                       fontWeight: 500,
//                       fontSize: { xs: "20px", md: "22px" },
//                       mb: 2,
//                       color: "var(--white-bg)",
//                       fontFamily: "var(--font-family-hand)",
//                     }}
//                   >
//                     {pkg.title}
//                   </Typography>

//                   <Divider sx={{ my: 2 }} />

//                   {/* Included Features */}
//                   <Box>
//                     <Typography
//                       variant="subtitle1"
//                       sx={{
//                         fontWeight: 700,
//                         mb: 1.5,
//                         color: "var(--white-bg)",
//                         fontFamily: "var(--font-family-hand)",
//                       }}
//                     >
//                       Includes:
//                     </Typography>
//                     <Box>
//                       {pkg.features.map((feature, i) => (
//                         <FormControlLabel
//                           key={i}
//                           labelPlacement="end"
//                           control={
//                             <Checkbox
//                               checked={true}
//                               disableRipple
//                               icon={
//                                 <Box
//                                   sx={{
//                                     width: "28px",
//                                     height: "28px",
//                                     borderRadius: "10px",
//                                     border: "2px solid #ccc",
//                                     bgcolor: "#fff",
//                                   }}
//                                 />
//                               }
//                               checkedIcon={
//                                 <Box
//                                   sx={{
//                                     width: "28px",
//                                     height: "28px",
//                                     borderRadius: "10px",
//                                     bgcolor: "#FFE332",
//                                     display: "flex",
//                                     alignItems: "center",
//                                     justifyContent: "center",
//                                   }}
//                                 >
//                                   <Box
//                                     component="span"
//                                     sx={{
//                                       width: 10,
//                                       height: 10,
//                                       bgcolor: "#1E1E1E",
//                                       clipPath:
//                                         "polygon(14% 44%, 0% 65%, 50% 100%, 100% 15%, 80% 0%, 43% 62%)",
//                                     }}
//                                   />
//                                 </Box>
//                               }
//                               sx={{ p: 0, mr: 1 }}
//                             />
//                           }
//                           label={
//                             <Typography
//                               sx={{
//                                 fontSize: { xs: "13px" },
//                                 color: "var(--white-bg)",
//                                 fontFamily: "var(--font-family-hand)",
//                                 lineHeight: 3.5,
//                               }}
//                             >
//                               {feature}
//                             </Typography>
//                           }
//                           sx={{ alignItems: "center", mb: 1 }}
//                         />
//                       ))}
//                     </Box>
//                   </Box>

//                   {/* <Divider sx={{ my: 2 }} /> */}
//                 </Box>

//                 {/* Price and Button */}
//                 <Box
//                   sx={{
//                     backgroundColor: "#FFE332",
//                     width: "100%",
//                     py: 2,
//                     display: "flex",
//                     justifyContent: "center",
//                     alignItems: "center",
//                     borderBottomLeftRadius: "58px",
//                     borderBottomRightRadius: "58px",
//                   }}
//                 >
//                   <Typography
//                     sx={{
//                       fontWeight: 700,
//                       color: "#1E1E1E",
//                       fontFamily: "var(--font-family-hand)",
//                       fontSize: "25px",
//                     }}
//                   >
//                     {pkg.price}
//                   </Typography>
//                 </Box>
//               </Paper>
//             </Grid>
//           ))}
//         </Grid>
//       </Box>
//     </Box>
//   );
// }

// export default CoachingPackage;
// "use client";
// import { Box, Grid, Typography, Paper, Divider } from "@mui/material";
// import React from "react";
// import { Checkbox, FormControlLabel } from "@mui/material";

// function CoachingPackage() {
//   const packages = [
//     {
//       title: "4-Week Virtual Coaching Package",
//       price: "£440",
//       features: [
//         "Weekly sessions (4 sessions, 50-min each)",
//         "Individualized goals and assignments for the work",
//         "WhatsApp support between sessions",
//         "Communication with treatment team",
//       ],
//     },
//     {
//       title: "12-Week Virtual Coaching Package",
//       price: "AED 2,250",
//       features: [
//         "Weekly sessions (12 sessions, 50-min each)",
//         "Individualized goals and assignments for the work",
//         "WhatsApp support between sessions",
//         "Communication with treatment team",
//       ],
//     },
//   ];

//   return (
//     <Box
//       sx={{
//         width: "100%",
//         bgcolor: "#fff",
//         py: 8,
//         px: { xs: 2, sm: 4, md: 6 },
//       }}
//     >
//       <Box
//         sx={{
//           display: "flex",
//           flexDirection: "column",
//           justifyContent: "center",
//           alignItems: "center",
//           gap: 4,
//         }}
//       >
//         {/* Heading Section */}
//         <Box
//           sx={{
//             backgroundColor: "#F8C8DC", // Soft Pink
//             width: "280px",
//             p: "8px 20px 8px 25px",
//             borderRadius: "60px",
//           }}
//         >
//           <Typography
//             sx={{
//               fontWeight: 500,
//               fontSize: { xs: "12px", sm: "18px" },
//               textAlign: "center",
//               fontFamily: "var(--font-family-hand)",
//               color: "#4B0082", // Deep Purple for contrast
//             }}
//           >
//             Coaching Packages
//           </Typography>
//         </Box>
//         <Typography
//           sx={{
//             fontWeight: 500,
//             fontSize: { xs: "20px", sm: "24px", md: "30px" },
//             fontFamily: "var(--font-family-hand)",
//             textAlign: "center",
//             lineHeight: 2,
//             mb: 4,
//             color: "#4B0082",
//           }}
//         >
//           Virtual Eating Disorder Recovery Coaching
//         </Typography>
//       </Box>

//       <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
//         {/* Packages Grid */}
//         <Grid
//           container
//           spacing={8}
//           sx={{
//             mx: "auto",
//           }}
//         >
//           {packages.map((pkg, index) => (
//             <Grid size={{ xs: 12, sm: 6 }} key={index}>
//               <Paper
//                 elevation={3}
//                 sx={{
//                   width: "100%",
//                   maxWidth: "400px",
//                   borderRadius: "60px",
//                   transition: "0.3s",
//                   "&:hover": {
//                     cursor: "pointer",
//                     transform: "translateY(-5px)",
//                     transition: "0.3s",
//                   },
//                   background: "linear-gradient(135deg, #F8C8DC, #D8B4E2)", // Pink to Purple gradient
//                 }}
//               >
//                 <Box sx={{ p: 4 }}>
//                   {/* Package Title */}
//                   <Typography
//                     sx={{
//                       fontWeight: 600,
//                       fontSize: { xs: "20px", md: "22px" },
//                       mb: 2,
//                       color: "#4B0082",
//                       fontFamily: "var(--font-family-hand)",
//                     }}
//                   >
//                     {pkg.title}
//                   </Typography>

//                   <Divider sx={{ my: 2, bgcolor: "#E6CCE6" }} />

//                   {/* Included Features */}
//                   <Box>
//                     <Typography
//                       variant="subtitle1"
//                       sx={{
//                         fontWeight: 700,
//                         mb: 1.5,
//                         color: "#4B0082",
//                         fontFamily: "var(--font-family-hand)",
//                       }}
//                     >
//                       Includes:
//                     </Typography>
//                     <Box>
//                       {pkg.features.map((feature, i) => (
//                         <FormControlLabel
//                           key={i}
//                           labelPlacement="end"
//                           control={
//                             <Checkbox
//                               checked={true}
//                               disableRipple
//                               icon={
//                                 <Box
//                                   sx={{
//                                     width: "28px",
//                                     height: "28px",
//                                     borderRadius: "10px",
//                                     border: "2px solid #ccc",
//                                     bgcolor: "#fff",
//                                   }}
//                                 />
//                               }
//                               checkedIcon={
//                                 <Box
//                                   sx={{
//                                     width: "28px",
//                                     height: "28px",
//                                     borderRadius: "10px",
//                                     bgcolor: "#F8C8DC", // Pink checked background
//                                     display: "flex",
//                                     alignItems: "center",
//                                     justifyContent: "center",
//                                   }}
//                                 >
//                                   <Box
//                                     component="span"
//                                     sx={{
//                                       width: 10,
//                                       height: 10,
//                                       bgcolor: "#4B0082", // Purple tick
//                                       clipPath:
//                                         "polygon(14% 44%, 0% 65%, 50% 100%, 100% 15%, 80% 0%, 43% 62%)",
//                                     }}
//                                   />
//                                 </Box>
//                               }
//                               sx={{ p: 0, mr: 1 }}
//                             />
//                           }
//                           label={
//                             <Typography
//                               sx={{
//                                 fontSize: { xs: "13px" },
//                                 color: "#4B0082",
//                                 fontFamily: "var(--font-family-hand)",
//                                 lineHeight: 3.5,
//                               }}
//                             >
//                               {feature}
//                             </Typography>
//                           }
//                           sx={{ alignItems: "center", mb: 1 }}
//                         />
//                       ))}
//                     </Box>
//                   </Box>
//                 </Box>

//                 {/* Price and Button */}
//                 <Box
//                   sx={{
//                     backgroundColor: "#E6CCE6", // Light lavender for footer
//                     width: "100%",
//                     py: 2,
//                     display: "flex",
//                     justifyContent: "center",
//                     alignItems: "center",
//                     borderBottomLeftRadius: "58px",
//                     borderBottomRightRadius: "58px",
//                   }}
//                 >
//                   <Typography
//                     sx={{
//                       fontWeight: 700,
//                       color: "#4B0082",
//                       fontFamily: "var(--font-family-hand)",
//                       fontSize: "25px",
//                     }}
//                   >
//                     {pkg.price}
//                   </Typography>
//                 </Box>
//               </Paper>
//             </Grid>
//           ))}
//         </Grid>
//       </Box>
//     </Box>
//   );
// }

// export default CoachingPackage;


// "use client";
// import { Box, Grid, Typography, Paper, Divider } from "@mui/material";
// import React from "react";
// import { Checkbox, FormControlLabel } from "@mui/material";

// function CoachingPackage() {
//   const packages = [
//     {
//       title: "4-Week Virtual Coaching Package",
//       price: "£440",
//       features: [
//         "Weekly sessions (4 sessions, 50-min each)",
//         "Individualized goals and assignments",
//         "WhatsApp support between sessions",
//         "Communication with treatment team",
//       ],
//     },
//     {
//       title: "4-Week Virtual Coaching Package",
//       price: "AED 2,250",
//       features: [
//         "Weekly sessions (4 sessions, 50-min each)",
//         "Individualized goals and assignments",
//         "WhatsApp support between sessions",
//         "Communication with treatment team",
//       ],
//     },
//   ];

//   return (
//     <Box
//       sx={{
//         width: "100%",
//         bgcolor: "#FDF6F9", // Soft background
//         py: 8,
//         px: { xs: 2, sm: 4, md: 6 },
//       }}
//     >
//       {/* Heading Section */}
//       <Box
//         sx={{
//           textAlign: "center",
//           mb: 6,
//         }}
//       >
//         <Box
//           sx={{
//             backgroundColor: "#F8D9E8",
//             width: "fit-content",
//             mx: "auto",
//             px: 3,
//             py: 1,
//             borderRadius: "50px",
//           }}
//         >
//           <Typography
//             sx={{
//               fontWeight: 500,
//               fontSize: { xs: "14px", sm: "18px" },
//               fontFamily: "var(--font-family-hand)",
//               color: "#7A4E7E",
//             }}
//           >
//             Coaching Packages
//           </Typography>
//         </Box>
//         <Typography
//           sx={{
//             fontWeight: 500,
//             fontSize: { xs: "22px", sm: "28px", md: "32px" },
//             fontFamily: "var(--font-family-hand)",
//             color: "#5C3C58",
//             mt: 3,
//           }}
//         >
//           Virtual Eating Disorder Recovery Coaching
//         </Typography>
//       </Box>

//       {/* Packages Grid */}
//       <Grid container spacing={6} justifyContent="center">
//         {packages.map((pkg, index) => (
//           <Grid item xs={12} sm={6} key={index}>
//             <Paper
//               elevation={3}
//               sx={{
//                 width: "100%",
//                 maxWidth: "400px",
//                 mx: "auto",
//                 borderRadius: "30px",
//                 backgroundColor: "#FFFFFF",
//                 overflow: "hidden",
//                 boxShadow: "0 4px 15px rgba(122, 78, 126, 0.1)",
//                 transition: "0.3s",
//                 "&:hover": {
//                   transform: "translateY(-5px)",
//                   boxShadow: "0 8px 20px rgba(122, 78, 126, 0.2)",
//                 },
//               }}
//             >
//               <Box sx={{ p: 4 }}>
//                 {/* Package Title */}
//                 <Typography
//                   sx={{
//                     fontWeight: 600,
//                     fontSize: { xs: "20px", md: "22px" },
//                     mb: 2,
//                     color: "#7A4E7E",
//                     fontFamily: "var(--font-family-hand)",
//                   }}
//                 >
//                   {pkg.title}
//                 </Typography>

//                 <Divider sx={{ my: 2 }} />

//                 {/* Included Features */}
//                 <Box>
//                   <Typography
//                     variant="subtitle1"
//                     sx={{
//                       fontWeight: 700,
//                       mb: 1.5,
//                       color: "#9B6B91",
//                       fontFamily: "var(--font-family-hand)",
//                     }}
//                   >
//                     Includes:
//                   </Typography>
//                   <Box>
//                     {pkg.features.map((feature, i) => (
//                       <FormControlLabel
//                         key={i}
//                         control={
//                           <Checkbox
//                             checked={true}
//                             disableRipple
//                             icon={
//                               <Box
//                                 sx={{
//                                   width: "22px",
//                                   height: "22px",
//                                   borderRadius: "6px",
//                                   border: "2px solid #E1C3D3",
//                                   bgcolor: "#fff",
//                                 }}
//                               />
//                             }
//                             checkedIcon={
//                               <Box
//                                 sx={{
//                                   width: "22px",
//                                   height: "22px",
//                                   borderRadius: "6px",
//                                   bgcolor: "#F3B8D0",
//                                   display: "flex",
//                                   alignItems: "center",
//                                   justifyContent: "center",
//                                 }}
//                               >
//                                 <Box
//                                   component="span"
//                                   sx={{
//                                     width: 8,
//                                     height: 8,
//                                     bgcolor: "#7A4E7E",
//                                     clipPath:
//                                       "polygon(14% 44%, 0% 65%, 50% 100%, 100% 15%, 80% 0%, 43% 62%)",
//                                   }}
//                                 />
//                               </Box>
//                             }
//                             sx={{ p: 0, mr: 1 }}
//                           />
//                         }
//                         label={
//                           <Typography
//                             sx={{
//                               fontSize: { xs: "14px" },
//                               color: "#5C3C58",
//                               fontFamily: "var(--font-family-hand)",
//                               lineHeight: 2.5,
//                             }}
//                           >
//                             {feature}
//                           </Typography>
//                         }
//                         sx={{ alignItems: "center", mb: 1 }}
//                       />
//                     ))}
//                   </Box>
//                 </Box>
//               </Box>

//               {/* Price Section */}
//               <Box
//                 sx={{
//                   backgroundColor: "#F8D9E8",
//                   py: 2,
//                   textAlign: "center",
//                 }}
//               >
//                 <Typography
//                   sx={{
//                     fontWeight: 700,
//                     color: "#7A4E7E",
//                     fontFamily: "var(--font-family-hand)",
//                     fontSize: "24px",
//                   }}
//                 >
//                   {pkg.price}
//                 </Typography>
//               </Box>
//             </Paper>
//           </Grid>
//         ))}
//       </Grid>
//     </Box>
//   );
// }

// export default CoachingPackage;
"use client";
import {
  Box,
  Grid,
  Typography,
  Paper,
  Divider,
  MenuItem,
  Select,
  FormControl,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import React, { useState } from "react";

function CoachingPackage() {
  // Exact client text (different language/currency)
  const packageData = {
    gbp: [
      {
        title: "4-Week Recovery Coaching Package",
        price: "£440",
        features: [
          "A Personalised Recovery Roadmap – Together, we’ll create a plan tailored to your goals, helping you stay motivated and make steady progress.",
          "Four Weekly One-on-One Coaching Sessions – 50 minute guided sessions where we explore challenges, celebrate wins, and develop practical strategies for real-life recovery.",
          "Real-World Tools for Daily Life – Practical strategies and tips you can use every day to face triggers, stay motivated, and feel confident in your recovery.",
          "In-the-Moment Support via WhatsApp – Reach out whenever you need guidance, encouragement, or accountability between sessions.",
          "Collaborative Care & Insights – I work alongside other professionals as needed to ensure your recovery journey is fully supported, safe, and effective.",
        ],
      },
      {
        title: "Recovery Booster Session",
        price: "£150",
        features: [
          "Focused Coaching Session (60 minutes) – A deep-dive session to troubleshoot obstacles, refine strategies, and reinforce recovery habits.",
          "Action Plan – Develop a simple, practical plan with clear steps to address challenges, maintain motivation, and practice new skills.",
          "In-the-Moment WhatsApp Support – Access guidance, encouragement, and accountability throughout the week.",
        ],
      },
    ],
    usd: [
      {
        title: "4-Week Recovery Coaching Package",
        price: "$600",
        features: [
          "A Personalised Recovery Roadmap – Together, we’ll create a plan tailored to your goals, helping you stay motivated and make steady progress.",
          "Four Weekly One-on-One Coaching Sessions – 50 minute guided sessions where we explore challenges, celebrate wins, and develop practical strategies for real-life recovery.",
          "Real-World Tools for Daily Life – Practical strategies and tips you can use every day to face triggers, stay motivated, and feel confident in your recovery.",
          "In-the-Moment Support via WhatsApp – Reach out whenever you need guidance, encouragement, or accountability between sessions.",
          "Collaborative Care & Insights – I work alongside other professionals as needed to ensure your recovery journey is fully supported, safe, and effective.",
        ],
      },
      {
        title: "Recovery Booster Session",
        price: "$195",
        features: [
          "Focused Coaching Session (60 minutes) – A deep-dive session to troubleshoot obstacles, refine strategies, and reinforce recovery habits.",
          "Action Plan – Develop a simple, practical plan with clear steps to address challenges, maintain motivation, and practice new skills.",
          "In-the-Moment WhatsApp Support – Access guidance, encouragement, and accountability throughout the week.",
        ],
      },
    ],
    aud: [
      {
        title: "4-Week Recovery Coaching Package",
        price: "A$920",
        features: [
          "A Personalised Recovery Roadmap – Together, we’ll create a plan tailored to your goals, helping you stay motivated and make steady progress.",
          "Four Weekly One-on-One Coaching Sessions – 50 minute guided sessions where we explore challenges, celebrate wins, and develop practical strategies for real-life recovery.",
          "Real-World Tools for Daily Life – Practical strategies and tips you can use every day to face triggers, stay motivated, and feel confident in your recovery.",
          "In-the-Moment Support via WhatsApp – Reach out whenever you need guidance, encouragement, or accountability between sessions.",
          "Collaborative Care & Insights – I work alongside other professionals as needed to ensure your recovery journey is fully supported, safe, and effective.",
        ],
      },
      {
        title: "Recovery Booster Session",
        price: "A$270",
        features: [
          "Focused Coaching Session (60 minutes) – A deep-dive session to troubleshoot obstacles, refine strategies, and reinforce recovery habits.",
          "Action Plan – Develop a simple, practical plan with clear steps to address challenges, maintain motivation, and practice new skills.",
          "In-the-Moment WhatsApp Support – Access guidance, encouragement, and accountability throughout the week.",
        ],
      },
    ],
    aed: [
      {
        title: "باقة التدريب على التعافي لمدة 4 أسابيع",
        price: "د.إ 2200",
        features: [
          "خطة تعافي شخصية – معًا سننشئ خطة مخصصة لأهدافك لمساعدتك على البقاء متحفزًا وإحراز تقدم ثابت.",
          "أربع جلسات تدريبية أسبوعية فردية – جلسات إرشادية مدتها 50 دقيقة نستكشف فيها التحديات ونحتفل بالنجاحات ونطور استراتيجيات عملية للتعافي.",
          "أدوات واقعية للحياة اليومية – استراتيجيات ونصائح عملية يمكنك استخدامها يوميًا لمواجهة المحفزات والبقاء متحفزًا والشعور بالثقة في تعافيك.",
          "الدعم الفوري عبر واتساب – تواصل في أي وقت تحتاج فيه إلى إرشاد أو تشجيع أو محاسبة بين الجلسات.",
          "رعاية وتعاون – أعمل جنبًا إلى جنب مع المتخصصين الآخرين حسب الحاجة لضمان أن تكون رحلتك نحو التعافي مدعومة وآمنة وفعالة.",
        ],
      },
      {
        title: "جلسة التعافي المعززة",
        price: "د.إ 675",
        features: [
          "جلسة تدريب مركزة (60 دقيقة) – جلسة متعمقة لحل العقبات وصقل الاستراتيجيات وتعزيز عادات التعافي.",
          "خطة عمل – تطوير خطة عملية بسيطة بخطوات واضحة لمواجهة التحديات والحفاظ على الدافع وممارسة المهارات الجديدة.",
          "دعم فوري عبر واتساب – الوصول إلى الإرشاد والتشجيع والمحاسبة طوال الأسبوع.",
        ],
      },
    ],
  };

  const [selected, setSelected] = useState("gbp");

  return (
    <Box sx={{ width: "100%", bgcolor: "#FDF6F9", py: 8, px: { xs: 2, sm: 4, md: 6 } }}>
      {/* Dropdown Selector */}
      <Box sx={{ textAlign: "center", mb: 4 }}>
        <FormControl sx={{ minWidth: 250 }}>
          <Select
            value={selected}
            onChange={(e) => setSelected(e.target.value)}
            sx={{
              backgroundColor: "#fff",
              borderRadius: "30px",
              "& .MuiOutlinedInput-notchedOutline": { border: "none" },
              "& .MuiSelect-select": { py: 1, px: 2 },
            }}
          >
            <MenuItem value="gbp">English – GBP (£)</MenuItem>
            <MenuItem value="usd">English – USD ($)</MenuItem>
            <MenuItem value="aud">English – AUD (A$)</MenuItem>
            <MenuItem value="aed">العربية – AED (د.إ)</MenuItem>
          </Select>
        </FormControl>
      </Box>

      {/* Heading */}
      <Box sx={{ textAlign: "center", mb: 6 }}>
        <Box
          sx={{
            backgroundColor: "#F8D9E8",
            width: "fit-content",
            mx: "auto",
            px: 3,
            py: 1,
            borderRadius: "50px",
          }}
        >
          <Typography
            sx={{
              fontWeight: 500,
              fontSize: { xs: "14px", sm: "18px" },
              fontFamily: "var(--font-family-hand)",
              color: "#7A4E7E",
            }}
          >
            {selected === "aed" ? "الباقات التدريبية" : "Coaching Packages"}
          </Typography>
        </Box>
        <Typography
          sx={{
            fontWeight: 500,
            fontSize: { xs: "22px", sm: "28px", md: "32px" },
            fontFamily: "var(--font-family-hand)",
            color: "#5C3C58",
            mt: 3,
          }}
        >
          {selected === "aed"
            ? "التدريب الافتراضي على التعافي من اضطرابات الأكل"
            : "Virtual Eating Disorder Recovery Coaching"}
        </Typography>
      </Box>

      {/* Packages Grid */}
      <Grid container spacing={6} justifyContent="center">
        {packageData[selected].map((pkg, index) => (
          <Grid item xs={12} sm={6} key={index}>
            <Paper
              elevation={3}
              sx={{
                width: "100%",
                maxWidth: "400px",
                mx: "auto",
                borderRadius: "30px",
                backgroundColor: "#FFFFFF",
                overflow: "hidden",
                boxShadow: "0 4px 15px rgba(122, 78, 126, 0.1)",
                transition: "0.3s",
                "&:hover": {
                  transform: "translateY(-5px)",
                  boxShadow: "0 8px 20px rgba(122, 78, 126, 0.2)",
                },
                direction: selected === "aed" ? "rtl" : "ltr",
              }}
            >
              <Box sx={{ p: 4 }}>
                {/* Package Title */}
                <Typography
                  sx={{
                    fontWeight: 600,
                    fontSize: { xs: "20px", md: "22px" },
                    mb: 2,
                    color: "#7A4E7E",
                    fontFamily: "var(--font-family-hand)",
                  }}
                >
                  {pkg.title}
                </Typography>

                <Divider sx={{ my: 2 }} />

                {/* Included Features */}
                <Box>
                  <Typography
                    variant="subtitle1"
                    sx={{
                      fontWeight: 700,
                      mb: 1.5,
                      color: "#9B6B91",
                      fontFamily: "var(--font-family-hand)",
                    }}
                  >
                    {selected === "aed" ? "تتضمن:" : "Includes:"}
                  </Typography>
                  <Box>
                    {pkg.features.map((feature, i) => (
                      <FormControlLabel
                        key={i}
                        control={<Checkbox checked disableRipple sx={{ p: 0, mr: 1 }} />}
                        label={
                          <Typography
                            sx={{
                              fontSize: { xs: "14px" },
                              color: "#5C3C58",
                              fontFamily: "var(--font-family-hand)",
                              lineHeight: 2.5,
                            }}
                          >
                            {feature}
                          </Typography>
                        }
                        sx={{ alignItems: "center", mb: 1 }}
                      />
                    ))}
                  </Box>
                </Box>
              </Box>

              {/* Price Section */}
              <Box sx={{ backgroundColor: "#F8D9E8", py: 2, textAlign: "center" }}>
                <Typography
                  sx={{
                    fontWeight: 700,
                    color: "#7A4E7E",
                    fontFamily: "var(--font-family-hand)",
                    fontSize: "24px",
                  }}
                >
                  {pkg.price}
                </Typography>
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default CoachingPackage;
