import Footer from "@/src/components/Footer/Footer";
import { Navbar } from "@/src/components/UI/navbar";
import { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="relative flex flex-col h-screen">
      <Navbar />
      <main className="">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default layout;
