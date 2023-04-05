/* eslint-disable @next/next/no-img-element */
import { Fragment, useState } from "react";
import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react";
import { HiMail, HiMenu, HiX } from "react-icons/hi";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}
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
          <a href="#" className="-m-1.5 p-1.5 flex">
            <img className="h-8 w-auto" src="/images/spade_black.png" alt="" />
            <span className="text-xl font-semibold text-gray-800">
              Bataklik.
            </span>
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <HiMenu className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-12">
          {links.map((link, index) => {
            if (index != links.length - 1)
              return (
                <a
                  key={link.id}
                  href={link.path}
                  className="flex items-center gap-2 text-sm font-semibold leading-6 text-gray-900"
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
            className="text-sm justify-center items-center gap-2 flex font-semibold leading-6 text-gray-900"
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
        <Transition
          show={mobileMenuOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5 flex">
                <img
                  className="h-8 w-auto"
                  src="/images/spade_black.png"
                  alt=""
                />
                <span className="text-xl font-semibold text-gray-800">
                  Bataklik.
                </span>
              </a>
              <button
                type="button"
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <HiX className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {links.map((link, index) => {
                    if (index != links.length - 1)
                      return (
                        <a
                          key={link.id}
                          href={link.path}
                          onClick={() => setMobileMenuOpen(false)}
                          className="-mx-3 flex items-center gap-2 rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
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
                    className="-mx-3 flex items-center gap-2 rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    {links[links.length - 1].icon}
                    {links[links.length - 1].name}
                  </a>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Transition>
      </Dialog>
    </header>
  );
}
