import featImagesOne from "../assets/featImageOne.png";
import featImagesTwo from "../assets/featImageTwo.png";

const featureCards = [
  {
    id: 1,
    title: "Tasty Snack & Fast food",
    description: "The flavour of something special",
    image: featImagesOne,
    imageAlt: "Tasty snacks",
    background: "bg-[#fbf2e5]",
  },
  {
    id: 2,
    title: "Fresh Fruits & Vegetables",
    description: "A healthy meal for every one",
    image: featImagesTwo,
    imageAlt: "Fresh fruits and vegetables",
    background: "bg-[#ffe8ee]",
  },
];

export default function FeatureCard() {
  return (
    <section className="overflow-hidden py-12.5 max-[1199px]:py-8.75">
      <div className="mx-auto px-3 container">
        <div className="flex w-full flex-wrap">
          {featureCards.map((card) => (
            <div className="mb-6 w-full px-3 min-[992px]:w-[50%]" key={card.id}>
              <article
                className={`${card.background} relative overflow-hidden rounded-[20px] p-7.5 h-full`}
              >
                <div className="relative z-1 flex justify-between gap-5 max-[480px]:flex-col">
                  <div className="flex items-center justify-center px-3 max-[480px]:mb-3 max-[480px]:p-0">
                    <img
                      src={card.image}
                      alt={card.imageAlt}
                      className="h-70 w-70 max-w-full object-contain max-[1399px]:h-57.5 max-[1399px]:w-57.5 max-[1199px]:h-35 max-[1199px]:w-35 max-[991px]:h-70 max-[991px]:w-70 max-[767px]:h-50 max-[767px]:w-50 max-[575px]:h-auto max-[575px]:w-full max-[480px]:w-[calc(100%-70px)]"
                    />
                  </div>

                  <div className="flex gap-1.5 max-w-62.5 flex-col items-start justify-center px-3 max-[480px]:max-w-full max-[480px]:items-center max-[480px]:p-0 max-[480px]:text-center">
                    <h2 className="mb-3.75 font-quicksand text-[31px] font-bold leading-[1.2] tracking-[0.03rem] text-[#3d4750] max-[991px]:text-[28px] max-[575px]:text-[24px] max-[480px]:mb-0.5 max-[480px]:text-[22px]">
                      {card.title}
                    </h2>
                    <p className="mb-3.75 font-Poppins text-[16px] font-light leading-7 tracking-[0.03rem] text-[#686e7d] max-[480px]:mb-2 max-[480px]:text-[14px]">
                      {card.description}
                    </p>
                    <a
                      href="#"
                      className="inline-block rounded-[10px] border border-solid border-[#3d4750] bg-transparent px-3.75 py-1.25 font-Poppins text-[14px] font-normal leading-7 tracking-[0.03rem] text-[#3d4750] transition-all duration-300 ease-in-out hover:border-[#6c7fd8] hover:bg-[#6c7fd8] hover:text-white"
                    >
                      Shop Now
                    </a>
                  </div>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
