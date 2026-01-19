module.exports = {
  id: "houswire-visual",
  viewports: [
    { label: "phone", width: 390, height: 844 },
    { label: "tablet", width: 768, height: 1024 },
    { label: "desktop", width: 1440, height: 900 },
  ],
  scenarios: [
    {
      label: "Home",
      url: "http://houswire.com/",
      referenceUrl: "http://houswire.com/",
      selectors: ["document"],
      delay: 1000,
      misMatchThreshold: 0.1,
    }
  ],
  paths: {
    bitmaps_reference: "backstop_data/bitmaps_reference",
    bitmaps_test: "backstop_data/bitmaps_test",
    html_report: "backstop_data/html_report",
    ci_report: "backstop_data/ci_report",
  },
  engine: "playwright",
  engineOptions: {
    browser: "chromium",
    args: []
  },
  report: ["browser", "CI"]
};
