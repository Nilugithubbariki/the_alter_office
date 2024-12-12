import React from "react";
import { Box, Typography } from "@mui/material";
const SlidingBanner = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#a0f0a7", 
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        position: "relative",
        height: "38px", 
        padding: "0 0",
      }}
    >
      <Box
        sx={{
          backgroundColor: "#7ED6A5",
          padding: "8px 16px",
          borderRadius: "4px",
          marginRight: "16px",
          flexShrink: 0,
        }}
      >
        <Typography
          variant="body1"
          sx={{
            fontWeight: 600,
            color: "#000",
          }}
        >
          What's Happs!
        </Typography>
      </Box>
      <Box
        component="marquee"
        behavior="scroll" 
        direction="left" 
        scrollamount="4" 
        sx={{
          display: "flex",
          alignItems: "center",
          whiteSpace: "nowrap", 
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <img
            src="https://www.igotskills.in/_next/image?url=https%3A%2F%2Figs-assets.s3.ap-south-1.amazonaws.com%2Fskills%2Freactjs.png&w=48&q=75"
            alt="Skill Logo"
            style={{ height: "20px", marginRight: "8px" }}
          />
          <Typography
            variant="body2"
            sx={{
              fontWeight: 600,
              color: "#000",
              marginRight: "32px",
            }}
          >
            New Challenge created in ReactJS Skill: Build an Engaging Social
            Media Feed with Interactive Features
          </Typography>
          <img
            src="https://www.igotskills.in/_next/image?url=https%3A%2F%2Figs-assets.s3.ap-south-1.amazonaws.com%2Fskills%2Fnodejs.png&w=48&q=75"
            alt="Skill Logo"
            style={{ height: "20px", marginRight: "8px" }}
          />
          <Typography
            variant="body2"
            sx={{
              fontWeight: 600,
              color: "#000",
              marginRight: "32px",
            }}
          >
            New Challenge created in NodeJS Skill: Build an Advanced URL
            Shortener app with Comprehensive Analytics, Custom Aliases, and
            Rate Limiting
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};
export default SlidingBanner;