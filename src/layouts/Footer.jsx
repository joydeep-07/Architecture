import React from "react";
import footer from "../assets/images/footer.jpg";
import { FaInstagram, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { LocateIcon, Phone, Mail, ArrowUpRight } from "lucide-react";

const Footer = () => {
  const navigation = [
    { label: "Home", href: "#home" },
    { label: "Properties", href: "#properties" },
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <footer className="w-full bg-black text-white overflow-hidden">
      {/* IMAGE */}
      <div className="relative w-full overflow-hidden">
        <img
          src={footer}
          alt="Architecture"
          className="w-full h-full object-cover scale-[1.02]"
        />
      </div>

      {/* FOOTER CONTENT */}
      <div className="px-6 md:px-12 lg:px-20">
        <div className="max-w-8xl mx-auto">
          {/* TOP SECTION */}
          <div className="pt-10 md:py-10 lg:py-10 flex flex-col lg:flex-row justify-between gap-16">
            {/* BRAND */}
            <div className="max-w-xl">
              <p className="text-[9px] uppercase tracking-[0.35em] text-white/35 mb-7">
                Architecture / Real Estate
              </p>

              <h2 className="text-[7vw] md:text-[2vw] leading-[0.85] font-light">
                ARCHITECTURE
                <span className="text-white/25">.</span>
              </h2>

              <p className="mt-8 max-w-md text-sm md:text-[15px] leading-7 text-white/45">
                Thoughtfully designed spaces for modern living. Discover
                exceptional properties shaped by architecture, detail, and
                purpose.
              </p>

              {/* SOCIALS */}
              <div className="flex items-center gap-2 my-4 md:my-9">
                <a
                  href="#"
                  aria-label="Instagram"
                  className="group w-10 h-10 rounded-full border border-white/15 flex items-center justify-center hover:bg-white hover:text-black hover:border-white transition-all duration-300"
                >
                  <FaInstagram
                    size={14}
                    className="group-hover:scale-110 transition-transform duration-300"
                  />
                </a>

                <a
                  href="#"
                  aria-label="Facebook"
                  className="group w-10 h-10 rounded-full border border-white/15 flex items-center justify-center hover:bg-white hover:text-black hover:border-white transition-all duration-300"
                >
                  <FaFacebookF
                    size={13}
                    className="group-hover:scale-110 transition-transform duration-300"
                  />
                </a>

                <a
                  href="#"
                  aria-label="LinkedIn"
                  className="group w-10 h-10 rounded-full border border-white/15 flex items-center justify-center hover:bg-white hover:text-black hover:border-white transition-all duration-300"
                >
                  <FaLinkedinIn
                    size={13}
                    className="group-hover:scale-110 transition-transform duration-300"
                  />
                </a>
              </div>
            </div>

            {/* RIGHT SIDE
                Hidden on mobile
            */}
            <div className="hidden md:grid md:grid-cols-3 gap-12 lg:gap-16 lg:min-w-[620px]">
              {/* EXPLORE */}
              <div>
                <p className="text-[9px] uppercase tracking-[0.3em] text-white/30 mb-7">
                  Explore
                </p>

                <nav className="flex flex-col gap-4">
                  {navigation.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      className="group flex items-center gap-2 w-fit text-sm text-white/55 hover:text-white transition-colors duration-300"
                    >
                      <span>{item.label}</span>

                      <ArrowUpRight
                        size={12}
                        className="opacity-0 -translate-x-1 translate-y-1 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300"
                      />
                    </a>
                  ))}
                </nav>
              </div>

              {/* COMPANY */}
              <div>
                <p className="text-[9px] uppercase tracking-[0.3em] text-white/30 mb-7">
                  Company
                </p>

                <nav className="flex flex-col gap-4">
                  {[
                    ["About Us", "#about"],
                    ["Our Projects", "#projects"],
                    ["Properties", "#properties"],
                    ["Careers", "#careers"],
                  ].map(([label, href]) => (
                    <a
                      key={label}
                      href={href}
                      className="group flex items-center gap-2 w-fit text-sm text-white/55 hover:text-white transition-colors duration-300"
                    >
                      <span>{label}</span>

                      <ArrowUpRight
                        size={12}
                        className="opacity-0 -translate-x-1 translate-y-1 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300"
                      />
                    </a>
                  ))}
                </nav>
              </div>

              {/* CONTACT */}
              <div>
                <p className="text-[9px] uppercase tracking-[0.3em] text-white/30 mb-7">
                  Get in touch
                </p>

                <div className="space-y-5">
                  {/* LOCATION */}
                  <div className="flex items-start gap-3">
                    <LocateIcon
                      size={15}
                      strokeWidth={1.4}
                      className="mt-0.5 text-white/35 shrink-0"
                    />

                    <p className="text-sm leading-6 text-white/55">
                      24 Park Street
                      <br />
                      Kolkata, West Bengal
                      <br />
                      India
                    </p>
                  </div>

                  {/* PHONE */}
                  <a
                    href="tel:+919876543210"
                    className="group flex items-center gap-3 text-sm text-white/55 hover:text-white transition-colors"
                  >
                    <Phone
                      size={15}
                      strokeWidth={1.4}
                      className="text-white/35 group-hover:text-white transition-colors"
                    />

                    <span>+91 98765 43210</span>
                  </a>

                  {/* EMAIL */}
                  <a
                    href="mailto:hello@archestate.com"
                    className="group flex items-start gap-3 text-sm text-white/55 hover:text-white transition-colors"
                  >
                    <Mail
                      size={15}
                      strokeWidth={1.4}
                      className="mt-0.5 text-white/35 group-hover:text-white transition-colors"
                    />

                    <span className="break-all">hello@archestate.com</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* BOTTOM */}
          <div className="border-t border-white/10 py-6">
            <div className="flex flex-row items-center justify-between gap-3">
              <p className="text-[9px] md:text-[10px] text-white/25 uppercase tracking-[0.08em]">
                © {new Date().getFullYear()} Architecture
              </p>

              <div className="flex items-center gap-4 md:gap-6 text-[9px] md:text-[10px] text-white/25 uppercase tracking-[0.08em]">
                <a
                  href="#"
                  className="hover:text-white transition-colors whitespace-nowrap"
                >
                  Privacy
                </a>

                <a
                  href="#"
                  className="hover:text-white transition-colors whitespace-nowrap"
                >
                  Terms
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
