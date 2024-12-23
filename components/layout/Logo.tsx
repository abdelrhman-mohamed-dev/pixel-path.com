import Link from "next/link";

const Logo = ({ isLogoFooter = false }: { isLogoFooter?: boolean }) => {
  return (
    <Link
      href="/"
      className={`text-code font-bold uppercase ${
        isLogoFooter ? "text-3xl" : "text-2xl"
      }`}
    >
      <span className="text-valencia">P</span>
      <span className="text-supernova">I</span>
      <span className="text-cerise">X</span>
      <span className="text-azureradiance">E</span>
      <span className="text-supernova">L</span>
      <span className="text-azureradiance">.</span>
      <span className="text-oceangreen">P</span>
      <span className="text-roseofsharon">A</span>
      <span className="text-brickred">T</span>
      <span className="text-tanhide">H</span>
    </Link>
  );
};
export default Logo;
