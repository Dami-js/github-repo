import {
  Bars,
  Bell,
  CaretDownIcon,
  Exit,
  Logo,
  PlusIcon,
} from "components/icons";
import Img from "components/Img";
import MenuLink from "components/MenuLink";
import { SearchBar } from "components/SearchBar";
import { useUserContext } from "contexts/user-context";
import React, { useState } from "react";

interface NavbarProps {}

const Navbar = (props: NavbarProps) => {
  const [showMobileMenu, setShowMobileMenu] = useState<boolean>(false);
  const { user } = useUserContext();
  return (
    <div>
      <nav className="bg-dark-blue-gray p-3.5 lg:px-8">
        <div className="flex items-center">
          <button
            className="outline-none focus:outline-none mr-auto sm:hidden"
            onClick={() => setShowMobileMenu(!showMobileMenu)}
          >
            <Bars />
          </button>
          <span className="mr-auto sm:mr-4">
            <Logo />
          </span>
          <div className="hidden sm:block md:w-72">
            <SearchBar />
          </div>
          <div className="hidden sm:flex items-center ml-3">
            <span className="mr-3 hidden lg:inline-block">
              <MenuLink
                fullWidth={false}
                border={false}
                label="Pull Requests"
              />
            </span>
            <span className="mr-3 lg:hidden">
              <MenuLink fullWidth={false} border={false} label="Pulls" />
            </span>
            <span className="mr-3">
              <MenuLink fullWidth={false} border={false} label="Issues" />
            </span>
            <span className="mr-3">
              <MenuLink fullWidth={false} border={false} label="Marketplace" />
            </span>
            <span className="mr-3">
              <MenuLink fullWidth={false} border={false} label="Explore" />
            </span>
          </div>
          <div className="md:ml-auto flex items-center">
            <a href="#!" className="p-1">
              <Bell />
            </a>
            <a
              href="#!"
              className="hidden md:inline-flex items-center p-1 mx-2 text-white"
            >
              <PlusIcon className="fill-current" />
              <CaretDownIcon className="fill-current ml-0.5" size="7" />
            </a>
            {user && (
              <a
                href="#!"
                className="hidden md:inline-flex items-center p-1 text-white"
              >
                <Img src={user.avatar_url} size="5" />
                <CaretDownIcon className="fill-current ml-1" size="7" />
              </a>
            )}
          </div>
        </div>
        {showMobileMenu && (
          <div className="mt-4 mobile-nav">
            <SearchBar />
            <div className="mt-3 py-2">
              <MenuLink label="Dashboard" />
              <MenuLink label="Pull requests" />
              <MenuLink label="Issues" />
              <MenuLink label="Marketplace" />
              <MenuLink label="Explore" />
              <MenuLink label="Codespaces" />
              <MenuLink label="Sponsors" />
              <MenuLink label="Settings" />
              {user && (
                <MenuLink
                  label="Dami-js"
                  icon={<Img src={user.avatar_url} size="5" />}
                />
              )}
              <MenuLink label="Sign out" icon={<Exit />} />
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
