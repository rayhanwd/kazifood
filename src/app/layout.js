import "./globals.css";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";

export const metadata = {
  title: "Kazi food | online food delivery service",
  description: "Kazifood is an online food and grocery delivery platform owned by Berlin-based Delivery Hero",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
