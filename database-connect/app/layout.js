import './globals.css'

export default function RootLayout({ children }) {
  return (
    <html>
      <body  cz-shortcut-listen="true">
        {children}
      </body>
    </html>
  );
}
