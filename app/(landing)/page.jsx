import ContactsUsSection from "./ContactsUsSection";
import HeroSection from "./HeroSection";

const LandingPage = () => {
  return (
    <main>
      <div className="bg-[#D7CBCA1A]">
      <HeroSection />
      </div>
      <div className="w-[1440px] mx-auto">
      <ContactsUsSection />
      </div>
    </main>
  );
};

export default LandingPage;
