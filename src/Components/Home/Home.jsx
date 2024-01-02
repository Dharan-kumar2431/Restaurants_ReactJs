import { Box, Container, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Cards from "../Card/Card";
import styles from "./Home.module.css";
import {tableData} from '../Data/Tabledata';

const Home = () => {
    const [tablelist, setTablelist] = useState([]);

    useEffect(()=>{
        setTablelist(tableData);
    },[])

    
  return (
    <Box sx={{mx:10}}>
      <Typography
        variant="h4"
        sx={{
          textAlign: "center",
          fontWeight: "bolder",
          m: 3,
          color:'secondary.main'
        }}
      >
        ABCD RESTAURANT
      </Typography>

      <Box sx={{ display: "flex", flexWrap: "wrap"}} className={styles['cardsbox']}>
        {tablelist.map((values, index) =>
        //   index % 2 === 0 ? (
        //     <Box key={index} className={styles["oddcards"]}>
        //       <Cards cardData={values} />
        //     </Box>
        //   ) : (
        //     <Box key={index} className={styles["evencards"]}>
        //       <Cards cardData={values} />
        //     </Box>
        //   )
        <Box key={index} className={styles["tablecards"]} >
          <Cards cardData={values}/>
        </Box> 
        )}
      </Box>
    </Box>
  );
};

export default Home;
