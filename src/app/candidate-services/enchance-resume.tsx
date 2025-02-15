'use client';
import React from 'react';
export default function EnchanceResume() {
  return (
    <section
      className="
        w-full 

        bg-gradient-to-r 
        from-[#9F99B9]      
        to-[#3B3158]       
        flex 
        items-center 
        justify-center 
        px-8 
        py-16
      "
    >
      <div className="max-w-4xl w-full text-white">
  <h1 className="text-5xl font-bold mb-6 leading-relaxed">
    Upgrade your Resume,<br />
    Enhance Your Career
  </h1>
  <button
    className="
      bg-pink-500 
      hover:bg-pink-600
      text-white 
      font-semibold 
      px-6 
      py-3 
      rounded
    "
  >
    Try it Out
  </button>
</div>

      {/* You could place an image or illustration on the right side here, or absolutely position it */}
    </section>
  );
}
