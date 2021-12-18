import { Icon } from "../Icon/Icon";

export const Progress = ({ bmi }) => {
  const approximatePercent = bmi * 2.0554;
  const computedBmi =
    approximatePercent < 0
      ? 0
      : approximatePercent > 100
      ? 100
      : approximatePercent;
  return (
    <div className="w-full flex justify-center flex-col mt-2 items-center">
      <div className={`w-4/5 flex`}>
        <div
          style={{ marginLeft: `${computedBmi}%` }}
          className={`w-full flex `}
        >
          <Icon icon="down-carrot" />
        </div>
      </div>
      <div className="h-9 w-full  mt-3 flex p-1 ">
        <div className="w-1/3 h-full text-center text-xs text-white bg-red-400 rounded-tl-2xl rounded-bl-2xl">
          <p className="text-blue-600 mt-7 text-base">Underweight</p>
        </div>
        <div className="w-1/3 h-full text-center mr-1 ml-1 text-xs text-white bg-green-500">
          <p className="text-blue-600  mt-7 text-base">Normal</p>
        </div>
        <div className="w-1/3 h-full text-center text-xs bg-orange-600 rounded-br-2xl rounded-tr-2xl text-white">
          <p className="text-blue-600  mt-7 text-base">Overweight</p>
        </div>
      </div>
    </div>
  );
};
