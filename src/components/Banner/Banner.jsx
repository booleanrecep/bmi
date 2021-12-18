import { useLocation } from "react-router-dom";

export const Banner = () => {
  const location = useLocation();

  return (
    <div className="w-full flex justify-center mb-5">
      <div className="">
        <p className="text-3xl break-words text-center mt-3 mb-3">{`Calculate your ${
          location.pathname.includes("cat") ? "🐱" : "🐶"
        }'s Body Mass Index in Seconds`}</p>
        <hr className="border-2" />
      </div>
    </div>
  );
};
