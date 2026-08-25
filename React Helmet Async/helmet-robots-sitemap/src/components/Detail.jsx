import React from "react";
import { Helmet } from "react-helmet-async";
import logo from "../assets/Gmail_Profile.jpg";

const Detail = () => {
  return (
    <>
      <Helmet>
        <title> Detail Page </title>
        <meta name="description" content="This is a Detail Page " />
        <meta name="Detail Page Name " content=" Yes this is Detail Pages " />
        <meta property="og:type" content="Detail  Page" />
        <meta property="og:url" content="/detailpage" />
        <meta property="og:title" content="PhyMacs Detail Page " />
        <meta
          property="og:description"
          content="Hello this is description of the PhyMacs "
        />
        <meta property="og:site_name" content="@phymacs" />
        <meta property="og:image" content={logo} />
        <meta property="og:image:width" content="140" />
        <meta property="og:image:height" content="140" />
        <link rel="canonical" href="https://www.phymacstutoting.com" />
      </Helmet>

      <div>Detail Page</div>
    </>
  );
};

export default Detail;
