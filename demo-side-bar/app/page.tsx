
import Image from "next/image";
import { SidebarDemo } from "./_components/SidebarDemo";
import MainContent from "./_components/MyDashboard";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
    },
  },
});
export default function Home() {
  return (
    <main className="flex-1">
      {/* <QueryClientProvider client={queryClient}> */}
      {/* <ReactQueryDevtools initialIsOpen={false} />  */}
      <MainContent />
      {/* </QueryClientProvider> */}
    </main>
  );
}
