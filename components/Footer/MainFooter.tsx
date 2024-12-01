import  {Link}  from "@nextui-org/react";
import Logo from "../Navbar/Logo";
import { DictsTypes } from "@/app/[lang]/dictionaries/dictionaries";

const MainFooter = ({ dicts }: { dicts: DictsTypes }) => {
  return (
    <div className="bg-white border hidden md:block">
    <footer className="flex justify-between container mx-auto p-2 items-center">
      <div className="flex  flex-row justify-center items-center">
        <Logo /><h5 className="mx-2 text-lg">© 2024 {dicts.exchangeName}</h5> 
      </div>
      <div className="">
        <ul className="flex flex-row gap-8 justify-around items-center place-content-center">
          <li><Link>{dicts.footerLink.terms}</Link></li>
          <li><Link>{dicts.footerLink.privacy}</Link></li>
          <li><Link>{dicts.footerLink.security}</Link></li>
          <li><Link>{dicts.footerLink.docs}</Link></li>
        </ul>
      </div>
    </footer>
    </div>
  );
};

export default MainFooter;
