const config = {
  siteTitle: "GlyphDrawing.Club blog", // Site title.
  siteTitleShort: "GDC blog", // Short site title for homescreen (PWA). Preferably should be under 12 characters to prevent truncation.
  siteTitleAlt: "Glyph Drawing Club -blog", // Alternative site title for SEO.
  siteLogo: "/logos/logo-1024.png", // Logo used for SEO and manifest.
  siteUrl: "https://blog.glyphdrawing.club", // Domain of your website without pathPrefix.
  pathPrefix: "/", // Prefixes all links. For cases when deployed to example.github.io/gatsby-advanced-starter/.
  siteDescription:
    "Blog dedicated to all things GlyphDrawingClub, modular design, ASCII art and text art.", // Website description used for RSS feeds/meta description tag.
  siteRss: "/rss.xml", // Path to the RSS file.
  siteRssTitle: "GlyphDrawing.Club blog RSS feed", // Title of the RSS feed
  dateFromFormat: "YYYY-MM-DD", // Date format used in the frontmatter.
  dateFormat: "DD.MM.YYYY", // Date format for display.
  postsPerPage: 5, // Amount of posts displayed per listing page.
  userName: "Heikki Lotvonen", // Username to display in the author segment.
  userEmail: "hlotvonen@gmail.com", // Email used for RSS feed's author segment
  userLocation: "Helsinki, Finland", // User location to display in the author segment.
  userAvatar: "/logos/logo-512.png", // User avatar to display in the author segment.
  userDescription: "No description", // User description to display in the author segment.
  // Links to social profiles/projects you want to display in the author segment/navigation bar.
  userLinks: [
    {
      label: "GitHub",
      url: "https://github.com/hlotvonen/glyph-drawing-club/",
      iconClassName: "fa fa-github"
    },
    {
      label: "Instagram",
      url: "https://instagram.com/heikkiveikko",
      iconClassName: "fa fa-instagram"
    },
    {
      label: "Email",
      url: "mailto:hlotvonen@gmail.com",
      iconClassName: "fa fa-envelope"
    }
  ],
  copyright:
    "Anti-Copyright! Reprint freely, in any manner desired, even without naming the source.", // Copyright string for the footer of the website and RSS feed.
  themeColor: "#c62828", // Used for setting manifest and progress theme colors.
  backgroundColor: "#e0e0e0" // Used for setting manifest background color.
};

// Validate

// Make sure pathPrefix is empty if not needed
if (config.pathPrefix === "/") {
  config.pathPrefix = "";
} else {
  // Make sure pathPrefix only contains the first forward slash
  config.pathPrefix = `/${config.pathPrefix.replace(/^\/|\/$/g, "")}`;
}

// Make sure siteUrl doesn't have an ending forward slash
if (config.siteUrl.substr(-1) === "/")
  config.siteUrl = config.siteUrl.slice(0, -1);

// Make sure siteRss has a starting forward slash
if (config.siteRss && config.siteRss[0] !== "/")
  config.siteRss = `/${config.siteRss}`;

module.exports = config;
