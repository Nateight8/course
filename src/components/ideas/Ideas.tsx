import React from "react";
import Layout from "../ui/Layout";
import { P } from "../ui/P";
import { H3 } from "../ui/H3";
import { Button } from "../ui/button";

// type Props = {};

function Ideas() {
  return (
    <Layout>
      <div className="">
        <H3 className="">Interior Design Ideas</H3>
        <P className="">Find interior design inspirations for your home</P>
      </div>
      <div className="">
        <Button className="hidden sm:inline-block">
          Explore designers ideas
        </Button>
      </div>
    </Layout>
  );
}

export default Ideas;
