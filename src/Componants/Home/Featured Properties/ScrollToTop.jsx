import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname, state } = useLocation();

  useEffect(() => {
    // Only scroll to top if we are NOT scrolling to a specific section
    if (!state?.scrollTo) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [pathname, state]);

  return null;
};

export default ScrollToTop;
