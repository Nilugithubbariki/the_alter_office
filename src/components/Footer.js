import React from "react";
import { Box, Typography, TextField, Button, Grid, Avatar } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import EmailIcon from "@mui/icons-material/Email";
const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#000",
        color: "#fff",
        padding: "40px 20px",
        textAlign: "center",
      }}
    >
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Typography variant="h3" fontWeight="bold" mb={2} sx={{ fontFamily: "sans-serif" }}>
            Let’s Connect.
          </Typography>
          <Typography variant="body1" mb={4}>
            Reach out to us if you have more questions regarding I GOT SKILLS.
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "center", gap: "8px" }}>
            <TextField
              placeholder="Email address"
              variant="outlined"
              size="small"
              fullWidth
              sx={{
                maxWidth: "300px",
                backgroundColor: "#fff",
                borderRadius: "4px",
                input: { padding: "10px" },
              }}
            />
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#FBCB6A",
                color: "#000",
                textTransform: "none",
                padding: "8px 16px",
                fontWeight: "bold",
                maxWidth: "160px", 
              }}
            >
              Subscribe
            </Button>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h5" fontWeight="bold" mb={2} sx={{ textAlign: "left" }}>
            Skills
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: "8px",
            }}
          >
            {["ReactJS", "React Native", "NodeJS", "UI", "Product Design", "Unity", "UX"].map(
              (skill, index) => (
                <Box
                  key={index}
                  sx={{ display: "flex", alignItems: "center", gap: "8px" }}
                >
                  <CheckCircleIcon sx={{ color: "#FBCB6A" }} />
                  <Typography variant="body1">{skill}</Typography>
                </Box>
              )
            )}
          </Box>
        </Grid>
      </Grid>
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end", 
          alignItems: "center",
          borderTop: "1px solid #333",
          marginTop: "40px",
          paddingTop: "20px",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <Avatar sx={{ backgroundColor: "#FBCB6A", color: "#000" }}>
            <EmailIcon />
          </Avatar>
          <Typography variant="body1" sx={{ textAlign: "right" }}>
            hello@igotskills.in
          </Typography>
        </Box>
      </Box>
      <Box sx={{ marginTop: "40px", textAlign: "center" }}>
        <Typography variant="body2" color="textSecondary">
          © copyright 2024 All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
};
export default Footer;
