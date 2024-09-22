import lovdlogo from '../assets/lovdlogo.svg';
import magnify from '../assets/magnify.svg';
const Header = () => {
  return (
    <header className="w-full px-4 px-[160px] py-4 bg-white ">
      <div className="grid grid-cols-12 items-center space-x-[95px]">
        {/* Logo Div */}
        <div className="col-start-1 col-span-[3/2] flex w-[136px] h-[45px] space-x-3 mt-[23.5px] ">
          <img
            src={lovdlogo}
            alt="L0vd Logo"
            className="w-[50px] h-[42px] mt-[1.49px]"
          />
          <span className=" w-[74px] h-[45px] font-poppins font-semibold text-3xl tracking-wider">
            L0vd
          </span>
        </div>

        {/* Search Bar */}
        <div className="col-start-[7/2] col-span-[7/2] flex items-center justify-center  w-[327px] h-[67px] mt-3 p-[10px]">
          <div className="relative w-[303px] h-[47px] m-2.5 ">
            <input
              type="text"
              placeholder="Search"
              className="w-full h-full border border-gray-300 rounded-[10px]  px-12 py-3 md:py-4"
            />
            <span className="absolute top-1/2 left-4 transform -translate-y-1/2 text-gray-400  ">
              <img src={magnify} alt="magnify" className="w-6 h-6 " />
            </span>
          </div>
        </div>

        {/* Right Section: Validators, Pools, Guides, and Connect Button */}
        <div className="col-start-7 col-span-5  flex  justify-between items-center  w-[467px] h-[53px] space-x-15">
          <div className="flex w-[279px] h-[44px] space-x-[30px] items-center font-poppins font-medium text-base">
            <a href="#" className="text-black">
              Validators
            </a>
            <a href="#" className="text-black">
              Pools
            </a>
            <a href="#" className="text-black">
              Guides
            </a>
          </div>
          <button className=" w-[187px] h-[53px] bg-blue-600 text-white px-5 py-2.5  rounded-[10px] font-poppins font-medium text-xl">
            Connect wallet
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
