import React from "react";
import HomePage from "@/components/homepage/home-page";
import {Metadata} from "next";

export const metadata: Metadata = {
  title: 'Download nhiều hình ảnh một lúc',
  description: 'Download nhiều hình ảnh một lúc bằng mảng URL, hoàn toàn miễn phí.',
}

export default function Home() {
  return (
    <HomePage/>
  );
}
