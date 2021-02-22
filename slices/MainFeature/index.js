import React from "react";
import { array, shape } from "prop-types";
import { RichText } from "prismic-reactjs";

const MainFeature = ({ slice }) => (
  <section>
    <div className="py-20 bg-purple-50 radius-for-skewed">
      <div className="container mx-auto px-4">
        <div className="max-w-xl mx-auto text-center">
          <a
            className="mb-6 inline-block text-3xl font-bold leading-none"
            href="#"
          >
            <img
              className="h-12"
              src="atis-assets/logo/atis/atis-color-sign.svg"
              alt=""
              width="auto"
            />
          </a>
          <h2 className="mb-4 text-4xl lg:text-5xl font-bold font-heading">
            <RichText render={slice.primary.title} />
          </h2>
          <p className="max-w-md mx-auto mb-7 text-purple-500 leading-loose">
            <RichText render={slice.primary.description} />
          </p>
          <div>
            <a
              className="inline-block py-2 px-6 bg-purple-600 hover:bg-purple-700 text-white font-bold leading-loose rounded transition duration-200"
              href="#"
            >
              <RichText render={slice.primary.buttonText} />
            </a>
          </div>
        </div>
      </div>
    </div>
    <div className="skew skew-bottom mr-for-radius">
      <svg
        className="h-8 md:h-12 lg:h-20 w-full text-purple-50"
        viewBox="0 0 10 10"
        preserveAspectRatio="none"
      >
        <polygon fill="currentColor" points="0 0 10 0 0 10"></polygon>
      </svg>
    </div>
  </section>
);

MainFeature.propTypes = {
  slice: shape({
    primary: shape({
      title: array.isRequired,
    }).isRequired,
  }).isRequired,
};

export default MainFeature;
