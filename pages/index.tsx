import React, { VFC } from "react";
import { Button } from "@material-ui/core";
import { Layout } from "../components/Layout";

const Home: VFC = () => {
  console.log(
    "%c Made by sᴀlvᴀ 💛 → https://twitter.com/softwaretest21 ",
    "background: black; color: white; padding: 1ch 2ch; border-radius: 2rem;",
  );
  return (
    <Layout title="Home">
      <Button variant="contained">Default</Button>
      <Button variant="contained" color="primary">
        Primary
      </Button>
      <Button variant="contained" color="secondary">
        Secondary
      </Button>
    </Layout>
  );
};

export default Home;
