import React from 'react';
import { Tabs, Tab, AppBar, Box } from '@mui/material';
import { styled } from '@mui/system';

interface TabItem {
  label: string;
  content: React.ReactNode;
}

interface CustomTabsProps {
  tabs: TabItem[];
  initialTab?: number;
}

const CustomTab = styled(Tab)(({ theme }) => ({
  minWidth: '127px',
  height: '29px',
  borderRadius: '100px',
  color: theme.palette.error.main,
  '&.Mui-selected': {
    backgroundColor: theme.palette.error.main,
    color: '#FBF8F8',
  },
}));

const CustomTabs: React.FC<CustomTabsProps> = ({ tabs, initialTab = 0 }) => {
  const [value, setValue] = React.useState(initialTab);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '266px', borderRadius: '100px', background: '#FFF', padding: '6px' }}>
      <AppBar position="static" color="transparent" elevation={0}>
        <Tabs value={value} onChange={handleChange} indicatorColor="primary" variant="fullWidth">
          {tabs.map((tab, index) => (
            <CustomTab key={index} label={tab.label} disableRipple />
          ))}
        </Tabs>
      </AppBar>
      {tabs.map((tab, index) => (
        <Box key={index} hidden={value !== index}>
          {tab.content}
        </Box>
      ))}
    </Box>
  );
};

export default CustomTabs;

