import React from "react";

export default function Articles() {
  return(
    <div>
      <div className="space-y-4 mt-20 mb-20 mx-96 text-center">
        <h1 className="text-2xl text-l font-bold">Learn About Blockchain</h1>
        <p>Learn all about cryptocurrency to start investing</p>
      </div>

      {/* 6th SECTION */}
      <div className=" flex justify-center items-center mt-20 mb-20">
        <div className="space-y-6 ">
          <div className=" container flex items-center mx-auto  px-8 space-x-4">
            <a href="/" className="hover:underline pt-5 text-xs text-orange">
              <img src={nfts} alt="about" />
            </a>
            <a href="/" className="hover:underline pt-5 text-xs text-orange">
              <img src={about1} alt="about" />
            </a>
            <a href="/" className="hover:underline pt-5 text-xs text-orange">
              <img src={about2} alt="about" />
            </a>
          </div>
          <div className=" container flex items-center mx-auto px-8  space-x-4 ">
            <a href="/" className="hover:underline pt-5 text-xs text-orange">
              <img src={about3} alt="about" />
            </a>
            <a href="/" className="hover:underline pt-5 text-xs text-orange">
              <img src={about4} alt="about" />
            </a>
            <a href="/" className="hover:underline pt-5 text-xs text-orange">
              <img src={about5} alt="about" />
            </a>
            <a href="/" className="hover:underline pt-5 text-xs text-orange">
              <img src={about6} alt="about" />
            </a>
          </div>
          <a
            href="/"
            className="hover:underline pt-5 text-xs text-orange mx-10"
          >
            See All Articles
          </a>
        </div>
      </div>
    </div>
 );

}