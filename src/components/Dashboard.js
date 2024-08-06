import React from 'react';
import { Box, Grid } from '@mui/material';
import ActivityChart from './ActivityChart';
import OrderList from './OrderList';
import FeedbackList from './FeedbackList';
import StatsCard from './StatsCard';
import NetProfitCard from './NetProfitCard';
import Sidebar from './Sidebar';
import Header from './Header';
import Menu from './Menu';

const Dashboard = () => {
  return (
    <Box sx={{ display: 'flex', height: '100vh' }}>
      <Sidebar />
      <Box sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
        <Header />
        <Box component="main" sx={{ flexGrow: 1, p: { xs: 1, sm: 2, md: 3 } }}>
          <Grid container spacing={2}>
            {/* Stats Cards */}
            <Grid item xs={12} md={8}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6} md={3}>
                  <StatsCard title="Total Orders" value="75" icon="OrdersIcon" />
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                  <StatsCard title="Total Delivered" value="70" icon="DeliveredIcon" />
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                  <StatsCard title="Total Cancelled" value="5" icon="CancelledIcon" />
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                  <StatsCard title="Total Revenue" value="$12k" icon="RevenueIcon" />
                </Grid>
              </Grid>
            </Grid>
            
            {/* Net Profit Card */}
            <Grid item xs={12} md={4}>
              <NetProfitCard />
            </Grid>
          </Grid>

          {/* Charts and Lists */}
          <Grid container spacing={2} sx={{ marginTop: { xs: 1, sm: 2, md: 3 } }}>
            <Grid item xs={12} md={8}>
              <ActivityChart />
            </Grid>
            <Grid item xs={12} md={4}>
              <Menu />
            </Grid>
          </Grid>
          
          <Grid container spacing={2} sx={{ marginTop: { xs: 1, sm: 2, md: 3 } }}>
            <Grid item xs={12} md={8}>
              <OrderList />
            </Grid>
            <Grid item xs={12} md={4}>
              <FeedbackList />
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
