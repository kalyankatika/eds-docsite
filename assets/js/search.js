document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('search-input');
    const searchResults = document.getElementById('search-results');
    let searchIndex = [];

    // Fetch the search index
    fetch('/search-index.json')
        .then(response => response.json())
        .then(data => {
            searchIndex = data;
        });

    function debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    function performSearch(searchTerm) {
        if (!searchTerm) {
            searchResults.style.display = 'none';
            return;
        }

        const results = searchIndex.filter(item => {
            const titleMatch = item.title.toLowerCase().includes(searchTerm.toLowerCase());
            const contentMatch = item.content.toLowerCase().includes(searchTerm.toLowerCase());
            return titleMatch || contentMatch;
        });

        displayResults(results);
    }

    function displayResults(results) {
        if (results.length === 0) {
            searchResults.innerHTML = '<p class="p-4 text-neutral-dark">No results found</p>';
        } else {
            const html = results.map(result => `
                <a href="${result.id}" class="block p-4 hover:bg-gray-50">
                    <h3 class="text-lg font-semibold text-primary">${result.title}</h3>
                    <p class="text-sm text-neutral-dark mt-1">${getSnippet(result.content)}</p>
                </a>
            `).join('');
            searchResults.innerHTML = html;
        }
        searchResults.style.display = 'block';
    }

    function getSnippet(content, length = 150) {
        return content.length > length ? content.substring(0, length) + '...' : content;
    }

    const debouncedSearch = debounce(performSearch, 300);

    searchInput.addEventListener('input', (e) => {
        debouncedSearch(e.target.value);
    });

    // Close search results when clicking outside
    document.addEventListener('click', (e) => {
        if (!searchResults.contains(e.target) && e.target !== searchInput) {
            searchResults.style.display = 'none';
        }
    });
});
