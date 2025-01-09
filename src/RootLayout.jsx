import React from "react";
import SiderPnal from "./CommonComponent/SiderPnal";
import Header from "./CommonComponent/Header";
import Footer from "./CommonComponent/Footer";
import { Outlet } from "react-router-dom";

export default function RootLayout() {
  return (
    <div className="grid grid-cols-[20%_auto]">
      <div>
        <SiderPnal />
      </div>
      <div>
        <Header />
        <Outlet />
        <Footer />
      </div>
    </div>
  );
}
