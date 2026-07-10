import Countdown from "./Countdown";
import ProductCard from "./ProductCard";
import { products } from "../data/productData";

export default function Deal() {
  return (
    <section className="section-deal overflow-hidden py-12.5 max-[1199px]:py-8.75">
      <div className="container px-3 mx-auto">
        <div className="section-title bb-deal mb-5 pb-5 z-5 relative flex justify-between max-[991px]:pb-0 max-[991px]:flex-col max-[991px]:justify-center max-[991px]:text-center">
          <div className="section-detail max-[991px]:mb-3" data-aos="fade-up">
            <h2 className="bb-title font-quicksand mb-0 p-0 text-[25px] font-bold text-[#3d4750] relative inline capitalize leading-none tracking-[0.03rem] max-[767px]:text-[23px]">
              Day of the <span className="text-[#6c7fd8]">deal</span>
            </h2>
            <p className="font-Poppins max-w-100 mt-2.5 text-[14px] text-[#686e7d] leading-4.5 font-light tracking-[0.03rem] max-[991px]:mx-auto">
              Don't wait. The time will never be just right.
            </p>
          </div>
          <div data-aos="fade-left" data-aos-delay="120">
            <Countdown />
          </div>
        </div>
      </div>

      <div className="mx-auto grid gap-6 px-3 sm:grid-cols-2 lg:grid-cols-4  container">
        {products.map((product, index) => (
          <ProductCard
            key={product.id}
            product={product}
            animationDelay={index * 120}
          />
        ))}
      </div>
    </section>
  );
}
