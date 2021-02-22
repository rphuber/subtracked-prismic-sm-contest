import React, { useState } from "react";
import { array, shape } from "prop-types";
import { RichText } from "prismic-reactjs";

const section = {
  maxWidth: "600px",
  margin: "4em auto",
  textAlign: "center",
};

const h2 = {
  color: "#8592e0",
};

const MySlice = ({ slice }) => {
  const [currentOpenItems, setCurrentOpenItems] = useState([]);
  const handleClick = (idx) => {
    const openItemsIndex = currentOpenItems.indexOf(idx);
    if (openItemsIndex > -1) {
      setCurrentOpenItems([
        ...currentOpenItems.slice(0, openItemsIndex),
        ...currentOpenItems.slice(openItemsIndex + 1, currentOpenItems.length),
      ]);
    } else {
      setCurrentOpenItems([...currentOpenItems, idx]);
    }
  };
  return (
    <section style={section} className="container mx-auto px-4">
      <div className="max-w-sm mx-auto mb-12 text-center">
        {slice.primary.title ? (
          <h1 className="mb-4 text-3xl md:text-4xl font-bold font-heading">
            <RichText render={slice.primary.title} />
          </h1>
        ) : (
          <h2 style={h2}>Template slice, update me!</h2>
        )}
        {slice.primary.subtitle ? (
          <p className="text-sm md:text-base leading-loose text-gray-500">
            <RichText render={slice.primary.subtitle} />
          </p>
        ) : (
          <p>
            start by editing this slice from inside the SliceMachine builder!
          </p>
        )}
      </div>
      <div className="max-w-3xl mx-auto">
        <ul className="space-y-4">
          {slice.items.map((item, idx) => {
            const isOpen = currentOpenItems.includes(idx);
            return (
              <li
                key={item.itemid}
                className="px-6 py-4 bg-white rounded shadow"
              >
                <button
                  className="w-full flex justify-between items-center text-left font-bold font-heading hover:text-gray-700"
                  onClick={() => handleClick(idx)}
                >
                  <RichText render={item.question} />
                  <svg
                    className={`w-4 h-4 ml-2 text-gray-300 transform ${
                      isOpen ? "rotate-90" : "rotate-0"
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 5l7 7-7 7"
                    ></path>
                  </svg>
                </button>
                <p
                  className={`${
                    isOpen ? "" : "hidden"
                  } mt-2 test-gray-400 font-normal leading-loose`}
                >
                  <RichText render={item.answer} />
                </p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

MySlice.propTypes = {
  slice: shape({
    primary: shape({
      title: array.isRequired,
    }).isRequired,
  }).isRequired,
};

export default MySlice;
