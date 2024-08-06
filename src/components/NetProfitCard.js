import React from 'react';
import { Box, Typography, Paper, CircularProgress } from '@mui/material';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

const NetProfitCard = () => {
  return (
    <Paper 
      sx={{ 
        padding: 2, 
        textAlign: 'center', 
        backgroundColor: '#252538', 
        height: 120, 
        overflow: 'auto',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}
    >
      <Box sx={{ flex: 1, textAlign: 'left', pr: 2 }}>
        <Typography variant="h6" sx={{ fontSize: '0.875rem' }}>Net Profit</Typography>
        <Typography variant="h4" sx={{ fontSize: '1.5rem' }}>$6759.25</Typography>
        <Box sx={{ 
          display: 'flex', 
          alignItems: 'center', 
          mt: 1
        }}>
          <Typography variant="body2" sx={{ fontSize: '0.875rem', mr: 1 }}>
            10%
          </Typography>
          <ArrowUpwardIcon sx={{ fontSize: '1rem', color: '#4caf50' }} />
        </Box>
      </Box>
      <Box sx={{ 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center' 
      }}>
        <Box sx={{ 
          position: 'relative',
          display: 'flex', 
          flexDirection: 'column',
          alignItems: 'center', 
          justifyContent: 'center', 
          mb: 1 
        }}>
          <CircularProgress variant="determinate" value={100} size={60} />
          <Typography variant="body2" sx={{ 
            position: 'absolute', 
            fontSize: '1.25rem', 
            color: '#fff',
            textAlign: 'center',
            zIndex: 1 // Ensure the percentage text is above the CircularProgress
          }}>
            70%
          </Typography>
          <Typography variant="body2" sx={{ 
            position: 'absolute', 
            fontSize: '0.27rem', 
            color: '#fff',
            textAlign: 'center',
            top: '70%', 
            left: '50%',
            transform: 'translateX(-50%)', 
            zIndex: 0 
          }}>
            Goal Completed
          </Typography>
        </Box>
        <Box sx={{ 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center' 
        }}>
          <Typography variant="body2" sx={{ fontSize: '0.55rem', mr: 1 }}>
            The value has been rounded off
          </Typography>
        </Box>
      </Box>
    </Paper>
  );
};

export default NetProfitCard;
