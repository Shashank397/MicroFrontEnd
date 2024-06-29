import React from "react";
import { mount } from "marketing/marketingIndex";
import { useRef } from "react";
import { useEffect } from "react";

export default function MarketingApp() {
  const ref = useRef();

  useEffect(() => {
    mount(ref.current);
  });

  return <div ref={ref} />;
}
