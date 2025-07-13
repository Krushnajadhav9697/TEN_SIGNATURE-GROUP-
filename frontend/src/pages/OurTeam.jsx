import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faFacebook } from "@fortawesome/free-brands-svg-icons";
import { motion } from "framer-motion";
import ContactHelp from "../components/ContactHelp";
import user from "../assets/images/OurTeamUserImage.png";

const founders = [
  {
    name: "User 1",
    role: "Founder - CEO",
    img: user,
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem culpa facilis unde vel, mollitia natus voluptatibus consectetur velit dignissimos commodi accusamus perspiciatis labore reiciendis nobis ullam, consequuntur, quaerat voluptas accusantium repellat veritatis perferendis dicta! Sunt corporis minus minima explicabo deleniti numquam neque similique repudiandae maxime?",
    socials: {
      linkedin: "#",
      facebook: "#",
    },
  },
  {
    name: "User 2",
    role: "Founder - CTO",
    img: user,
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem culpa facilis unde vel, mollitia natus voluptatibus consectetur velit dignissimos commodi accusamus perspiciatis labore reiciendis nobis ullam, consequuntur, quaerat voluptas accusantium repellat veritatis perferendis dicta! Sunt corporis minus minima explicabo deleniti numquam neque similique repudiandae maxime?",
    socials: {
      linkedin: "#",
      facebook: "#",
    },
  },
];

const OurTeam = () => {
  return (
    <>
      <motion.div
        className="py-12 px-4 md:px-8 bg-white text-center font-[poppins]"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <motion.h2 className="text-3xl font-bold mb-10 text-gray-900">
          Meet Our Founders
        </motion.h2>

        <div className="flex flex-col md:flex-row justify-center gap-8">
          {founders.map((founder, idx) => (
            <motion.div
              key={idx}
              className="bg-white rounded-xl shadow p-6 w-full md:w-1/2 lg:w-1/3 mx-auto"
            >
              <div className="overflow-hidden rounded-full mb-4">
                <img
                  src={founder.img}
                  alt={founder.name}
                  className="rounded-full w-32 h-32 p-1 object-cover border border-gray-400 m-auto"
                />
              </div>

              {/* Founder Name - Poppins */}
              <h3 className="text-[24px] font-semibold text-gray-900 mb-1 font-[poppins]">
                {founder.name}
              </h3>

              {/* Founder Role - System UI */}
              <p className="text-[14px] text-gray-600 mb-2 font-[system-ui]">
                {founder.role}
              </p>

              {/* Founder Description - System UI */}
              <p className="text-sm text-gray-700 mb-4  leading-relaxed font-[system-ui] ">
                {founder.description}
              </p>

              <div className="flex justify-center space-x-4">
                <a
                  href={founder.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-blue-600"
                >
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
                <a
                  href={founder.socials.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-blue-800"
                >
                  <FontAwesomeIcon icon={faFacebook} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <ContactHelp />
    </>
  );
};

export default OurTeam;
