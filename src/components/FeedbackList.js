import React from 'react';
import { Box, Typography, List, ListItem, ListItemText, Rating } from '@mui/material';

const feedbacks = [
  { customer: 'Jenny Wilson', rating: 5, comment: 'The food was amazing!' },
  { customer: 'Dianne Russell', rating: 4, comment: 'Great service, will come again.' },
  { customer: 'Devon Lane', rating: 3, comment: 'Normal service, nothing exceptional.' },
  { customer: 'Dianne Russell', rating: 4, comment: 'Great service, will come again.' },
];

const FeedbackList = () => {
  return (
    <Box sx={{ backgroundColor: '#252538', padding: 2, borderRadius: 2 }}>
      <Typography variant="h6">Customer's Feedback</Typography>
      <List>
        {feedbacks.map((feedback, index) => (
          <ListItem key={index} sx={{ borderBottom: '1px solid #333' }}>
            <ListItemText
              primary={`${feedback.customer}`}
              secondary={
                <>
                  <Rating value={feedback.rating} readOnly />
                  <Typography>{feedback.comment}</Typography>
                </>
              }
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default FeedbackList;
