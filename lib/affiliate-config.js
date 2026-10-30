/**
 * Affiliate link configuration for CompostHeaven.
 *
 * Maps product slugs (used in markdown as [AFFILIATE: slug]) to actual
 * affiliate URLs. Update AMAZON_ASSOCIATE_TAG after Amazon Associates approval.
 *
 * Revenue model: Amazon Associates (garden/outdoor ~3-4%).
 * ASINs below were verified live against Amazon.com search results on
 * 2026-10-30. Products not currently sold on Amazon US fall back to a
 * tagged Amazon search URL so the link is never dead and still carries
 * the associate tag.
 */

// ⚠️ CHANGE THIS after Amazon Associates approval
// Format: yourid-20 (the -20 suffix is for US Amazon)
const AMAZON_ASSOCIATE_TAG = "compostheaven-20";

/**
 * Amazon product ASINs verified live from Amazon.com search results.
 * Key: slug used in markdown content files. Value: Amazon ASIN.
 */
const AMAZON_PRODUCTS = {
  // The Original VermiHut Plus 5-Tray Worm Compost Bin (~$82)
  "vermihut-plus": "B07PRKLCZQ",
  // Maze Worm Farm (~$125)
  "maze-worm-farm": "B07ZD8M1HN",
  // FCMP Outdoor Essential Living Composter, 4-Tray (~$107) — the HotFrog/FCMP worm bin
  "hot-frog": "B0BLTDG53W",
  // Urban Worm Bag Worm Composting Bin Version 2 (~$129)
  "urban-worm-bag": "B078RHPWZ4",
  // Uncle Jim's Worm Farm 1000 Count Red Wigglers (~$58)
  "uncle-jims-worm-farm": "B000Q5S7RM",
};

/**
 * Products featured in content that are NOT reliably stocked on Amazon US.
 * These resolve to a tagged Amazon search URL (still earns commission on
 * any qualifying purchase in the session, and never misleads the reader).
 * Key: slug. Value: Amazon search keyword.
 */
const AMAZON_SEARCH_FALLBACK = {
  // Main unit not currently listed on Amazon US (only trays/refill kits)
  "worm-factory-360": "worm factory 360",
  // NZ-made, sold mostly direct; rarely on Amazon US
  "hungry-bin": "hungry bin worm composter",
};

/**
 * External (non-Amazon) affiliate programs. Higher commission (8-15%).
 * Add affiliateParam after joining each program.
 */
const EXTERNAL_AFFILIATES = {};

/**
 * Build a full Amazon product URL with affiliate tag.
 */
function amazonProductUrl(asin) {
  return `https://www.amazon.com/dp/${asin}?tag=${AMAZON_ASSOCIATE_TAG}&linkCode=ll1`;
}

/**
 * Build a tagged Amazon search URL.
 */
function amazonSearchUrl(keyword) {
  return `https://www.amazon.com/s?k=${encodeURIComponent(keyword)}&tag=${AMAZON_ASSOCIATE_TAG}`;
}

/**
 * Resolve an affiliate slug to its target URL.
 * Returns the URL string, or a tagged Amazon search as a last resort
 * so no affiliate link is ever a dead '#'.
 */
export function getAffiliateUrl(slug) {
  const trimmed = slug.trim().toLowerCase();

  // 1. Verified Amazon product ASINs
  if (AMAZON_PRODUCTS[trimmed]) {
    return amazonProductUrl(AMAZON_PRODUCTS[trimmed]);
  }

  // 2. External affiliate programs
  if (EXTERNAL_AFFILIATES[trimmed]) {
    const { url, affiliateParam } = EXTERNAL_AFFILIATES[trimmed];
    return affiliateParam ? `${url}?${affiliateParam}` : url;
  }

  // 3. Amazon search fallback for known-but-unlisted products
  if (AMAZON_SEARCH_FALLBACK[trimmed]) {
    return amazonSearchUrl(AMAZON_SEARCH_FALLBACK[trimmed]);
  }

  // 4. Last resort: tagged Amazon search built from the slug itself
  return amazonSearchUrl(trimmed.replace(/-/g, " "));
}

/**
 * Get human-readable product info for link context.
 */
export const PRODUCT_INFO = {
  "worm-factory-360": { name: "Worm Factory 360", price: "~$120", commission: "3-4%" },
  "hungry-bin": { name: "Hungry Bin", price: "~$300", commission: "3-4%" },
  "urban-worm-bag": { name: "Urban Worm Bag v2", price: "~$129", commission: "3-4%" },
  "vermihut-plus": { name: "VermiHut Plus 5-Tray", price: "~$82", commission: "3-4%" },
  "maze-worm-farm": { name: "Maze Worm Farm", price: "~$125", commission: "3-4%" },
  "hot-frog": { name: "FCMP Essential Living Composter", price: "~$107", commission: "3-4%" },
  "uncle-jims-worm-farm": { name: "Uncle Jim's Red Wigglers (1000)", price: "~$58", commission: "3-4%" },
};
