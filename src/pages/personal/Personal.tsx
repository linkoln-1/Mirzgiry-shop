import React from 'react'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import s from '../../style/pages/personal.module.scss'
import { History } from '../../components/tabs-sub-components/history/History'
import { Personaldata } from '../../components/tabs-sub-components/personaldata/Personaldata'
import { CustomBreadcrumbs } from '../../components/breadcrumbs/Breadcrumbs'
import './style.css'

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
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  )
}

function a11yProps (index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  }
}

export const Personal = () => {
  const [value, setValue] = React.useState(0)

  const handleChange = (event: React.ChangeEvent, newValue: number) => {
    setValue(newValue)
  }

  return (
    <div className={s.personal}>
       <CustomBreadcrumbs/>
        <Tabs
        className='personal__title'
         sx={{
           '.MuiTabs-flexContainer': {
             justifyContent: 'center'
           },
         }}
        variant='standard'
        value={value}
        onChange={handleChange}
        aria-label="simple tabs example">
          <Tab label="История заказов" {...a11yProps(0)} />
          <Tab label="Личные данные" {...a11yProps(1)} />
          <Tab label="Выйти" {...a11yProps(2)} />
        </Tabs>
      <TabPanel value={value} index={0}>
       <History/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Personaldata/>
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
    </div>
  )
}
