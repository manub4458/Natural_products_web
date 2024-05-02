import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: 'natureayurveda',
  description: 'Step into our world of skincare and haircare wonders! Unleash your brands beauty with us—its where fun meets fabulous.',
  icons: {
    icon: '/logo.svg', // /public path
  },
};
export default function RootLayout({ children }) {
  return (
    <>
      <Head>
        <meta name="title" content="natureayurveda" />
        <meta name="description" content="Step into our world of skincare and haircare wonders! Unleash your brands beauty with us—its where fun meets fabulous. Lets make your dream products a reality!" />
        <meta name="keywords" content="skincare, haircare" />
        <meta name="robots" content="index, follow" />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content=" days" />

      </Head>
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    </>
  );
}
