import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const comfortaaRegular = localFont({
	src: "./fonts/Comfortaa-Regular.ttf",
	variable: "--font-comfortaa-regular",
	weight: "400",
})

export const metadata: Metadata = {
  title: "Evniloup Main",
  description: "Evniloup main page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
		<html lang="en">
			<head>
				<link rel="icon" href="enviloup-logo2.ico" />
			</head>
      <body
        className={`${comfortaaRegular.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
