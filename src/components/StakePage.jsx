import HoneyJar from '../assets/HoneyJar.svg';
import ValidatorScoring from './stakecomponents.jsx/ValidatorScoring';

function StakePage() {
  return (
    <>
      <div className="flex flex-col px-[160px]">
        <div className="  grid grid-cols-12 space-x-5">
          <div className="col-start-2 col-span-4 w-[419px] h-[277px] ring mt-[95px] rounded-[20px]">
            <div className="mx-[26px] my-[28px] space-y-[25px]">
              <p className="font-poppins font-regular text-[40px]">
                Stake with L0vd
              </p>
              <p className="font-poppins font-regular text-[18px]">
                Stake with reliable provider who is contributing to more than 50
                networks
              </p>
              <button className="p-[10px] font-poppins font-regular text-[24px] bg-blue-600 text-white  w-[368px] h-[56px] rounded-[10px]">
                Stake
              </button>
            </div>
          </div>
          <div className="col-start-8 col-span-5 ">
            <img src={HoneyJar} alt="honeyjar" />
          </div>
        </div>
        <div>
          <ValidatorScoring />
        </div>
      </div>
    </>
  );
}

export default StakePage;
