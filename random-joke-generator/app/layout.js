
import "./globals.css";
export const metadata = {
  title: "Random Joke Generator",
  description: "Inspired by Thapa technical",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
