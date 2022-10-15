import {useEffect} from "react";
import {useRecoilState} from "recoil";
import {scrollPos} from "./components/States.jsx";

const useScrollPosition = () => {
    const [scrollPosition, setScrollPosition] = useRecoilState(scrollPos);

    useEffect(() => {
        const updatePosition = () => {
            setScrollPosition(window.pageYOffset);
        }
        window.addEventListener("scroll", updatePosition);
        updatePosition();
        return () => window.removeEventListener("scroll", updatePosition);
    }, []);

    return scrollPosition;
};

