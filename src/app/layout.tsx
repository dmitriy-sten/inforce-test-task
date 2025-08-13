import { QueryProvider } from "./(providers)/query-client";
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Todo" };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <QueryProvider>
        <body className="min-h-dvh bg-gray-50 text-gray-900 antialiased">
          <div className="mx-auto w-full max-w-xl p-6">{children}</div>
        </body>
      </QueryProvider>
    </html>
  );
}
