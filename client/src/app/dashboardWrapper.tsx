"use client";
import React, { Suspense, useEffect } from "react";
const Sidebar = React.lazy(() => import("./components/Sidebar"));
const Navbar = React.lazy(() => import("./components/Navbar"));
import StoreProvider, { useAppDispatch, useAppSelector } from "./redux";
import state from "@/state/index";
import Loader from "./loader";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const isSidebarCollapsed = useAppSelector(
    (state) => state.global.isSidebarCollapsed,
  );

  const isDarkMode = useAppSelector((state) => state.global.isDarkMode);
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  });

  return (
    <div className={"flex min-h-screen w-full bg-gray-50"}>
      <Sidebar />
      <main
        className={`flex w-full flex-col bg-gray-50 dark:bg-dark-bg ${isSidebarCollapsed ? "" : "md:pl-64"}`}
      >
        <Navbar />
        <Suspense fallback={<p>Loading... Please Wait.</p>}>
          {children}
        </Suspense>
      </main>
    </div>
  );
};

const dashboardWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <Suspense fallback={<p>Loading... Please Wait.</p>}>
      <StoreProvider>
        <DashboardLayout>{children}</DashboardLayout>
      </StoreProvider>
    </Suspense>
  );
};

export default dashboardWrapper;
