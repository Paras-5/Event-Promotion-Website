const HeroSection = () => (
  <section
    className="bg-cover bg-center text-white py-32 flex flex-col items-center text-center"
    style={{
      backgroundImage: `url('/bg-image.jpg')`,
    }}
  >
    <img src="/logo.jpg" alt="GWECCC 2025" className="w-32 mb-6" />
    <h1 className="text-4xl md:text-6xl font-bold">GWECCC 2025</h1>
    <p className="mt-4 text-lg md:text-xl">
      Event Date: 12-10-2024
    </p>
    <p className="mt-2 text-sm md:text-base">
      Join us for discussions on Water, Energy, and Climate Security & Sustainability.
    </p>
  </section>
);

export default HeroSection;
