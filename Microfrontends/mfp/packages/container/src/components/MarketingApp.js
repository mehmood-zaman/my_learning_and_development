import React, { useRef, useEffect } from "react";
import { mount } from "marketing/MarketingApp";
const MarketingApp = () => {
  useEffect(() => {
    mount(ref.current);
  }, []);
  const ref = useRef(null);
  return <div ref={ref} />;
};

export default MarketingApp;
