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
        <ListItem button sx={{ py: 2 }}>
          <ListItemIcon>
            <FilterHdrIcon sx={{ color: 'orange' }} />
          </ListItemIcon>
          <ListItemText primary="Goals" primaryTypographyProps={{ variant: 'body1' }} />
          <ArrowForwardIosIcon sx={{ color: '#fff' }} />
        </ListItem>
        <ListItem button sx={{ py: 2 }}>
          <ListItemIcon>
            <RestaurantIcon sx={{ color: 'blue' }} />
          </ListItemIcon>
          <ListItemText primary="Popular Dishes" primaryTypographyProps={{ variant: 'body1' }} />
          <ArrowForwardIosIcon sx={{ color: '#fff' }} />
        </ListItem>
        <ListItem button sx={{ py: 2 }}>
          <ListItemIcon>
            <MenuBookIcon sx={{ color: 'cyan' }} />
          </ListItemIcon>
          <ListItemText primary="Menus" primaryTypographyProps={{ variant: 'body1' }} />
          <ArrowForwardIosIcon sx={{ color: '#fff' }} />
        </ListItem>
      </List>
    </Paper>
  );
};

export default Menu;
