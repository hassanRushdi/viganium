import ContactsUsSection from "./ContactsUsSection";
import HeroSection from "./HeroSection";

const LandingPage = () => {
  return (
    <main>
      <div className="bg-[#D7CBCA1A]">
      <HeroSection />
      </div>
      <div className="max-w-[1440px] w-full mx-auto px-4 sm:px-6 lg:px-1">
      <ContactsUsSection />
      </div>
    </main>
  );
};

export default LandingPage;
