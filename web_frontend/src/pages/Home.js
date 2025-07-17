import React from "react";

/**
 * PUBLIC_INTERFACE
 * Home page component for the travel site with:
 * - Full-width hero image and overlay text
 * - "What We Do" section below the hero
 */
function Home() {
  // Replace with a beautiful travel hero image if available
  const heroImage =
    "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1600&q=80";

  return (
    <div>
      <section
        className="w-full h-[50vh] md:h-[70vh] relative bg-center bg-cover flex items-center justify-center"
        style={{
          backgroundImage: `url('${heroImage}')`,
        }}
        aria-label="Inspiring mountain landscape hero image"
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/60 to-secondary/70"></div>
        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center w-full h-full text-center text-white px-2">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-xl tracking-wide">
            Embrace The Adventure
          </h1>
          <p className="max-w-lg mx-auto text-base md:text-xl font-medium drop-shadow-sm">
            Explore curated journeys, design unforgettable escapes, and discover your next ETA.
          </p>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="max-w-5xl mx-auto px-4 py-14">
        <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-6 text-center">
          What We Do
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white shadow rounded-lg p-6 border-l-4 border-accent flex flex-col items-start">
            <span className="text-accent text-2xl mb-2">1</span>
            <h3 className="font-semibold text-lg mb-2">Curated Adventures</h3>
            <p className="text-base text-primary/80">
              Our experts craft unique travel experiences across breathtaking destinations
              so you can focus on what matters—living the moment.
            </p>
          </div>
          <div className="bg-white shadow rounded-lg p-6 border-l-4 border-accent flex flex-col items-start">
            <span className="text-accent text-2xl mb-2">2</span>
            <h3 className="font-semibold text-lg mb-2">Custom Planning</h3>
            <p className="text-base text-primary/80">
              Design your adventure with flexible options. We turn your travel dreams into
              actionable, personalized itineraries from start to finish.
            </p>
          </div>
          <div className="bg-white shadow rounded-lg p-6 border-l-4 border-accent flex flex-col items-start">
            <span className="text-accent text-2xl mb-2">3</span>
            <h3 className="font-semibold text-lg mb-2">Support & Community</h3>
            <p className="text-base text-primary/80">
              Our team and vibrant community are here to offer support, coaching, and tips
              to ensure every ETA is smooth, safe, and unforgettable.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
