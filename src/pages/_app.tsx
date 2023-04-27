/*Luphiwe Sikupela
25-/Apr/2023*/

import{Inter}from 'next/font/google'
import "@/styles/globals.css";
import PhotoContextProvider from "@/utils/PhotoContext";
import type { AppProps } from "next/app";

const inter = Inter({subsets:['latin']})

export default function App({ Component, pageProps }: AppProps) {
  return (
    
    <PhotoContextProvider>
      <Component {...pageProps} />
    </PhotoContextProvider>
  );
}
