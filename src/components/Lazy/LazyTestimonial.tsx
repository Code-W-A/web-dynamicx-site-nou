"use client";

import dynamic from "next/dynamic";

const Testimonial = dynamic(() => import("@/components/Home/Testimonial"), {
  ssr: false,
});

export default function LazyTestimonial() {
  return <Testimonial />;
}


