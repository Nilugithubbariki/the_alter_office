import React, { useEffect, useState, useRef } from 'react';
import { Box, Typography, Button, Grid, IconButton, Dialog, DialogContent, DialogActions, Accordion, AccordionSummary, AccordionDetails, List, ListItem, ListItemText, Avatar, ListItemAvatar } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import { useTheme } from "@mui/material/styles";
import userData from "./api.json"
import Footer from './Footer';
import { useNavigate } from 'react-router-dom';
const BodyLayout = () => {
    const [users, setUsers] = useState([]);
    const [expanded, setExpanded] = useState(false);
    const [comments, setComments] = useState([]);
    const [isEmpty, setIsEmpty] = useState(true);
    const [open, setOpen] = useState(false);
    const theme = useTheme();
    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const handleInput = () => {
        setIsEmpty(commentRef.current.textContent.trim() === "");
    };
    const commentRef = useRef(null);
    const navigate = useNavigate();
    const handleFormatting = (command) => {
        document.execCommand(command, false, null);
    };
    const handlePostComment = () => {
        if (commentRef.current.innerHTML.trim() !== "") {
            setComments([
                ...comments,
                { text: commentRef.current.innerHTML, replies: [] },
            ]);
            commentRef.current.innerHTML = "";
        }
    };
    const handleReply = (index, replyText) => {
        const updatedComments = [...comments];
        updatedComments[index].replies.push(replyText);
        setComments(updatedComments);
    };
    useEffect(() => {
        setUsers(userData);
    }, []);
    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };
    return (
        <Box
            sx={{
                backgroundColor: '#f9f9f6',
                maxWidth: 'calc(100% - 32px)',
                margin: '120px 16px 0px 16px',
            }}
        >
            <Grid container spacing={4} alignItems="flex-start">
                <Grid item xs={12} md={6} mb={2}>
                    <Button
                        variant="outlined"
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
                            width: "auto",
                            [theme.breakpoints.down("sm")]: {
                                fontSize: "14px",
                                padding: "4px 8px",
                                gap: "4px",
                            },
                        }}
                        onClick={() => navigate("/available-tasks")}
                    >
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
                            alt="React Logo"
                            style={{ height: "20px" }}
                        />
                        ReactJS
                    </Button>
                    <Typography
                        variant="h3"
                        fontWeight="bold"
                        mb={2}
                        mt={2}
                        sx={{
                            textAlign: "center",
                            fontSize: "32px",
                            [theme.breakpoints.down("sm")]: {
                                fontSize: "20px",
                            },
                        }}
                    >
                        Build an Engaging Social Media Feed with Interactive Features
                    </Typography>

                    <Typography variant="subtitle1" color="text.secondary" mb={4}>
                        By The Alter Office
                    </Typography>
                    <Box
                        sx={{
                            backgroundColor: '#fff',
                            padding: '16px',
                            borderRadius: '12px',
                            boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
                            marginBottom: '16px',
                        }}
                    >
                        <Box
                            display="flex"
                            flexDirection={{ xs: 'column', sm: 'row' }}
                            alignItems="center"
                            gap="16px"
                            mb={2}
                        >
                            <Box>
                                <img
                                    src="https://www.igotskills.in/_next/image?url=https%3A%2F%2Figs-assets.s3.ap-south-1.amazonaws.com%2Fbadges%2FReact-2.png&w=1920&q=75"
                                    alt="ReactJS Badge"
                                    style={{ height: '80px', width: '80px' }}
                                />
                            </Box>
                            <Box flex={1}>
                                <Typography
                                    variant="body1"
                                    fontWeight="500"
                                    color="black"
                                    mb={2}
                                    textAlign={{ xs: 'center', sm: 'left' }}
                                >
                                    Earn this task badge by completing the following task.
                                </Typography>
                                <Box
                                    display="flex"
                                    alignItems="center"
                                    justifyContent="space-between"
                                    flexDirection={{ xs: 'column', sm: 'row' }}
                                    width="100%"
                                    gap="16px"
                                >
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            flexDirection: 'column',
                                            alignItems: 'center',
                                            textAlign: 'center',
                                        }}
                                    >
                                        <Box
                                            sx={{
                                                width: '16px',
                                                height: '16px',
                                                borderRadius: '50%',
                                                backgroundColor: '#f5a623',
                                            }}
                                        ></Box>
                                        <Typography variant="body2" fontWeight="bold" color="text.primary" mt={1}>
                                            Take task
                                        </Typography>
                                    </Box>
                                    <Box
                                        sx={{
                                            flex: 1,
                                            height: '2px',
                                            backgroundColor: '#ddd',
                                            position: 'relative',
                                            display: { xs: 'none', sm: 'block' },
                                        }}
                                    >
                                        <Box
                                            sx={{
                                                position: 'absolute',
                                                left: '0',
                                                top: '0',
                                                height: '100%',
                                                width: '33%',
                                                backgroundColor: '#f5a623',
                                            }}
                                        ></Box>
                                    </Box>
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            flexDirection: 'column',
                                            alignItems: 'center',
                                            textAlign: 'center',
                                        }}
                                    >
                                        <Box
                                            sx={{
                                                width: '16px',
                                                height: '16px',
                                                borderRadius: '50%',
                                                backgroundColor: '#fff',
                                                border: '2px solid #ddd',
                                            }}
                                        ></Box>
                                        <Typography variant="body2" fontWeight="bold" color="text.secondary" mt={1}>
                                            Submit Task
                                        </Typography>
                                    </Box>
                                    <Box
                                        sx={{
                                            flex: 1,
                                            height: '2px',
                                            backgroundColor: '#ddd',
                                            position: 'relative',
                                            display: { xs: 'none', sm: 'block' },
                                        }}
                                    ></Box>
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            flexDirection: 'column',
                                            alignItems: 'center',
                                            textAlign: 'center',
                                        }}
                                    >
                                        <Box
                                            sx={{
                                                width: '16px',
                                                height: '16px',
                                                borderRadius: '50%',
                                                backgroundColor: '#fff',
                                                border: '2px solid #ddd',
                                            }}
                                        ></Box>
                                        <Typography variant="body2" fontWeight="bold" color="text.secondary" mt={1}>
                                            Get Result
                                        </Typography>
                                    </Box>
                                </Box>
                            </Box>
                            <Box
                                display="flex"
                                flexDirection={{ xs: 'column', sm: 'row' }}
                                justifyContent={{ xs: 'center', sm: 'flex-start' }}
                                alignItems="center"
                                gap="16px"
                                width="100%"
                            >
                                <Button
                                    variant="contained"
                                    sx={{
                                        backgroundColor: '#f5a623',
                                        color: '#000',
                                        textTransform: 'none',
                                        borderRadius: '20px',
                                        padding: '10px 20px',
                                        '&:hover': {
                                            backgroundColor: '#e3961c',
                                        },
                                        width: { xs: '100%', sm: 'auto' },
                                    }}
                                    onClick={handleOpen}
                                >
                                    I'm Taking This
                                </Button>
                                <Dialog
                                    open={open}
                                    onClose={handleClose}
                                    fullWidth
                                    maxWidth="sm"
                                    BackdropProps={{
                                        style: {
                                            backdropFilter: 'blur(10px)',
                                        },
                                    }}
                                >
                                    <DialogContent>
                                        <Box display="flex" flexDirection="column" alignItems="center" textAlign="center">
                                            <img
                                                src="https://www.igotskills.in/_next/image?url=%2Fassets%2Fpng%2Flogin-image.png&w=1920&q=75"
                                                alt="Illustration"
                                                style={{ borderRadius: '10px', width: '100%', marginBottom: '20px' }}
                                            />
                                            <Typography variant="h6" fontWeight="bold">
                                                Ready to show your skills?
                                            </Typography>
                                            <Typography variant="body2" color="textSecondary" sx={{ margin: '10px 0' }}>
                                                Login/Signup with just 1 click below.
                                            </Typography>
                                            <Button
                                                variant="contained"
                                                sx={{
                                                    backgroundColor: '#4285F4',
                                                    color: '#fff',
                                                    textTransform: 'none',
                                                    borderRadius: '20px',
                                                    padding: '10px 20px',
                                                    '&:hover': {
                                                        backgroundColor: '#357AE8',
                                                    },
                                                    width: { xs: '100%', sm: 'auto' },
                                                }}
                                                onClick={() => alert('Google login initiated!')}
                                            >
                                                Enter with Google
                                            </Button>
                                            <Typography
                                                variant="caption"
                                                color="textSecondary"
                                                sx={{ marginTop: '10px', fontSize: '12px' }}
                                            >
                                                By creating an account you agree with our Terms of Service and Privacy Policy.
                                            </Typography>
                                        </Box>
                                    </DialogContent>
                                    <DialogActions>
                                        <Button onClick={handleClose} sx={{ textTransform: 'none' }}>
                                            Close
                                        </Button>
                                    </DialogActions>
                                </Dialog>
                            </Box>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                    <img
                        src="https://www.igotskills.in/_next/image?url=https%3A%2F%2Fs3.ap-south-1.amazonaws.com%2Figs-assets%2Fuser%2Fprofile-photos%2F2_EClZbu2ewZ3rq2rrMQoP0JljR.png&w=1080&q=75"
                        alt="Interactive Features"
                        style={{
                            width: '80%',
                            maxWidth: '500px',
                            borderRadius: '90px',
                            boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
                            display: 'block',
                            margin: '0 auto',
                        }}
                    />
                </Grid>
            </Grid>
            <Box
                sx={{
                    backgroundColor: '#f9f9f6',
                    padding: { xs: '16px', sm: '24px', md: '32px' },
                    margin: { xs: '16px', md: '32px' },
                    borderRadius: '12px',
                    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
                }}
            >
                <Grid container spacing={4}>
                    <Grid item xs={12} md={8}>
                        <Typography variant="h4" fontWeight="bold" mb={2}>
                            Task Brief
                        </Typography>
                        <Typography variant="body1" color="text.secondary" mb={2}>
                            Create a social media feed <strong>web application</strong> that implements infinite scrolling
                            and user authentication using Firebase (or Supabase/own backend). This task is designed to take
                            approximately 16 hours of work and will challenge your skills in building a real-time
                            application, managing user state, and creating a seamless user experience.
                        </Typography>
                        <Typography variant="body1" color="text.secondary" mb={2}>
                            You will implement features such as user registration and login (including Google login),
                            posting updates with multi-image support, and dynamically loading content as users scroll. The
                            goal is to create a functional and visually appealing social media feed that allows users to
                            interact with posts in real-time.
                        </Typography>
                        <Typography variant="body1" color="text.secondary" mb={2}>
                            The application will focus on mobile and tablet support, ensuring that the web version mirrors
                            the mobile experience for consistency. Users will be able to create posts that include text,
                            images, and videos, and they will have the ability to share content with other applications. The
                            project will also include user profiles that display essential information such as the user's
                            bio, name, profile picture, and a section for their posts.
                        </Typography>
                        <Typography variant="body1" color="text.secondary">
                            The overall aim is to deliver a polished and engaging social media platform that prioritizes
                            user interaction and ease of use.
                        </Typography>
                        <Typography variant="h5" fontWeight="bold" mb={2}>
                            Features
                        </Typography>
                        <ol style={{ margin: 0, paddingLeft: '16px' }}>
                            <li>
                                <Typography variant="body1" fontWeight="bold" mb={1}>
                                    User Authentication:
                                </Typography>
                                <ul style={{ margin: 0, paddingLeft: '16px', listStyleType: 'disc' }}>
                                    <li>
                                        <Typography variant="body2">
                                            Implement user registration and login functionality using Firebase
                                            Authentication (including Google login).
                                        </Typography>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <Typography variant="body1" fontWeight="bold" mb={1}>
                                    Social Media Feed:
                                </Typography>
                                <ul style={{ margin: 0, paddingLeft: '16px', listStyleType: 'disc' }}>
                                    <li>
                                        <Typography variant="body2">
                                            Create a feed that displays posts from users, including text, images,
                                            and videos, along with timestamps. Users will have a form to create
                                            new posts, allowing them to take photos using the camera, add URLs,
                                            or select images from the gallery. The application will support
                                            multi-image uploads in a single post, enhancing the richness of user
                                            content.
                                        </Typography>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <Typography variant="body1" fontWeight="bold" mb={1}>
                                    Infinite Scrolling:
                                </Typography>
                                <ul style={{ margin: 0, paddingLeft: '16px', listStyleType: 'disc' }}>
                                    <li>
                                        <Typography variant="body2">
                                            Implement infinite scrolling to load 20 posts at a time as the user
                                            scrolls down the feed. Use Firebase Firestore (or Supabase) to fetch
                                            posts in batches, ensuring smooth loading of content without
                                            interruptions.
                                        </Typography>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <Typography variant="body1" fontWeight="bold" mb={1}>
                                    User Profiles:
                                </Typography>
                                <ul style={{ margin: 0, paddingLeft: '16px', listStyleType: 'disc' }}>
                                    <li>
                                        <Typography variant="body2">
                                            Allow users to view and edit their profiles, which will include their bio, name, profile picture,
                                            and a "My Posts" section that displays all posts created by the user. This feature will enhance
                                            user engagement and personalization.
                                        </Typography>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <Typography variant="body1" fontWeight="bold" mb={1}>
                                    Video Handling:
                                </Typography>
                                <ul style={{ margin: 0, paddingLeft: '16px', listStyleType: 'disc' }}>
                                    <li>
                                        <Typography variant="body2">
                                            Implement functionality for videos in posts to automatically play when they enter the viewport
                                            and pause when they exit. This will create a more dynamic and engaging user experience, as users
                                            will be able to view video content without needing to click play.
                                        </Typography>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <Typography variant="body1" fontWeight="bold" mb={1}>
                                    Share Option:
                                </Typography>
                                <ul style={{ margin: 0, paddingLeft: '16px', listStyleType: 'disc' }}>
                                    <li>
                                        <Typography variant="body2">
                                            Include a share option that allows users to share posts and content with other applications,
                                            enhancing the reach and interaction of the platform.
                                        </Typography>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <Typography variant="body1" fontWeight="bold" mb={1}>
                                    Performance Optimization:
                                </Typography>
                                <ul style={{ margin: 0, paddingLeft: '16px', listStyleType: 'disc' }}>
                                    <li>
                                        <Typography variant="body2">
                                            Optimize the application for performance by ensuring fast loading times and smooth interactions.
                                            This includes minimizing the size of assets, optimizing images, and using efficient data fetching
                                            strategies to reduce latency. The goal is to create a responsive experience that feels instantaneous to the user.
                                        </Typography>
                                    </li>
                                </ul>
                            </li>
                        </ol>
                        <Typography variant="h5" fontWeight="bold" mb={2}>
                            FAQ's for this task
                        </Typography>
                        <Box sx={{ marginTop: '16px' }}>
                            {[
                                {
                                    question: 'What storage options can I use for posts?',
                                    answer:
                                        'You can use Firebase Storage or a third-party service like AWS S3 to store images and videos efficiently.',
                                },
                                {
                                    question: 'Is there a specific design I should follow?',
                                    answer:
                                        'Yes, follow Material UI design principles for consistent and user-friendly layouts.',
                                },
                                {
                                    question: 'What technologies should I use for this project?',
                                    answer:
                                        'Use React, Firebase (or Supabase), and Material UI to implement the required features.',
                                },
                                {
                                    question: 'Can I use third-party libraries for UI components?',
                                    answer:
                                        'Yes, libraries like Material UI or Ant Design can simplify UI development and improve consistency.',
                                },
                                {
                                    question: 'How should I structure my components?',
                                    answer:
                                        'Divide the application into logical components based on their functionality and reuse where possible.',
                                },
                            ].map((faq, index) => (
                                <Accordion
                                    key={index}
                                    expanded={expanded === `panel${index}`}
                                    onChange={handleChange(`panel${index}`)}
                                    disableGutters
                                    sx={{
                                        marginBottom: '12px',
                                        borderRadius: '8px',
                                        overflow: 'hidden',
                                        boxShadow: '0 2px 6px rgba(0, 0, 0, 0.08)',
                                        '&:before': {
                                            display: 'none',
                                        },
                                    }}
                                >
                                    <AccordionSummary
                                        expandIcon={
                                            expanded === `panel${index}` ? (
                                                <RemoveIcon sx={{ fontSize: '1.5rem', color: '#333' }} />
                                            ) : (
                                                <AddIcon sx={{ fontSize: '1.5rem', color: '#333' }} />
                                            )
                                        }
                                        sx={{
                                            backgroundColor: '#f4f4f4',
                                            padding: '16px',
                                            borderBottom: '1px solid #e0e0e0',
                                        }}
                                    >
                                        <Typography variant="body1" fontWeight="bold">
                                            {faq.question}
                                        </Typography>
                                    </AccordionSummary>
                                    <AccordionDetails
                                        sx={{
                                            backgroundColor: '#fff',
                                            padding: '16px',
                                        }}
                                    >
                                        <Typography variant="body2">{faq.answer}</Typography>
                                    </AccordionDetails>
                                </Accordion>
                            ))}
                        </Box>
                        <Grid item xs={12} md={12}>
                            <Box
                                sx={{
                                    backgroundColor: "#fff",
                                    padding: "24px",
                                    borderRadius: "12px",
                                    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
                                }}
                            >
                                <Typography variant="h5" fontWeight="bold" mb={2}>
                                    Comments ({comments.length})
                                </Typography>
                                <Box
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        marginBottom: "8px",
                                        gap: 1,
                                    }}
                                >
                                    <IconButton onClick={() => handleFormatting("bold")}>
                                        <FormatBoldIcon />
                                    </IconButton>
                                    <IconButton onClick={() => handleFormatting("italic")}>
                                        <FormatItalicIcon />
                                    </IconButton>
                                    <IconButton onClick={() => handleFormatting("insertUnorderedList")}>
                                        <FormatListBulletedIcon />
                                    </IconButton>
                                </Box>
                                <Box
                                    contentEditable
                                    suppressContentEditableWarning
                                    ref={commentRef}
                                    onInput={handleInput}
                                    sx={{
                                        minHeight: "100px",
                                        border: "1px solid #ccc",
                                        borderRadius: "8px",
                                        padding: "8px",
                                        marginBottom: "16px",
                                        outline: "none",
                                        color: isEmpty ? "#aaa" : "#000",
                                    }}
                                >
                                    {isEmpty ? "Write your comment here..." : ""}
                                </Box>

                                <Box display="flex" justifyContent="flex-end">
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        onClick={handlePostComment}
                                        sx={{
                                            textTransform: "none",
                                            borderRadius: "20px",
                                            backgroundColor: "#808080",
                                            color: "#fff",
                                        }}
                                    >
                                        Post Comment
                                    </Button>
                                </Box>
                                <List sx={{ marginTop: "16px" }}>
                                    {comments.map((item, index) => (
                                        <ListItem
                                            key={index}
                                            sx={{ flexDirection: "column", alignItems: "flex-start" }}
                                        >
                                            <Box
                                                sx={{
                                                    display: "flex",
                                                    alignItems: "center",
                                                    marginBottom: "8px",
                                                }}
                                            >
                                                <Avatar sx={{ marginRight: "8px" }} />
                                                <Typography
                                                    variant="body1"
                                                    dangerouslySetInnerHTML={{ __html: item.text }}
                                                />
                                            </Box>
                                            <Box sx={{ marginLeft: "40px", width: "100%" }}>
                                                <Box
                                                    contentEditable
                                                    suppressContentEditableWarning
                                                    onKeyDown={(e) => {
                                                        if (e.key === "Enter" && e.target.innerText.trim() !== "") {
                                                            handleReply(index, e.target.innerText.trim());
                                                            e.target.innerText = "";
                                                            e.preventDefault();
                                                        }
                                                    }}
                                                    sx={{
                                                        border: "1px solid #ccc",
                                                        borderRadius: "8px",
                                                        padding: "8px",
                                                        outline: "none",
                                                        minHeight: "40px",
                                                    }}
                                                />
                                            </Box>
                                            <List sx={{ marginLeft: "40px", marginTop: "8px" }}>
                                                {item.replies.map((reply, replyIndex) => (
                                                    <ListItem key={replyIndex}>
                                                        <Avatar sx={{ marginRight: "8px" }} />
                                                        <Typography variant="body2">{reply}</Typography>
                                                    </ListItem>
                                                ))}
                                            </List>
                                        </ListItem>
                                    ))}
                                </List>
                            </Box>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Box
                            sx={{
                                backgroundColor: '#fff',
                                borderRadius: '51px',
                                padding: '16px',
                                boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
                            }}
                        >
                            <Typography variant="h5" fontWeight="bold" mb={2}>
                                Checklist to validate task completion
                                <CheckCircleIcon sx={{ color: 'green', marginLeft: '8px' }} />
                            </Typography>
                            <List>
                                <ListItem>
                                    <ListItemText
                                        primary="User Authentication"
                                        secondary="Verify that users can register, log in, and log out successfully, with password reset functionality working as intended."
                                    />
                                </ListItem>
                                <ListItem>
                                    <ListItemText
                                        primary="Social Media Feed"
                                        secondary="Ensure the feed displays posts correctly, including text, images, and videos, with timestamps accurately shown."
                                    />
                                </ListItem>
                                <ListItem>
                                    <ListItemText
                                        primary="Interactive Features"
                                        secondary="Confirm the implementation of smooth scrolling, video rendering, and the ability to share posts."
                                    />
                                </ListItem>
                                <ListItem>
                                    <ListItemText
                                        primary="Feed Creation"
                                        secondary="Verify that users can create posts with text, images, and videos, and share them with others seamlessly."
                                    />
                                </ListItem>
                            </List>
                        </Box>
                        <Box
                            sx={{
                                backgroundColor: '#fff',
                                padding: '16px',
                                borderRadius: '51px',
                                boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
                                margin: '24px auto',
                            }}
                        >
                            <Typography variant="h5" fontWeight="bold" mb={2}>
                                Task accepted by
                            </Typography>
                            <List>
                                {users.map((user) => (
                                    <ListItem key={user.username}>
                                        <ListItemAvatar>
                                            <Avatar
                                                alt={user.name}
                                                src={user.avatar}
                                                sx={{
                                                    border: '2px solid #ddd',
                                                    width: 48,
                                                    height: 48,
                                                }}
                                            />
                                        </ListItemAvatar>
                                        <ListItemText primary={user.username} secondary={user.name} />
                                    </ListItem>
                                ))}
                            </List>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
            <Footer />
        </Box>
    );
};
export default BodyLayout;
