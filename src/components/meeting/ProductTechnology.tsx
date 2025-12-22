import NavigationArrow from "../navigation/NavigationArrow";
import BottomCornerLogo from "../BottomCornerLogo";
import CakewalkTechPlatform from "../CakewalkTechPlatform";
import CakewalkExperience from "../CakewalkExperience";

interface ProductTechnologyProps {
  onNavigateNext: () => void;
}

const ProductTechnology = ({ onNavigateNext }: ProductTechnologyProps) => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-white py-16 md:py-24 lg:py-32">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white via-brand-lightBlue/20 to-brand-lightMint/25" />
      <div className="absolute -top-1/4 right-0 h-3/4 w-2/3 translate-x-1/5 rounded-full bg-brand-lightBlue opacity-[0.05] blur-3xl" />

      <div className="container relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-12 px-4 md:px-6">
        {/* Embedded Technology Components */}
        <div className="space-y-16">
          <div className="[&>section]:!py-0 [&>section]:!min-h-0">
            <CakewalkExperience onNavigateNext={() => {}} />
          </div>
          <div className="[&>section]:!py-0 [&>section]:!min-h-0">
            <CakewalkTechPlatform onNavigateNext={() => {}} />
          </div>
        </div>
      </div>

      <BottomCornerLogo />
      <div className="mt-12 flex justify-center">
        <NavigationArrow
          onClick={onNavigateNext}
          className="text-brand-blue transition-colors hover:text-brand-purple"
        />
      </div>
    </section>
  );
};

export default ProductTechnology;

