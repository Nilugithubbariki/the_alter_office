import React, { useState } from "react";
import { Box, Typography, Button, Grid, Card, CardMedia, CardContent } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
import SearchBox from "./Header";
import { useTheme } from "@mui/material/styles";
const taskData = [
  {
    id: 1,
    title: "Interactive Gantt Chart in React for Effective Task Management",
    category: "ReactJS",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEg3mMpLWo687RGslGWGK55byglXmt6HSAaA&s",
    level: "Level 2",
  },
  {
    id: 2,
    title: "Build an Advanced URL Shortener app",
    category: "NodeJS",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTo5rLh0Ed_H4b8ZM08EK6JZ1gBjVYVDmfmRQ&s",
    level: "Level 2",
  },
  {
    id: 3,
    title: "Design a Trendy & Interactive Music Player UI",
    category: "UI",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQg-cj8tx__9c8oz46XgG1s0zpP8soMYrVKOw&s",
    level: "Level 2",
  },
  {
    id: 4,
    title: "Publisher Website Design for AdTech Platform",
    category: "Product Design",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyhNeZnSZQHjZhBVjMeEHCRkz5NqjjJufq0A&s",
    level: "Level 2",
  },
  {
    id: 5,
    title: "Publisher Website Design for AdTech Platform",
    category: "React Native",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1aejDvmasCUCqcMlM2nUu_MqZkHfAuhI3lw&s",
    level: "Level 2",
  },
];

const categoryImages = {
  ReactJS: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
  "React Native": "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
  NodeJS: "https://nodejs.org/static/images/logo.svg",
  UI: "https://cdn-icons-png.flaticon.com/512/616/616554.png",
  "Product Design": "https://cdn-icons-png.flaticon.com/512/1147/1147138.png",
};

const AvailableTasks = () => {
  const [filter, setFilter] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  const theme = useTheme();
  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const filteredTasks = taskData.filter((task) => {
    const matchesCategory = filter === "All" || task.category === filter;
    const matchesSearchTerm = task.title.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearchTerm;
  });

  return (
    <>
      <Typography variant="h3" fontWeight="bold" mb={2} mt={2} sx={{ marginTop: "100px" }}>
        Available Tasks
      </Typography>
      <Box sx={{ padding: "20px" }}>
        <Box sx={{ marginBottom: "20px" }}>
          <SearchBox onSearch={handleSearch} />
        </Box>

        <Box sx={{ display: "flex", gap: "10px", marginBottom: "20px", flexWrap: "wrap" }}>
          {["All", "ReactJS", "React Native", "NodeJS", "UI", "Product Design"].map((category) => (
            <Button
              key={category}
              variant={filter === category ? "contained" : "outlined"}
              onClick={() => setFilter(category)}
              sx={{
                borderColor: "#ccc",
                color: "#000",
                textTransform: "none",
                padding: "6px 12px",
                fontSize: "16px",
                borderRadius: "40px",
                border: "1px solid #000",
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                transition: "all 0.3s ease",
                "&:hover": {
                  backgroundColor: "#fff",
                  borderColor: "#888",
                  transform: "scale(1.1)",
                },
                [theme.breakpoints.down('sm')]: {
                  margin: '5px',
                }
              }}
            >
              {category !== "All" && (
                <img
                  src={categoryImages[category]}
                  alt={category}
                  style={{ width: "20px", height: "20px", marginRight: "8px" }}
                />
              )}
              {category}
            </Button>
          ))}
        </Box>

        <Grid container spacing={2}>
          {filteredTasks.length > 0 ? (
            filteredTasks.map((task) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={task.id}>
                <Card onClick={() => navigate(`/task/${task.id}`, { state: task })} sx={{ cursor: "pointer" }}>
                  <CardMedia
                    component="img"
                    height="200"
                    image={task.image}
                    alt={task.title}
                  />
                  <CardContent>
                    <Typography variant="h6" gutterBottom>
                      {task.title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      {task.category} - {task.level}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))
          ) : (
            <Typography variant="body1" color="textSecondary">
              No tasks found matching your search.
            </Typography>
          )}
        </Grid>
      </Box>
      <Footer />
    </>
  );
};
export default AvailableTasks;
