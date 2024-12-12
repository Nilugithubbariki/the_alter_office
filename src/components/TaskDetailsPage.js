import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  Box,
  Typography,
  Button,
  Card,
  CardMedia,
  CardContent,
  Chip,
} from "@mui/material";
const TaskDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const task = location.state;
  if (!task) {
    return (
      <Box sx={{ textAlign: "center", marginTop: "50px" }}>
        <Typography variant="h6">Task not found</Typography>
      </Box>
    );
  }
  return (
    <Box
      sx={{
        padding: "40px",
        marginTop: "100px",
        background: "#f9f9f9",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Card
        sx={{
          maxWidth: 800,
          boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
          borderRadius: "12px",
          overflow: "hidden",
        }}
      >
        <CardMedia
          component="img"
          height="300"
          image={task.image}
          alt={task.title}
          sx={{ objectFit: "cover" }}
        />
        <CardContent sx={{ padding: "30px" }}>
          <Typography
            variant="h4"
            fontWeight="bold"
            gutterBottom
            sx={{
              fontSize: "28px",
              textAlign: "center",
              color: "#333",
              marginBottom: "20px",
            }}
          >
            {task.title}
          </Typography>
          <Typography
            variant="body1"
            color="textSecondary"
            mb={3}
            sx={{ textAlign: "justify", lineHeight: 1.6, color: "#555" }}
          >
            {task.description || "This task has no additional details available."}
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "20px",
            }}
          >
            <Chip
              label={`Category: ${task.category}`}
              sx={{
                backgroundColor: "#e0f7fa",
                color: "#00796b",
                fontWeight: "bold",
                fontSize: "14px",
              }}
            />
            <Chip
              label={`Level: ${task.level}`}
              sx={{
                backgroundColor: "#fce4ec",
                color: "#d81b60",
                fontWeight: "bold",
                fontSize: "14px",
              }}
            />
          </Box>
          <Button
            variant="contained"
            fullWidth
            sx={{
              backgroundColor: "#00796b",
              color: "#fff",
              padding: "10px 20px",
              borderRadius: "30px",
              fontSize: "16px",
              textTransform: "none",
              transition: "transform 0.3s ease",
              boxShadow: "0px 4px 10px rgba(0, 121, 107, 0.3)",
              "&:hover": {
                backgroundColor: "#004d40",
                transform: "scale(1.05)",
              },
            }}
            onClick={() => navigate(-1)}
          >
            Back to Tasks
          </Button>
        </CardContent>
      </Card>
    </Box>
  );
};
export default TaskDetails;
