import React, { useState } from "react";
import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Typography,
} from "@mui/material";
import styles from "./Cards.module.css";
import backgroundImage from "../../Asectes/bgfood.jpg";
import { Link } from "react-router-dom";

const Cards = (props) => {
  console.log("props==>", props);
  return (
    // <Box>
    //   <Card
    //     sx={{ maxWidth: 250, m: 2 }}
    //     elevation={12}
    //     className={`${styles["flippable-card"]} ${
    //       isFlipped ? styles["flipped"] : ""
    //     }`}
    //     onClick={handleCardFlip}
    //   >
    //     <CardActionArea>
    //       <CardMedia
    //         component="img"
    //         height="130"
    //         image={props.cardData.Cardimg}
    //         alt="green iguana"
    //       />
    //       <svg
    //         className={styles["waves"]}
    //         xmlns="http://www.w3.org/2000/svg"
    //         viewBox="0 0 1440 320"
    //       >
    //         <path
    //           fill="#FFF"
    //           d="M0,96L48,117.3C96,139,192,181,288,213.3C384,245,480,267,576,256C672,245,768,203,864,160C960,117,1056,75,1152,69.3C1248,64,1344,96,1392,112L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
    //         ></path>
    //       </svg>
    //       <CardContent>
    //         <Typography
    //           gutterBottom
    //           variant="h5"
    //           component="div"
    //           sx={{ textAlign: "center", color: "primary.main" }}
    //         >
    //           {props.cardData.table}
    //         </Typography>
    //         <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
    //           Welcome ABCD Restaurant, we hope you to experience an exquisite
    //           dining journey filled with culinary delights and exceptional
    //           ambiance.
    //         </Typography>
    //       </CardContent>
    //     </CardActionArea>
    //     {/* <CardActions>
    //       <Button
    //         size="medium"
    //         color="primary"
    //         variant="contained"
    //         sx={{mb: 3}}
    //         className={styles["card-button"]}
    //       >
    //         Select
    //       </Button>
    //     </CardActions> */}
    //   </Card>
    // </Box>

    <Box>
      <Card elevation={12} className={styles["flippable-card"]} sx={{ m: 2 }}>
        <CardActionArea className={styles["card-action"]}>
          <div className={`${styles["card-side"]} ${styles["card-front"]}`}>
            <CardMedia
              component="img"
              height="130"
              image={props.cardData.Cardimg}
              alt="green iguana"
            />
            <svg
              className={styles["waves"]}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1440 320"
            >
              <path
                fill="#FFF"
                d="M0,96L48,117.3C96,139,192,181,288,213.3C384,245,480,267,576,256C672,245,768,203,864,160C960,117,1056,75,1152,69.3C1248,64,1344,96,1392,112L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
              ></path>
            </svg>
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                sx={{ textAlign: "center", color:'secondary.main' }}
              >
                {props.cardData.table}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Welcome ABCD Restaurant, we hope you to experience an exquisite
                dining journey filled with culinary delights and exceptional
                ambiance.
              </Typography>
            </CardContent>
          </div>

          <div className={`${styles["card-side"]} ${styles["card-back"]}`}>
            <Link to={"/menu"} className={styles["cardlink"]}>
              <CardContent
                className={styles["background-backcard"]}
                sx={{ backgroundImage: `url(${backgroundImage})` }}
              >
                <Typography
                  variant="h4"
                  sx={{
                    mb: 1,
                    mt: 9,
                    color: "white",
                    fontWeight: "bolder",
                    width: "13rem",
                    textAlign: "center",
                    textShadow: "2px 2px #ff0000",
                  }}
                >
                  Click To Start Ordering Your Food
                </Typography>
              </CardContent>
            </Link>
          </div>
        </CardActionArea>
      </Card>
    </Box>
  );
};

export default Cards;
