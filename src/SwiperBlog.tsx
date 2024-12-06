import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import {
  EffectCoverflow,
  Pagination,
  Autoplay,
  Mousewheel,
  Navigation,
} from "swiper/modules";
import ShiningButton from "./components/ui/ShiningButton";
import { IoMdOpen, IoMdTime } from "react-icons/io";
import { FaRegComment, FaRegHeart } from "react-icons/fa";

// DEV.to API response type definition
interface Post {
  id: number;
  title: string;
  tag_list: string[];
  public_reactions_count: number;
  comments_count: number;
  description: string;
  published_at: string;
  reading_time_minutes: number;
  url: string;
  cover_image?: string;
}

const SwiperBlog: React.FC = () => {
  // State to store the fetched posts from DEV.to API
  const [posts, setPosts] = useState<Post[]>([]);
  // State to store the number of slides per view based on the screen width
  const [slidesPerView, setSlidesPerView] = useState(1);

  // Fetch the latest posts from DEV.to
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(
          "https://dev.to/api/articles?username=ryoichihomma"
        );
        const data = await response.json();
        setPosts(data.slice(0, 5));
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchPosts();
  }, []);

  // Update the number of slides per view based on the screen width
  useEffect(() => {
    const updateSlidesPerView = () => {
      if (window.innerWidth >= 1024) {
        setSlidesPerView(3);
      } else if (window.innerWidth >= 768) {
        setSlidesPerView(2);
      } else {
        setSlidesPerView(1);
      }
    };
    window.addEventListener("resize", updateSlidesPerView);
    updateSlidesPerView(); // Run initially
    return () => window.removeEventListener("resize", updateSlidesPerView);
  }, []);

  return (
    <>
      <Swiper
        className="w-[90%] md:w-[95%] lg:w-full"
        effect={"coverflow"}
        grabCursor={true} // Enalbe grab cursor for mouse
        centeredSlides={true}
        slidesPerView={slidesPerView}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        // Enable pagination with clickable bullets
        pagination={{
          clickable: true,
          bulletClass: "swiper-pagination-bullet",
          bulletActiveClass: "swiper-pagination-bullet-active",
        }}
        // Enable autoplay with defined seconds delay
        autoplay={{
          delay: 2000,
          disableOnInteraction: true,
        }}
        // Enable swipe with mousewheel
        mousewheel={true}
        // Enable navigation buttons (prev/next)
        navigation={{
          prevEl: ".swiper-button-prev",
          nextEl: ".swiper-button-next",
        }}
        // Enable loop mode if the number of posts is more than slidesPerView
        loop={posts.length >= slidesPerView}
        modules={[
          EffectCoverflow,
          Pagination,
          Autoplay,
          Mousewheel,
          Navigation,
        ]}
      >
        {posts.map((post) => (
          <SwiperSlide
            key={post.id}
            className="mb-10 mt-3 2xl:mt-5 border-2 border-gray-600 rounded-lg relative"
          >
            <div className="rounded-md bg-gradient-to-br from-[rgba(75,30,133,0.8)] to-[rgba(75,30,133,0.01)]">
              {post.cover_image && (
                <img
                  src={post.cover_image}
                  alt={post.title}
                  className="w-full h-full object-cover rounded-md mb-3"
                />
              )}
              <div className="md:text-lg font-bold px-1">{post.title}</div>
              <div className="text-sm font-light text-gray-300">
                {post.tag_list.map((tag) => `#${tag}`).join(" ")}
              </div>
              <div className="flex gap-[0.875rem] mt-1 mx-[1rem] text-xs md:text-sm text-gray-400">
                <div className="flex flex-grow flex-cols gap-x-1 items-center">
                  <FaRegHeart className="mt-[0.125rem]" />
                  {post.public_reactions_count}&nbsp;
                  <FaRegComment className="mt-[0.125rem]" />
                  {post.comments_count}
                </div>
                <div className="flex gap-1 items-center">
                  <IoMdTime className="size-4 mt-[0.125rem]" />
                  {post.reading_time_minutes} min read
                </div>
              </div>
              <div className="font-light my-1">
                <FormattedDate published_at={post.published_at} />
              </div>
              <p className="italic text-left px-4 text-gray-100">
                {post.description}
              </p>
              <a href={post.url} target="_blank" rel="noopener noreferrer">
                <div className="text-sm items-center py-5">
                  <ShiningButton
                    icon={<IoMdOpen className="text-lg" />}
                    text="Read more on DEV"
                  />
                </div>
              </a>
            </div>
          </SwiperSlide>
        ))}
        <div className="swiper-button-prev -ml-3 pb-10"></div>
        <div className="swiper-button-next -mr-3 pb-10"></div>
      </Swiper>
    </>
  );
};

// Format the published date
const FormattedDate: React.FC<{ published_at: string }> = ({
  published_at,
}) => {
  const [formattedDate, setFormattedDate] = useState("");

  useEffect(() => {
    const date = new Date(published_at);
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "short",
      day: "numeric",
    };
    setFormattedDate(date.toLocaleDateString("en-US", options));
  }, [published_at]);

  return (
    <p className="text-left text-sm text-gray-200 px-4 py-1">{formattedDate}</p>
  );
};

export default SwiperBlog;
