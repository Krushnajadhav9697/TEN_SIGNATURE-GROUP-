import HeroSection from "../components/Home/HeroSection";
import SearchTabs from "../components/Home/SearchTabs";
import AutoScroll from "../components/AutoScroll";
import NearbyListings from "../components/NearbyListings";
import PhotographySec from "../components/PhotographySec";
import WhyChooseUs from "../components/WhyChooseUs";
import Form from "../components/Form";
import DownloadSec from "../components/DownloadSec";
import AdvancedModal from "../components/Home/AdvancedModal";
import useSearch from "../components/Home/useSearch";
import HeroImg from "../assets/images/hero-img.webp";
import subHeroImg from "../assets/images/sub-hero-img.webp";
import PhotoSec from "../assets/images/photosec.webp";
import { useState, useEffect } from "react";
import BlogPosts from "../components/BlogPosts";
import { motion } from "framer-motion";
import axios from "axios";
import { BASE_URL } from "../lib/config";

export default function Home() {
  const search = useSearch();

  const content = {
    titleParts: [
      { text: "One-Stop Shop for All of Your", highlight: false },
      { text: "FnB Company Requirements", highlight: true },
    ],
    description:
      "Use our expert food photography services to capture the spirit of your gourmet masterpieces. Allow our talented photographers to create breathtaking images that will enhance your brand and bring your food to life.",
    photoText: [
      { text: "Select the Top ", highlight: false },
      { textMain: "Photographer", highlight: true },
      { text: "for Your Food Photo shoot", highlight: false },
    ],
    imageSrc: HeroImg,
    imagePhotoSec: PhotoSec,
    imageAlt: "Hero image",
    subImageSrc: subHeroImg,
    ButtonText: "Explore Photography Services",
  };

  const [showAdvancedModal, setShowAdvancedModal] = useState(false);
  const [posts, setPosts] = useState([]); // Blogs for Home page

  const handleOpenAdvanced = () => setShowAdvancedModal(true);

  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  // ✅ Fetch only 3 latest blogs
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/article-list/`);
        const blogs = response.data.data || []; // ✅ Fixed: extract from .data
        setPosts(blogs.slice(0, 3)); // Take latest 3
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <div className="overflow-hidden w-full font-[poppins]">
      <HeroSection content={content}>
        <SearchTabs {...search} onOpenAdvanced={handleOpenAdvanced} />
      </HeroSection>
      <AutoScroll />
      <NearbyListings mode="home" />

      <PhotographySec {...content} />
      <WhyChooseUs />
      <Form />

      {/* 🆕 From Our Blog Section */}
      <motion.section
        className="max-w-7xl mx-auto sm:px-6 lg:px-8 px-4 py-16"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <motion.h2 className="text-center text-[25px] md:text-[30px] font-extrabold mb-12">
          From Our Blog
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <motion.div key={post.id}>
              <BlogPosts post={post} />
            </motion.div>
          ))}
        </div>
      </motion.section>

      <DownloadSec />

      {showAdvancedModal && (
        <AdvancedModal
          isOpen={showAdvancedModal}
          onClose={() => setShowAdvancedModal(false)}
          search={search}
        />
      )}
    </div>
  );
}
