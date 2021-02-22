import React from "react";
import { RichText } from "prismic-reactjs";

const MySlice = ({ slice }) => (
  <section class="py-20">
    <div class="container px-4 mx-auto">
      <div class="px-8 py-20 bg-gray-800 rounded shadow">
        <div class="flex flex-wrap justify-center items-center -mx-3">
          <div class="w-full lg:w-1/2 px-3 lg:px-16 mb-8 text-center lg:text-left">
            <h2 class="text-3xl mb-4 text-white lg:text-4xl font-bold font-heading">
              <RichText render={slice.primary.main} />
            </h2>
            <p class="text-gray-200">
              <RichText render={slice.primary.sub} />
            </p>
          </div>
          <div class="w-full lg:w-1/2 px-3">
            <div class="flex flex-wrap max-w-lg mx-auto">
              <div class="flex w-full md:w-2/3 px-3 mb-3 md:mb-0 md:mr-6 bg-gray-800 border border-gray-500 rounded">
                <svg
                  class="h-6 w-6 my-auto text-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                </svg>
                <input
                  class="w-full pl-3 px-3 py-4 text-xs text-white placeholder-white font-semibold bg-gray-800 outline-none"
                  type="text"
                  placeholder="Type your e-mail"
                />
              </div>
              <button
                class="w-full md:w-auto py-4 px-8 text-xs text-white font-semibold leading-none bg-purple-600 hover:bg-purple-700 rounded"
                type="submit"
                onClick={() => alert("Thanks for signing up!")}
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default MySlice;
