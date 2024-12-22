import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import 'easymde/dist/easymde.min.css';


const workSans = localFont({
    src: [
        {
            path: "./fonts/WorkSans-Black.ttf",
            weight: "800"
        },
        {
            path: "./fonts/WorkSans-ExtraBold.ttf",
            weight: "700"
        },
        {
            path: "./fonts/WorkSans-Bold.ttf",
            weight: "600"
        },
        {
            path: "./fonts/WorkSans-SemiBold.ttf",
            weight: "500"
        },
        {
            path: "./fonts/WorkSans-Medium.ttf",
            weight: "400"
        },
        {
            path: "./fonts/WorkSans-Regular.ttf",
            weight: "300"
        },
        {
            path: "./fonts/WorkSans-Light.ttf",
            weight: "200"
        },
        {
            path: "./fonts/WorkSans-ExtraLight.ttf",
            weight: "100"
        },
    ],
    variable: '--font-work-sans',
});

export const metadata: Metadata = {
  title: "Home | Arrotup",
  description: "A New Start for Startups, Tech and Entrepreneurs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={workSans.variable}
      >
        {children}
      </body>
    </html>
  );
}
//1:35:30