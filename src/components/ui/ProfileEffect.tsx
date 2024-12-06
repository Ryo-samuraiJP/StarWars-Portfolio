import profile from "../../assets/images/profile.jpeg";

const ProfileEffect = () => {
  return (
    <div
      className="bg-cover bg-center bg-no-repeat shadow-[inset_0_0_0_9px_rgba(225,225,225,0.3)] 
        w-[12.5rem] h-[18.75rem] md:w-[15.625rem] md:h-[21.875rem] lg:w-[18.75rem] lg:h-[27.5rem] animate-profile-effect"
      style={{ backgroundImage: `url(${profile})` }}
    ></div>
  );
};

export default ProfileEffect;
