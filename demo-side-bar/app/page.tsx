import Image from "next/image";
import { SidebarDemo } from "./_components/SidebarDemo";
import MainContent from "./_components/MyDashboard";
export default function Home() {
  return (
    <main className="">

      <SidebarDemo> <MainContent/> </SidebarDemo> 


    </main>
  );
}
