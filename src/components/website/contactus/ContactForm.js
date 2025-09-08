"use client"
import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Grid,
  IconButton,
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import InstagramIcon from "@mui/icons-material/Instagram";
import Link from "next/link";
import CircularProgress from "@mui/material/CircularProgress";
import Swal from "sweetalert2";
const ContactForm = () => {
    const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const validate = () => {
    let newErrors = {};
    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = "Enter a valid email";
    }
    if (!form.message.trim()) newErrors.message = "Message is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });


if (res.ok) {
Swal.fire({
  title: "🎉 Message Sent!",
  text: "Thank you for reaching out. We'll get back to you shortly!",
  icon: "success",
  confirmButtonText: "Awesome!",
  background: "#fff9f2",
  color: "#5C3C58",
  confirmButtonColor: "#7A4E7E",
  customClass: {
    popup: "animated-popup",
    title: "custom-title",
    confirmButton: "custom-confirm",
  },
  showClass: {
    popup: "animate__animated animate__fadeInDown",
  },
  hideClass: {
    popup: "animate__animated animate__fadeOutUp",
  },
});

  setForm({ name: "", email: "", message: "" });
} else {
  Swal.fire("❌ Failed", "Could not send message", "error");
}

    } catch (error) {
      alert("Error: " + error.message);
    }
    setLoading(false);
  };

  return (
    <Box
      sx={{
        maxWidth: "1200px",
        margin: "auto",
        py: 8,
        px: { xs: 2, sm: 4, md: 6 },
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
      }}
    >
      <Grid container justifyContent={"center"} spacing={{ xs:10, md:4}}>
        <Grid size={{ xs: 12, md: 7 }}>
          <Box display={"flex"} flexDirection={"column"} gap={{ xs:"15px", sm:"10px" }}>
            {/* <Typography
              sx={{
                fontWeight: 400,
                fontSize: "20px",
                fontFamily: "var(--font-family-hand)",
                textAlign: { xs: "center", md: "start" },
              }}
            >
              We are here to Help you
            </Typography> */}

            <Typography
              sx={{
                fontWeight: 600,
                fontSize: { xs:"30px", md:"40px"},
                fontFamily: "var(--font-family-hand)",
                // mx:{ xs:"auto", sm:"none"}
                textAlign: { xs: "center", md: "start" },
              }}
            >
              Drop me a line and I'll get back to you shortly.
            </Typography>
{/* 
            <Typography
              sx={{
                fontWeight: 500,
                fontSize: { xs:"20px", md:"25px"},
                fontFamily: "var(--font-family-hand)",
                textAlign: { xs: "center", md: "start" },
              }}
            >
              From ideas to execution — 
              talk to our team.
            </Typography> */}

          <Box
  display="flex"
  flexDirection="column"
  alignItems={{ xs: "flex-start", md: "flex-start" }} // Always left-aligned
  justifyContent="flex-start" // Always top-aligned
  gap="15px"
  width="100%" // Ensure full width
>
  {/* Email */}
  <Box
    display="flex"
    flexDirection="row"
    alignItems="center"
    gap="20px"
    width={{ xs: "100%", md: "auto" }} // Full width on mobile
  >
    <IconButton
      sx={{
        backgroundColor: "#FFE332",
        borderRadius: "25px",
        padding: "8px",
        flexShrink: 0 // Prevent icon from shrinking
      }}
    >
      <EmailIcon fontSize="medium" sx={{ color: "black" }} />
    </IconButton>
    <Typography
      sx={{
        fontWeight: 400,
        fontSize: "20px",
        fontFamily: "var(--font-family-hand)",
        wordBreak: "break-word" // Handle long text
      }}
    >
      hello@safiaed.com






    </Typography>
  </Box>

  {/* Instagram */}
  <Box
    display="flex"
    flexDirection="row"
    alignItems="center"
    gap="20px"
    width={{ xs: "100%", md: "auto" }} // Full width on mobile
  >
    <IconButton
      sx={{
        backgroundColor: "#FFE332",
        borderRadius: "25px",
        padding: "8px",
        flexShrink: 0 // Prevent icon from shrinking
      }}
    >
      <InstagramIcon fontSize="medium" sx={{ color: "black" }} />
    </IconButton>
    <Link href={"https://www.instagram.com/safia_edrecoverycoach?igsh=djlrMDJ2eWZkNGc4&utm_source=qr"} >
    <Typography
    
      sx={{
        fontWeight: 400,
        color:"black",
        textDecoration:"none",
        fontSize: "20px",
        fontFamily: "var(--font-family-hand)",
        wordBreak: "break-word" // Handle long text
      }}
    >
      Instagram handle
    </Typography>
    </Link>
  </Box>
</Box>
          </Box>
        </Grid>

        <Grid size={{ xs: 12, md: 5 }} display={"flex"} justifyContent={{ xs:'center', md:"start"}} >
          <Box
            component="form"
            onSubmit={handleSubmit} 
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              backgroundColor: "#FFFFFF",
              borderRadius: "60px",
              boxShadow: "0px 7px 14.3px #00000026",
              width: { xs:"360px", sm:"450px", lg:"500px" }, 
              minHeight: { xs:"500px" , sm: "540px" },
              p:{ xs:0 , sm:"35px 30px 15px 30px"},
            //   py:{ xs:0, sm:"20px"},
              gap:4
            }}
          >
            <Box display={"flex"} flexDirection={"column"} mx={"auto"}  gap={{ xs:2, sm:4 }}>
              {/* Name */}
              <Box display={"flex"} flexDirection={"column"} justifyContent={{ xs:"center"}} mx={{ xs:"auto"}} gap={"10px"}>
                <Typography
                  sx={{
                    fontWeight: 500,
                    fontSize: { xs:"20px", sm: "20px"},
                    fontFamily: "var(--font-family-hand)",
                    color: "#848484",
                  }}
                >
                  Name
                </Typography>

                <TextField
               fullWidth
  variant="outlined"
  value={form.name}
  onChange={(e) => setForm({ ...form, name: e.target.value })}
  error={!!errors.name}
  helperText={errors.name}
  InputLabelProps={{ shrink: false }}
                  sx={{
                    width: { xs:"300px", sm:"400px" ,lg:"420px" },
                    "& .MuiOutlinedInput-root": {
                      backgroundColor: "#AAAAAA1A",
                      borderRadius: "10px",
                      height: "40px",
                      paddingX: 2, // optional: add horizontal padding
                      "& fieldset": {
                        border: "none", // remove default border
                      },
                      "&:hover fieldset": {
                        border: "none",
                      },
                      "&.Mui-focused fieldset": {
                        border: "none",
                      },
                    },
                    "& input": {
                      padding: 0, // remove vertical padding
                      height: "100%", // stretch input to full height
                    },
                  }}
           
                />
              </Box>

              {/* Email */}
              <Box display={"flex"} flexDirection={"column"} gap={"10px"}>
                <Typography
                  sx={{
                    fontWeight: 500,
                    fontSize: "20px",
                    fontFamily: "var(--font-family-hand)",
                    color: "#848484",
                  }}
                >
                  Email
                </Typography>

                <TextField
              fullWidth
  variant="outlined"
  value={form.email}
  onChange={(e) => setForm({ ...form, email: e.target.value })}
  error={!!errors.email}
  helperText={errors.email}
  InputLabelProps={{ shrink: false }}
                  sx={{
                    width: { xs:"300px", sm:"400px" ,lg:"420px" },
                    "& .MuiOutlinedInput-root": {
                      backgroundColor: "#AAAAAA1A",
                      borderRadius: "10px",
                      height: "40px",
                      paddingX: 2, // optional: add horizontal padding
                      "& fieldset": {
                        border: "none", // remove default border
                      },
                      "&:hover fieldset": {
                        border: "none",
                      },
                      "&.Mui-focused fieldset": {
                        border: "none",
                      },
                    },
                    "& input": {
                      padding: 0, // remove vertical padding
                      height: "100%", // stretch input to full height
                    },
                  }}
                />
              </Box>

              {/* Message */}
              <Box display={"flex"} flexDirection={"column"} gap={"10px"}>
                <Typography
                  sx={{
                    fontWeight: 500,
                    fontSize: "20px",
                    fontFamily: "var(--font-family-hand)",
                    color: "#848484",
                  }}
                >
                  Message
                </Typography>

                <TextField
               fullWidth
  variant="outlined"
  value={form.message}
  onChange={(e) => setForm({ ...form, message: e.target.value })}
  error={!!errors.message}
  helperText={errors.message}
  multiline
  InputLabelProps={{ shrink: false }}
                  sx={{
                    width: { xs:"300px", sm:"400px" ,lg:"420px" },

                    "& .MuiOutlinedInput-root": {
                      backgroundColor: "#AAAAAA1A",
                      borderRadius: "10px",
                      height: "145px", // fixed height
                      paddingX: 2,
                      alignItems: "start",
                      overflow: "auto", // scroll if content overflows
                      "& fieldset": {
                        border: "none",
                      },
                      "&:hover fieldset": {
                        border: "none",
                      },
                      "&.Mui-focused fieldset": {
                        border: "none",
                      },
                    },
                    "& .MuiInputBase-inputMultiline": {
                      height: "100%", // force textarea to fill container
                      overflow: "auto",
                      resize: "none",
                      fontFamily: "inherit",
                      padding: 0,
                      boxSizing: "border-box",
                    },
                  }}
                />
              </Box>
            </Box>

                  <Box display="flex" justifyContent="center" >
           <Button
  type="submit"
  size="large"
disabled={loading}

  sx={{
    background: "#FFE332",
    color: "#000000",
    fontFamily: "var(--font-family-hand)",
    borderRadius: "60px",
    p: "10px 35px",
    fontWeight: 600,
    textTransform: "none",
    width: "170px",
  }}
>
  {loading ? <CircularProgress size={24} sx={{ color: "#000" }} /> : "Submit Now"}
</Button>

              </Box>

          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ContactForm;
