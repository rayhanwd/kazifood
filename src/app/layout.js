import "./globals.css";


export const metadata = {
  title: "Kazi food | online food delivery service",
  description: "Kazifood is an online food and grocery delivery platform owned by Berlin-based Delivery Hero",
  icons: [{ rel: 'icon', url: 'favicon.ico' }],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true} className="bg-gray-50">
        {children}
      </body>
    </html>
  );
}
