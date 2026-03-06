import React, { useState } from "react";
import LeftSidebar from "../components/LeftSidebar";
import RightSidebar from "../components/RightSidebar";

const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [openSidebar, setOpenSidebar] = useState(false);

  return (
    <div className="bg-gray-50 min-h-screen">

      {/* MOBILE HEADER */}
      <header className="fixed top-0 left-0 right-0 h-14 bg-white/90 backdrop-blur-md border-b flex items-center px-4 z-40 shadow-sm md:hidden">
        <button
          onClick={() => setOpenSidebar(true)}
          className="p-2 rounded-lg hover:bg-gray-100"
        >
          <span className="text-xl">✨</span>
        </button>

        <h1 className="text-xl font-semibold ml-4">Unbound</h1>
      </header>

      {/* OVERLAY MOBILE SIDEBAR */}
      {openSidebar && (
        <div
          onClick={() => setOpenSidebar(false)}
          className="fixed inset-0 bg-black/40 z-40 md:hidden"
        />
      )}

      {/* MOBILE SIDEBAR */}
      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-white border-r p-6 z-50 transition-transform duration-300 md:hidden
        ${openSidebar ? "translate-x-0" : "-translate-x-full"}`}
      >
        <LeftSidebar isMobile onClose={() => setOpenSidebar(false)} />
      </aside>

      {/* DESKTOP SIDEBAR */}
      <aside className="hidden md:block fixed top-0 left-0 h-screen w-64 border-r bg-white z-30">
        <LeftSidebar />
      </aside>

      {/* MAIN WRAPPER */}
      <div className="flex min-h-screen">

        {/* SPACER FOR DESKTOP SIDEBAR */}
        <div className="hidden md:block w-64 flex-shrink-0" />

        {/* MAIN CONTENT */}
        <main className="flex-1 min-w-0 px-4 md:px-10 pt-16 md:pt-6">
          {children}
        </main>

        {/* RIGHT SIDEBAR */}
        <aside className="hidden lg:block w-80 flex-shrink-0 border-l bg-white">
          <RightSidebar />
        </aside>

      </div>

    </div>
  );
};

export default MainLayout;