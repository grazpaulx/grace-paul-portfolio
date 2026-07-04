import "./globals.css";
import { AdminProvider } from "@/lib/AdminContext";
import LoginBar from "@/components/LoginBar";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Grace Paul — Portfolio",
  description:
    "B.Tech Computer Science student (Minor: Electronics & Communication), Christ College of Engineering, Irinjalakuda. Full-stack development, machine learning, and IoT.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,500;0,9..144,600;0,9..144,700;1,9..144,400;1,9..144,500&family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <AdminProvider>
          <LoginBar />
          <Navbar />
          {children}
        </AdminProvider>
      </body>
    </html>
  );
}
