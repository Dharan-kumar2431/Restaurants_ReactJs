import { Box, Button, Typography } from '@mui/material';
import styles from './Fooditem_card.module.css';
import img from "../../Asectes/freshjuices.jpg";
import React, { useState } from 'react'
import { Add, CurrencyRupeeOutlined, RadioButtonCheckedOutlined, Remove } from '@mui/icons-material';

const Fooditem_card = (props) => {

  const [itemCount, setItemCount] = useState(0)


  const addItemCount = () => {
    if(itemCount != props.fooditemsdata.foodCount){
        setItemCount(itemCount + 1);
    }
  }

  const minusItemCount = () => {
    if(itemCount != 0){
      setItemCount(itemCount - 1);
  }
  }

  return (
    <Box>
        <Box sx={{ display: "flex" }}>
          <Box sx={{ flexGrow: 1 }}>
          {props.fooditemsdata.foodcat === "veg" ? (
              <RadioButtonCheckedOutlined sx={{ color: "green", mt: 3 }} />
            ) : (
              <RadioButtonCheckedOutlined sx={{ color: "red", mt: 3 }} />
            )}
            <Box sx={{ ml: "5px", color: "#7f7b7d" }}>
              <Typography sx={{ fontSize: "20px", fontWeight: "bold" }}>
                {props.fooditemsdata.foodName}
              </Typography>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <CurrencyRupeeOutlined fontSize="small" />
                <Typography variant="h6">{props.fooditemsdata.foodPrice}</Typography>
              </Box>
              <Typography sx={{ mt: 1, mb: 2, color: "rgb(185, 180, 180)" }}>
                {props.fooditemsdata.foodDescription}
              </Typography>
            </Box>
          </Box>
          <Box sx={{ position: "relative" }}>
            <img src={props.fooditemsdata.foodimage} alt="no image" className={styles["itemsimg"]} />
            <Box sx={{ display: "flex" }} className={styles["countentybox"]}>
              <Button className={styles["countbutton"]} onClick={() => addItemCount()} >
                <Add 
                  fontSize="small"
                  sx={{ mx: "2px", mt: "1px", color: "secondary.main" }}
                />
              </Button>
              <Typography
                sx={{
                  border: "1px solid lightgray",
                  width: "4rem",
                  textAlign: "center",
                }}
              >
                {itemCount}
              </Typography>
              <Button className={styles["countbutton"]} onClick={() => minusItemCount()}>
                <Remove
                  fontSize="small"
                  sx={{ mx: "2px", mt: "1px", color: "secondary.main" }}
                />
              </Button>
            </Box>
          </Box>
        </Box>
    </Box>
  )
}

export default Fooditem_card
