"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./UI/infinite-moving-cards";

const MusicSchoolTestimonials = [

            {quote: "The only way to do great work is to love what you do.",
            name: "Steve Jobs",
            title: "Co-founder of Apple Inc."}
        ,
        
           { quote: "In three words I can sum up everything I've learned about life: it goes on.",
            name: "Robert Frost",
            title: "American poet"}
        ,
         
            {quote: "The best way to predict the future is to create it.",
            name: "Abraham Lincoln",
            title: "16th President of the United States"}
        ,
         
            {quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
            name: "Winston Churchill",
            title: "Former Prime Minister of the United Kingdom"}
        ,
         
            {quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
            name: "Nelson Mandela",
            title: "Former President of South Africa"}
        ,
         
            {quote: "Life is what happens when you're busy making other plans.",
            name: "John Lennon",
            title: "English musician and songwriter"}   
];
export function InfiniteMovingCardsDemo() {
  return (
    <div className="h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.1] items-center justify-center relative overflow-hidden dark:">
    <h2 className="text-4xl text-center font-bold mb-32">Hear Our Harmony: Vocals Of Success</h2>
      <InfiniteMovingCards
        items={MusicSchoolTestimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}
