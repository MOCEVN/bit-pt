import React from "react";
import LogoPursuit from "@integratorsai.prototype/logo.logo-pursuit";
import LogoTest from "@integratorsai.prototype/logo/logo-test";
import Logo from "@integratorsai.prototype/logo/logo";




const DynamicLogo = () => {
  const client = process.env.NEXT_PUBLIC_CLIENT; // of van context, subdomein, etc.

  switch (client) {
    case "pursuit":
      return <LogoPursuit />;
    case "test":
      return <LogoTest />;
    default:
      return <Logo />;
  }
};

export default DynamicLogo;
