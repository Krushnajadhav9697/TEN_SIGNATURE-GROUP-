import { useState } from "react";
import { motion } from "framer-motion";
import {
  appLinks,
  links,
  otherSearches,
  popularSearches,
  socialLinks,
} from "../../../lib/Constant";
import Logo from "../../../assets/images/tenlogo.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Animation Variants
const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Subscribed with email: ${email}`);
    setEmail("");
  };

  return (
    <motion.footer
      className="w-full bg-[#181a20] px-4 sm:px-8 md:px-12 lg:px-20 xl:px-24 pt-10 pb-8 font-[poppins]"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      {/* Top Row */}
      <motion.div
        className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4"
        variants={itemVariants}
      >
        <a href="/">
          <img src={Logo} alt=" logo" className="h-11 rounded-full" />
        </a>
        <div className="flex gap-5 text-[#cbd5e1] text-sm">
          {socialLinks.map(({ href, label, icon }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              className="hover:text-white"
            >
              <FontAwesomeIcon icon={icon} />
            </a>
          ))}
        </div>
      </motion.div>

      <hr className="border-[#2c2f38] mb-8" />

      {/* Main Grid */}
      <motion.div
        className="grid grid-cols-1 xl:grid-cols-3 gap-10 text-sm"
        variants={containerVariants}
      >
        <motion.div variants={itemVariants}>
          <h3 className="font-semibold text-white mb-4">Popular Searches</h3>
          <ul className="space-y-2">
            {popularSearches.map((item, i) => (
              <li key={i} className="text-white cursor-pointer">
                {item}
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div variants={itemVariants}>
          <h3 className="font-semibold text-white mb-4">Other Searches</h3>
          <ul className="space-y-2">
            {otherSearches.map((item, i) => (
              <li key={i} className="text-white cursor-pointer">
                {item}
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div variants={itemVariants} className="space-y-6">
          <div className="text-xs text-[#bebdbd] flex justify-between">
            <span>Chat With Us At</span>
            <span>Need Live Support?</span>
          </div>
          <div className="text-white font-bold text-sm flex justify-between flex-wrap gap-y-1">
            {/* Phone */}
            <a
              href="https://wa.me/919999999999?text=Hi%2C%20I%27m%20interested%20in%20your%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              +(91) 999 999 9999
            </a>

            {/* Email */}
            <a
              href="mailto:info@entrepreneurshipnetwork.net"
              className="hover:underline break-words text-right"
              style={{ wordBreak: "break-word", maxWidth: "150px" }}
            >
              info@entrepreneurshipnetwork.net
            </a>
          </div>

          {/* Subscribe Form */}
          <div>
            <h3 className="font-semibold text-white mb-2">
              Keep Yourself Up to Date.
            </h3>
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row mb-8 rounded-lg max-sm:gap-5 md:bg-white"
            >
              <input
                type="email"
                placeholder="Your Email"
                className="w-full sm:w-auto flex-1 rounded-lg px-4 py-3 text-sm text-gray-800 focus:outline-none bg-white"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button
                type="submit"
                className="text-black font-bold text-sm rounded-lg px-6 py-3 bg-white cursor-pointer"
              >
                Subscribe
              </button>
            </form>

            <h3 className="font-semibold text-white mb-4">Apps</h3>
            <div className="space-y-4">
              {appLinks.map(({ href, smallText, boldText, icon }) => (
                <a
                  key={boldText}
                  href={href}
                  className="flex items-center space-x-4 bg-[#1f2128] rounded-lg px-5 py-4 max-w-[240px] hover:bg-[#0dcaf0]"
                >
                  <FontAwesomeIcon
                    icon={icon}
                    className="w-6 h-6 text-white text-3xl"
                  />
                  <div>
                    <div className="text-sm text-white">{smallText}</div>
                    <div className="font-bold text-white text-sm">
                      {boldText}
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>

      <hr className="border-[#2c2f38] mt-10 mb-4" />

      {/* Bottom Row */}
      <motion.div
        className="flex flex-col sm:flex-row justify-between items-center text-xs text-[#94a3b8] gap-2 sm:gap-0"
        variants={itemVariants}
      >
        <div>
          © TEN-Signature Services Private Limited 2025 - All rights reserved
        </div>
        <div className="flex flex-wrap gap-4">
          {links.map((link, i) => (
            <a key={i} href="#" className="hover:text-[#20c997]">
              {link}
            </a>
          ))}
        </div>
      </motion.div>
    </motion.footer>
  );
};

export default Footer;
