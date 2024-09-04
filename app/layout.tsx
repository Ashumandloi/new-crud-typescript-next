"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./globals.css";
import Header from "@/components/Header";

const queryClient = new QueryClient();

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <QueryClientProvider client={queryClient}>
          <div><Header /></div>
          <div>{children}</div>
        </QueryClientProvider>
      </body>
    </html>
  );
}
