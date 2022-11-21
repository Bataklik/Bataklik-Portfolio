import React from "react";

export const Services = () => {
  return (
    <section className="text-gray-800 bg-customGray body-font">
      <div className="container px-5 py-24 mx-auto flex flex-wrap">
        <div className="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
          <h2 className="text-gray-900 text-5xl title-font font-large mb-3">
            WHAT DO
          </h2>
          <h2 className="text-gray-900 text-4xl title-font font-large mb-3">
            I OFFER?
          </h2>
          <p className="leading-relaxed text-base">
            I will be happy to help you find your answer and fix your problem.
          </p>
        </div>
        <div className="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
          <div className="flex flex-col mb-10 lg:items-start items-center">
            <div className="flex-grow">
              <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                Beautiful Designs
              </h2>
              <p className="leading-relaxed text-base">
                Creating elegant (web) applications suitable for your
                requirements.
              </p>
            </div>
          </div>
          <div className="flex flex-col mb-10 lg:items-start items-center">
            <div className="flex-grow">
              <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                Understandable code
              </h2>
              <p className="leading-relaxed text-base">
                Writing understandable and good code for your needs.
              </p>
            </div>
          </div>
          <div className="flex flex-col mb-10 lg:items-start items-center">
            <div className="flex-grow">
              <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                Neptune
              </h2>
              <p className="leading-relaxed text-base">
                Blue bottle crucifix vinyl post-ironic four dollar toast vegan
                taxidermy. Gastropub indxgo juice poutine.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
