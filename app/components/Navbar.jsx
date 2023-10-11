import Image from "next/image";
import Link from "next/link";
import Logo from "./dev-img.png";

export default function Navbar() {
  return (
    <nav>
      <Image src={Logo} alt="img-logo" width={50} placeholder="blur" />
      <h1>Dojo Helpdesk</h1>
      <Link href={"/"}>Dashboard</Link>
      <Link href={"/tickets"}>Tickets</Link>
    </nav>
  );
}
