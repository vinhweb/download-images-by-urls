import React from "react";
import HomePage from "@/components/homepage/home-page";
import {Metadata} from "next";

export const metadata: Metadata = {
  title: 'Download multiple images at once',
  description: 'This is a super simple tool that helps you download multiple images at once using text containing the URLs of the images you want to download.',
  openGraph: {
    title: 'Download multiple images at once',
    description: 'This is a super simple tool that helps you download multiple images at once using text containing the URLs of the images you want to download.',
    images: process.env.SITE_URL+'/og-image.jpg'
  }
}

export default function Home() {
  return (
    <HomePage/>
  );
}
