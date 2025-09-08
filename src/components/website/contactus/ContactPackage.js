"use client";
import { Box, Grid, Typography, Button, Paper, Divider } from "@mui/material";
import React from "react";
import { Checkbox, FormControlLabel } from "@mui/material";

function ContactPackage() {

      const packages = [
    {
      title: "4-Week Virtual Coaching Package",
      price: "$600",
      features: [
        "Weekly sessions (4 sessions, 50-min each)",
        "Individualized goals and assignments for the work",
        "WhatsApp support between sessions",
        "Communication with treatment team",
      ],
    },
    {
      title: "12-Week Virtual Coaching Package",
      price: "$1620",
      features: [
        "Weekly sessions (12 sessions, 50-min each)",
        "Individualized goals and assignments for the work",
        "WhatsApp support between sessions",
        "Communication with treatment  team",
      ],
    },
  ];

  return (
     <Box
      sx={{
        width: "100%",
        bgcolor: "#fff",
        py: 8,
        px: { xs: 2, sm: 4, md: 6 },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: 4,
        }}
      >
        {/* Heading Section */}
        <Box
          sx={{
            backgroundColor: "#FFE332",
            width: "280px",
            // display: "flex", // ➜ add this
            // justifyContent: "center", // ➜ horizontally center text
            // alignItems: "center", // ➜ vertically center if needed
            p: "8px 20px 8px 25px",
            borderRadius: "60px",
          }}
        >
          <Typography
            sx={{
              fontWeight: 500,
              fontSize: { xs: "12px", sm: "18px" },
              textAlign: "center",
              fontFamily: "var(--font-family-hand)",
            }}
          >
            Coaching Packages
          </Typography>
        </Box>
        <Typography
          sx={{
            fontWeight: 500,
            fontSize: { xs: "20px", sm: "24px", md: "30px" },
            fontFamily: "var(--font-family-hand)",
            textAlign: "center",
            lineHeight: 2,
            mb: 4,
          }}
        >
          Virtual Eating Disorder Recovery Coaching
        </Typography>
      </Box>

      <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
        {/* Packages Grid */}
        <Grid
          container
          spacing={8}
          sx={{
            //   maxWidth: "1200px",
            mx: "auto",
          }}
        >
          {packages.map((pkg, index) => (
            <Grid size={{ xs: 12, sm: 6 }} key={index}>
              <Paper
                elevation={3}
                sx={{
                  width: "100%",
                  maxWidth: "400px",
                  borderRadius: "60px",
                  transition: "0.3s",
                  "&:hover": {
                    cursor: "pointer",
                    transform: "translateY(-5px)",
                    transition: "0.3s",
                  },

                  backgroundColor: "#1E1E1E",
                }}
              >
                <Box sx={{ p: 4 }}>
                  {/* Package Title */}
                  <Typography
                    sx={{
                      fontWeight: 500,
                      fontSize: { xs: "20px", md: "22px" },
                      mb: 2,
                      color: "var(--white-bg)",
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
                        color: "var(--white-bg)",
                        fontFamily: "var(--font-family-hand)",
                      }}
                    >
                      Includes:
                    </Typography>
                    <Box>
                      {pkg.features.map((feature, i) => (
                        <FormControlLabel
                          key={i}
                          labelPlacement="end"
                          control={
                            <Checkbox
                              checked={true}
                              disableRipple
                              icon={
                                <Box
                                  sx={{
                                    width: "28px",
                                    height: "28px",
                                    borderRadius: "10px",
                                    border: "2px solid #ccc",
                                    bgcolor: "#fff",
                                  }}
                                />
                              }
                              checkedIcon={
                                <Box
                                  sx={{
                                    width: "28px",
                                    height: "28px",
                                    borderRadius: "10px",
                                    bgcolor: "#FFE332",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                  }}
                                >
                                  <Box
                                    component="span"
                                    sx={{
                                      width: 10,
                                      height: 10,
                                      bgcolor: "#1E1E1E",
                                      clipPath:
                                        "polygon(14% 44%, 0% 65%, 50% 100%, 100% 15%, 80% 0%, 43% 62%)",
                                    }}
                                  />
                                </Box>
                              }
                              sx={{ p: 0, mr: 1 }}
                            />
                          }
                          label={
                            <Typography
                              sx={{
                                fontSize: { xs: "13px" },
                                color: "var(--white-bg)",
                                fontFamily: "var(--font-family-hand)",
                                lineHeight: 3.5,
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

                  {/* <Divider sx={{ my: 2 }} /> */}
                </Box>

                {/* Price and Button */}
                <Box
                  sx={{
                    backgroundColor: "#FFE332",
                    width: "100%",
                    py: 2,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    borderBottomLeftRadius: "58px",
                    borderBottomRightRadius: "58px",
                  }}
                >
                  <Typography
                    sx={{
                      fontWeight: 700,
                      color: "#1E1E1E",
                      fontFamily: "var(--font-family-hand)",
                      fontSize: "25px",
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
    </Box>
  )
}

export default ContactPackage