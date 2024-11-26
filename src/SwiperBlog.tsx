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
import { IoMdOpen } from "react-icons/io";
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

  return (
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true} // Enalbe grab cursor for mouse
        centeredSlides={true}
        slidesPerView={3} // Number of slides per view
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
        // Enable loop mode
        // loop={true}
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
            className="mb-[2.5rem] mt-[0.75rem] border-2 border-gray-600 rounded-lg relative"
          >
            <div className="rounded-md bg-gradient-to-br from-[rgba(75,30,133,0.8)] to-[rgba(75,30,133,0.01)]">
              {post.cover_image && (
                <img
                  src={post.cover_image}
                  alt={post.title}
                  className="w-full h-full object-cover rounded-md mb-[0.75rem]"
                />
              )}
              <div className="text-lg font-bold px-[0.25rem]">{post.title}</div>
              <div className="font-light text-gray-300">
                {post.tag_list.map((tag) => `#${tag}`).join(" ")}
              </div>
              <div className="flex gap-[0.875rem] mt-[0.25rem] mx-[1rem] text-gray-400">
                <div className="flex flex-grow flex-cols gap-[0.5rem] items-center">
                  <FaRegHeart />
                  {post.public_reactions_count}
                  <FaRegComment />
                  {post.comments_count}
                </div>
                {post.reading_time_minutes} min to read
              </div>
              <div className="my-[0.25rem]">
                <FormattedDate published_at={post.published_at} />
              </div>
              <p className="italic text-left px-[1rem] text-gray-100">
                {post.description}
              </p>
              <a href={post.url} target="_blank" rel="noopener noreferrer">
                <div className="items-center py-[1.25rem]">
                  <ShiningButton
                    icon={<IoMdOpen className="text-[1.5rem]" />}
                    text="Read more on DEV"
                  />
                </div>
              </a>
            </div>
          </SwiperSlide>
        ))}
        <div className="swiper-button-prev -ml-[0.75rem] pb-[2.5rem]"></div>
        <div className="swiper-button-next -mr-[0.75rem] pb-[2.5rem]"></div>
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
    <p className="text-left text-sm text-gray-200 px-[1rem] py-[0.25rem]">
      {formattedDate}
    </p>
  );
};

export default SwiperBlog;
