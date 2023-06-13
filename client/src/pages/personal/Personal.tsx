// library
import * as React from 'react'
import  { useEffect} from 'react'
// components
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import { History } from '../../components/tabs-sub-components/history'

import { PersonalData } from '../../components/tabs-sub-components/personaldata'
import { CustomBreadcrumbs } from '../../components/breadcrumbs'
import { useAppDispatch, useAppSelector,  } from '../../hooks/hook'
import s from '../../style/smallComponents/logout.module.scss'
import { logOut } from '../../store/applicationSlice/authorizationSlice';
import { useNavigate } from 'react-router-dom'
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
        <Box sx={{}}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  )
}

export const Personal: React.FC = () => {
  const token = useAppSelector(state => state.authorizationSlice.token)
  console.log(token)
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    if (token === null) {
      navigate('/authorization');
    } 
  }, [  navigate, token]);


  const handleLogOut =()=>{
      dispatch(logOut())
 
      
  }

  const [value, setValue] = React.useState(0)
 

  // useEffect(() => {
   
  //  if(loard){
  //   void dispatch(fetchHistories())
  //   void dispatch(fetchPersonalData())
  //  }
  // }, [dispatch, loard])
  


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
            textColor="inherit"
            sx={{
              '.MuiTabs-indicator': {
                height: '50px',
                opacity: '0.5',
                zIndex: -1,
                backgroundColor: '#ac2b16',
              },
            }}
          >
            <Tab label="История заказов" />
            <Tab label="Личные данные" />
            <Tab label="Выйти" />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <History _id={''} user={''} />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <PersonalData />
        </TabPanel>
        <TabPanel value={value} index={2}>
        <div className={s.logout}>
           <button 
           onClick={handleLogOut}
           className={s.button}>ВЫХОД</button> 
        </div>
        </TabPanel>
      </Box>
    </div>
  )
}
