import { useLocation } from "react-router-dom";
import { useContext, useEffect } from "react";
import { NavItem } from "..";
import { BMIContext } from "../../state/provider";
export const Navigation = () => {
  const location = useLocation();
  const { clearState } = useContext(BMIContext);
  useEffect(() => {
    return () => clearState();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);
  const {
    state: { randomCatInfo },
  } = useContext(BMIContext);
  return (
    <div className="w-full flex flex-1 flex-col items-center gap-3 sm:flex-row sm:gap-12 mb-6 sm:justify-center">
      <NavItem icon="dog-orange" to="/" title="Dog BMI" />
      <NavItem
        icon="cat-orange"
        to="/cat"
        title="Cat BMI"
        desc={randomCatInfo.fact}
      />
    </div>
  );
};
