import { Box, Card, Typography } from '@mui/material';
import React from 'react'
import Menucard_card from '../Menucard_cards/Menucard_card';
import {Foodcategeries} from '../Data/Foodcategeries' 

const Menu_card = () => {
  console.log(Foodcategeries)
  return (
   <Box sx={{ display: "flex", flexWrap: "wrap",mx:3}}>
    {Foodcategeries.map((items,index)=>(
      <Box>
        <Menucard_card categeries={Foodcategeries[index]} />
      </Box>
    ))}
   </Box>
  )
}

export default Menu_card;
