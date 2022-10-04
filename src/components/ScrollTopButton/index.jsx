import { useState } from "react";

import * as S from "./style";

const ScrollTopButton = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    }
    if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <S.ScrollTopButton onClick={scrollToTop} visible={visible}>
      <i className="fa-solid fa-chevron-up"></i>
    </S.ScrollTopButton>
  );
};

export default ScrollTopButton;
