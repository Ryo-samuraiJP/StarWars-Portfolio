import SocialIcons from "./components/ui/SocialIcons";

const Footer = () => {
  return (
    <footer>
      <hr className="mt-[5.5rem] my-[3rem]" />
      <p className="text-lg my-[0.5rem] font-bold text-yellow-500">
        Episode VII
      </p>
      <h1 className="text-yellow-500 star-wars-font">the code awakens</h1>
      <p className="mt-[1rem] px-[20rem] text-yellow-500">
        Reach out to me today and let's discuss how I can help you achieve your
        goals. Let's build something impactful together!
      </p>
      <div className="flex justify-center py-[3.5rem]">
        <SocialIcons />
      </div>
      <div className="flex flex-row justify-center">
        <p>&#169; 2024 Ryoichi (Rio) Homma. &nbsp;</p>
        <p>May the</p>
        <p className="text-shadow-neon">&nbsp;Code&nbsp;</p>
        <p>be with you.</p>
      </div>
    </footer>
  );
};

export default Footer;
