import Image from "next/image";
import MainContent from "./_components/MyDashboard";
import MyQueryProvider from "./_components/MyQueryProvider";

export default function Home() {
  return (
    <main className="flex-1">
      {/* <QueryClientProvider client={queryClient}> */}
      {/* <ReactQueryDevtools initialIsOpen={false} />  */}
      <MyQueryProvider>
        <MainContent />
      </MyQueryProvider>

      {/* </QueryClientProvider> */}
    </main>
  );
}
