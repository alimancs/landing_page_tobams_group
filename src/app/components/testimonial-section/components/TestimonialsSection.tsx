"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import TestimonialCard from "./components/TestimonialCard";

interface Testimonial {
  name: string;
  role: string;
  company: string;
  text: string;
  avatar: string;
  bgColor: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Sarah Johnson",
    role: "CEO",
    company: "Tech Innovations Inc.",
    text: "Tobams Group is a true partner in our journey to digital excellence. Their creativity and technical expertise have propelled our projects to new heights. Their work is top-notch, and the results speak for themselves. I can't recommend them enough!",
    avatar: "/pngs/testimonial-avatar-1.png",
    bgColor: "#e8a030",
  },
  {
    name: "Aisha Yusuf",
    role: "Founder",
    company: "CraftHub NG",
    text: "Working with Tobams Group on our website was a breeze. They understood our vision and transformed it into a beautiful online space. Highly recommend their Website Design service!",
    avatar: "/pngs/testimonial-avatar-2.png",
    bgColor: "#d4882a",
  },
  {
    name: "Chinonso Nwankwo",
    role: "HR Director",
    company: "FutureTech Solutions",
    text: "Tobams Group has been instrumental in our talent acquisition journey. Their Tech Talent Solution service consistently connects us with the right professionals. Reliable and straightforward.",
    avatar: "/pngs/testimonial-avatar-3.png",
    bgColor: "#c8a840",
  },
  {
    name: "Emeka Okafor",
    role: "CTO",
    company: "BuildScale Africa",
    text: "Their IT Consulting Services helped us overhaul our infrastructure in record time. The team was knowledgeable, responsive, and genuinely invested in our success. Truly exceptional.",
    avatar: "/pngs/testimonial-avatar-1.png",
    bgColor: "#7b8fa0",
  },
];

const CARD_GAP = 20;

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardWidth, setCardWidth] = useState(440);
  const [visibleCards, setVisibleCards] = useState(3);

  const containerRef = useRef<HTMLDivElement>(null);

  const updateLayout = useCallback(() => {
    if (!containerRef.current) return;
    const containerWidth = containerRef.current.offsetWidth;

    let cards: number;
    if (containerWidth < 640) {
      cards = 1;
    } else if (containerWidth < 1024) {
      cards = 2;
    } else {
      cards = 3;
    }

    const computed = (containerWidth - CARD_GAP * (cards - 1)) / cards;
    setCardWidth(computed);
    setVisibleCards(cards);
    setCurrentIndex(0);
  }, []);

  useEffect(() => {
    updateLayout();
    const observer = new ResizeObserver(updateLayout);
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, [updateLayout]);

  const maxIndex = Math.max(testimonials.length - visibleCards, 0);

  const handlePrev = () => setCurrentIndex((prev) => Math.max(prev - 1, 0));
  const handleNext = () => setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));

  const translateX = currentIndex * (cardWidth + CARD_GAP);

  return (
    <section className="bg-white py-[72px] pb-20">
      {/* Section Title */}
      <h2 className="text-center text-3xl font-extrabold text-[#111111] mb-12 tracking-tight">
        Testimonials
      </h2>

      {/* Carousel Wrapper */}
      <div className="max-w-screen mx-auto px-[5%] md:px-[7%]">
        {/* Overflow container */}
        <div ref={containerRef} className="overflow-hidden w-full">
          <div
            className="flex"
            style={{
              gap: `${CARD_GAP}px`,
              transform: `translateX(-${translateX}px)`,
              transition: "transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
            }}
          >
            {testimonials.map((t, i) => (
              <div
                key={i}
                style={{
                  minWidth: `${cardWidth}px`,
                  maxWidth: `${cardWidth}px`,
                  flexShrink: 0,
                }}
              >
                <TestimonialCard data={t} />
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-end gap-2.5 mt-8">
          <button
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className="w-[38px] h-[38px] rounded border-[1.5px] border-[#c0305a] flex items-center justify-center transition-colors duration-200"
            style={{
              backgroundColor: currentIndex === 0 ? "#f9f0f2" : "#fff5f7",
              color: currentIndex === 0 ? "#e0a0b0" : "#c0305a",
              cursor: currentIndex === 0 ? "not-allowed" : "pointer",
            }}
          >
            <ChevronLeft size={16} />
          </button>
          <button
            onClick={handleNext}
            disabled={currentIndex >= maxIndex}
            className="w-[38px] h-[38px] rounded border-[1.5px] border-[#c0305a] flex items-center justify-center transition-colors duration-200"
            style={{
              backgroundColor: currentIndex >= maxIndex ? "#f9f0f2" : "#fff5f7",
              color: currentIndex >= maxIndex ? "#e0a0b0" : "#c0305a",
              cursor: currentIndex >= maxIndex ? "not-allowed" : "pointer",
            }}
          >
            <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}