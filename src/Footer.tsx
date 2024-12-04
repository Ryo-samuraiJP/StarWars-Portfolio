import SocialIcons from "./components/ui/SocialIcons";

const Footer = () => {
  return (
    <footer>
      <hr className="my-16" />
      <p className="md:text-xl my-2 font-bold font-serif text-yellow-500">
        Episode VII
      </p>
      <h1 className="text-yellow-500 star-wars-font text-[1.75rem] md:text-[3rem] lg:text-[3.25rem]">
        the code awakens
      </h1>
      <p className="mt-4 md:mx-16 lg:mx-80 text-yellow-500 text-xs md:text-base">
        Reach out to me today and let's discuss how I can help you achieve your
        goals. Let's build something impactful together!
      </p>
      <div className="flex justify-center py-14">
        <SocialIcons />
      </div>
      <div className="flex flex-col md:flex-row justify-center text-xs md:text-sm lg:text-base font-light gap-x-1">
        <p>&#169; 2024 Ryoichi (Rio) Homma.</p>
        <div className="flex flex-row justify-center">
          <p>May the</p>
          <p className="text-shadow-neon font-semibold">&nbsp;Code&nbsp;</p>
          <p>be with you.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
