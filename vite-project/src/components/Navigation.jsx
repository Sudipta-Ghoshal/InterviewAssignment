const categoryColumns = [
  {
    title: "Classic",
    links: [
      "Left sidebar 3 column",
      "Left sidebar 4 column",
      "Right sidebar 3 column",
      "Right sidebar 4 column",
      "Full width 4 column",
    ],
  },
  {
    title: "Banner",
    links: [
      "Left sidebar 3 column",
      "Left sidebar 4 column",
      "Right sidebar 3 column",
      "Right sidebar 4 column",
      "Full width 4 column",
    ],
  },
  {
    title: "Columns",
    links: [
      "3 columns full width",
      "4 columns full width",
      "5 columns full width",
      "6 columns full width",
      "Banner 3 columns",
    ],
  },
  {
    title: "List",
    links: [
      "Shop left sidebar",
      "Shop right sidebar",
      "Banner left sidebar",
      "Banner right sidebar",
      "Full width 2 columns",
    ],
  },
];

const navLinks = ["Home", "Products", "Pages", "Blog"];

import { useState } from "react";
import logo from "../assets/logo.png";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="fixed z-999 top-0 w-full bg-white py-2 border-t border-solid border-[#eee]">
      <div className="relative mx-auto flex flex-wrap items-center justify-between px-3 container">
        <div className="flex min-h-11.25 flex-wrap items-center gap-6.5 flex-1">
          <a href="#" className="logo">
            <img src={logo} alt="" alt="Logo" />
          </a>

          <ul className="hidden lg:flex flex-wrap items-center gap-7 mx-auto">
            {navLinks.map((link) => (
              <li
                key={link}
                className="font-Poppins text-[15px] font-medium leading-7 tracking-[0.03rem] text-[#3d4750] hover:text-[#6c7fd8]"
              >
                <a href="#">{link}</a>
              </li>
            ))}

            <li className="group relative font-Poppins text-[15px] font-medium leading-7 tracking-[0.03rem] text-[#3d4750] hover:text-[#6c7fd8]">
              <a href="#" className="block">
                Categories
              </a>

              <div className="invisible absolute -left-85 top-10 z-16 w-[min(920px,calc(100vw-24px))] rounded-[10px] border border-solid border-[#eee] bg-white p-6 text-left opacity-0 shadow-[0_8px_24px_rgba(0,0,0,0.08)] transition-all duration-300 ease-in-out group-hover:visible group-hover:top-8.5 group-hover:opacity-100 max-[767px]:-left-27.5">
                <div className="grid gap-6 min-[768px]:grid-cols-4">
                  {categoryColumns.map((column) => (
                    <div key={column.title}>
                      <h3 className="mb-2.5 border-b border-solid border-[#eee] pb-2 text-[15px] font-medium leading-5.5 text-[#6c7fd8]">
                        {column.title}
                      </h3>
                      <ul className="space-y-2.5">
                        {column.links.map((item) => (
                          <li key={item}>
                            <a
                              href="#"
                              className="block text-[14px] font-normal leading-5.5 tracking-[0.03rem] text-[#686e7d] transition-all duration-300 ease-in-out hover:text-[#6c7fd8]"
                            >
                              {item}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </li>

            <li className="font-Poppins text-[15px] font-medium leading-7 tracking-[0.03rem] text-[#3d4750]">
              <a href="#" className="flex items-center gap-1.25">
                <OffersIcon />
                Offers
              </a>
            </li>
          </ul>

          {/* Mobile Menu */}
          {isOpen && (
            <div className="border-t lg:hidden absolute mt-2 top-full left-0 w-full bg-white shadow-[0_8px_24px_rgba(0,0,0,0.08)]">
              <ul className="flex flex-col p-4">
                <li className="py-2">Home</li>
                <li className="py-2">Products</li>
                <li className="py-2">Blog</li>
                <li className="py-2">Contact</li>
              </ul>
            </div>
          )}
        </div>

        <div className="hidden  mt-2.5 lg:flex h-11.25 w-45 items-center rounded-[10px] border border-solid border-[#eee] bg-white px-3 text-[14px] text-[#777] min-[992px]:mt-0">
          <LocationIcon />
          Surat
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-md border border-gray-300 lg:hidden"
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
    </nav>
  );
}

function LocationIcon() {
  return (
    <svg
      class="svg-icon m-2.5 w-6.25 h-6.25 align-middle"
      viewBox="0 0 1024 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M511.614214 958.708971c-21.76163 0-41.744753-9.781784-54.865586-26.862811L222.50156 626.526383c-3.540639-4.044106-5.872754-7.978718-7.349385-10.461259-41.72838-58.515718-63.959707-127.685078-63.959707-199.699228 0.87288-193.650465 162.903184-351.075891 361.209691-351.075891 198.726064 0 360.40435 157.49194 360.40435 351.075891-0.839111 72.190159-23.070438 140.856052-64.345494 199.053522-1.962701 3.288906-4.312212 7.189749-7.735171 11.098779L566.479799 931.847184c-13.120832 17.080004-33.103956 26.861788-54.865585 26.861787zM273.525654 580.51956a33.707706 33.707706 0 0 1 2.63399 3.037173L511.278569 890.00931 747.068783 583.556733c0.435928-0.569982 0.889253-1.124614 1.358951-1.669013l2.51631-4.102434c0.285502-0.453325 0.587378-0.89744 0.889253-1.325182 33.507138-46.921659 51.577702-102.416578 52.248991-160.487158 0-155.294902-130.839931-281.95565-291.679105-281.95565-160.571069 0-291.780413 126.72931-292.484448 282.501073 0 57.450457 17.802458 112.811322 51.460022 159.933549l2.90312 4.580318c0.418532 0.73678-0.186242 0.032746-0.756223-0.512676z m476.059439 0.100284v0z m0.066515-0.058329c-0.016373 0.016373-0.033769 0.025583-0.033769 0.041956 0.001023-0.016373 0.017396-0.025583 0.033769-0.041956z m0.051166-0.041955a0.227174 0.227174 0 0 0-0.050142 0.041955c0.016373-0.016373 0.032746-0.033769 0.050142-0.041955z"
        fill="#444444"
        class="fill-[#6c7fd8]"
      ></path>
      <path
        d="M512 577.206094c-90.000803 0-163.222455-73.221652-163.222455-163.222455s73.221652-163.222455 163.222455-163.222455S675.222455 323.982836 675.222455 413.983639s-73.222675 163.222455-163.222455 163.222455z m0-240.538355c-42.634006 0-77.3159 34.68087-77.3159 77.3159s34.68087 77.3159 77.3159 77.3159 77.3159-34.681894 77.3159-77.3159-34.681894-77.3159-77.3159-77.3159z"
        fill="#00D8A0"
        class="fill-[#6c7fd8]"
      ></path>
    </svg>
  );
}

function OffersIcon() {
  return (
    <svg
      className="h-6.25 w-5 fill-[#6c7fd8]"
      viewBox="0 0 64 64"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M10 16v22c0 .3.1.6.2.8.3.6 6.5 13.8 21 20h.2c.2 0 .3.1.5.1s.3 0 .5-.1h.2c14.5-6.2 20.8-19.4 21-20 .1-.3.2-.5.2-.8V16c0-.9-.6-1.7-1.5-1.9-7.6-1.9-19.3-9.6-19.4-9.7-.1-.1-.2-.1-.4-.2-.1 0-.1 0-.2-.1h-.9c-.1 0-.2.1-.3.1-.1.1-.2.1-.4.2s-11.8 7.8-19.4 9.7c-.7.2-1.3 1-1.3 1.9zm4 1.5c6.7-2.1 15-7.2 18-9.1 3 1.9 11.3 7 18 9.1v20c-1.1 2.1-6.7 12.1-18 17.3-11.3-5.2-16.9-15.2-18-17.3z" />
      <path d="M28.6 38.4c.4.4.9.6 1.4.6s1-.2 1.4-.6l9.9-9.9c.8-.8.8-2 0-2.8s-2-.8-2.8 0L30 34.2l-4.5-4.5c-.8-.8-2-.8-2.8 0s-.8 2 0 2.8z" />
    </svg>
  );
}
