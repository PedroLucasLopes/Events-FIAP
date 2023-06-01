import { Player, Controls } from "@lottiefiles/react-lottie-player";
import { lottieTypes } from "./types";

const Lottie = ({
  src,
  width,
  height,
  marginBottom,
  maxWidth,
}: lottieTypes) => {
  return (
    <Player
      autoplay
      loop
      src={src}
      style={{
        width: width,
        height: height,
        marginBottom: marginBottom,
        maxWidth: maxWidth,
      }}
    >
      <Controls visible={false} />
    </Player>
  );
};

export default Lottie;
