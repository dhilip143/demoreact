import map from "../src/assets/map.png";

function Student() {
  return (
    <section className="relative mt-20 w-full">
      {/* Background Map Image */}
      <img src={map} alt="map" className="w-full h-[500px] object-cover" />

      {/* Centered Heading */}
      <div className="absolute top-8 left-1/2 transform -translate-x-1/2 text-center">
        <h1 className="text-2xl sm:text-3xl font-[newsreader] text-[#00005C] p-2">
          What our <span className="text-indigo-600 font-bold">Students</span> Say!
        </h1>
      </div>

      {/* Testimonials */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full px-4">
        <div className="max-w-6xl mx-auto flex flex-wrap justify-center gap-6">
          {/* Card 1 */}
          <div className="w-full sm:w-[90%] md:w-[45%] lg:w-[30%] bg-white bg-opacity-90 p-6 rounded-2xl shadow-md border border-gray-200">
            <div className="text-purple-600 text-3xl mb-2">❝</div>
            <p className="text-gray-700 mb-4">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </p>
            <div className="flex items-center mt-4">
              <img
                className="w-10 h-10 rounded-full mr-3"
                src="https://randomuser.me/api/portraits/men/32.jpg"
                alt="Devon Lane"
              />
              <div>
                <div className="text-gray-900 font-semibold">Devon Lane</div>
                <div className="text-gray-500 text-sm">Course Name</div>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="w-full sm:w-[90%] md:w-[45%] lg:w-[30%] bg-white bg-opacity-90 p-6 rounded-2xl shadow-md border border-gray-200">
            <div className="text-purple-600 text-3xl mb-2">❝</div>
            <p className="text-gray-700 mb-4">
              I feel more calm and confident after joining these classes. It’s a beautiful journey!
            </p>
            <div className="flex items-center mt-4">
              <img
                className="w-10 h-10 rounded-full mr-3"
                src="https://randomuser.me/api/portraits/women/65.jpg"
                alt="Emily Smith"
              />
              <div>
                <div className="text-gray-900 font-semibold">Emily Smith</div>
                <div className="text-gray-500 text-sm">Mindful Yoga</div>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="w-full sm:w-[90%] md:w-[45%] lg:w-[30%] bg-white bg-opacity-90 p-6 rounded-2xl shadow-md border border-gray-200">
            <div className="text-purple-600 text-3xl mb-2">❝</div>
            <p className="text-gray-700 mb-4">
              The classes were insightful and transformative. Highly recommended!
            </p>
            <div className="flex items-center mt-4">
              <img
                className="w-10 h-10 rounded-full mr-3"
                src="https://randomuser.me/api/portraits/women/44.jpg"
                alt="Jane Cooper"
              />
              <div>
                <div className="text-gray-900 font-semibold">Jane Cooper</div>
                <div className="text-gray-500 text-sm">Yoga Basics</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Student;
