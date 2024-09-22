import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import dropdown from '../../assets/dropdown.svg';
import magnify from '../../assets/magnify.svg';
import score from '../../assets/score.svg';
function ValidatorScoring() {
  return (
    <>
      <div className="">
        <div className="grid grid-cols-12 space-x-5 items-center">
          <div className="col-start-2 col-span-4 font-poppins font-regular text-[40px]">
            Validator Scoring
          </div>
          <div className="space-x-[5px] col-start-6">
            <Menu as="div" className="relative inline-block text-left p-[10px]">
              <div>
                <MenuButton className="inline-flex w-full justify-center gap-x-5 rounded-[10px] bg-white px-3 py-2 text-[20px] font-poppins font-regular text-gray-900  ring-1 ring-inset ring-gray-300 hover:bg-gray-50 w-[116px] h-[47px] 	">
                  Score
                  <img
                    src={dropdown}
                    alt="dropdown"
                    className="flex w-[10px] h-[9px] self-center"
                  />
                </MenuButton>
              </div>{' '}
            </Menu>
          </div>
          <div className="col-start-8 col-span-4 flex items-center justify-center  w-[390px] h-[67px] mt-3 p-[10px]">
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
        </div>
        <div className="grid grid-cols-12 space-x-5 items-center">
          <div
            className="flex flexcol justify-between col-start-2 col-span-9
        w-[930px] h-[144px] ring-1 ring-inset ring-gray-300 rounded-[20px] p-10"
          >
            <div className="font-poppins font-regular ">
              <p className=" text-[24px]">L0vd Score</p>
              <p className="text-[14px]">
                L0vd score is based on several metrics
              </p>{' '}
            </div>
            <div className="flex self-center w-[255px] h-[102px] ring-1 ring-inset ring-gray-300 rounded-[20px] px-[30px] py-[10px] space-x-[10px]">
              <div className="w-[88px] h-[73px] space-y-[5px] font-poppins font-regular text-[14px] text-center">
                <p>TVL</p>
                <p>Score</p>
                <p>Score</p>
              </div>
              <div className="w-[88px] h-[73px] space-y-[5px] font-poppins font-regular text-[14px] text-center">
                <p>260000 BGT</p>
                <p>99 %</p>
                <p>Score</p>
              </div>
            </div>
            <div className="flex self-end space-x-[8px] font-poppins font-regular text-[13px] p-0">
              <p>What is L0vd score?</p>
              <img src={score} alt="score" />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-12">
          <div className="col-start-2 col-span-10 flex flexcol justify-between ring-1 ring-inset ring-gray-300 rounded-[20px] h-[72px]">
            <div className="flex ">
              <div></div>
              <div>
                <div></div>
                <div></div>
              </div>
            </div>
            <div></div>
          </div>
        </div>
        <div>panda</div>
      </div>
    </>
  );
}

export default ValidatorScoring;
