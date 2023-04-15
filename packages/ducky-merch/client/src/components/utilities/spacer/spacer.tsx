import { styled, css } from "@twilio-paste/styling-library";

interface SpacerProps {
  height?: string[];
  width?: string[];
}

// styled pass in props
const StyledSpacer = (height: string[], width: string[], display: string) =>
  styled.div(
    css({
      width,
      height,
      display,
    })
  );

export const Spacer = ({
  height = ["0", "0", "0"],
  width = ["0", "0", "0"],
}: SpacerProps) => {
  const widthAsANumber = Number(width[0].replace("px", ""));
  const display = widthAsANumber > 0 ? "inline-block" : "block";
  const Custom = StyledSpacer(height, width, display);

  return <Custom />;
};
