"use client";
import {
  Box,
  Grid,
  IconButton,
  Typography,
  Collapse,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import AOS from "aos";
import "aos/dist/aos.css";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";
import CloseIcon from "@mui/icons-material/Close";


function Recovery() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [expandedItems, setExpandedItems] = useState({});

  const [openDialog, setOpenDialog] = useState(false);
  const [selectedTestimonial, setSelectedTestimonial] = useState(null);

  const handleOpenDialog = (testimonial) => {
    setSelectedTestimonial(testimonial);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setSelectedTestimonial(null);
  };

  // const testimonials = [
  //   {
  //     name: "Ons, client from the Netherlands ",
  //     content:
  //       "Working with Safia was one of the most meaningful parts of my recovery. I didn’t know how much I needed a recovery coach until I started working with her. Her presence was, and still is compassionate, grounded, and deeply attuned, even through ascreen. There was something especially powerful about working with someone who came from a background I could relate to. Someone who understood the cultural nuances, the weight of expectations, and the quiet shame that often surrounds these kinds of struggles.  Recovery can feel incredibly lonely. But with Safia, even the small, everyday challenges became something I could face with more honesty and kindness. Through our work, I began to reconnect with my body, my values, and a sense of freedom, around food and far beyond.  And what stays with me the most is this: even two years later, after a brief lapse, Safia was the first person I turned to. That’s how safe she made recovery feel.  I would recommend her to anyone looking for a thoughtful, intuitive, and truly human approach to healing from an eating disorder.",
  //     shortContent:
  //       "Working with Safia was one of the most meaningful parts of my recovery. I didn’t know how much I needed a recovery coach until I started working with her. Her presence was, and still is compassionate, grounded, and deeply attuned, even through ascreen.",
  //   },
  //   {
  //     name: "Jenny, client from the UK ",
  //     content:
  //       "Before I started coaching with Safia, I struggled to put all the knowledge I had gained about my eating disorder into action. I knew why it had developed and the maintaining factors, but I wasn’t prepared to do anything to change, and I wasn’t even sure I wanted to. I came to coaching still feeling ambivalent about getting better and Safia helped me to clarify my motivations and goals. My sessions with Safia have been so useful. Each week we broke down together what I needed to do into actionable steps. For example, we discussed how I could include foods I found more difficult and not compensate for around them. Another key topic was how to resist compulsive exercise and lower-level movement. We worked through the 8 keys by Carolyn Costin (which I initially tried to do on my own but didn’t get very far) and with Safia I got a lot more out of the tasks. Safia takes a firm but compassionate approach. She was not afraid to call me out if the eating disorder was taking over. However, she never forced me to do anything I didn’t want to. Ultimately, I was in the driving seat, and Safia helped me map out the way. It was great that I could reach out to her during the week over WhatsApp to get support and reassurance in the moment if I was struggling. I would recommend her to anyone suffering with an eating disorder and especially those who experience exercise compulsions. Safia’s personal experience has given her an amazing understanding of how to help clients let go of driven exercise. She understands the sneaky rules and mini restrictions around food and movement which can creep in. I had a compulsive movement issue with yoga, and Safia helped me to take a break from it for over 6 months so that in the future yoga can return to something which I enjoy. Before meeting Safia, I thought that coaching was very ‘LA’ and quite ‘wishy washy’. In contrast, my sessions have been practical and great value for money.",
  //     shortContent:
  //       "Before I started coaching with Safia, I struggled to put all the knowledge I had gained about my eating disorder into action. I knew why it had developed and the maintaining factors, but I wasn’t prepared to do anything to change, and I wasn’t even sure I wanted to.",
  //   },
  //   {
  //     name: "Fleur, client from the UK ",
  //     content:
  //       "I started working with Safia after years of being stuck in quasi-recovery, unable to make further progress. Thanks to her deeply compassionate and solution-focused approach, so much has finally started to shift for me in my recovery. By helping me to set achievable weekly goals, and stay accountable through-out the week with messages and voice notes, I’m finally breaking free from the behaviours and beliefs that have kept me stuck for years. Safia is brilliant at meeting me where I’m at with warmth and empathy, which makes it very easy to be open and honest with her, and to look at the bigger picture beyond just the food, which has been so key to my recovery. I can’t thank Safia enough for the new recovered life she’s helping to open up for me.",
  //     shortContent:
  //       "I started working with Safia after years of being stuck in quasi-recovery, unable to make further progress. Thanks to her deeply compassionate and solution-focused approach, so much has finally started to shift for me in my recovery.",
  //   },
  //   {
  //     name: "Maggie, client from Sweden",
  //     content:
  //       "I have just started working with Safia, and I can’t even begin to say how much meeting her means to me. Even the strongest words couldn’t describe how thankful I am. In just a few weeks I have been able to make changes that I have not been able to ever before. It's been hard, and it is hard, but knowing and feeling that Safia is there, just a message away, has made such a difference. Knowing that she’s been through it all helps so much, it's like anything I tell her she understands and can relate to.  Hearing her voice on a voice message can change my anxiety and panic to a feeling of calmness, just so soothing, knowing that she’s there and that I can do it. That nothing is a failure, the feeling that I can be completely honest and transparent. There are just not enough words to describe how grateful I am to have met her! ",
  //     shortContent:
  //       "I have just started working with Safia, and I can’t even begin to say how much meeting her means to me. Even the strongest words couldn’t describe how thankful I am. In just a few weeks I have been able to make changes that I have not been able to ever before.",
  //   },
  // ];
const testimonials = [
  {
    name: "Sophie Corbett, UK based ED dietitian, mentalhealthdietitians.com",
    content:
      "As an eating disorder dietitian, it has been a joy to work alongside Safia. We’ve shared a number of clients, and I’ve consistently been impressed by the quality of support she offers. Safia is compassionate, understanding, and skilled at combining her lived experience with evidence-based coaching methods. She is great at forming a trusting therapeutic relationship with clients in a way that empowers real, long-term change in recovery. I frequently recommend her to my clients and wholeheartedly endorse the incredible work she does!",
    shortContent:
      "As an eating disorder dietitian, it has been a joy to work alongside Safia. We’ve shared a number of clients, and I’ve consistently been impressed by the quality of support she offers.",
  },
  {
    name: "O.Z., client from the Netherlands",
    content:
      "Working with Safia was one of the most meaningful parts of my recovery. I didn’t know how much I needed a recovery coach until I started working with her. Her presence was, and still is compassionate, grounded, and deeply attuned, even through a screen. There was something especially powerful about working with someone who came from a background I could relate to. Someone who understood the cultural nuances, the weight of expectations, and the quiet shame that often surrounds these kinds of struggles. Recovery can feel incredibly lonely. But with Safia, even the small, everyday challenges became something I could face with more honesty and kindness. Through our work, I began to reconnect with my body, my values, and a sense of freedom, around food and far beyond. And what stays with me the most is this: even two years later, after a brief lapse, Safia was the first person I turned to. That’s how safe she made recovery feel. I would recommend her to anyone looking for a thoughtful, intuitive, and truly human approach to healing from an eating disorder.",
    shortContent:
      "Working with Safia was one of the most meaningful parts of my recovery. I didn’t know how much I needed a recovery coach until I started working with her. Her presence was, and still is compassionate, grounded, and deeply attuned, even through a screen.",
  },
  {
    name: "J.F., client from the UK",
    content:
      "Before I started coaching with Safia, I struggled to put all the knowledge I had gained about my eating disorder into action. I knew why it had developed and the maintaining factors, but I wasn’t prepared to do anything to change, and I wasn’t even sure I wanted to. I came to coaching still feeling ambivalent about getting better and Safia helped me to clarify my motivations and goals. My sessions with Safia have been so useful. Each week we broke down together what I needed to do into actionable steps. For example, we discussed how I could include foods I found more difficult and not compensate for around them. Another key topic was how to resist compulsive exercise and lower-level movement. We worked through the 8 keys by Carolyn Costin (which I initially tried to do on my own but didn’t get very far) and with Safia I got a lot more out of the tasks. Safia takes a firm but compassionate approach. She was not afraid to call me out if the eating disorder was taking over. However, she never forced me to do anything I didn’t want to. Ultimately, I was in the driving seat, and Safia helped me map out the way. It was great that I could reach out to her during the week over WhatsApp to get support and reassurance in the moment if I was struggling. I would recommend her to anyone suffering with an eating disorder and especially those who experience exercise compulsions. Safia’s personal experience has given her an amazing understanding of how to help clients let go of driven exercise. She understands the sneaky rules and mini restrictions around food and movement which can creep in. I had a compulsive movement issue with yoga, and Safia helped me to take a break from it for over 6 months so that in the future yoga can return to something which I enjoy. Before meeting Safia, I thought that coaching was very ‘LA’ and quite ‘wishy washy’. In contrast, my sessions have been practical and great value for money.",
    shortContent:
      "Before I started coaching with Safia, I struggled to put all the knowledge I had gained about my eating disorder into action. I knew why it had developed and the maintaining factors, but I wasn’t prepared to do anything to change, and I wasn’t even sure I wanted to.",
  },
  {
    name: "M.T., client from Sweden",
    content:
      "I have just started working with Safia, and I can’t even begin to say how much meeting her means to me. Even the strongest words couldn’t describe how thankful I am. In just a few weeks I have been able to make changes that I have not been able to ever before. It's been hard, and it is hard, but knowing and feeling that Safia is there, just a message away, has made such a difference. Knowing that she’s been through it all helps so much, it's like anything I tell her she understands and can relate to. Hearing her voice on a voice message can change my anxiety and panic to a feeling of calmness, just so soothing, knowing that she’s there and that I can do it. That nothing is a failure, the feeling that I can be completely honest and transparent. There are just not enough words to describe how grateful I am to have met her!",
    shortContent:
      "I have just started working with Safia, and I can’t even begin to say how much meeting her means to me. Even the strongest words couldn’t describe how thankful I am.",
  },
  {
    name: "F.T., client from the UK",
    content:
      "I started working with Safia after years of being stuck in quasi-recovery, unable to make further progress. Thanks to her deeply compassionate and solution-focused approach, so much has finally started to shift for me in my recovery. By helping me to set achievable weekly goals, and stay accountable through-out the week with messages and voice notes, I’m finally breaking free from the behaviours and beliefs that have kept me stuck for years. Safia is brilliant at meeting me where I’m at with warmth and empathy, which makes it very easy to be open and honest with her, and to look at the bigger picture beyond just the food, which has been so key to my recovery. I can’t thank Safia enough for the new recovered life she’s helping to open up for me.",
    shortContent:
      "I started working with Safia after years of being stuck in quasi-recovery, unable to make further progress. Thanks to her deeply compassionate and solution-focused approach, so much has finally started to shift for me in my recovery.",
  },
  {
    name: "C.R., client from Ireland",
    content:
      "I’ve lived with anorexia since I was 14. Now at 38, I’m a mother. My life is full, demanding and often overwhelming. For so long I truly didn’t believe I would ever find the space, support or strength to make meaningful progress in my recovery. But then I met Safia. Safia didn’t just help me. She held me. With compassion, gentleness and an unwavering presence, she made space in her heart and in her world for me. She didn’t rush me or try to fix me. She came alongside me. She made room for the complicated parts and she stayed. Through working with Safia I’ve made more progress than I have in over twenty years. Her care has been deeply healing. She is gentle but doesn’t shy away from truth. She challenges me in the ways I need, not in the ways that shame. She shows up with kindness, warmth and a wisdom that grounds you even on the hardest days. Safia is the calm in the chaos. The warmth when the world feels cold. She doesn’t just tell you what you want to hear. She tells you what you need to hear, with grace and love. Working with her has been one of the greatest gifts of my life. After my mother passed away last year I honestly believe she sent Safia to me. That’s how deeply I feel the connection, the care and the rightness of her presence in my life. If you have the chance to work with Safia, take it. Her presence is rare. Her heart is steady. And her impact is real.",
    shortContent:
      "I’ve lived with anorexia since I was 14. Now at 38, I’m a mother. My life is full, demanding and often overwhelming. For so long I truly didn’t believe I would ever find the space, support or strength to make meaningful progress in my recovery. But then I met Safia.",
  },
  {
    name: "E.S., client from the UK",
    content:
      "When I first began working with Safia, I was physically and mentally in a dark place, having lived with severe anorexia for eight years. My days revolved around avoiding another hospital admission, and change felt very far away. Safia has helped me shift from surviving to contemplating a recovery I didn’t think was possible for someone in my position. Her belief in me – even when I couldn’t see a way forward – has been transformational. She, along with my dietitian and wider team, blends tailored understanding with evidence-based tools, offering structure, emotional insight and empathy. Our sessions are equal parts personal and practical. The WhatsApp support between sessions have been a genuine lifeline. Safia is so much more than a coach: she’s a teammate, a guide, and someone I trust deeply. She meets me where I am, but never lets me forget where I’m capable of going. I truly can’t recommend her enough.",
    shortContent:
      "When I first began working with Safia, I was physically and mentally in a dark place, having lived with severe anorexia for eight years. My days revolved around avoiding another hospital admission, and change felt very far away.",
  },
];

  useEffect(() => {
    AOS.init({
      duration: 500,
      once: true,
    });
  }, []);

  const handleNext = () => {
    setCurrentSlide((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const handlePrev = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const toggleExpand = (index) => {
    setExpandedItems((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  // Function to get visible testimonials based on current slide
  const getVisibleTestimonials = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentSlide + i) % testimonials.length;
      visible.push(testimonials[index]);
    }
    return visible;
  };

  return (
    <Box sx={{ backgroundColor: "var(--bg-container)", width: "100%", py: 6 }}>
      {/* Title Section */}
      <Box textAlign={{ xs: "center", sm: "start" }} mb={4} mx={4}>
        <Typography
          sx={{
            fontFamily: "var(--font-family-hand)",
            fontWeight: 400,
            fontSize: { xs: "14px", md: "18px" },
          }}
          data-aos="fade-down"
        >
          Real stories from individuals who have found Recovery
        </Typography>
        <Box display="flex" flexWrap="wrap" alignItems="center" gap={2} mt={1}>
          <Typography
            sx={{
              fontFamily: "var(--font-family-birthstone)",
              fontWeight: 400,
              fontSize: { xs: "32px", md: "70px" },
              whiteSpace: "nowrap",
            }}
          >
            Voices of Hope and Healing
          </Typography>

          <Box
            sx={{
              border: "2px solid #938B55",
              width: { xs: "80px", md: "120px" },
              height: "0px",
              mt: 2,
            }}
            data-aos="fade-right"
          />
        </Box>
      </Box>

      {/* Timeline with Stars */}
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: "50px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          mb: 6,
        }}
      >
        {/* Line */}
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            width: "100%",
            height: "3px",
            backgroundColor: "var(--white-bg)",
          }}
        />
        {/* Star Icons */}
        {["18%", "50%", "82%"].map((left, index) => (
          <Box
            key={index}
            component="img"
            src="/images/Star 2.png"
            alt="Star Icon"
            sx={{
              position: "absolute",
              top: "50%",
              left: left,
              transform: "translate(-50%, -50%)",
              width: "24px",
              height: "24px",
              zIndex: 2,
              pointerEvents: "none",
            }}
          />
        ))}
      </Box>

      {/* Services Section */}
      <Grid container spacing={6} px={{ xs: 2, md: 4 }}>
        <Dialog
          open={openDialog}
          onClose={handleCloseDialog}
          maxWidth="sm"
          fullWidth
        >
          <DialogTitle
            sx={{
              fontFamily: "var(--font-family-hand)",
              fontWeight: 600,
              position: "relative",
              pr: 5,
            }}
          >
            {selectedTestimonial?.name}
            <IconButton
              aria-label="close"
              onClick={handleCloseDialog}
              sx={{
                position: "absolute",
                right: 8,
                top: 8,
                color: (theme) => theme.palette.grey[500],
              }}
            >
              <CloseIcon />
            </IconButton>
          </DialogTitle>

          <DialogContent>
            <DialogContentText
              sx={{
                fontFamily: "var(--font-family-hand)",
                fontSize: "15px",
                whiteSpace: "pre-line",
                lineHeight: 1.7,
              }}
            >
              {selectedTestimonial?.content}
            </DialogContentText>
          </DialogContent>
        </Dialog>

        {getVisibleTestimonials().map((testimonial, index) => (
          <Grid size={{ xs: 12, md: 4 }} key={index} data-aos="fade-up">
            <Typography
              sx={{
                fontWeight: 500,
                fontSize: "20px",
                fontFamily: "var(--font-family-hand)",
                textAlign: "center",
                mb: 2,
                lineHeight: 1.7,
              }}
            >
              {testimonial.name}
            </Typography>
            <Box sx={{ textAlign: "center", mb: 1 }}>
              <Collapse in={false} collapsedSize={80}>
                <Typography
                  sx={{
                    fontWeight: 400,
                    fontSize: "15px",
                    fontFamily: "var(--font-family-hand)",
                    lineHeight: 1.7,
                    textAlign: "center",
                  }}
                >
                  {testimonial.shortContent}
                </Typography>
              </Collapse>

              <Typography
                onClick={() => handleOpenDialog(testimonial)} // ← PASS OBJECT, NOT INDEX
                sx={{
                  fontWeight: 500,
                  fontSize: "14px",
                  fontFamily: "var(--font-family-hand)",
                  color: "black",
                  textDecoration: "underline",
                  cursor: "pointer",
                  mt: 1,
                  display: "inline-block",
                  transition: "all 0.3s ease-in-out",
                  "&:hover": {
                    opacity: 0.8,
                  },
                }}
              >
                See More
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>

      {/* Navigation Arrows */}
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        gap={2}
        mt={4}
      >
        <IconButton
          onClick={handlePrev}
          sx={{
            backgroundColor: "black",
            color: "var(--white-bg)",
            "&:hover": {
              backgroundColor: "var(--white-bg)",
              color: "black",
              boxShadow: "none",
              transition: "all 0.3s",
            },
          }}
        >
          <ArrowBackOutlinedIcon fontSize="small" />
        </IconButton>

        <IconButton
          onClick={handleNext}
          sx={{
            backgroundColor: "black",
            color: "var(--white-bg)",
            "&:hover": {
              backgroundColor: "var(--white-bg)",
              color: "black",
              boxShadow: "none",
              transition: "all 0.3s",
            },
          }}
        >
          <ArrowForwardIcon fontSize="small" />
        </IconButton>
      </Box>
    </Box>
  );
}

export default Recovery;
