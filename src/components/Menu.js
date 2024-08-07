import React from 'react';
import { Box, Paper, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import FilterHdrIcon from '@mui/icons-material/FilterHdr';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import MenuBookIcon from '@mui/icons-material/MenuBook';

const Menu = () => {
  return (
    <Paper sx={{ p: 4, backgroundColor: '#252538', color: '#fff', height: '290px' }}>
      <List>
        <ListItem button sx={{ py: 2, display: 'flex', alignItems: 'center' }}>
          <ListItemIcon>
            <Box
              sx={{
                backgroundColor: 'orange',
                borderRadius: '50%',
                p: 1,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <FilterHdrIcon sx={{ color: '#fff', fontSize: 30 }} />
            </Box>
          </ListItemIcon>
          <ListItemText primary="Goals" primaryTypographyProps={{ variant: 'body1' }} />
          <Box
            sx={{
              backgroundColor: '#333',
              borderRadius: '50%',
              p: 0.5,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <ArrowForwardIosIcon sx={{ color: '#fff', fontSize: 18 }} />
          </Box>
        </ListItem>
        <ListItem button sx={{ py: 2, display: 'flex', alignItems: 'center' }}>
          <ListItemIcon>
            <Box
              sx={{
                backgroundColor: 'blue',
                borderRadius: '50%',
                p: 1,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <RestaurantIcon sx={{ color: '#fff', fontSize: 30 }} />
            </Box>
          </ListItemIcon>
          <ListItemText primary="Popular Dishes" primaryTypographyProps={{ variant: 'body1' }} />
          <Box
            sx={{
              backgroundColor: '#333',
              borderRadius: '50%',
              p: 0.5,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <ArrowForwardIosIcon sx={{ color: '#fff', fontSize: 18 }} />
          </Box>
        </ListItem>
        <ListItem button sx={{ py: 2, display: 'flex', alignItems: 'center' }}>
          <ListItemIcon>
            <Box
              sx={{
                backgroundColor: 'cyan',
                borderRadius: '50%',
                p: 1,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <MenuBookIcon sx={{ color: '#fff', fontSize: 30 }} />
            </Box>
          </ListItemIcon>
          <ListItemText primary="Menus" primaryTypographyProps={{ variant: 'body1' }} />
          <Box
            sx={{
              backgroundColor: '#333',
              borderRadius: '50%',
              p: 0.5,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <ArrowForwardIosIcon sx={{ color: '#fff', fontSize: 18 }} />
          </Box>
        </ListItem>
      </List>
    </Paper>
  );
};

export default Menu;
