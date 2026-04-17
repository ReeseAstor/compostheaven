import fs from "fs";
import path from "path";

const CONTENT_DIR = path.join(process.cwd(), "content");

/**
 * Reads a markdown file from the content directory.
 * Used at build time by Next.js static generation.
 */
function readContentFile(filename) {
  const filePath = path.join(CONTENT_DIR, filename);
  return fs.readFileSync(filePath, "utf-8");
}

/**
 * Inline content for the "compost" article.
 * This article is embedded directly rather than read from a .md file.
 */
const compostArticleContent = `# Beneficial Microbes in Compost: The Hidden Heroes of Your Garden

Compost is far more than decomposed organic matter. It is a living ecosystem teeming with billions of beneficial microbes that transform your garden soil into a nutrient-rich powerhouse. Understanding these microscopic allies helps you produce better compost and grow healthier plants.

## Why Microbes Matter in Composting

Every handful of finished compost contains billions of bacteria, millions of fungi, and thousands of protozoa and nematodes. These organisms are the true engine behind decomposition. Without them, your kitchen scraps and yard waste would simply sit in a pile for years.

Microbes break complex organic molecules into simpler compounds that plant roots can absorb. They also suppress plant diseases, improve soil structure, and help retain moisture. When you add compost to your garden, you are not just adding nutrients — you are inoculating your soil with a diverse community of beneficial organisms.

## The Key Microbial Players

### Bacteria

Bacteria are the first responders in any compost pile. They arrive within hours and begin breaking down simple sugars, starches, and proteins. Mesophilic bacteria work at moderate temperatures (20–40°C), while thermophilic bacteria take over as the pile heats up (40–70°C). This heat phase is critical for killing weed seeds and pathogens.

Common beneficial genera include *Bacillus*, *Pseudomonas*, and *Lactobacillus*. These bacteria produce enzymes that dissolve cell walls and release locked-up nutrients like nitrogen and phosphorus.

### Fungi

Fungi handle the heavy lifting that bacteria cannot. They decompose tough materials like lignin, cellulose, and chitin — the structural components of wood chips, straw, and insect exoskeletons. Their thread-like hyphae physically bind soil particles together, creating the crumbly texture gardeners prize.

Mycorrhizal fungi form symbiotic relationships with plant roots, extending the root network and dramatically improving nutrient and water uptake. A well-made compost introduces these fungi to your garden soil.

### Actinomycetes

If you have ever noticed a pleasant earthy smell in finished compost, you can thank actinomycetes. These organisms look like fungi but are actually specialized bacteria. They excel at breaking down tough organic compounds and produce natural antibiotics that suppress plant pathogens in the soil.

### Protozoa and Nematodes

Protozoa and beneficial nematodes feed on bacteria and fungi, releasing nutrients in plant-available forms through their waste. This process, called the microbial loop, is one of the most important nutrient cycling mechanisms in healthy soil.

## How Worm Castings Supercharge Microbial Activity

Vermicompost — compost processed by earthworms — contains significantly higher microbial diversity and population counts than traditional hot compost. As organic matter passes through a worm's gut, it is inoculated with beneficial microbes and coated in a mucus layer that serves as a microbial food source.

Studies have shown that worm castings can contain:

- **10 to 20 times** more beneficial bacteria than the surrounding soil
- Significantly higher populations of nitrogen-fixing bacteria
- Greater diversity of fungal species
- Enhanced populations of plant-growth-promoting rhizobacteria (PGPR)

This is one reason why vermicompost is often called "black gold" by gardeners. The microbial life it introduces to your soil keeps working long after application.

## Maintaining Microbial Health in Your Compost

### Keep Moisture Balanced

Microbes need water to survive and reproduce, but too much water drives out oxygen and favors anaerobic (smelly) decomposition. Aim for the moisture level of a wrung-out sponge — damp but not dripping.

### Provide Oxygen

Most beneficial compost microbes are aerobic, meaning they need oxygen. Turn your compost pile regularly, or use a worm bin with proper ventilation. Anaerobic conditions produce foul odors and favor organisms that are less beneficial for your garden.

### Balance Carbon and Nitrogen

Microbes need both carbon (for energy) and nitrogen (for protein synthesis). The ideal ratio is roughly 25–30 parts carbon to 1 part nitrogen. Browns like dried leaves and cardboard provide carbon; greens like food scraps and grass clippings provide nitrogen.

### Avoid Chemical Contamination

Pesticides, herbicides, and synthetic fertilizers can devastate microbial communities. If you are composting yard waste, ensure it has not been treated with persistent herbicides like aminopyralid or clopyralid, which can survive the composting process and damage your garden plants.

## Applying Compost for Maximum Microbial Benefit

For the best results, apply finished compost as a top dressing rather than tilling it deeply into the soil. This preserves the fungal networks already established in your garden. A layer of 1–2 inches applied in spring and fall provides a steady supply of nutrients and microbial reinforcement.

You can also brew compost tea — a liquid extract that concentrates beneficial microbes for foliar or soil application. Aerated compost tea, brewed with an air pump for 24–48 hours, produces a diverse microbial solution that can be sprayed directly on plant leaves to suppress foliar diseases.

## The Bottom Line

The microbes in your compost are the unsung heroes of a thriving garden. By understanding and nurturing these organisms — through proper moisture, aeration, and balanced inputs — you create a living soil amendment that feeds your plants, suppresses disease, and builds long-term soil health.

Whether you are hot composting in a tumbler or vermicomposting with red wigglers, the goal is the same: cultivate a thriving microbial community that transforms waste into garden gold.
`;

/**
 * All article metadata. Content is loaded lazily from .md files or embedded inline.
 */
const articlesData = [
  {
    slug: "worm-composting-beginners-guide",
    title:
      "Worm Composting for Beginners: The Complete Guide to Getting Started",
    metaTitle: "Worm Composting for Beginners: Complete 2026 Guide",
    metaDescription:
      "Learn how to start worm composting at home with our complete beginner guide. Setup in 30 minutes, feed schedule, common mistakes, and best worm bins.",
    excerpt:
      "Everything you need to start worm composting at home. Setup your first bin in 30 minutes with our step-by-step beginner guide.",
    category: "Beginner Guides",
    readingTime: "13 min read",
    date: "April 17, 2026",
    contentSource: "worm-composting-beginners-guide.md",
  },
  {
    slug: "what-to-feed-composting-worms",
    title: "What to Feed Composting Worms (And What to Avoid)",
    metaTitle: "What to Feed Composting Worms: Complete Food Guide",
    metaDescription:
      "Learn exactly what to feed your composting worms and what to avoid. Our complete feeding guide keeps your worm bin healthy and productive.",
    excerpt:
      "The complete feeding guide for composting worms. Learn which foods keep your bin thriving and which scraps to always avoid.",
    category: "How-To",
    readingTime: "10 min read",
    date: "April 17, 2026",
    contentSource: "what-to-feed-composting-worms.md",
  },
  {
    slug: "best-worm-composting-bins",
    title: "7 Best Worm Composting Bins in 2026 (Tested and Reviewed)",
    metaTitle: "7 Best Worm Composting Bins 2026 (Tested & Reviewed)",
    metaDescription:
      "We tested the top worm composting bins. See our picks for best overall, budget, and premium options for indoor and outdoor vermicomposting.",
    excerpt:
      "We tested the top worm composting bins head-to-head. See our picks for best overall, best budget, and best premium options.",
    category: "Product Reviews",
    readingTime: "15 min read",
    date: "April 17, 2026",
    contentSource: "best-worm-composting-bins.md",
  },
  {
    slug: "how-to-harvest-worm-castings",
    title: "How to Harvest Worm Castings: 4 Easy Methods",
    metaTitle: "How to Harvest Worm Castings: 4 Easy Methods (2026)",
    metaDescription:
      "Learn 4 proven methods to harvest worm castings from your vermicomposting bin. From the simple light method to hands-free flow-through systems.",
    excerpt:
      "Four proven methods to harvest worm castings from your bin. From the simple light method to hands-free flow-through systems.",
    category: "How-To",
    readingTime: "6 min read",
    date: "April 17, 2026",
    contentSource: "how-to-harvest-worm-castings.md",
  },
  {
    slug: "red-wigglers-vs-european-nightcrawlers",
    title: "Red Wigglers vs European Nightcrawlers: Which Worm Is Best?",
    metaTitle: "Red Wigglers vs Nightcrawlers: Best Composting Worm?",
    metaDescription:
      "Red wigglers vs European nightcrawlers compared. See which composting worm species is best for your bin, budget, and goals.",
    excerpt:
      "Red wigglers vs European nightcrawlers compared side-by-side. Find out which composting worm species is best for your goals.",
    category: "Worm Species",
    readingTime: "8 min read",
    date: "April 17, 2026",
    contentSource: "red-wigglers-vs-european-nightcrawlers.md",
  },
  {
    slug: "compost",
    title:
      "Beneficial Microbes in Compost: The Hidden Heroes of Your Garden",
    metaTitle: "Beneficial Microbes in Compost: Complete Guide",
    metaDescription:
      "Discover the beneficial microbes that make compost a powerhouse fertilizer. Learn how bacteria, fungi, and worm castings create nutrient-rich soil.",
    excerpt:
      "Discover the beneficial microbes that make compost a powerhouse fertilizer. Bacteria, fungi, and the science of nutrient-rich soil.",
    category: "Soil Science",
    readingTime: "8 min read",
    date: "April 17, 2026",
    contentSource: null, // Content is embedded inline
  },
];

/**
 * Returns all articles with their content loaded.
 * Content is read from .md files in the /content/ directory at build time,
 * except for the "compost" article which has its content embedded directly.
 *
 * @returns {Array<Object>} Array of article objects
 */
export function getArticles() {
  return articlesData.map((article) => {
    const { contentSource, ...metadata } = article;

    let content;
    if (contentSource) {
      content = readContentFile(contentSource);
    } else {
      content = compostArticleContent;
    }

    return {
      ...metadata,
      content,
    };
  });
}

/**
 * Returns a single article by its slug.
 *
 * @param {string} slug - The URL slug of the article
 * @returns {Object|undefined} The article object, or undefined if not found
 */
export function getArticleBySlug(slug) {
  const articles = getArticles();
  return articles.find((article) => article.slug === slug);
}

/**
 * Returns an array of all article slugs.
 * Useful for Next.js getStaticPaths.
 *
 * @returns {Array<string>} Array of slug strings
 */
export function getArticleSlugs() {
  return articlesData.map((article) => article.slug);
}
