import { footerLinksData } from "@/public/data/footer-data";
import React, { memo } from "react";

const Footer = () => {
  return (
    <div className="bg-white pt-16 pb-12 mt-20 border-t border-gray-200 font-sans">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 lg:gap-8">
          <div className="lg:col-span-2 flex flex-col pr-4">
            <div className="flex items-center gap-2 mb-6">
              <img
                src="/images/logo/logo.png"
                alt="CareSphere Logo"
                className="h-8 w-auto"
              />
              <span className="text-xl font-bold text-gray-900">
                CareSphere
              </span>
            </div>

            <div className="text-gray-500 text-sm leading-relaxed space-y-4">
              <p>
                500 Wellness Ave, Suite 10,
                <br />
                MedCity, NY 10001
              </p>
              <p className="flex flex-col space-y-1">
                <a
                  href="tel:+18001234567"
                  className="hover:text-blue-600 transition-colors"
                >
                  +1 (800) 123-4567
                </a>
                <a
                  href="mailto:support@caresphere.com"
                  className="hover:text-blue-600 transition-colors"
                >
                  support@caresphere.com
                </a>
              </p>
            </div>
          </div>
          {footerLinksData.map((section) => (
            <div key={section._id} className="flex flex-col">
              <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-6">
                {section.title}
              </h3>
              <ul className="flex flex-col space-y-4">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      className="text-sm text-slate-700 hover:text-blue-600 font-medium transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-16 pt-6 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} CareSphere. All rights reserved.
        </p>

        <div className="flex space-x-6 text-sm text-gray-500">
          <a
            href="/privacy-policy"
            className="hover:text-blue-600 transition-colors"
          >
            Privacy Policy
          </a>
          <a
            href="/terms"
            className="hover:text-blue-600 transition-colors"
          >
            Terms of Service
          </a>
        </div>
      </div>
    </div>
  );
};

export default memo(Footer);