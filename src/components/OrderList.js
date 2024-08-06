import React from 'react';
import { Box, Typography, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';

const orders = [
  { customer: 'Wade Warren', orderNo: '023125', amount: '$25.00', status: 'Delivered' },
  { customer: 'Jane Cooper', orderNo: '4506176', amount: '$80.00', status: 'Delivered' },
  { customer: 'Kristin Watson', orderNo: '7825612', amount: '$39.00', status: 'Delivered' },
  { customer: 'Cody Fisher', orderNo: '6901235', amount: '$50.00', status: 'Cancelled' },
  { customer: 'Savannah Nguyen', orderNo: '9874512', amount: '$120.00', status: 'Delivered' },
  { customer: 'Cody Fisher', orderNo: '6901235', amount: '$50.00', status: 'Cancelled' },
];

const statusStyles = {
  Delivered: { 
    color: 'green', 
    backgroundColor: 'rgba(144, 238, 144, 0.2)', 
    borderRadius: '12px', 
    padding: '4px 8px', 
    textAlign: 'center',
    display: 'inline-block',
    backdropFilter: 'blur(10px)'
  },
  Cancelled: { 
    color: 'red', 
    backgroundColor: 'rgba(248, 215, 218, 0.2)', 
    borderRadius: '12px', 
    padding: '4px 8px', 
    textAlign: 'center',
    display: 'inline-block',
    backdropFilter: 'blur(10px)'
  },
};

const OrderList = () => {
  return (
    <Box sx={{ backgroundColor: '#252538', padding: 2, borderRadius: 2 }}>
      <Typography variant="h6" sx={{ marginBottom: 2, color: '#fff' }}>
        Recent Orders
      </Typography>
      <Table sx={{ color: '#fff' }}>
        <TableHead>
          <TableRow>
            <TableCell sx={{ color: '#fff' }}>Customer</TableCell>
            <TableCell sx={{ color: '#fff' }}>Order No</TableCell>
            <TableCell sx={{ color: '#fff' }}>Amount</TableCell>
            <TableCell sx={{ color: '#fff' }}>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {orders.map((order, index) => (
            <TableRow key={index}>
              <TableCell>{order.customer}</TableCell>
              <TableCell>{order.orderNo}</TableCell>
              <TableCell>{order.amount}</TableCell>
              <TableCell>
                <Box sx={statusStyles[order.status]}>
                  {order.status}
                </Box>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Box>
  );
};

export default OrderList;
