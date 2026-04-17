import { marked } from "marked";

/**
 * Internal link mapping for [LINK: ...] pattern replacement.
 * Maps display text to internal URL paths.
 */
const INTERNAL_LINKS = {
  "Worm Composting for Beginners Guide": "/worm-composting-beginners-guide",
  "Worm Composting for Beginners": "/worm-composting-beginners-guide",
  "What to Feed Composting Worms": "/what-to-feed-composting-worms",
  "7 Best Worm Composting Bins": "/best-worm-composting-bins",
  "Best Worm Composting Bins": "/best-worm-composting-bins",
  "How to Harvest Worm Castings": "/how-to-harvest-worm-castings",
  "Red Wigglers vs Nightcrawlers":
    "/red-wigglers-vs-european-nightcrawlers",
  "Red Wigglers vs European Nightcrawlers":
    "/red-wigglers-vs-european-nightcrawlers",
};

/**
 * Configure marked with desired options.
 */
marked.setOptions({
  headerIds: true,
  gfm: true,
  breaks: false,
  pedantic: false,
  smartLists: true,
  smartypants: false,
  tables: true,
});

/**
 * Replaces [LINK: Display Text] patterns with proper internal anchor tags.
 *
 * @param {string} text - The markdown text to process
 * @returns {string} Text with [LINK: ...] replaced by <a> tags
 */
function replaceInternalLinks(text) {
  return text.replace(/\[LINK:\s*([^\]]+)\]/g, (match, linkText) => {
    const trimmed = linkText.trim();
    const href = INTERNAL_LINKS[trimmed];
    if (href) {
      return `[${trimmed}](${href})`;
    }
    // If no mapping found, return the display text without the tag
    return trimmed;
  });
}

/**
 * Replaces [AFFILIATE: Display Text] patterns with placeholder # links.
 *
 * @param {string} text - The markdown text to process
 * @returns {string} Text with [AFFILIATE: ...] replaced by placeholder links
 */
function replaceAffiliateLinks(text) {
  return text.replace(/\[AFFILIATE:\s*([^\]]+)\]/g, (match, linkText) => {
    const trimmed = linkText.trim();
    return `[${trimmed}](#)`;
  });
}

/**
 * Replaces [EMAIL OPT-IN: Description] patterns with a styled signup div.
 *
 * @param {string} text - The markdown text to process
 * @returns {string} Text with [EMAIL OPT-IN: ...] replaced by signup HTML
 */
function replaceEmailOptIns(text) {
  return text.replace(/\[EMAIL OPT-IN:\s*([^\]]+)\]/g, (match, description) => {
    const trimmed = description.trim();
    return `<div class="email-opt-in" style="background: #f0fdf4; border: 2px solid #22c55e; border-radius: 12px; padding: 2rem; margin: 2rem 0; text-align: center;">
  <h3 style="margin: 0 0 0.5rem 0; color: #15803d;">Free Composting Guide</h3>
  <p style="margin: 0 0 1rem 0; color: #166534;">${trimmed}</p>
  <form style="display: flex; gap: 0.5rem; justify-content: center; flex-wrap: wrap;">
    <input type="email" placeholder="Enter your email" style="padding: 0.75rem 1rem; border: 1px solid #d1d5db; border-radius: 8px; font-size: 1rem; min-width: 250px;" />
    <button type="submit" style="background: #22c55e; color: white; border: none; padding: 0.75rem 1.5rem; border-radius: 8px; font-size: 1rem; cursor: pointer; font-weight: 600;">Get the Guide</button>
  </form>
</div>`;
  });
}

/**
 * Replaces [PINTEREST PIN: Description] patterns with a placeholder div.
 *
 * @param {string} text - The markdown text to process
 * @returns {string} Text with [PINTEREST PIN: ...] replaced by placeholder HTML
 */
function replacePinterestPins(text) {
  return text.replace(/\[PINTEREST PIN:\s*([^\]]+)\]/g, (match, description) => {
    const trimmed = description.trim();
    return `<div class="pinterest-pin" style="background: #fef2f2; border: 2px dashed #e11d48; border-radius: 12px; padding: 1.5rem; margin: 2rem 0; text-align: center;">
  <p style="margin: 0; color: #9f1239; font-weight: 600;">📌 Pinterest Pin: ${trimmed}</p>
</div>`;
  });
}

/**
 * Replaces all occurrences of "WormGarden" with "CompostHeaven".
 *
 * @param {string} text - The text to process
 * @returns {string} Text with brand name replaced
 */
function replaceBrandName(text) {
  return text.replace(/WormGarden/g, "CompostHeaven");
}

/**
 * Converts a markdown string to HTML with all custom pattern replacements applied.
 *
 * Processing order:
 * 1. Replace [LINK: ...] with internal links
 * 2. Replace [AFFILIATE: ...] with placeholder links
 * 3. Replace [EMAIL OPT-IN: ...] with signup forms
 * 4. Replace [PINTEREST PIN: ...] with placeholder divs
 * 5. Replace "WormGarden" with "CompostHeaven"
 * 6. Convert markdown to HTML via marked
 *
 * @param {string} markdown - Raw markdown content
 * @returns {string} Processed HTML string
 */
export function markdownToHtml(markdown) {
  if (!markdown) return "";

  let processed = markdown;

  // Step 1: Replace custom patterns while still in markdown
  processed = replaceInternalLinks(processed);
  processed = replaceAffiliateLinks(processed);
  processed = replaceEmailOptIns(processed);
  processed = replacePinterestPins(processed);

  // Step 2: Replace brand name
  processed = replaceBrandName(processed);

  // Step 3: Convert to HTML
  const html = marked(processed);

  return html;
}
