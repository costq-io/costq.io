import { Link } from "react-router-dom"
import { Server, ArrowLeftRight, Activity } from "lucide-react"
import { Helmet } from "react-helmet-async"

export function HomePage() {
  return (
    <>
      <Helmet>
        <title>CostQ - Cloud Cost Optimization</title>
      </Helmet>
      <main>
      <header className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <img src="/costq_logo_dark.svg" alt="CostQ" className="h-10 w-auto" />
          </Link>
          <div className="flex items-center space-x-4">
            <Link
              to="/login"
              className="text-sm font-medium text-gray-700 hover:text-gray-900"
            >
              Sign In
            </Link>
          </div>
        </div>
      </header>

      <section className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left flex items-center">
              <div>
                <h1 className="text-4xl font-bold text-gray-900 tracking-tight sm:text-5xl md:text-6xl">
                  Make Every Deal
                  <span className="block text-[#52B7E8]">Profitable</span>
                </h1>
                <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                  Most companies are flying blind on customer profitability. Sophisticated cost
                  accounting exists, but it's expensive, brittle, and reserved for enterprises. We're
                  changing that. Our intelligent engine learns cost patterns automatically from your
                  operational data—no consultants, no complex integrations, no manual rules. Just
                  real-time visibility into which customers, products, and processes actually make you
                  money.
                </p>
              </div>
            </div>
            <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 flex items-center">
              <img
                src="/demo-dark.jpeg"
                alt="CostQ product demo preview"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="pt-8 pb-16 bg-white w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-3 lg:gap-8">
            <div>
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-[#52B7E8] text-white">
                <Server className="h-6 w-6" />
              </div>
              <div className="mt-5">
                <h2 className="text-lg font-medium text-gray-900">Self‑Hosted or Cloud</h2>
                <p className="mt-2 text-base text-gray-500">
                  Deploy where it makes sense for you — on your own
                  infrastructure or in the cloud. It's your data and your
                  choice. We support all hosting scenarios with the same
                  secure, production‑ready experience.
                </p>
              </div>
            </div>

            <div className="mt-10 lg:mt-0">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-[#52B7E8] text-white">
                <ArrowLeftRight className="h-6 w-6" />
              </div>
              <div className="mt-5">
                <h2 className="text-lg font-medium text-gray-900">Integrate with Any System</h2>
                <p className="mt-2 text-base text-gray-500">
                  Connect to any source system for data ingestion and to any
                  client system to publish results. Keep using your existing
                  CRM and tools — no replace required.
                </p>
              </div>
            </div>

            <div className="mt-10 lg:mt-0">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-[#52B7E8] text-white">
                <Activity className="h-6 w-6" />
              </div>
              <div className="mt-5">
                <h2 className="text-lg font-medium text-gray-900">Real‑Time Data</h2>
                <p className="mt-2 text-base text-gray-500">
                  Stream data in real time and run simulations on the fly so
                  sales teams see impact instantly, prioritize opportunities,
                  and act with confidence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-8 gap-6">
            <div className="lg:col-span-7">
              <h2 className="max-w-xl text-3xl font-semibold tracking-tight text-balance text-gray-900 sm:text-4xl">
                See It On Your Data
              </h2>
              <form className="w-full max-w-md mt-6">
                <div className="flex gap-x-4">
                  <label htmlFor="email-address" className="sr-only">
                    Email address
                  </label>
                  <input
                    id="email-address"
                    name="email"
                    type="email"
                    required
                    placeholder="Enter your email"
                    autoComplete="email"
                    className="min-w-0 flex-auto rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-[#52B7E8] sm:text-sm/6"
                  />
                  <button
                    type="submit"
                    className="flex-none rounded-md bg-[#52B7E8] px-3.5 py-2.5 text-sm font-semibold text-white shadow hover:bg-[#3FA9DD] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#52B7E8]"
                  >
                    Ask for more
                  </button>
                </div>
              </form>
            </div>
            <div className="lg:col-span-5 mt-6 lg:mt-0 flex flex-col justify-between items-end text-right">
              <div>
                <p className="text-sm text-gray-600">CostQ</p>
                <p className="mt-1 text-sm text-gray-600">Warsaw, Poland</p>
              </div>
              <div className="mt-6 lg:mt-0 w-full">
                <div className="flex items-center gap-4 text-gray-500 justify-end">
                  <a href="#" aria-label="X" className="hover:text-gray-700">
                    <img src="/x_logo.svg" alt="X" className="h-5 w-5" />
                  </a>
                  <a href="#" aria-label="LinkedIn" className="hover:text-gray-700">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
    </>
  )
}
