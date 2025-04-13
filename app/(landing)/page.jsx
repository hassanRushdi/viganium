import Card from "@/components/ui/Card";
import icon from "@/public/assets/icons/instagram.svg";
import saasicon from "@/public/assets/icons/saas.svg";
import React from "react";

const LandingPage = () => {
  return (
    <>
      <div className="text-brand-900 font-bold text-3xl">LandingPage</div>
      <div className="bg-gray h-screen flex">
        <Card
          icon={icon}
          header="Saas Platforms"
          body="These platforms are designed for ease of use, high availability, and customization to meet specific business requirements."
        />
        <Card
          icon={saasicon}
          header="Software Development"
          body='We specialize in custom software development, delivering tailored solutions that address the unique needs of businesses across various industries.'
        />
      </div>
    </>
  );
};

export default LandingPage;
