import logo from "../../assets/SVG/default_icon.svg";

interface LogoIconProps {
  width: number | string;
  height: number | string;
}

export function LogoIcon(props: LogoIconProps) {
  return (
    <img
      width={props.width}
      height={props.height}
      src={logo.src}
      alt="Logo da Javo"
    />
  );
}
