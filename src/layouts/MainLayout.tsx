import React, { useState } from "react";
import LeftSidebar from "../components/LeftSidebar";
import RightSidebar from "../components/RightSidebar";

const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [openSidebar, setOpenSidebar] = useState(false);

  return (
    <div className="flex min-h-screen bg-gray-50">

      {/* --- MOBILE NAVBAR --- */}
      <div className="fixed top-0 left-0 right-0 h-14 bg-white border-b md:hidden flex items-center px-4 z-30">
        <button
          onClick={() => setOpenSidebar(true)}
          className="p-2 rounded-lg hover:bg-gray-100"
        >
          {/* icon hamburger */}
          <div className="space-y-1">
            <span className="text-xl">✨</span>

          {/* kalo pake gambar */}
            {/* <img src="/logo.svg" className="w-6 h-6" />  */}

          </div>
        </button>

        <h1 className="text-xl font-semibold ml-4">Unbound</h1>
      </div>

      {/* --- MOBILE SIDEBAR OVERLAY --- */}
      {openSidebar && (
        <div
          onClick={() => setOpenSidebar(false)}
          className="fixed inset-0 bg-black/40 z-40 md:hidden"
        />
      )}

      {/* --- MOBILE SIDEBAR DRAWER --- */}
      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-white border-r p-6 z-50 transform transition-transform duration-300 md:hidden 
    ${openSidebar ? "translate-x-0" : "-translate-x-full"}`}
      >
        <LeftSidebar isMobile onClose={() => setOpenSidebar(false)} />
      </aside>



      <LeftSidebar />

      {/* --- MAIN CONTENT --- */}
      <main className="flex-1 px-4 md:px-10 pt-16 md:pt-6">
        {children}
      </main>

      <RightSidebar />
    </div>
  );
};

export default MainLayout;
