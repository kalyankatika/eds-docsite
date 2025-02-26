const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");
const markdownIt = require("markdown-it");
const markdownItAnchor = require("markdown-it-anchor");

module.exports = function(eleventyConfig) {
    // Add Navigation plugin
    eleventyConfig.addPlugin(eleventyNavigationPlugin);

    // Configure Markdown with anchors
    let markdownLibrary = markdownIt({
        html: true,
        breaks: true,
        linkify: true
    }).use(markdownItAnchor, {
        level: [2, 3],
        permalink: markdownItAnchor.permalink.ariaHidden({
            placement: 'after',
            class: 'anchor',
            symbol: '#'
        })
    });
    
    eleventyConfig.setLibrary("md", markdownLibrary);

    // Add a striptags filter
    eleventyConfig.addFilter("striptags", function(value) {
        if (!value || typeof value !== 'string') return '';
        return value.replace(/<[^>]*>/g, '');
    });

    // Add a truncate filter
    eleventyConfig.addFilter("truncate", function(text, length) {
        if (!text || typeof text !== 'string') return '';
        if (text.length <= length) return text;
        return text.substring(0, length) + '...';
    });

    // Add a TOC filter
    eleventyConfig.addFilter("toc", function(content) {
        if (!content) return "";
        const headings = content.match(/<h[2-3][^>]*>.*?<\/h[2-3]>/g) || [];
        if (headings.length === 0) return "";
        
        return headings.map(heading => {
            const level = heading.charAt(2);
            const text = heading.replace(/<[^>]*>/g, '').trim();
            // Skip headings that look like frontmatter
            if (text.includes('layout:') || text.includes('eleventyNavigation:') || 
                text.includes('title:') || text.includes('key:')) {
                return '';
            }
            const slug = text.toLowerCase().replace(/[^\w]+/g, '-');
            const indent = level === '3' ? 'ml-4' : '';
            return `<a href="#${slug}" class="${indent} block text-neutral-dark hover:text-primary">${text}</a>`;
        }).filter(Boolean).join('\n');
    });

    // Pass through files
    eleventyConfig.addPassthroughCopy("assets");
    eleventyConfig.addPassthroughCopy("css");

    // Watch targets
    eleventyConfig.addWatchTarget("./css/");

    return {
        dir: {
            input: ".",
            output: "_site",
            includes: "_includes",
            data: "_data"
        }
    };
};
