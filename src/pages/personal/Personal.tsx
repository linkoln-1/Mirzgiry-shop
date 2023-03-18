// library
import * as React from 'react'

// components
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import { History } from '../../components/tabs-sub-components/history'
import { PersonalData } from '../../components/tabs-sub-components/personaldata'
import { CustomBreadcrumbs } from '../../components/breadcrumbs'

interface TabPanelProps {
  children?: React.ReactNode
  index: number
  value: number
}

function TabPanel (props: TabPanelProps) {
  const { children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  )
}

export const Personal = () => {
  const [value, setValue] = React.useState(0)

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }

  return (
    <div className="container">
      <CustomBreadcrumbs />
      <Box sx={{ width: '100%' }}>
        <Box sx={{ borderBottom: 1, borderTop: 1, padding: '10px' }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
            centered={true}
            textColor='inherit'
            sx={{
              '.MuiTabs-indicator': {
                height: '50px',
                opacity: '0.5',
                zIndex: -1,
                backgroundColor: '#ac2b16'
              }
            }}
          >
            <Tab label="История заказов" />
            <Tab label="Личные данные" />
            <Tab label="Выйти" />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <History />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <PersonalData />
        </TabPanel>
        <TabPanel value={value} index={2}>
          Item Three
        </TabPanel>
      </Box>
    </div>
  )
}
