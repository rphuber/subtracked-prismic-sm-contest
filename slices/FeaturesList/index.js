import React from "react";
import { array, shape } from "prop-types";
import { RichText } from "prismic-reactjs";

const FeatureList = ({ slice }) => (
  <section>
    <div className="py-20 radius-for-skewed">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center">
          <div className="w-full lg:w-1/2 mb-12 lg:mb-0">
            <div className="max-w-md">
              <h2 className="mb-2 text-4xl lg:text-5xl font-bold font-heading">
                <RichText render={slice.primary.title} />
              </h2>
              <div className="max-w-xs">
                <p className="text-gray-500 leading-loose">
                  <RichText render={slice.primary.description} />
                </p>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            {slice.items.map((item, idx) => (
              <div
                key={item.title}
                className="mb-12 lg:mb-8 flex flex-wrap items-start"
              >
                <span className="mb-4 lg:mb-0 lg:mr-6 inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded text-purple-600 text-2xl font-bold">
                  {idx + 1}
                </span>
                <div className="w-full lg:w-3/4">
                  <h3 className="mb-4 text-2xl font-bold font-heading">
                    <RichText render={item.title} />
                  </h3>
                  <p className="text-gray-500 leading-loose">
                    <RichText render={item.description} />
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

FeatureList.propTypes = {
  slice: shape({
    primary: shape({
      title: array.isRequired,
    }).isRequired,
  }).isRequired,
};

export default FeatureList;
