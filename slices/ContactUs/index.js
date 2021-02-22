import React from "react";
import { array, shape } from "prop-types";
import { RichText } from "prismic-reactjs";

const ContactUs = ({ slice }) => (
  <section class="py-20">
    <div class="container px-4 mx-auto">
      <div class="max-w-2xl mx-auto text-center">
        <div class="max-w-md mb-8 mx-auto">
          <span class="text-sm text-gray-400">
            <RichText render={slice.primary.subTitle} />
          </span>
          <h2 class="mt-2 text-4xl font-bold font-heading">
            <RichText render={slice.primary.title} />
          </h2>
        </div>
        <div>
          <form onSubmit={() => alert("Thanks for reaching out")}>
            <div class="mb-4">
              <input
                class="w-full p-4 text-xs font-semibold leading-none bg-gray-50 rounded outline-none"
                type="text"
                placeholder="Subject"
              />
            </div>
            <div class="mb-4">
              <input
                class="w-full p-4 text-xs font-semibold leading-none bg-gray-50 rounded outline-none"
                type="text"
                placeholder="Name"
              />
            </div>
            <div class="mb-4">
              <input
                class="w-full p-4 text-xs font-semibold leading-none bg-gray-50 rounded outline-none"
                type="email"
                placeholder="name@example.com"
              />
            </div>
            <div class="mb-4">
              <textarea
                class="w-full h-24 p-4 text-xs font-semibold leading-none resize-none bg-gray-50 rounded outline-none"
                type="text"
                placeholder="Message..."
              ></textarea>
            </div>
            <div class="flex justify-between items-center">
              <label>
                <input class="mr-1" type="checkbox" name="terms" value="1" />
                <span class="text-sm font-semibold">
                  I agree to terms and conditions.
                </span>
              </label>
              <button
                class="py-4 px-8 text-sm text-white font-semibold leading-none bg-purple-600 hover:bg-purple-700 rounded"
                type="submit"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
);

ContactUs.propTypes = {
  slice: shape({
    primary: shape({
      title: array.isRequired,
    }).isRequired,
  }).isRequired,
};

export default ContactUs;
