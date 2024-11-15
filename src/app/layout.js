import { Inter } from "next/font/google";
// import "./globals.css";
import Providers from '../redux/Provider';
import "../../public/bootstrap/css/bootstrap.min.css";
import Header from "./header.jsx";
import Footer from "./footer.jsx";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Glory Store",
  description: "Shop thời trang giới trẻ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons/font/bootstrap-icons.css" rel="stylesheet" />
      </head>
      <body className={inter.className}>
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
        <script src="/bootstrap/js/bootstrap.bundle.min.js"></script>
      </body>
    </html>
  );
}
