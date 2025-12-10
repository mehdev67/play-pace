"use client";

import dynamic from "next/dynamic";
import React from "react";

const Navigation = dynamic(() => import("./Navigation"), { ssr: false });

export default function NavigationWrapper() {
  return <Navigation />;
}
