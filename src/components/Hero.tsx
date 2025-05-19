
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-b from-forest-light/20 to-white">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAzNGM0LjQxOCAwIDgtMy41ODIgOC04cy0zLjU4Mi04LTgtOC04IDMuNTgyLTggOCAzLjU4MiA4IDggOHptMC0yYzMuMzE0IDAgNi0yLjY4NiA2LTZzLTIuNjg2LTYtNi02LTYgMi42ODYtNiA2IDIuNjg2IDYgNiA2eiIgZmlsbC1vcGFjaXR5PSIuMSIgZmlsbD0iIzRDQUY1MCIvPjwvZz48L3N2Zz4=')] opacity-25"></div>

      <div className="container-custom relative z-10 pt-24 pb-16 flex flex-col lg:flex-row items-center">
        {/* Logo and title */}
        <div className="w-full lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0 animate-fade-in">
          <div className="mx-auto lg:mx-0 mb-8 w-48 h-48 rounded-full bg-white p-4 shadow-xl">
            <img 
              src="/lovable-uploads/ab4d50d3-c4c4-41ad-8d79-77c5a42e9833.png" 
              alt="AQUAWOOD Logo" 
              className="w-full h-full object-contain"
            />
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-forest-dark">
            AQUAWOOD <span className="text-aqua-DEFAULT">UGANDA</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-700 max-w-xl mx-auto lg:mx-0">
            An innovative application for deforestation and water pollution monitoring to enhance drought and flood resilience.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
            <a href="#about" className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-forest-DEFAULT text-white font-medium hover:bg-forest-dark transition-colors">
              Learn More
            </a>
            <a href="#contact" className="inline-flex items-center justify-center px-6 py-3 rounded-md border-2 border-aqua-DEFAULT text-aqua-DEFAULT font-medium hover:bg-aqua-DEFAULT hover:text-white transition-colors">
              Get Involved
            </a>
          </div>
        </div>

        {/* Hero image */}
        <div className="w-full lg:w-1/2 animate-slide-up">
          <div className="relative rounded-lg overflow-hidden shadow-2xl">
            <img 
              src="/lovable-uploads/73dc5c35-5ba8-481c-8f9c-664f7e6b9c51.png" 
              alt="Uganda's landscape with forests and water" 
              className="w-full h-auto rounded-lg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex flex-col justify-end p-6">
              <h3 className="text-white text-xl font-semibold mb-2">Preserving Uganda's Natural Resources</h3>
              <p className="text-white/90 text-sm">Monitoring deforestation and water pollution for a sustainable future</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll down indicator */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center animate-bounce">
        <a href="#about" className="rounded-full bg-white/80 p-2 shadow-md">
          <ChevronDown className="text-forest-DEFAULT" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
