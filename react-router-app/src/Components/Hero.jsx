import React, { Component } from 'react';

class Hero extends Component {
  render() {
    return (
      <div class="font-sans max-w-6xl max-md:max-w-md mx-auto">
      <div class="grid md:grid-cols-2 items-center md:gap-8 gap-6">
        <div class="max-md:order-1 max-md:text-center">
          <p class="text-sm font-bold text-blue-600 mb-2"><span class="rotate-90 inline-block mr-2">|</span> ALL IN ONE MEETING SCHEDULER</p>
          <h2 class="text-gray-800 md:text-5xl text-3xl font-extrabold mb-4 md:!leading-[55px]">Schedule meetings effortlessly</h2>
          <p class="mt-4 text-base text-gray-600 leading-relaxed">Embark on a gastronomic journey with our curated dishes, delivered promptly to your doorstep. Elevate your dining experience today.</p>
          <div class="mt-8 space-x-4">
            <button type='button'
              class="bg-blue-600 hover:bg-transparent hover:text-blue-600 border-2 border-blue-600 transition-all text-white font-semibold tracking-wide text-sm rounded-full px-6 py-2.5">Get started</button>
            <button type='button'
              class="bg-transparent hover:bg-blue-600 hover:text-white border-2 border-blue-600 transition-all text-blue-600 font-semibold tracking-wide text-sm rounded-full px-6 py-2.5">Learn more</button>
          </div>

          <hr class="mt-8 border-gray-300" />

          <div class="mt-8">
            <h4 class="text-gray-800 font-bold text-base mb-4">Trusted by teams around the word</h4>
            <div class="grid grid-cols-2 md:grid-cols-4 gap-4 items-center">
              <img src="https://readymadeui.com/google-logo.svg" class="w-28 mx-auto" alt="google-logo" />
              <img src="https://readymadeui.com/facebook-logo.svg" class="w-28 mx-auto" alt="facebook-logo" />
              <img src="https://readymadeui.com/linkedin-logo.svg" class="w-28 mx-auto" alt="linkedin-logo" />
              <img src="https://readymadeui.com/pinterest-logo.svg" class="w-28 mx-auto" alt="pinterest-logo" />
            </div>
          </div>
        </div>
        <div class="lg:h-[650px] md:h-[550px] flex items-center relative max-md:before:hidden before:absolute before:bg-blue-200 before:h-full before:w-3/4 before:right-0 before:z-0">
          <img src="https://readymadeui.com/photo.webp" class="rounded-md lg:w-3/4 md:w-11/12 z-50 relative" alt="Dining Experience" />
        </div>
      </div>
    </div>
    );
  }
}

export default Hero;