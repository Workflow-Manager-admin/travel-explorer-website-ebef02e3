import React from "react";

/**
 * PUBLIC_INTERFACE
 * Page for displaying a list/upcoming schedule of adventures.
 */
function UpcomingAdventures() {
  return (
    <section className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-4 text-primary">Upcoming Adventures</h1>
      <p className="text-primary/80">
        Stay tuned for our expertly curated journeys—exciting itineraries will appear here soon!
      </p>
    </section>
  );
}

export default UpcomingAdventures;
