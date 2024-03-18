import React from "react";
import Link from "next/link";
import Image from "next/image";

function ShotsCard({ title, images, url, published }) {
  return (
    <div>
      <div className="rounded overflow-hidden shadow-lg">
        <Link href="#"></Link>
        <div className="relative">
          <Link href={url}>
            <Image
              className="w-full"
              src={images}
              alt="Dribbble Shots"
              width={500}
              height={500}
            />
            <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>
          </Link>
          <Link href="#">
            <div className="absolute bottom-0 left-0 bg-teal-500 px-4 py-2 text-white text-sm hover:bg-white hover:text-teal-500 transition duration-500 ease-in-out">
              Shots
            </div>
          </Link>

          <Link href="#">
            <div className="text-sm absolute top-0 right-0 bg-teal-500 px-4 text-white rounded-full h-16 w-16 flex flex-col items-center justify-center mt-3 mr-3 hover:bg-white hover:text-teal-500 transition duration-500 ease-in-out">
              <span className="font-bold">27</span>
              <small>March</small>
            </div>
          </Link>
        </div>
        <div className="px-6 py-4">
          <Link
            href="#"
            className="font-semibold text-lg inline-block hover:text-teal-500 transition duration-500 ease-in-out"
          >
            {title}
          </Link>
        </div>
        <div className="px-6 py-4 flex flex-row items-center">
          <span
            href="#"
            className="py-1 text-sm font-regular text-gray-900 mr-1 flex flex-row items-center"
          >
            <span className="ml-1">{Date.parse(published)}</span>
          </span>
        </div>
      </div>
    </div>
  );
}

export default ShotsCard;
