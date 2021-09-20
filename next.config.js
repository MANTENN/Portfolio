// next.config.js
const withPreact = require("next-plugin-preact");

module.exports = withPreact({
  /* regular next.js config options here */
  webpack5: true,
  async rewrites() {
    return [
      {
        source: "/bee.js",
        destination: "https://cdn.splitbee.io/sb.js",
      },
      {
        source: "/_hive/:slug",
        destination: "https://hive.splitbee.io/:slug",
      },
    ];
  },
});
