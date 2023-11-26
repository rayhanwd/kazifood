import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";


export const metadata = {
  title: "Kazi food | online food delivery service",
  description: "Kazifood is an online food and grocery delivery platform owned by Berlin-based Delivery Hero",
  icons: [{ rel: 'icon', url: 'favicon.ico' }],
};

export default function DefaultLayout({ children }) {
  return (
    <>
        <Header />
        {children}
        <Footer />
    </>
  );
}
