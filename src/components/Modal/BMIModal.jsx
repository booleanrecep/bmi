import { Progress } from "..";
import { Icon } from "../Icon/Icon";
import catOrange from "../../assets/cat-orange.svg";
import dogOrange from "../../assets/dog-orange.svg";
import { useContext, useEffect } from "react";
import { BMIContext } from "../../state/provider";

export const BMIModal = () => {
  const {
    clearState,
    state: {
      isModalOpen,
      formData,
      bmiRes: { data },
    },
  } = useContext(BMIContext);

  const icn = formData.pet_type === "DOG" ? dogOrange : catOrange;
  useEffect(() => {
    if (isModalOpen) {
      window.scrollTo(0, 0);
      document.body.style.overflow = "hidden";
    }
    return () => (document.body.style.overflow = "scroll");
  }, [isModalOpen]);
  return (
    <>
      {isModalOpen ? (
        <div className="absolute top-0 pt-48 w-full h-full flex justify-center filter backdrop-blur-sm ">
          <div className="w-2/3 h-3/4 max-w-md bg-white rounded-lg shadow-md p-6 flex flex-col justify-center border-2 shadow-slate-700 text-center">
            <div className="w-32 mx-auto relative -mt-10 mb-3">
              <img className="-mt-24 mb-4 h-38 " src={icn} alt="modal-bmi" />
            </div>
            <span className="w-full  leading-normal text-gray-800 text-md mb-3 ">
              {`${
                formData.gender === "M"
                  ? "Mr. " + formData.name
                  : "Mrs. " + formData.name
              }'s BMI is ${data.weight_classification}`}
            </span>
            <span className="w-full break-all block leading-normal text-blue-800 text-5xl mb-0">
              {data.bmi}
            </span>
            <Progress bmi={data.bmi} />
          </div>
          <div className="cursor-pointer" onClick={clearState}>
            <Icon icon="close" />
          </div>
        </div>
      ) : null}
    </>
  );
};
