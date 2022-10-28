import {
  Box,
  Container,
  Input,
  Stack,
  Grid,
  GridItem,
  Button,
} from "@chakra-ui/react";
import React from "react";
import { Accordian } from "../Components/MobileComponents/Accordian";
import { Card } from "../Components/Card";
import { SortMenu } from "../Components/MobileComponents/SortMenu";
import { Divider } from "@chakra-ui/react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchBooks,
  fetchCars,
  fetchData,
  fetchMobile,
  getData,
} from "../data_redux/action";
import { Link, NavLink } from "react-router-dom";
import { useBreakpointValue } from "@chakra-ui/react";
import { useContext } from "react";
import { MobileParamContext } from "../Context/MobileParamContext";

// import { useContext } from "react";

export const Mobile = () => {
  const variant = useBreakpointValue({
    base: true,
    md: false,
    lg: false,
  });
  const dispatch = useDispatch();
  const { loading, error, data } = useSelector((store) => store.reducer);
  const {axiosObject} =  useContext(MobileParamContext)
  

  useEffect(() => {
    dispatch(fetchData(axiosObject));
  }, []);

  return (
    <>
      <Link to={"/"}> Cars </Link>
      <Link to={"/books"}> Books </Link>
      <Link to={"/mobile"}> Mobile </Link>
      <Container mt={10} maxW="84%">
        <Grid
          templateAreas={`"nav footer" "nav main"`}
          gridTemplateColumns={"304px 1fr"}
          gridTemplateRows={"30px 1fr 30px"}
          gap="2"
        >
          <GridItem pl="2" area={"nav"}>
            <Accordian></Accordian>
          </GridItem>
          <GridItem
            pr="5"
            borderBottom=" 1px solid  rgba(0, 0, 0, 0.30)"
            textAlign="right"
            area={"footer"}
          >
            <SortMenu />
          </GridItem>

          <Divider orientation="horizontal" />

          <GridItem
            display="grid"
            gridTemplateColumns={{
              base: "repeat(1,1fr)",
              md: "repeat(2,1fr)",
              lg: "repeat(3,1fr)",
            }}
            columnGap="15px"
            rowGap="15px"
            pl="2"
            area={"main"}
          >
            {data?.map((e) => (
              <NavLink key={e.id} to={`/productDetails/${e.id}`}>
                <Card
                  key={e.id}
                  img={e.published_ads.mobile[0].mobile_images.img1}
                  des={e.published_ads.mobile[0].ad_title}
                  price={e.published_ads.mobile[0].set_price}
                  city={e.published_ads.mobile[0].ads_location.city}
                  state={e.published_ads.mobile[0].ads_location.state}
                  // date={e.published_ads.mobile[0].date_from}
                  premium={e.isPremium}
                />
              </NavLink>
            ))}
          </GridItem>
        </Grid>

        <Stack direction="row">
          <Box maxH="fit-content" w="25%"></Box>

          <Box
            w="90%"
            display="grid"
            gridTemplateColumns={{
              base: "repeat(1,1fr)",
              md: "repeat(2,1fr)",
              lg: "repeat(3,1fr)",
            }}
            columnGap="15px"
            rowGap="15px"
          ></Box>
        </Stack>
      </Container>
    </>
  );
};
