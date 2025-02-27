import React, { useState } from 'react';
import {
  Box,
  Typography,
  Paper,
  Grid,
  Avatar,
  Button,
  Tabs,
  Tab,
  IconButton,
  Input,
  Snackbar,
  Alert,
  FormHelperText,
} from '@mui/material';
import { Pencil } from 'lucide-react';
import styled from 'styled-components';
import { useAppContext } from '../context/AppContext';

const TabPanel = ({ children, value, index, ...other }) => (
  <div
    role='tabpanel'
    hidden={value !== index}
    id={`settings-tabpanel-${index}`}
    aria-labelledby={`settings-tab-${index}`}
    {...other}
  >
    {value === index && <Box sx={{ py: 3 }}>{children}</Box>}
  </div>
);

const StyledTab = styled(Tab)`
  text-transform: none;
  font-weight: normal;
  font-size: 1rem;
  color: #718ebf;
  &[aria-selected='true'] {
    font-weight: bold;
    color: #232323;
    border-bottom: #232323;
  }
`;
const StyledTextField = styled(Input)`
  border: 1px solid #dfeaf2;
  border-radius: 1rem;
  color: #718ebf;
  padding: 0.5rem 0.8rem;
  &::after {
    display: none;
  }
  &::before {
    display: none;
  }
`;

const Settings = () => {
  const [tabValue, setTabValue] = useState(0);
  const { user, updateUserProfile, loading } = useAppContext();
  const [formData, setFormData] = useState({
    name: '',
    username: '',
    email: '',
    dateOfBirth: '',
    permanentAddress: '',
    presentAddress: '',
    postalCode: '',
    city: '',
    country: '',
  });

  const [openAlert, setOpenAlert] = useState(false);

  // State to track validation errors
  const [errors, setErrors] = useState({
    name: '',
    username: '',
    email: '',
    dateOfBirth: '',
    postalCode: '',
  });

  const validateForm = () => {
    const newErrors: any = {};
    let isValid = true;

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
      isValid = false;
    }

    if (!formData.username.trim()) {
      newErrors.username = 'Username is required';
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
      isValid = false;
    }

    if (!formData.dateOfBirth.trim()) {
      newErrors.dateOfBirth = 'Date of Birth is required';
      isValid = false;
    }

    if (!formData.postalCode.trim()) {
      newErrors.postalCode = 'Postal Code is required';
      isValid = false;
    } else if (!/^\d{4,6}$/.test(formData.postalCode)) {
      newErrors.postalCode = 'Invalid postal code (4-6 digits)';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  React.useEffect(() => {
    if (user) {
      setFormData({
        name: user.name,
        username: user.username,
        email: user.email,
        dateOfBirth: user.dateOfBirth,
        permanentAddress: user.permanentAddress,
        presentAddress: user.presentAddress,
        postalCode: user.postalCode,
        city: user.city,
        country: user.country,
      });
    }
  }, [user]);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  const handleInputChange =
    (field: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setFormData((prev) => ({
        ...prev,
        [field]: event.target.value,
      }));
    };

  const handleSave = () => {
    if (!validateForm()) return; // Stop if validation fails
    updateUserProfile(formData);
    setOpenAlert(true);
  };

  if (loading) {
    return <Box>Loading user profile...</Box>;
  }

  return (
    <Box sx={{ py: 3 }}>
      <Paper sx={{ borderRadius: 2 }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs
            value={tabValue}
            onChange={handleTabChange}
            sx={{ px: 3, pt: 2 }}
          >
            <StyledTab label='Edit Profile' />
            <StyledTab label='Preferences' />
            <StyledTab label='Security' />
          </Tabs>
        </Box>

        <TabPanel value={tabValue} index={0}>
          <Box sx={{ px: 3, position: 'relative' }}>
            <Grid container spacing={3}>
              <Grid item container spacing={3}>
                <Grid item xs={12} md={2}>
                  <Box
                    sx={{ display: 'flex', justifyContent: 'center', mb: 4 }}
                  >
                    <Box sx={{ position: 'relative' }}>
                      <Avatar
                        src={user?.avatar}
                        sx={{ width: 100, height: 100 }}
                      />
                      <IconButton
                        sx={{
                          position: 'absolute',
                          bottom: 0,
                          right: 0,
                          backgroundColor: 'black',
                          color: 'white',
                          boxShadow: 1,
                          '&:hover': { backgroundColor: 'white' },
                        }}
                        size='small'
                      >
                        <Pencil size={16} />
                      </IconButton>
                    </Box>
                  </Box>
                </Grid>
                <Grid container item xs={12} md={10} spacing={3}>
                  <Grid item xs={12} md={6}>
                    <Typography variant='subtitle2' sx={{ mb: 1 }}>
                      Your Name
                    </Typography>
                    <StyledTextField
                      fullWidth
                      value={formData.name}
                      onChange={handleInputChange('name')}
                      error={!!errors.name}
                    />
                    {errors.name && (
                      <FormHelperText error>{errors.name}</FormHelperText>
                    )}
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Typography variant='subtitle2' sx={{ mb: 1 }}>
                      User Name
                    </Typography>
                    <StyledTextField
                      fullWidth
                      value={formData.username}
                      onChange={handleInputChange('username')}
                      error={!!errors.username}
                    />
                    {errors.username && (
                      <FormHelperText error>{errors.username}</FormHelperText>
                    )}
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Typography variant='subtitle2' sx={{ mb: 1 }}>
                      Email
                    </Typography>
                    <StyledTextField
                      fullWidth
                      type='email'
                      value={formData.email}
                      onChange={handleInputChange('email')}
                      error={!!errors.email}
                    />
                    {errors.email && (
                      <FormHelperText error>{errors.email}</FormHelperText>
                    )}
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Typography variant='subtitle2' sx={{ mb: 1 }}>
                      Password
                    </Typography>
                    <StyledTextField
                      fullWidth
                      type='password'
                      value='••••••••••'
                      disabled
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Typography variant='subtitle2' sx={{ mb: 1 }}>
                      Date of Birth
                    </Typography>
                    <StyledTextField
                      fullWidth
                      value={formData.dateOfBirth}
                      onChange={handleInputChange('dateOfBirth')}
                      error={!!errors.dateOfBirth}
                    />
                    {errors.dateOfBirth && (
                      <FormHelperText error>{errors.dateOfBirth}</FormHelperText>
                    )}
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Typography variant='subtitle2' sx={{ mb: 1 }}>
                      Present Address
                    </Typography>
                    <StyledTextField
                      fullWidth
                      value={formData.presentAddress}
                      onChange={handleInputChange('presentAddress')}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Typography variant='subtitle2' sx={{ mb: 1 }}>
                      Permanent Address
                    </Typography>
                    <StyledTextField
                      fullWidth
                      value={formData.permanentAddress}
                      onChange={handleInputChange('permanentAddress')}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Typography variant='subtitle2' sx={{ mb: 1 }}>
                      City
                    </Typography>
                    <StyledTextField
                      fullWidth
                      value={formData.city}
                      onChange={handleInputChange('city')}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Typography variant='subtitle2' sx={{ mb: 1 }}>
                      Postal Code
                    </Typography>
                    <StyledTextField
                      fullWidth
                      value={formData.postalCode}
                      onChange={handleInputChange('postalCode')}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Typography variant='subtitle2' sx={{ mb: 1 }}>
                      Country
                    </Typography>
                    <StyledTextField
                      fullWidth
                      value={formData.country}
                      onChange={handleInputChange('country')}
                    />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>

            <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 4 }}>
              <Button
                variant='contained'
                sx={{
                  bgcolor: 'black',
                  color: 'white',
                  borderRadius: '8px',
                  px: 4,
                  '&:hover': {
                    bgcolor: 'black',
                  },
                  paddingX: 8,
                }}
                onClick={handleSave}
              >
                Save
              </Button>
            </Box>
          </Box>
        </TabPanel>

        <TabPanel value={tabValue} index={1}>
          <Box sx={{ px: 3 }}>
            <Typography>Preferences settings will go here</Typography>
          </Box>
        </TabPanel>

        <TabPanel value={tabValue} index={2}>
          <Box sx={{ px: 3 }}>
            <Typography>Security settings will go here</Typography>
          </Box>
        </TabPanel>
      </Paper>
      <Snackbar
        open={openAlert}
        autoHideDuration={3000}
        onClose={() => setOpenAlert(false)}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        <Alert
          onClose={() => setOpenAlert(false)}
          severity='success'
          sx={{ width: '100%' }}
        >
          Profile updated successfully!
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Settings;
