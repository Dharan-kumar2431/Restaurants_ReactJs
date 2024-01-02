import { Box, Container, Divider, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Fooditem_card from "../Food item card/Fooditem_card";
import { Fooditems } from "../Data/Fooditems";
import { useParams } from "react-router-dom";
import Viewcart from "../../View cart card/Viewcart";
import styles from './Food_items.module.css'

// import img from '../../Asectes/freshjuices.jpg'

const Food_items = () => {
  const [fooditems, setFooditems] = useState([]);

  const params = useParams();
  console.log(params.name);

  useEffect(() => {
    const filteredCategory = Fooditems.find((category) =>
      category.hasOwnProperty(params.name)
    );

    if (filteredCategory) {
      setFooditems(filteredCategory[params.name]);
    } else {
      setFooditems([]);
    }
  }, [params.name]);

  return (
    <Container>
      <Box sx={{ mx: 10, mt: 2 }}>
        <Box>
          <Typography
            variant="h4"
            sx={{
              color: "secondary.main",
              mb: 2,
              fontWeight: "bolder",
            }}
          >
            {params.name}
          </Typography>
          <Divider />
          {fooditems.map((item, itemIndex) => (
            <Box key={itemIndex}>
              <Fooditem_card fooditemsdata={item} />
              <Divider />
            </Box>
          ))}
        </Box>
      </Box>

      <Box className={styles['viewCartBox']} sx={{mb:2}}>
        <Viewcart/>
      </Box>
    </Container>
  );
};

export default Food_items;
