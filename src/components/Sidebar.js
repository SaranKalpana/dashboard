import React, { useState } from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, IconButton } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import MailIcon from '@mui/icons-material/Mail';
import InboxIcon from '@mui/icons-material/Inbox';
import ListIcon from '@mui/icons-material/List';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Sidebar = () => {
  const [open, setOpen] = useState(true);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <Drawer
      variant="permanent"
      open={open}
      sx={{
        '& .MuiDrawer-paper': {
          position: 'relative',
          whiteSpace: 'nowrap',
          width: open ? 240 : 72,
          transition: (theme) =>
            theme.transitions.create('width', {
              easing: theme.transitions.easing.sharp,
              duration: theme.transitions.duration.enteringScreen,
            }),
          overflowX: 'hidden',
          backgroundColor: '#1e1e2f',
          color: '#fff',
        },
      }}
    >
      <List>
        <ListItem button onClick={toggleDrawer}>
          <ListItemIcon>
            {open ? <ArrowBackIcon /> : <ArrowForwardIcon />}
          </ListItemIcon>
          {open && <ListItemText primary="Collapse" />}
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <HomeIcon sx={{ color: '#fff' }} />
          </ListItemIcon>
          {open && <ListItemText primary="Home" />}
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <MailIcon sx={{ color: '#fff' }} />
          </ListItemIcon>
          {open && <ListItemText primary="Mail" />}
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <InboxIcon sx={{ color: '#fff' }} />
          </ListItemIcon>
          {open && <ListItemText primary="Inbox" />}
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <ListIcon sx={{ color: '#fff' }} />
          </ListItemIcon>
          {open && <ListItemText primary="List" />}
        </ListItem>
      </List>
    </Drawer>
  );
};

export default Sidebar;
