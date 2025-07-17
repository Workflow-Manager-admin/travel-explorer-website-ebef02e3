import React from "react";

/**
 * PUBLIC_INTERFACE
 * Frequently Asked Questions page.
 */
function FAQ() {
  return (
    <section className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-4 text-primary">FAQ</h1>
      <ul className="text-primary/80 list-disc pl-6 space-y-2">
        <li>
          <strong>Q: How do I join an adventure?</strong>
          <div>A: Check the Upcoming Adventures page and follow the instructions there (coming soon!).</div>
        </li>
        <li>
          <strong>Q: Can I design a trip for my group?</strong>
          <div>A: Absolutely! Use our Design Your Adventure page to build your perfect trip.</div>
        </li>
        <li>
          <strong>Q: Is ETA available internationally?</strong>
          <div>A: Yes, we facilitate adventures in many countries worldwide.</div>
        </li>
      </ul>
    </section>
  );
}

export default FAQ;
