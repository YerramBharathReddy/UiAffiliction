// --- 3. Function to load content without refresh (using innerHTML) ---
function loadPage(pageName) {
    const contentArea = document.getElementById('main-content');
    let content = '';

    // Define the HTML content for each "page" dynamically
    switch (pageName) {
        case 'home':
            content = `
                <h2>🏠 Welcome Home!</h2>
                <p>This is the main landing page. Notice the Header and Side Nav remain constant.</p>
                <p>Content loaded via <code>innerHTML</code> method.</p>
            `;
            break;
        case 'about':
            content = `
                <h2>ℹ️ About Our Project</h2>
                <p>We are demonstrating a core Single-Page Application (SPA) technique.</p>
                <p>The entire page does not refresh when you change views.</p>
            `;
            break;
        case 'services':
            content = `
                <h2>🛠️ Our Services</h2>
                <ul>
                    <li>Dynamic Content Injection</li>
                    <li>Persistent Navigation Setup</li>
                    <li>Vanilla JavaScript Dropdowns</li>
                </ul>
            `;
            break;
        case 'profile':
            content = `
                <h2>👤 User Profile</h2>
                <p>This content was loaded from the Side Navigation link.</p>
                <p>It's a completely new view without a page reload!</p>
            `;
            break;
        case 'settings':
            content = `
                <h2>⚙️ Settings</h2>
                <p>Adjust your application settings here.</p>
            `;
            break;
        default:
            content = '<h2>Page Not Found</h2>';
    }

    // Load the new content into the main area using innerHTML
    contentArea.innerHTML = content;
}


// --- 2. Dropdown Toggle Logic ---
function toggleDropdown() {
    document.getElementById("dropdown-menu").classList.toggle("show");
}

document.getElementById('menu-toggle').addEventListener('click', toggleDropdown);

// Close the dropdown if the user clicks anywhere outside of the menu
window.onclick = function(event) {
    if (!event.target.matches('#menu-toggle')) {
        const dropdown = document.getElementById("dropdown-menu");
        if (dropdown.classList.contains('show')) {
            dropdown.classList.remove('show');
        }
    }
}


// --- Event Listener for Page Loading ---
// Handles clicks on both dropdown items AND side nav links
document.body.addEventListener('click', function(event) {
    const target = event.target;
    // Check if the clicked element has the data-page attribute
    const pageName = target.getAttribute('data-page');

    if (pageName) {
        // Stop the link from navigating and refreshing the page
        event.preventDefault();
        
        // Load the new content
        loadPage(pageName);

        // Close dropdown if the click came from inside it
        if (target.closest('#dropdown-menu')) {
            document.getElementById("dropdown-menu").classList.remove('show');
        }
    }
});


// Load the initial home page content when the script runs
document.addEventListener('DOMContentLoaded', () => {
    loadPage('home');
});