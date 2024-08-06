import React from 'react';
import { Box, Paper, Typography, Select, MenuItem } from '@mui/material';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: '5', uv: 1000 },
  { name: '9', uv: 2000 },
  { name: '11', uv: 3000 },
  { name: '13', uv: 2780 },
  { name: '15', uv: 1890 },
  { name: '17', uv: 2390 },
  { name: '19', uv: 3490 },
  { name: '21', uv: 2000 },
  { name: '23', uv: 2780 },
  { name: '25', uv: 1890 },
  { name: '27', uv: 2390 },
  { name: '5', uv: 4000 },
  { name: '9', uv: 3000 },
  { name: '11', uv: 2000 },
  { name: '13', uv: 2780 },
  { name: '15', uv: 1890 },
  { name: '17', uv: 2390 },
  { name: '19', uv: 3490 },
  { name: '21', uv: 2000 },
  { name: '23', uv: 2780 },
  { name: '25', uv: 1890 },
];
const formatYAxisTick = (value) => {
  if (value >= 1000) {
    return `${(value / 1000).toFixed(0)}k`;
  }
  return value;
};

const ActivityChart = () => {
  return (
    <Paper sx={{ p: 4, backgroundColor: '#252538', color: '#fff', height: '290px' }}>
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
        <Typography variant="h6" sx={{ color: '#fff' }}>Activity</Typography>
        <Select
          value="Weekly"
          sx={{ color: '#fff', '.MuiOutlinedInput-notchedOutline': { borderColor: '#555' }, '.MuiSelect-icon': { color: '#fff' } }}
          variant="outlined"
          size="small"
        >
          <MenuItem value="Weekly">Weekly</MenuItem>
          <MenuItem value="Monthly">Monthly</MenuItem>
          <MenuItem value="Yearly">Yearly</MenuItem>
        </Select>
      </Box>
      <ResponsiveContainer width="100%" height="80%">
        <BarChart data={data} margin={{ top: 20, right: 20, left: 20, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#444" vertical={false} />
          <XAxis 
            dataKey="name" 
            stroke="#888" 
            tick={{ fill: '#888', fontSize: 12, fontWeight: 600 }} 
            axisLine={{ stroke: '#888' }} 
            tickLine={{ stroke: '#888' }} 
          />
           <YAxis 
            stroke="#888" 
            tick={{ fill: '#888', fontSize: 12, fontWeight: 600 }} 
            axisLine={false}  
            tickLine={false} 
            tickFormatter={formatYAxisTick}
          />
          <Tooltip contentStyle={{ backgroundColor: '#2c2c2e', border: 'none', borderRadius: 10 }} itemStyle={{ color: '#fff' }} />
          <Bar dataKey="uv" fill="#8884d8" barSize={20} radius={[10, 10, 0, 0]} animationBegin={0} animationDuration={1500} />
        </BarChart>
      </ResponsiveContainer>
    </Paper>
  );
};

export default ActivityChart;
