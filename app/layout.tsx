import "./globals.css";

export const metadata = {
  title: "Yoga Mohadese",
  description: "Learning Yoga With Mohadese",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="w-full h-screen bg-green-200 text-black dark:text-red-800">
        {children}
      </body>
    </html>
  );
}
