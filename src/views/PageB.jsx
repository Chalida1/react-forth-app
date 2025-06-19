import React from 'react'
import Box from '@mui/material/Box'
import Typography  from '@mui/material/Typography'
import Avatar from '@mui/material/Avatar'
import img1 from './../assets/img1.png'
import TextField   from '@mui/material/TextField'
import Button  from '@mui/material/Button'
import { Link } from "react-router-dom";
import PageC from './PageC'




function PageB() {
  return (
    <>
      <Box sx={{width:'75%', boxShadow: 3, mx:'auto', p:4, mt:10 }}>
        <Typography variant='h3' sx={{color: 'firebrick', textAlign: 'center' }}>
          เข้าใช้งานระบบ
        </Typography>
       
        <Avatar src={img1} variant='circular'
         sx={{width: 50, height: 50, mx: 'auto', mt: 5, boxShadow: 5}} />
         <Typography sx={{ fontSize: 15,fontWeight: 'bold',color: 'firebrick', mt:2 }}>
          ชื่อผู้ใช้
        </Typography>
        <TextField fullWidth/>
        <Typography sx={{ fontSize: 15,fontWeight: 'bold',color: 'firebrick', mt:2 }}>
          รหัสผ่าน
        </Typography>
        <TextField fullWidth/>
        <Button variant='contained' fullWidth 
          sx={{backgroundColor:'palevioletred',height: 40 ,mt: 3 , fontWeight: 'bold'}}>
          เข้าสู่ระบบ
        </Button>
        <Typography sx={{ fontSize: 15,color: 'firebrick', mt:2 , textAlign: 'center' }}>
          ยังไม่มีบัญชีผู้ใช้งาน 
          <Button component={Link} to="/register" >ลงทะเบียน</Button>
        </Typography>
          
      </Box>
    </>
  )
}

export default PageB