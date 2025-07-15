import './globals.css';

export const metadata = {
  title: 'FlightQuest Studios',
  description: 'Where Aviation Meets Innovation',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}