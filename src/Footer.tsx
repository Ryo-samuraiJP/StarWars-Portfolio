import SocialIcons from "./components/ui/SocialIcons";

const Footer = () => {
  return (
    <footer>
      <hr className="mt-[5.5rem] my-[3rem]" />
      <h1 className="text-yellow-500 star-wars-font">
        <p>Ryoichi</p>
        <p>Homma</p>
      </h1>
      <div className="text-yellow-500 pt-[0.5rem]">
        <div className="font-bold">
          <p>Episode IV</p>
          <p>A NEW CODER</p>
        </div>
        <p className="pt-[1rem] px-[20rem]">
          Reach out to me today and let's discuss how I can help you achieve
          your goals. Let's build something impactful together!
        </p>
      </div>
      <div className="flex justify-center py-[3.5rem]">
        <SocialIcons />
      </div>
      <p>&#169; 2024 Ryoichi (Rio) Homma.</p>
      <p>May the Code be with you.</p>
    </footer>
  );
};

export default Footer;
