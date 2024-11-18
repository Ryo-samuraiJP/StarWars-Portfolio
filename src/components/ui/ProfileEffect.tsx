import profile from "../../assets/images/profile.jpeg";

const ProfileEffect = () => {
  return (
    <div
      className="bg-cover bg-center bg-no-repeat shadow-[inset_0_0_0_9px_rgba(225,225,225,0.3)] w-[320px] h-[450px] animate-profile-effect"
      style={{ backgroundImage: `url(${profile})` }}
    ></div>
  );
};

export default ProfileEffect;
