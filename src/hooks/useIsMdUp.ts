import { useEffect, useState } from "react";

export const useIsMdUp = () => {
  const [isMdUp, setIsMdUp] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(min-width: 768px)");
    const listener = () => setIsMdUp(media.matches);

    listener();
    media.addEventListener("change", listener);
    return () => media.removeEventListener("change", listener);
  }, []);

  return isMdUp;
};
