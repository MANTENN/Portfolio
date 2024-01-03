import { useTransition, config } from "react-spring";

export const useMountTransition = (mountState, setMenuState) => {
  return useTransition(mountState, {
    from: {
      opacity: 0,
      transform: "translate3d(0,-30px,0)",
    },
    enter: { opacity: 1, transform: "translate3d(0,0px,0)" },
    leave: { opacity: 0, transform: "translate3d(0,-30px,0)" },
    reverse: mountState,
    delay: 10,
    config: { ...config.stiff, tension: 500, friction: 50 },
    // onRest: () => setMenuState(!mountState),
  });
};