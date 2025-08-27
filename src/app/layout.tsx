export const metadata: Metadata = {
  title: 'QuantumFrame Photography',
  description: 'Showcase the photographer's work...'
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
