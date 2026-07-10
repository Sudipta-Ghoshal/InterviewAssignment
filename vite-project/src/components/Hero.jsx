import HeroImage from "../assets/hero.png";

export default function Hero() {
  return (
    <section className="relative mb-12.5 overflow-hidden bg-[#f8f8fb] py-15.5 max-[1199px]:mb-8.75">
      <div className="mx-auto px-3 container">
        <div className="flex w-full flex-col md:flex-row items-center gap-10 justify-between">
          <div
            className="order-2 w-full px-3 md:order-1 "
            data-aos="fade-right"
          >
            <div className="flex h-full flex-col space-y-5 justify-center items-center md:items-start">
              <p className="font-Poppins text-[18px] font-light leading-7 tracking-[0.03rem] text-[#777] max-[1199px]:mb-2.5 max-[1199px]:text-[16px]">
                Flat 30% Off
              </p>
              <h1 className="font-quicksand text-[50px] font-bold leading-[1.2] tracking-[0.03rem] text-[#3d4750] max-[1199px]:mb-2.5 max-[1199px]:text-[38px] max-[991px]:text-center max-[767px]:text-[40px] max-[575px]:text-[35px] max-[420px]:text-[30px] max-[360px]:text-[28px]">
                Explore <span className="relative text-[#6c7fd8]">Healthy</span>
                <br />
                &amp; Fresh Fruits
              </h1>
              <a
                href="#"
                className="rounded-[10px] border border-solid border-[#3d4750] bg-transparent px-5 py-2 font-Poppins text-[14px] font-normal leading-7 tracking-[0.03rem] text-[#3d4750] transition-all duration-300 ease-in-out hover:border-[#6c7fd8] hover:bg-[#6c7fd8] hover:text-white max-[1199px]:px-3.75 max-[1199px]:py-0.75"
              >
                Shop Now
              </a>
            </div>
          </div>

          <div
            className="order-1 w-full px-3 md:order-2 "
            data-aos="zoom-in"
            data-aos-delay="180"
          >
            <div className="relative flex justify-center md:pr-10 p-0">
              <img src={HeroImage} alt="Fresh fruits" className="w-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
