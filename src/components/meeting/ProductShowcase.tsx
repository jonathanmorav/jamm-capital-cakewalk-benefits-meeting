import NavigationArrow from "../navigation/NavigationArrow";
import BottomCornerLogo from "../BottomCornerLogo";

interface ProductShowcaseProps {
  onNavigateNext: () => void;
}

const ProductShowcase = ({ onNavigateNext }: ProductShowcaseProps) => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-white">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white via-brand-lightBlue/20 to-brand-lightMint/25" />

      <div className="relative z-10 flex h-screen w-full flex-col">
        <iframe
          src="https://reseller.cakewalkbenefits.com/showcase-library/?browser=open&tab=tab-1"
          className="h-full w-full flex-1 border-0"
          title="Product Showcase"
          allow="fullscreen"
        />
      </div>

      <BottomCornerLogo />
      <div className="absolute bottom-8 left-1/2 z-20 -translate-x-1/2">
        <NavigationArrow
          onClick={onNavigateNext}
          className="text-brand-blue transition-colors hover:text-brand-purple"
        />
      </div>
    </section>
  );
};

export default ProductShowcase;
