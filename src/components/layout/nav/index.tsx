import { NavBrand } from "./NavBrand";
import { NavButton } from "./NavButton";
import { useState } from "react";
import { Dialog, Popover } from "@headlessui/react";
import { HiMenu, HiX } from "react-icons/hi";
import { motion } from "framer-motion";

interface NavProps {
  links: {
    id: number;
    icon: JSX.Element;
    name: string;
    path: string;
  }[];
}
export default function Nav({ links }: NavProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white">
      <nav
        className="mx-auto flex shadow-md items-center justify-between p-6 lg:px-8 fixed top-0 w-full bg-white z-10"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <NavBrand />
        </div>
        <div className="flex lg:hidden">
          <NavButton
            Icon={<HiMenu className="h-6 w-6" aria-hidden="true" />}
            onClick={() => setMobileMenuOpen(true)}
            srText={"Open main menu"}
          />
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-12">
          {links.map((link, index) => {
            if (index != links.length - 1)
              return (
                <a
                  key={link.id}
                  href={link.path}
                  className="flex items-center gap-2 text-sm font-semibold leading-6 text-gray-600 hover:text-gray-900"
                >
                  {link.icon}
                  {link.name}
                </a>
              );
          })}
        </Popover.Group>
        <div
          key={links[links.length - 1].id}
          className="hidden lg:flex lg:flex-1 lg:justify-end"
        >
          <a
            href={links[links.length - 1].path}
            className="text-sm justify-center items-center gap-2 flex font-semibold leading-6 text-gray-700 hover:text-gray-900"
          >
            {links[links.length - 1].icon}
            {links[links.length - 1].name}
          </a>
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />

        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between border-b-1 pb-2">
            <NavBrand />
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ ease: "easeInOut", duration: 0.5 }}
              className="flex lg:hidden"
            >
              <NavButton
                Icon={<HiX className="h-6 w-6" aria-hidden="true" />}
                onClick={() => setMobileMenuOpen(false)}
                srText={"Close menu"}
              />
            </motion.div>
          </div>
          <motion.div
            transition={{ ease: "easeInOut" }}
            className="mt-6 flow-root"
          >
            <motion.div
              initial={{ y: -100, opacity: 0 }}
              animate={
                mobileMenuOpen ? { y: 0, opacity: 1 } : { y: -100, opacity: 0 }
              }
              transition={{ duration: 0.2, ease: "easeInOut" }}
              className="-my-6 divide-y divide-gray-500/10"
            >
              <div className="space-y-2 py-6">
                {links.map((link, index) => {
                  if (index != links.length - 1)
                    return (
                      <a
                        key={link.id}
                        href={link.path}
                        onClick={() => setMobileMenuOpen(false)}
                        className="-mx-3 flex items-center gap-2 rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                      >
                        {link.icon}
                        {link.name}
                      </a>
                    );
                })}
              </div>
              <div className="py-6">
                <a
                  onClick={() => setMobileMenuOpen(false)}
                  href={links[links.length - 1].path}
                  className="-mx-3 flex items-center gap-2 rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                >
                  {links[links.length - 1].icon}
                  {links[links.length - 1].name}
                </a>
              </div>
            </motion.div>
          </motion.div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
