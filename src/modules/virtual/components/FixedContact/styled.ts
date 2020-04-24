import styled from "styled-components";

// Animation
import { animated } from "react-spring";

// Constants
import colors from "../../../../lib/colors";

// Interface
interface AnchorProps {
  isHovered: boolean;
}

interface WrapperProps {
  animatedProps: { opacity: number; right: number };
}

export const Anchor = styled.a<AnchorProps>`
  text-decoration: none !important;
  width: auto;

  opacity: 1;
  z-index: 999;
  font-size: 30px;
  color: ${(props) => (props.isHovered ? colors.white : colors.primary)};
`;

export const Envelope = styled.i`
  position: absolute;
  bottom: 25px;
  right: 25px;
  height: 24px;
  z-index: 999;
`;

export const EmailWrapper = styled(animated.div)`
  padding-right: 25px;
  align-self: center;
  position: absolute;
  bottom: 23px;
`;

export const Email = styled.p`
  font-size: 18px;
  height: 24px;
  font-family: "Titillium Web", sans-serif;
  text-transform: uppercase;

  margin-block-end: 0em;
  margin-block-start: 0em;
`;

export const FixeImage = styled.img`
  height: 25vh;
  width: auto;

  position: fixed;
  left: 30%;
  bottom: 40%;
  margin-bottom: -40px;
  justify-self: center;

  /* opacity: 0.6; */
  opacity: 0.7;
  z-index: 999;
`;