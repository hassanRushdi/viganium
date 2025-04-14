"use client";
import { useState, useEffect } from "react";
import LoadingScreen from "./LoadingScreen";

const LandingLayout = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); 

    return () => clearTimeout(timer);
  }, []);

  return isLoading ? <LoadingScreen /> : <div>{children}</div>;
};

export default LandingLayout;
