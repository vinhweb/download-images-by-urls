import React from "react";
import HomePage from "@/components/homepage/home-page";
import {Metadata} from "next";

export const metadata: Metadata = {
  title: 'Tool Download nhiều hình ảnh một lúc',
  description: 'Đây là một tool siêu đơn giản, giúp bạn download nhiều hình ảnh một lúc bằng đoạn văn bản chứa URLs hình ảnh mà bạn muốn tải về',
  openGraph: {
    title: 'Tool Download nhiều hình ảnh một lúc',
    description: 'Đây là một tool siêu đơn giản, giúp bạn download nhiều hình ảnh một lúc bằng đoạn văn bản chứa URLs hình ảnh mà bạn muốn tải về',
    images: process.env.SITE_URL+'/og-image.jpg'
  }
}

export default function Home() {
  return (
    <HomePage/>
  );
}
