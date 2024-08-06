import React from 'react';
import { Paper, Typography, Box } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import { green, red, pink, blue } from '@mui/material/colors';

const iconMapping = {
  OrdersIcon: <ShoppingCartIcon sx={{ fontSize: { xs: 30, sm: 40 }, color: blue[500] }} />,
  DeliveredIcon: <CheckCircleIcon sx={{ fontSize: { xs: 30, sm: 40 }, color: green[500] }} />,
  CancelledIcon: <CancelIcon sx={{ fontSize: { xs: 30, sm: 40 }, color: red[500] }} />,
  RevenueIcon: <AttachMoneyIcon sx={{ fontSize: { xs: 30, sm: 40 }, color: pink[500] }} />
};

const StatsCard = ({ title, value, icon }) => {
  return (
    <Paper sx={{ padding: 1.5, textAlign: 'center', backgroundColor: '#252538', color: '#fff', height: 120 }}>
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mb: 1 }}>
        {iconMapping[icon]}
      </Box>
      <Typography variant="h6" sx={{ fontSize: '0.875rem' }}>{title}</Typography>
      <Typography variant="h4" sx={{ fontSize: '1.25rem' }}>{value}</Typography>
    </Paper>
  );
};

export default StatsCard;
