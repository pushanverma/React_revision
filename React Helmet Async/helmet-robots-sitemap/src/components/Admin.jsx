import React from "react";
import logo from "../assets/Gmail_Profile.jpg";
import { Helmet } from "react-helmet-async";

const Admin = () => {
  return (
    <>
      <Helmet>
        <title> Listing Page </title>
        <meta name="description" content="This is a Listing Page " />
        <meta name="Listing Page Name " content=" Yes this is Listing Pages " />

        <meta property="og:type" content="Listing Page" />
        <meta property="og:url" content="/listingPage" />
        <meta property="og:title" content="PhyMacs Listing Page " />
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

      <div>Admin Page</div>
    </>
  );
};

export default Admin;
