import * as React from 'react';
import Box from '@mui/material/Box';
import "./SpeedDialComp.css"
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import ImageIcon from '@mui/icons-material/Image';
import { color } from '@mui/system';
const actions = 
  {icon: <ImageIcon />, name: 'Image'}
  


export default function BasicSpeedDial({setblogData , blogData , BlogData ,setimage}) {

  function handleClick(){
    let s=document.getElementById("input")
    s.click();
  }

  return (
    <Box  sx={{ height: 320, transform: 'translateZ(0px)', flexGrow: 1 }}>
      <SpeedDial 
        className='speedDial'
        ariaLabel="SpeedDial basic example"
        sx={{ position: 'absolute', bottom: 16, right: 16 }}
        icon={<SpeedDialIcon className='hehe' />}
      >

          <SpeedDialAction
           onClick={handleClick}
            key={actions.name}
            icon={<><ImageIcon/> <input  id="input" onChange={(e)=>setimage(e.target.files[0])} name="image" type={"file"} style={{display:"none"}} /></>}
            tooltipTitle={actions.name}
          />
       
      </SpeedDial>
    </Box>
  );
}