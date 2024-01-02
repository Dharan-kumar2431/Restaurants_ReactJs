import React from 'react'
import { Button, Card, CardActions, CardContent, Typography } from '@mui/material';
import styles from './Menucard_card.module.css';
import { Link } from 'react-router-dom';
// import {KeyboardDoubleArrowRightOutlined} from '@mui/icons-material'


const Menucard_card = (props) => {
  console.log("props",props.categeries.categerieName)
  return (
    <div>
      <Card className={styles['background-card']} sx={{ backgroundImage:`url(${props.categeries.categerieImage})`, m:3, borderRadius:"30px"}}>
      <CardContent className={styles['cardtext']}>
        <Typography variant="h4" sx={{mt:3, fontWeight:'bolder'}}>
          {props.categeries.categerieName}
        </Typography>
        <Typography>
        {props.categeries.categerieDescription}
        </Typography>
      </CardContent>
      <CardActions>
          <Link to={`/fooditems/${props.categeries.categerieType}`}>
          <Button
            size="medium"
            variant="contained"
            sx={{mb: 3, backgroundColor: 'secondary.main', fontWeight:'bolder',fontSize: "15px" , color: 'white'}}
            className={styles["card-button"]}
            // endIcon={<KeyboardDoubleArrowRightOutlined  fontWeight="bolder" />}
          >
            ORDER NOW
          </Button>
          </Link>
        </CardActions>
    </Card>
    </div>
  )
}

export default Menucard_card
