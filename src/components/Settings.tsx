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
} from '@mui/material';
import { Pencil } from 'lucide-react';
import styled from 'styled-components';

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
  border: 1px solid #DFEAF2;
  border-radius: 1rem;
  color: #718EBF;
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
  const [formData, setFormData] = useState({
    name: 'Charlene Reed',
    username: 'Charlene Reed',
    email: 'charlenereed@gmail.com',
    dateOfBirth: '25 January 1990',
    permanentAddress: 'San Jose, California, USA',
    presentAddress: 'San Jose, California, USA',
    postalCode: '45962',
    city: 'San Jose',
    country: 'USA',
  });

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
                        src='https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120'
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
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Typography variant='subtitle2' sx={{ mb: 1 }}>
                      User Name
                    </Typography>
                    <StyledTextField
                      fullWidth
                      value={formData.username}
                      onChange={handleInputChange('username')}
                    />
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
                    />
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
                    />
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
                  paddingX: 8
                }}
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
    </Box>
  );
};

export default Settings;
