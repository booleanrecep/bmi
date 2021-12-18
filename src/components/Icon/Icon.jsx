import catOrange from "../../assets/cat-orange.svg";
import dogOrange from "../../assets/dog-orange.svg";
import close from "../../assets/close.svg";
export const Icon = ({ icon }) => {
  switch (icon) {
    case "cat-orange":
      return (
        <img
          className="absolute right-2 -bottom-7 w-24 mb-4 h-36 p-4"
          alt="cat-orange"
          src={`${catOrange}`}
        />
      );
    case "dog-orange":
      return (
        <img
          className="absolute right-2 -bottom-7 w-28  mb-4 h-36 p-4"
          alt="cat-orange"
          src={`${dogOrange}`}
        />
      );
    case "close":
      return (
        <img
          className="h-6 w-6 text-blue-500 -ml-8 mt-2"
          src={close}
          alt="close"
        />
      );
    case "down-carrot":
      return (
        <svg
          fill="#2d49b3"
          viewBox="0 0 1030 638"
          width="24"
          id="si-ant-caret-down"
        >
          <path d="M1017 68L541 626q-11 12-26 12t-26-12L13 68Q-3 49 6 24.5T39 0h952q24 0 33 24.5t-7 43.5z"></path>
        </svg>
      );
    default:
      return (
        <img
          className="absolute right-2 -bottom-7 w-20 mb-4 h-36 p-4"
          alt="cat-orange"
          src="..."
        />
      );
  }
};
