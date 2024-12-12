import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Box,
  TextField,
  InputAdornment,
  Dialog,
  DialogContent,
  useMediaQuery,
  IconButton,
  FormHelperText,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import SlidingBanner from '../components/SlidingBanner ';
import { Link } from 'react-router-dom'; 
const Header = ({onSearch}) => {
  const isMobile = useMediaQuery('(max-width:600px)');
  const [isLoginOpen, setLoginOpen] = useState(false);
  const [isContactOpen, setContactOpen] = useState(false);
  const [contactForm, setContactForm] = useState({ name: '', email: '', message: '' });
  const [loginForm, setLoginForm] = useState({ email: '', password: '' });
  const [formErrors, setFormErrors] = useState({ name: '', email: '', message: '', loginEmail: '', loginPassword: '' });
  const [searchValue, setSearchValue] = useState("");
  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchValue(value);
    if (onSearch) {
      onSearch(value); 
    }
  };
  const handleLoginOpen = () => setLoginOpen(true);
  const handleLoginClose = () => setLoginOpen(false);
  const handleContactOpen = () => setContactOpen(true);
  const handleContactClose = () => setContactOpen(false);
  const validateContactForm = () => {
    let errors = { name: '', email: '', message: '' };
    let isValid = true;
    if (!contactForm.name) {
      errors.name = 'Name is required';
      isValid = false;
    }
    if (!contactForm.email) {
      errors.email = 'Email is required';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(contactForm.email)) {
      errors.email = 'Email is invalid';
      isValid = false;
    }
    if (!contactForm.message) {
      errors.message = 'Message is required';
      isValid = false;
    }
    setFormErrors((prev) => ({ ...prev, ...errors }));
    return isValid;
  };
  const validateLoginForm = () => {
    let errors = { loginEmail: '', loginPassword: '' };
    let isValid = true;

    if (!loginForm.email) {
      errors.loginEmail = 'Email is required';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(loginForm.email)) {
      errors.loginEmail = 'Email is invalid';
      isValid = false;
    }
    if (!loginForm.password) {
      errors.loginPassword = 'Password is required';
      isValid = false;
    }
    setFormErrors((prev) => ({ ...prev, ...errors }));
    return isValid;
  };
  const handleContactSubmit = () => {
    if (validateContactForm()) {
      console.log('Contact Form Submitted:', contactForm);
      setContactOpen(false);
    }
  };
  const handleLoginSubmit = () => {
    if (validateLoginForm()) {
      console.log('Login Form Submitted:', loginForm);
      setLoginOpen(false);
    }
  };
  const handleContactChange = (e) => {
    const { name, value } = e.target;
    setContactForm((prev) => ({ ...prev, [name]: value }));
  };
  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLoginForm((prev) => ({ ...prev, [name]: value }));
  };
  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: '#f9f9f6',
          color: '#000',
          boxShadow: 'none',
          borderBottom: '1px solid #ccc',
          width: '100%',
          top: 0,
          zIndex: 1000,
          padding: isMobile ? '0 12px' : '0 24px',
        }}
      >
        <Toolbar
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: 0,
            flexDirection: isMobile ? 'column' : 'row',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: isMobile ? '8px' : 0,
            }}
          >
            <Link to="/" style={{ textDecoration: 'none' }}>
              <img
                alt="Logo"
                src="https://www.igotskills.in/_next/image?url=%2Fassets%2Fpng%2Flogo.png&w=256&q=75"
                style={{
                  height: isMobile ? '40px' : '50px',
                  objectFit: 'contain',
                }}
              />
            </Link>
          </Box>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: '16px',
              flexDirection: isMobile ? 'column' : 'row',
              width: isMobile ? '100%' : 'auto',
            }}
          >
            <TextField
      size="small"
      placeholder="Search for a skill"
      value={searchValue}
      onChange={handleSearchChange}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <SearchIcon sx={{ color: "#888" }} />
          </InputAdornment>
        ),
      }}
      sx={{
        width: "100%",
        maxWidth: "300px",
        borderRadius: "20px",
        "& .MuiOutlinedInput-root": {
          borderRadius: "20px",
          "& fieldset": {
            borderColor: "#ddd",
          },
          "&:hover fieldset": {
            borderColor: "#aaa",
          },
        },
      }}
    />
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
                flexDirection: isMobile ? 'column' : 'row',
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  border: '1px solid #000',
                  padding: '6px 16px',
                  borderRadius: '20px',
                  cursor: 'pointer',
                  '&:hover': {
                    backgroundColor: '#f4f4f4',
                  },
                  justifyContent: 'center',
                }}
                onClick={handleContactOpen}
              >
                <img
                  alt="Green Hand Icon"
                  src="https://www.igotskills.in/assets/svg/green_hand.svg"
                  style={{ height: '20px' }}
                />
                <span style={{ fontWeight: '600', color: '#000' }}>CONTACT</span>
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  backgroundColor: '#000',
                  color: '#fff',
                  padding: '6px 16px',
                  borderRadius: '20px',
                  cursor: 'pointer',
                  '&:hover': {
                    backgroundColor: '#333',
                  },
                  justifyContent: 'center',
                }}
                onClick={handleLoginOpen}
              >
                <img
                  alt="Yellow Hand Icon"
                  src="https://www.igotskills.in/assets/svg/yellow_hand.svg"
                  style={{ height: '20px' }}
                />
                <span style={{ fontWeight: '600', color: '#fff' }}>LOGIN</span>
              </Box>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
      <Box
        sx={{
          position: 'fixed',
          top: '64px',
          width: '100%',
          zIndex: 999,
        }}
      >
        <SlidingBanner />
      </Box>
      <Dialog
        open={isLoginOpen}
        onClose={handleLoginClose}
        maxWidth="sm"
        fullWidth
        BackdropProps={{
          style: {
            backdropFilter: 'blur(10px)',
          },
        }}
        PaperProps={{
          sx: {
            borderRadius: '20px',
            overflow: 'hidden',
            background: 'linear-gradient(135deg, #6a11cb, #2575fc)',
            color: '#fff',
          },
        }}
      >
        <DialogContent
          sx={{
            padding: '32px',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
          }}
        >
          <IconButton
            onClick={handleLoginClose}
            sx={{ position: 'absolute', top: '16px', right: '16px', color: '#fff' }}
          >
            <CloseIcon />
          </IconButton>
          <h2 style={{ textAlign: 'center', margin: 0 }}>Login</h2>
          <TextField
            label="Email"
            name="email"
            value={loginForm.email}
            onChange={handleLoginChange}
            fullWidth
            variant="outlined"
            size="medium"
            sx={{
              '& .MuiOutlinedInput-root': {
                backgroundColor: '#fff',
                borderRadius: '10px',
              },
            }}
          />
          {formErrors.loginEmail && <FormHelperText error>{formErrors.loginEmail}</FormHelperText>}
          <TextField
            label="Password"
            name="password"
            value={loginForm.password}
            onChange={handleLoginChange}
            fullWidth
            variant="outlined"
            size="medium"
            type="password"
            sx={{
              '& .MuiOutlinedInput-root': {
                backgroundColor: '#fff',
                borderRadius: '10px',
              },
            }}
          />
          {formErrors.loginPassword && <FormHelperText error>{formErrors.loginPassword}</FormHelperText>}
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              marginTop: '16px',
            }}
          >
            <Box
              sx={{
                backgroundColor: '#fff',
                color: '#2575fc',
                padding: '10px 24px',
                borderRadius: '20px',
                cursor: 'pointer',
                fontWeight: '600',
                '&:hover': {
                  backgroundColor: '#f0f0f0',
                },
                textAlign: 'center',
              }}
              onClick={handleLoginSubmit}
            >
              Login
            </Box>
          </Box>
        </DialogContent>
      </Dialog>
      <Dialog
        open={isContactOpen}
        onClose={handleContactClose}
        maxWidth="sm"
        fullWidth
        BackdropProps={{
          style: {
            backdropFilter: 'blur(10px)',
          },
        }}
        PaperProps={{
          sx: {
            borderRadius: '20px',
            overflow: 'hidden',
            background: 'green',
            color: '#fff',
          },
        }}
      >
        <DialogContent
          sx={{
            padding: '32px',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
          }}
        >
          <IconButton
            onClick={handleContactClose}
            sx={{ position: 'absolute', top: '16px', right: '16px', color: '#fff' }}
          >
            <CloseIcon />
          </IconButton>
          <h2 style={{ textAlign: 'center', margin: 0 }}>Contact Us</h2>
          <TextField
            label="Your Name"
            name="name"
            value={contactForm.name}
            onChange={handleContactChange}
            fullWidth
            variant="outlined"
            size="medium"
            sx={{
              '& .MuiOutlinedInput-root': {
                backgroundColor: '#fff',
                borderRadius: '10px',
              },
            }}
          />
          {formErrors.name && <FormHelperText error>{formErrors.name}</FormHelperText>}
          <TextField
            label="Your Email"
            name="email"
            value={contactForm.email}
            onChange={handleContactChange}
            fullWidth
            variant="outlined"
            size="medium"
            sx={{
              '& .MuiOutlinedInput-root': {
                backgroundColor: '#fff',
                borderRadius: '10px',
              },
            }}
          />
          {formErrors.email && <FormHelperText error>{formErrors.email}</FormHelperText>}
          <TextField
            label="Message"
            name="message"
            value={contactForm.message}
            onChange={handleContactChange}
            fullWidth
            variant="outlined"
            multiline
            rows={4}
            sx={{
              '& .MuiOutlinedInput-root': {
                backgroundColor: '#fff',
                borderRadius: '10px',
              },
            }}
          />
          {formErrors.message && <FormHelperText error>{formErrors.message}</FormHelperText>}
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              marginTop: '16px',
            }}
          >
            <Box
              sx={{
                backgroundColor: '#fff',
                color: '#dd2476',
                padding: '10px 24px',
                borderRadius: '20px',
                cursor: 'pointer',
                fontWeight: '600',
                '&:hover': {
                  backgroundColor: '#f0f0f0',
                },
                textAlign: 'center',
              }}
              onClick={handleContactSubmit}
            >
              Send Message
            </Box>
          </Box>
        </DialogContent>
      </Dialog>
    </>
  );
};
export default Header;
