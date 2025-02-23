const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");

module.exports = function(eleventyConfig) {
    // Add Navigation plugin
    eleventyConfig.addPlugin(eleventyNavigationPlugin);

    // Copy the css directory to _site/css
    eleventyConfig.addPassthroughCopy("css");

    // Watch the css directory for changes during --serve
    eleventyConfig.addWatchTarget("./css/");

    // Create a collection for components
    eleventyConfig.addCollection("components", function(collectionApi) {
        return collectionApi.getFilteredByGlob("components/**/*.md");
    });

    // Add a filter to strip HTML tags
    eleventyConfig.addFilter("striptags", function(value) {
        if (typeof value === 'string') {
            return value.replace(/(<([^>]+)>)/gi, "").replace(/\s+/g, " ").trim();
        }
        return '';
    });

    // Add filter function for filtering collections
    eleventyConfig.addFilter("filter", function(array, key, value) {
        if (!array || !Array.isArray(array)) return [];
        return array.filter(item => item.data && item.data[key] === value);
    });

    // Add filter for limiting array size
    eleventyConfig.addFilter("limit", function(array, limit) {
        if (!array || !Array.isArray(array)) return [];
        return array.slice(0, limit);
    });

    // Add filter for slugifying text
    eleventyConfig.addFilter("slug", function(str) {
        if (!str) return '';
        return str.toLowerCase()
                 .replace(/[^\w\s-]/g, '')
                 .replace(/\s+/g, '-');
    });

    // Create search index
    eleventyConfig.addCollection("searchIndex", function(collection) {
        return collection.getAll().map(page => ({
            id: page.url,
            title: page.data.title || '',
            content: typeof page.template.inputContent === 'string' ? page.template.inputContent : ''
        }));
    });

    return {
        dir: {
            input: ".",
            output: "_site",
            includes: "_includes",
            data: "_data"
        },
        templateFormats: ["md", "njk", "html"],
        markdownTemplateEngine: "njk",
        htmlTemplateEngine: "njk",
        dataTemplateEngine: "njk"
    };
};
