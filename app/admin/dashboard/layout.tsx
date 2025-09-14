import type { Metadata } from "next";
import Sidebar from '../components/sidebar';

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Beta CMS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <div className="flex w-full h-screen">
         <Sidebar />
          <div className="flex flex-col w-full h-screen">
            <div className="w-full h-[calc(100vh-77px)] overflow-y-auto">
             {children}
            </div>
          </div>
      </div>

  );
}
