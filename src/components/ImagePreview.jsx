import React from "react";
import Loading from "./Loading";

const ImagePreview = (props) => {
  return (
    <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
      {/* Original Image */}
      <div className="bg-white shadow-lg rounded-xl overflow-hidden">
        <h2 className="text-xl font-semibold text-center bg-gray-800 text-white py-2">
          Original Image
        </h2>
        {props.uploaded ? (
          <img
            src={props.uploaded}
            alt="Original"
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="flex items-center justify-center h-80 bg-gray-200">
            No Image selected
          </div>
        )}
      </div>

      {/* Enhanced Image */}
      <div className="bg-white shadow-lg rounded-xl overflow-hidden">
        <h2 className="text-xl font-semibold text-center bg-blue-800 text-white py-2">
          Enhanced Image
        </h2>

        {props.loading ? (
          <Loading />
        ) : props.enhanced ? (
          <div className="relative w-full">
            {/* Image */}
            <img
              src={props.enhanced}
              alt="Enhanced"
              className="w-full h-auto object-cover"
            />

            {/* Download Icon Button */}
            <a
              href={props.enhanced}
              download={`enhanced-${Date.now()}.jpg`}
              className="absolute top-3 right-3 bg-white/80 hover:bg-white p-2 rounded-full shadow-md transition duration-200"
              title="Download"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-blue-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V4"
                />
              </svg>
            </a>
          </div>
        ) : (
          <div className="flex items-center justify-center h-80 bg-gray-200 w-full">
            No Enhanced Image
          </div>
        )}
      </div>
    </div>
  );
};

export default ImagePreview;
