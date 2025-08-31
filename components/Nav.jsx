"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Nav = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  return (
    <nav className="flex-between w-full mb-16 pt-3">
      <Link href={"/"} className="flex gap-2 flex-center">
        <Image
          src={"/assets/images/logo.svg"}
          alt="logo"
          width={30}
          height={30}
          className={"object-contain"}
        />

        <p className="logo_text">PromptHub</p>
      </Link>

      <div className="sm:flex hidden"></div>
    </nav>
  );
};

export default Nav;
