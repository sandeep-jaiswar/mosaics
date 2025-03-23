"use client"

import Image from "next/image";
import { User, ShoppingBag, Heart } from 'lucide-react';
import { useRouter } from "next/navigation";

const Header = () => {
  const router = useRouter();

  const handleClick = (path: string) => {
    router.push(path);
  }


  
  return (
    <header className="shadow fixed w-full z-50 bg-white">
      <div className="max-w-5xl mx-auto flex justify-between items-center py-5">
        <Image src={'/images/logo.png'} width={60} height={48} alt="logo" className="cursor-pointer ml-5" onClick={()=>handleClick('/')} />
        <nav className="flex justify-between">
          <ul className="flex space-x-5">
            <li>
            <ShoppingBag width={24} height={24} className="cursor-pointer" onClick={()=>handleClick('/cart')} />
            </li>
            <li>
            <Heart width={24} height={24} className="cursor-pointer" onClick={()=>handleClick('/wishlist')} />
            </li>
            <li>
              <User width={24} height={24} className="cursor-pointer" onClick={()=>handleClick('/profile')} />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
