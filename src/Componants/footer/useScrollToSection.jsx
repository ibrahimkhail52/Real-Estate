import { useNavigate } from "react-router-dom";

const useScrollToSection = () => {
  const navigate = useNavigate();

  const scrollToSection = (path, sectionId) => {
    navigate(path, {
      state: { scrollTo: sectionId },
    });
  };

  return scrollToSection;
};

export default useScrollToSection;
