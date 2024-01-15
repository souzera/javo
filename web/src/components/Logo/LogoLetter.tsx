import Image from "next/image";
import logo from "@/assets/SVG/logo.svg"

export default function LogoLetter() {
  return (
    <img className="h-full"
      src={logo.src}
      alt="Logo da Javo"/>
  )
}