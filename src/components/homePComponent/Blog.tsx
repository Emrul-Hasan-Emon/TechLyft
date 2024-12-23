import TitleSeparator from "../common/TitleSeparator";

const Blog = () => {
  return (
    <div className=" py-10 ">
      <TitleSeparator>Recent blogs</TitleSeparator>
      <div className=" flex flex-col text-center mb-10">
        <div className="flex flex-col items-start">
          <h1 className="text-4xl font-semibold  text-gray-900">
            Explore Our Latest Insights
          </h1>
          <p className="mt-6 text-gray-600 leading-relaxed">
            Dive into our most recent blog posts where we explore the Latest
          </p>
          <p className=" text-gray-600 leading-relaxed ml-6">
            --industry trends, share expert opinions & provide valuable
            resources
          </p>
          <p className=" text-gray-600 leading-relaxed ml-14">
            --to keep you informed & ahead in the ever-evolving world of
            technology.
          </p>
        </div>
      </div>

      {/* <!-- Blog Cards --> */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 ">
        {/* <!-- Card 1 --> */}
        <div className=" rounded-md p-6 border border-gray-700 shadow-md hover:shadow-slate-900">
          <div className="mb-4">
            <span className="inline-block text-xs font-semibold mr-2 bg-gray-200 px-2 py-1 rounded-md">
              Rust
            </span>
            <span className="inline-block text-xs font-semibold mr-2 bg-gray-200 px-2 py-1 rounded-md">
              Backend
            </span>
            <span className="inline-block text-xs font-semibold bg-gray-200 px-2 py-1 rounded-md">
              Performance
            </span>
          </div>
          <h2 className="text-lg font-bold mb-2 text-gray-800">
            Why Rust is the Future of Backend Development
          </h2>
          <p className="text-sm text-gray-600">
            Rust is gaining traction in backend development for its speed and
            reliability. This post explores why Rust is becoming a top choice
            for performance-critical applications and how it compares to other
            languages.
          </p>
        </div>

        {/* <!-- Card 2 --> */}
        <div className=" rounded-md p-6 border border-gray-700 shadow-md hover:shadow-slate-900">
          <div className="mb-4">
            <span className="inline-block text-xs font-semibold mr-2 bg-gray-200 px-2 py-1 rounded-md">
              Trends
            </span>
            <span className="inline-block text-xs font-semibold mr-2 bg-gray-200 px-2 py-1 rounded-md">
              WebDevelopment
            </span>
            <span className="inline-block text-xs font-semibold bg-gray-200 px-2 py-1 rounded-md">
              2024
            </span>
          </div>
          <h2 className="text-lg font-bold mb-2 text-gray-800">
            10 Emerging Trends in Web Development to Watch in 2024
          </h2>
          <p className="text-sm text-gray-600">
            Stay ahead of the curve with the latest web development trends. From
            AI integration to serverless architecture, discover what’s shaping
            the future of the web.
          </p>
        </div>

        {/* <!-- Card 3 --> */}
        <div className=" rounded-md p-6 border border-gray-700 shadow-md hover:shadow-slate-900">
          <div className="mb-4">
            <span className="inline-block text-xs font-semibold mr-2 bg-gray-200 px-2 py-1 rounded-md">
              MapLibre{" "}
            </span>
            <span className="inline-block text-xs font-semibold mr-2 bg-gray-200 px-2 py-1 rounded-md">
              React
            </span>
            <span className="inline-block text-xs font-semibold bg-gray-200 px-2 py-1 rounded-md">
              Map
            </span>
          </div>
          <h2 className="text-lg font-bold mb-2 text-gray-800">
            Getting Started with MapLibre in React: A Complete Guide
          </h2>
          <p className="text-sm text-gray-600">
            Learn how to integrate MapLibre with React to create dynamic and
            interactive maps. This guide covers the setup process, key features,
            and best practices for map-based applications.
          </p>
        </div>

        {/* <!-- Card 4 --> */}
        <div className=" rounded-md p-6 border border-gray-700 shadow-md hover:shadow-slate-900">
          <div className="mb-4">
            <span className="inline-block text-xs font-semibold mr-2 bg-gray-200 px-2 py-1 rounded-md">
              Serverless
            </span>
            <span className="inline-block text-xs font-semibold mr-2 bg-gray-200 px-2 py-1 rounded-md">
              APIs
            </span>
            <span className="inline-block text-xs font-semibold bg-gray-200 px-2 my-2 py-1 rounded-md">
              CloudflareWorkers
            </span>
          </div>
          <h2 className="text-lg font-bold mb-2 text-gray-800">
            The Power of Serverless: Building APIs with Hono.js and Cloudflare
            Workers
          </h2>
          <p className="text-sm text-gray-600">
            Explore the benefits of building serverless APIs using Hono.js and
            Cloudflare Workers. This article demonstrates how to reduce costs
            and improve scalability while creating high-performance APIs.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
