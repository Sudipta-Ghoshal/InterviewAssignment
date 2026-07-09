import HeroImage from "../assets/hero.png";

export default function Hero() {
  return (
    <section className="relative mb-12.5 overflow-hidden bg-[#f8f8fb] py-12.5 max-[1199px]:mb-8.75">
      <div className="mx-auto px-3 container">
        <div className="flex w-full flex-wrap items-center">
          <div className="order-2 mb-6 w-full px-3 min-[992px]:order-1 min-[992px]:w-[50%]">
            <div className="flex h-full flex-col items-start justify-center max-[991px]:items-center">
              <p className="mb-5 font-Poppins text-[18px] font-light leading-7 tracking-[0.03rem] text-[#777] max-[1199px]:mb-2.5 max-[1199px]:text-[16px]">
                Flat 30% Off
              </p>
              <h1 className="mb-5 font-quicksand text-[50px] font-bold leading-[1.2] tracking-[0.03rem] text-[#3d4750] max-[1199px]:mb-2.5 max-[1199px]:text-[38px] max-[991px]:text-center max-[767px]:text-[40px] max-[575px]:text-[35px] max-[420px]:text-[30px] max-[360px]:text-[28px]">
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

          <div className="order-1 mb-6 w-full px-3 min-[992px]:order-2 min-[992px]:w-[50%]">
            <div className="relative flex justify-center pr-12.5 max-[991px]:px-12.5 max-[575px]:px-7.5 max-[420px]:p-0">
              <img
                src={HeroImage}
                alt="Fresh fruits"
                className="w-full pb-12.5 opacity-100 max-[1199px]:pr-7.5 max-[991px]:pr-0 max-[575px]:pb-7.5 max-[420px]:pb-3.75"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
