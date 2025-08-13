import { QueryProvider } from "./(providers)/query-client";
import "./globals.css";


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <QueryProvider>
        <body className="min-h-screen w-full bg-gray-50 text-gray-900 antialiased">
          <div className="mx-auto max-w-5xl w-full h-full">{children}</div>
        </body>
      </QueryProvider>
    </html>
  );
}
