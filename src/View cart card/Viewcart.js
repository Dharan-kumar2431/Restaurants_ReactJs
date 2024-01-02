import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Typography,
} from "@mui/material";
import styles from "./Viewcart.module.css";
import { CurrencyRupeeOutlined } from "@mui/icons-material";
import img from "../Asectes/Allfoods.jpg";

const Viewcart = () => {
  return (
    <Container>
      <Box>
        <Card elevation={7} sx={{backgroundColor: "olive"}} >
          <CardContent sx={{ color: "secondary.main" }} className={styles['viewcartcard']}>
            <Box sx={{ display: "flex" }} className={styles["viewcartcontent"]}>
              {/* <img src={img} alt="no image" className={styles["viewcartimg"]} /> */}
              <Typography sx={{ ml: 1, mt: 1, fontWeight: "bolder" }}>
                1 items
              </Typography>
              <Typography className={styles["verticaldivider"]}></Typography>
              <CurrencyRupeeOutlined fontSize="small" sx={{ mt: "12px" }} />
              <Typography
                sx={{ mt: "10px", fontWeight: "bolder", flexGrow: 1 }}
              >
                450
              </Typography>
              <Button
                size="medium"
                variant="contained"
                sx={{
                  backgroundColor: "primary.main",
                  fontWeight: "bolder",
                  fontSize: "15px",
                  color: "white",
                }}
                // endIcon={<KeyboardDoubleArrowRightOutlined  fontWeight="bolder" />}
              >
                View Cart
              </Button>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
};

export default Viewcart;
