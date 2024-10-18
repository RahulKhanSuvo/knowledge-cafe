import profile from "../assets/profile.png";
const Header = () => {
  return (
    <div className="flex justify-between items-center mt-8 mb-12">
      <h3 className=" text-4xl font-bold">Knowledge cafe</h3>
      <div>
        <img src={profile} alt="" />
      </div>
    </div>
  );
};

export default Header;