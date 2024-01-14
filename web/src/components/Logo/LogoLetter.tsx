import Image from "next/image";
import logo from "@/assets/SVG/logo.svg"

export default function LogoLetter() {
  return (
    <Image
      src={logo}
      alt="Logo da Javo"
      width={logo.width}
      height={logo.width}
    />
  )
}