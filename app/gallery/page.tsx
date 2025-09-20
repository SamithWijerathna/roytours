import Template from "@/app/admin/components/widgets/widget-render";

export default function Gallery() {
  return (
    <div className="py-20">
      <div className="flex items-center justify-center flex-col rounded-xl text-black w-full py-25 text-center px-4">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">
          A Visual Journey Through Sri Lanka
        </h1>
        <p className="text-base sm:text-lg">
          Sometimes, pictures say it better than words. Explore the colors,
          smiles, and landscapes that make Sri Lanka unforgettable.
        </p>
      </div>
      <section className="p-4 flex flex-col items-center text-center ">
        <Template templateName="gallery" short_code="0327" />
        {/* 
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6 p-4">
          <div className="grid gap-4">
            <div>
              <img
          className="h-auto max-w-full rounded-lg"
          src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg"
          alt=""
              />
            </div>
            <div>
              <img
          className="h-auto max-w-full rounded-lg"
          src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg"
          alt=""
              />
            </div>
            <div>
              <img
          className="h-auto max-w-full rounded-lg"
          src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg"
          alt=""
              />
            </div>
          </div>
          <div className="grid gap-4">
            <div>
              <img
          className="h-auto max-w-full rounded-lg"
          src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg"
          alt=""
              />
            </div>
            <div>
              <img
          className="h-auto max-w-full rounded-lg"
          src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg"
          alt=""
              />
            </div>
            <div>
              <img
          className="h-auto max-w-full rounded-lg"
          src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg"
          alt=""
              />
            </div>
          </div>
          <div className="grid gap-4">
            <div>
              <img
          className="h-auto max-w-full rounded-lg"
          src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg"
          alt=""
              />
            </div>
            <div>
              <img
          className="h-auto max-w-full rounded-lg"
          src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg"
          alt=""
              />
            </div>
            <div>
              <img
          className="h-auto max-w-full rounded-lg"
          src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg"
          alt=""
              />
            </div>
          </div>
          <div className="grid gap-4">
            <div>
              <img
          className="h-auto max-w-full rounded-lg"
          src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg"
          alt=""
              />
            </div>
            <div>
              <img
          className="h-auto max-w-full rounded-lg"
          src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg"
          alt=""
              />
            </div>
            <div>
              <img
          className="h-auto max-w-full rounded-lg"
          src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg"
          alt=""
              />
            </div>
          </div>
        </div>
        */}
      </section>
      <div className="flex items-center min-h-screen justify-center flex-col rounded-xl text-black w-full py-10 px-5">
        <h1 className="text-4xl md:text-5xl  font-semibold text-center lg:inline-block lg:w-1/2 mb-4">
          These views are waiting for you Are you ready to explore?
        </h1>

        <a
          href="https://wa.me/94766528833"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="relative mt-5 bg-transparent justify-center text-black border-2 border-black rounded-full p-1 w-auto text-nowrap flex items-center gap-2 font-semibold md:text-xl group overflow-hidden active:scale-90 transition duration-300 ease-in-out cursor-pointer">
            <div className="pl-4 py-2 relative z-10 group-hover:text-white transition-colors duration-300">
              Start Planning Your Tour
            </div>

            <div className="w-full z-10 h-full p-4 items-center justify-center rounded-full group-hover:scale-105 bg-black">
              <svg
                width="14"
                height="13"
                viewBox="0 0 14 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  className=""
                  d="M1.79169 11.7084L12.2084 1.29169M12.2084 1.29169H1.79169M12.2084 1.29169V11.7084"
                  stroke="#FFFFFF"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <span className="absolute inset-0 rounded-full bg-black translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"></span>
          </button>
        </a>
      </div>
    </div>
  );
}
