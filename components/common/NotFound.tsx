import React from 'react'

const NotFound = () => {
  return (
      <div className="mt-10">
        <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-cyan-200/40 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-blue-200/40 blur-3xl" />

        <div className="relative grid gap-10 lg:grid-cols-2 p-8 sm:p-12 lg:p-16">
          <div className="flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-100 bg-cyan-50 px-4 py-2 text-sm font-medium text-cyan-700 w-fit">
              <span className="h-2 w-2 rounded-full bg-cyan-500" />
              Caresphere Hospital
            </div>

            <h1 className="mt-6 text-6xl sm:text-7xl lg:text-8xl font-extrabold tracking-tight text-slate-900">
              404
            </h1>

            <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-slate-900">
              Page not found
            </h2>

            <p className="mt-4 max-w-xl text-base sm:text-lg leading-8 text-slate-600">
              The page you are looking for does not exist, has been moved, or
              is temporarily unavailable. Let’s get you back to the right place
              at <span className="font-semibold text-slate-900">Caresphere</span>.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a
                href="/"
                className="inline-flex items-center justify-center rounded-2xl bg-cyan-600 px-6 py-3 text-white font-semibold shadow-lg shadow-cyan-600/25 transition hover:bg-cyan-700 hover:-translate-y-0.5"
              >
                Go to Home
              </a>

              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-2xl border border-slate-300 bg-white px-6 py-3 font-semibold text-slate-700 transition hover:border-cyan-200 hover:text-cyan-700 hover:-translate-y-0.5"
              >
                Contact Support
              </a>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                <p className="text-sm font-medium text-slate-500">Emergency</p>
                <p className="mt-1 text-lg font-bold text-slate-900">24/7 Help</p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                <p className="text-sm font-medium text-slate-500">Appointments</p>
                <p className="mt-1 text-lg font-bold text-slate-900">Book Online</p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                <p className="text-sm font-medium text-slate-500">Care Team</p>
                <p className="mt-1 text-lg font-bold text-slate-900">Always Ready</p>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <div className="relative w-full max-w-md">
              <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-cyan-500/10 to-blue-500/10 blur-2xl" />

              <div className="relative rounded-[2rem] border border-slate-200 bg-white p-6 sm:p-8 shadow-xl">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-slate-500">Caresphere Status</p>
                    <p className="text-xl font-bold text-slate-900">Navigation interrupted</p>
                  </div>
                  <div className="rounded-2xl bg-cyan-50 p-3 text-cyan-600">
                    <svg
                      className="h-7 w-7"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M12 2l8 4v6c0 5-3.5 9.5-8 10-4.5-.5-8-5-8-10V6l8-4z" />
                      <path d="M9 12h6" />
                      <path d="M12 9v6" />
                    </svg>
                  </div>
                </div>

                <div className="mt-8 rounded-3xl bg-gradient-to-br from-slate-50 to-cyan-50 p-6">
                  <div className="flex items-center gap-4">
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-600 text-white shadow-lg shadow-cyan-600/25">
                      <svg
                        className="h-8 w-8"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M12 21s-7-4.5-7-11a4.5 4.5 0 0 1 8-3 4.5 4.5 0 0 1 8 3c0 6.5-7 11-7 11z" />
                        <path d="M9 12h6" />
                        <path d="M12 9v6" />
                      </svg>
                    </div>

                    <div>
                      <p className="text-lg font-semibold text-slate-900">Need quick help?</p>
                      <p className="text-sm leading-6 text-slate-600">
                        Use the homepage to explore services, doctors, and patient support.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  <div className="rounded-2xl border border-slate-200 p-4">
                    <p className="text-sm text-slate-500">Find doctors</p>
                    <p className="mt-1 font-semibold text-slate-900">Specialists & departments</p>
                  </div>
                  <div className="rounded-2xl border border-slate-200 p-4">
                    <p className="text-sm text-slate-500">Book care</p>
                    <p className="mt-1 font-semibold text-slate-900">Appointments made simple</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default NotFound