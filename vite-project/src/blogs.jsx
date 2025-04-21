// import bin1 from './assets/899.png'; // Make sure this path is correct
import bin1 from "../src/assets/889.png"
import bin2 from "../src/assets/090.png"
import bin3 from "../src/assets/009.png"
function Blogs() {
  return (
    <>
      {/* Optional: Section Title */}
      
      <div className="text-center text-[#00005C] text-2xl mt-10">
        <h1>LATEST BLOGS</h1>
      </div>
      
      <div className="flex flex-wrap justify-center gap-29 mt-12 overflow-hidden ">
      <div className="max-w-sm rounded-2xl overflow-hidden shadow-lg bg-white">
        <img
          className="w-full h-48 object-cover rounded-t-2xl"
          src={bin1}
          alt="Blog"
        />
        <div className="p-4">
          <h3 className="text-lg font-medium text-gray-900">
            Immersive Technology orientation session at AIC TEA-NIFT, Tirupur
          </h3>
          <p className="text-sm text-gray-500 mt-2">Jan 25, 2023</p>
          <a
            href="#"
            className="text-blue-600 text-sm font-medium mt-2 inline-block hover:underline"
          >
            Read more
          </a>
        </div>
      </div>
      {/* <div className="text-center text-[#00005C] text-2xl mt-10">
        <h1>LATEST BLOGS</h1>
      </div> */}
      

      <div className="max-w-sm rounded-2xl overflow-hidden shadow-lg bg-white">
        <img
          className="w-full h-48 object-cover rounded-t-2xl"
          src={bin2}
          alt="Blog"
        />
        <div className="p-4">
          <h3 className="text-lg font-medium text-gray-900">
            Immersive Technology orientation session at AIC TEA-NIFT, Tirupur
          </h3>
          <p className="text-sm text-gray-500 mt-2">Jan 25, 2023</p>
          <a
            href="#"
            className="text-blue-600 text-sm font-medium mt-2 inline-block hover:underline"
          >
            Read more
          </a>
        </div>
      </div>

     
      {/* <div className="text-center text-[#00005C] text-2xl mt-10">
        <h1>LATEST BLOGS</h1>
      </div> */}
      

      <div className="max-w-sm rounded-2xl overflow-hidden shadow-lg bg-white">
        <img
          className="w-full h-48 object-cover rounded-t-2xl"
          src={bin3}
          alt="Blog"
        />
        <div className="p-4">
          <h3 className="text-lg font-medium text-gray-900">
            Immersive Technology orientation session at AIC TEA-NIFT, Tirupur
          </h3>
          <p className="text-sm text-gray-500 mt-2">Jan 25, 2023</p>
          <a
            href="#"
            className="text-blue-600 text-sm font-medium mt-2 inline-block hover:underline"
          >
            Read more
          </a>
        </div>
      </div>
      </div>

     





    </>
  );
}

export default Blogs;