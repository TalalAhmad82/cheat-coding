// Main JavaScript functionality for the Coding Cheat Sheet website

// Global variables
let currentLanguage = 'python';
let currentTheme = localStorage.getItem('theme') || 'light';
let searchTimeout;

// DOM elements
const sidebar = document.querySelector('.sidebar');
const mainContent = document.querySelector('.main-content');
const searchInput = document.getElementById('searchInput');
const themeToggle = document.getElementById('themeToggle');
const pdfExportBtn = document.getElementById('pdfExport');
const mobileMenuBtn = document.getElementById('mobileMenuToggle');
const cheatSheetContent = document.getElementById('cheatSheetContent');
const languageTitle = document.createElement('h2');
languageTitle.className = 'language-title';
const languageDescription = document.createElement('p');
languageDescription.className = 'language-description';
const sectionsContainer = document.createElement('div');
sectionsContainer.className = 'sections-container';

// Initialize cheat sheet content structure
cheatSheetContent.appendChild(languageTitle);
cheatSheetContent.appendChild(languageDescription);
cheatSheetContent.appendChild(sectionsContainer);

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeTheme();
    generateSidebar();
    loadLanguage(currentLanguage);
    setupEventListeners();
    setupKeyboardShortcuts();
});

// Theme Management
function initializeTheme() {
    document.documentElement.setAttribute('data-theme', currentTheme);
    updateThemeToggleIcon();
}

function toggleTheme() {
    currentTheme = currentTheme === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', currentTheme);
    localStorage.setItem('theme', currentTheme);
    updateThemeToggleIcon();
}

function updateThemeToggleIcon() {
    const icon = themeToggle.querySelector('i');
    if (currentTheme === 'dark') {
        icon.className = 'fas fa-sun';
        themeToggle.setAttribute('aria-label', 'Switch to light mode');
    } else {
        icon.className = 'fas fa-moon';
        themeToggle.setAttribute('aria-label', 'Switch to dark mode');
    }
}

// Sidebar Generation
function generateSidebar() {
    const languageList = document.getElementById('languageList');
    languageList.innerHTML = '';
    
    Object.keys(cheatSheets).forEach(langKey => {
        const language = cheatSheets[langKey];
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <a href="#" data-lang="${langKey}" class="${langKey === currentLanguage ? 'active' : ''}">
                <i class="${getLanguageIcon(langKey)}"></i> ${language.name}
            </a>
        `;
        languageList.appendChild(listItem);
    });
}

// Get appropriate icon for each language
function getLanguageIcon(language) {
    const icons = {
        python: 'fab fa-python',
        javascript: 'fab fa-js-square',
        java: 'fab fa-java',
        cpp: 'fas fa-code',
        html: 'fab fa-html5',
        css: 'fab fa-css3-alt',
        sql: 'fas fa-database'
    };
    return icons[language] || 'fas fa-code';
}

// Language Loading
function loadLanguage(langKey) {
    if (!cheatSheets[langKey]) return;
    
    currentLanguage = langKey;
    const language = cheatSheets[langKey];
    
    // Update active language in sidebar
    document.querySelectorAll('#languageList a').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('data-lang') === langKey) {
            link.classList.add('active');
        }
    });
    
    // Update main content
    languageTitle.textContent = language.name;
    languageDescription.textContent = language.description;
    
    // Generate sections
    generateSections(language.sections);
    
    // Clear search when switching languages
    searchInput.value = '';
    
    // Update URL hash
    window.location.hash = langKey;
}

// Section Generation
function generateSections(sections) {
    sectionsContainer.innerHTML = '';
    
    Object.keys(sections).forEach(sectionName => {
        const sectionData = sections[sectionName];
        const sectionElement = createSectionElement(sectionName, sectionData);
        sectionsContainer.appendChild(sectionElement);
    });
}

function createSectionElement(sectionName, sectionData) {
    const section = document.createElement('section');
    section.className = 'cheat-section';
    section.innerHTML = `
        <h2 class="section-title">${sectionName}</h2>
        <div class="section-content">
            ${Object.keys(sectionData).map(itemName => 
                createSectionItem(itemName, sectionData[itemName])
            ).join('')}
        </div>
    `;
    return section;
}

function createSectionItem(itemName, itemData) {
    const description = itemData.description ? `<p class="item-description">${itemData.description}</p>` : '';
    return `
        <div class="cheat-item">
            <h3 class="item-title">${itemName}</h3>
            ${description}
            <div class="code-block">
                <div class="code-header">
                    <span class="code-language">${getLanguageDisplayName(currentLanguage)}</span>
                    <button class="copy-btn" onclick="copyToClipboard(this)" 
                            aria-label="Copy code to clipboard" title="Copy to clipboard">
                        <i class="fas fa-copy"></i>
                    </button>
                </div>
                <pre><code class="language-${currentLanguage}">${escapeHtml(itemData.code)}</code></pre>
            </div>
        </div>
    `;
}

function getLanguageDisplayName(langKey) {
    const displayNames = {
        python: 'Python',
        javascript: 'JavaScript',
        java: 'Java',
        cpp: 'C++',
        html: 'HTML',
        css: 'CSS',
        sql: 'SQL'
    };
    return displayNames[langKey] || langKey.toUpperCase();
}

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// Copy to Clipboard Functionality
function copyToClipboard(button) {
    const codeBlock = button.closest('.code-block');
    const code = codeBlock.querySelector('code').textContent;
    
    navigator.clipboard.writeText(code).then(() => {
        // Visual feedback
        const originalIcon = button.innerHTML;
        button.innerHTML = '<i class="fas fa-check"></i>';
        button.classList.add('copied');
        
        setTimeout(() => {
            button.innerHTML = originalIcon;
            button.classList.remove('copied');
        }, 2000);
        
        // Show toast notification
        showToast('Code copied to clipboard!');
    }).catch(err => {
        console.error('Failed to copy: ', err);
        showToast('Failed to copy code', 'error');
    });
}

// Toast Notification
function showToast(message, type = 'success') {
    // Remove existing toast
    const existingToast = document.querySelector('.toast');
    if (existingToast) {
        existingToast.remove();
    }
    
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.innerHTML = `
        <i class="fas fa-${type === 'success' ? 'check-circle' : 'exclamation-circle'}"></i>
        <span>${message}</span>
    `;
    
    document.body.appendChild(toast);
    
    // Trigger animation
    setTimeout(() => toast.classList.add('show'), 100);
    
    // Remove after 3 seconds
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

// Search Functionality
function performSearch(query) {
    const sections = document.querySelectorAll('.cheat-section');
    const normalizedQuery = query.toLowerCase().trim();
    
    if (!normalizedQuery) {
        // Show all sections if search is empty
        sections.forEach(section => {
            section.style.display = 'block';
            const items = section.querySelectorAll('.cheat-item');
            items.forEach(item => item.style.display = 'block');
        });
        return;
    }
    
    let hasResults = false;
    
    sections.forEach(section => {
        const sectionTitle = section.querySelector('.section-title').textContent.toLowerCase();
        const items = section.querySelectorAll('.cheat-item');
        let sectionHasVisibleItems = false;
        
        items.forEach(item => {
            const itemTitle = item.querySelector('.item-title').textContent.toLowerCase();
            const itemDescription = item.querySelector('.item-description')?.textContent.toLowerCase() || '';
            const itemCode = item.querySelector('code').textContent.toLowerCase();
            
            const matches = sectionTitle.includes(normalizedQuery) ||
                          itemTitle.includes(normalizedQuery) ||
                          itemDescription.includes(normalizedQuery) ||
                          itemCode.includes(normalizedQuery);
            
            if (matches) {
                item.style.display = 'block';
                sectionHasVisibleItems = true;
                hasResults = true;
            } else {
                item.style.display = 'none';
            }
        });
        
        section.style.display = sectionHasVisibleItems ? 'block' : 'none';
    });
    
    // Show "no results" message if needed
    showNoResultsMessage(!hasResults, normalizedQuery);
}

function showNoResultsMessage(show, query) {
    let noResultsDiv = document.getElementById('no-results');
    
    if (show) {
        if (!noResultsDiv) {
            noResultsDiv = document.createElement('div');
            noResultsDiv.id = 'no-results';
            noResultsDiv.className = 'no-results';
            sectionsContainer.appendChild(noResultsDiv);
        }
        noResultsDiv.innerHTML = `
            <div class="no-results-content">
                <i class="fas fa-search"></i>
                <h3>No results found</h3>
                <p>No matches found for "<strong>${escapeHtml(query)}</strong>" in ${cheatSheets[currentLanguage].name}</p>
                <p>Try searching for:</p>
                <ul>
                    <li>Function names or keywords</li>
                    <li>Syntax patterns</li>
                    <li>Code examples</li>
                    <li>Different terms or abbreviations</li>
                </ul>
            </div>
        `;
    } else if (noResultsDiv) {
        noResultsDiv.remove();
    }
}

// Event Listeners
function setupEventListeners() {
    // Theme toggle
    themeToggle.addEventListener('click', toggleTheme);
    
    // Language navigation
    document.addEventListener('click', function(e) {
        const langLink = e.target.closest('#languageList a');
        if (langLink) {
            e.preventDefault();
            const langKey = langLink.getAttribute('data-lang');
            loadLanguage(langKey);
        }
    });
    
    // Search functionality
    searchInput.addEventListener('input', function(e) {
        clearTimeout(searchTimeout);
        searchTimeout = setTimeout(() => {
            performSearch(e.target.value);
        }, 300); // Debounce search
    });
    
    // Mobile menu toggle
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', function() {
            sidebar.classList.toggle('active');
            document.body.classList.toggle('sidebar-open');
        });
    }
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', function(e) {
        if (window.innerWidth <= 768 && 
            !sidebar.contains(e.target) && 
            !mobileMenuBtn.contains(e.target) && 
            sidebar.classList.contains('active')) {
            sidebar.classList.remove('active');
            document.body.classList.remove('sidebar-open');
        }
    });
    
    // PDF Export (placeholder)
    if (pdfExportBtn) {
        pdfExportBtn.addEventListener('click', function() {
            exportToPDF();
        });
    }
    
    // Handle browser back/forward
    window.addEventListener('hashchange', function() {
        const hash = window.location.hash.slice(1);
        if (hash && cheatSheets[hash] && hash !== currentLanguage) {
            loadLanguage(hash);
        }
    });
    
    // Load language from URL hash on initial load
    const initialHash = window.location.hash.slice(1);
    if (initialHash && cheatSheets[initialHash]) {
        loadLanguage(initialHash);
    }
}

// Keyboard Shortcuts
function setupKeyboardShortcuts() {
    document.addEventListener('keydown', function(e) {
        // Focus search with '/' key
        if (e.key === '/' && !e.ctrlKey && !e.metaKey && !e.altKey) {
            // Don't trigger if user is typing in an input
            if (document.activeElement.tagName !== 'INPUT' && 
                document.activeElement.tagName !== 'TEXTAREA') {
                e.preventDefault();
                searchInput.focus();
            }
        }
        
        // Clear search with 'Escape' key
        if (e.key === 'Escape') {
            if (document.activeElement === searchInput) {
                searchInput.value = '';
                performSearch('');
                searchInput.blur();
            }
            // Also close mobile menu if open
            if (sidebar.classList.contains('active')) {
                sidebar.classList.remove('active');
                document.body.classList.remove('sidebar-open');
            }
        }
        
        // Navigate languages with Ctrl/Cmd + Arrow keys
        if ((e.ctrlKey || e.metaKey) && (e.key === 'ArrowUp' || e.key === 'ArrowDown')) {
            e.preventDefault();
            const languages = Object.keys(cheatSheets);
            const currentIndex = languages.indexOf(currentLanguage);
            let newIndex;
            
            if (e.key === 'ArrowUp') {
                newIndex = currentIndex > 0 ? currentIndex - 1 : languages.length - 1;
            } else {
                newIndex = currentIndex < languages.length - 1 ? currentIndex + 1 : 0;
            }
            
            loadLanguage(languages[newIndex]);
        }
    });
}

// PDF Export Functionality using jsPDF
function exportToPDF() {
    // Check if jsPDF is available
    if (typeof window.jspdf === 'undefined') {
        showToast('PDF library not loaded. Please refresh the page.', 'error');
        return;
    }
    
    // Show loading toast
    showToast('Generating PDF...', 'info');
    
    try {
        const { jsPDF } = window.jspdf;
        const doc = new jsPDF();
        const currentLang = cheatSheets[currentLanguage];
        
        // Set document properties
        doc.setProperties({
            title: `${currentLang.name} Cheat Sheet`,
            subject: 'Programming Cheat Sheet',
            author: 'Coding Cheat Sheets',
            keywords: 'programming, cheat sheet, code, reference'
        });
        
        // Add title
        doc.setFontSize(24);
        doc.setTextColor(0, 0, 150);
        doc.text(`${currentLang.name} Cheat Sheet`, 105, 20, { align: 'center' });
        
        // Add description
        doc.setFontSize(12);
        doc.setTextColor(60, 60, 60);
        const descriptionLines = doc.splitTextToSize(currentLang.description, 180);
        doc.text(descriptionLines, 15, 30);
        
        let yPosition = 30 + (descriptionLines.length * 7);
        
        // Add sections
        Object.keys(currentLang.sections).forEach(sectionName => {
            // Add page if not enough space
            if (yPosition > 270) {
                doc.addPage();
                yPosition = 20;
            }
            
            // Section title
            doc.setFontSize(16);
            doc.setTextColor(0, 100, 150);
            doc.text(sectionName, 15, yPosition);
            yPosition += 10;
            
            // Section items
            const sectionData = currentLang.sections[sectionName];
            Object.keys(sectionData).forEach(itemName => {
                // Add page if not enough space
                if (yPosition > 250) {
                    doc.addPage();
                    yPosition = 20;
                }
                
                // Item title
                doc.setFontSize(14);
                doc.setTextColor(80, 80, 80);
                doc.text(itemName, 20, yPosition);
                yPosition += 7;
                
                // Item description if available
                if (sectionData[itemName].description) {
                    doc.setFontSize(10);
                    doc.setTextColor(100, 100, 100);
                    const itemDescLines = doc.splitTextToSize(sectionData[itemName].description, 170);
                    doc.text(itemDescLines, 20, yPosition);
                    yPosition += (itemDescLines.length * 5);
                }
                
                // Code snippet
                doc.setFontSize(9);
                doc.setTextColor(0, 0, 0);
                
                // Draw code background
                doc.setFillColor(245, 245, 245);
                const codeLines = sectionData[itemName].code.split('\n');
                const codeHeight = codeLines.length * 5 + 6;
                doc.rect(20, yPosition, 170, codeHeight, 'F');
                
                // Add code text
                const codeText = doc.splitTextToSize(sectionData[itemName].code, 165);
                doc.text(codeText, 23, yPosition + 5);
                
                yPosition += codeHeight + 10;
            });
        });
        
        // Save the PDF
        doc.save(`${currentLang.name.toLowerCase()}_cheat_sheet.pdf`);
        showToast('PDF downloaded successfully!', 'success');
    } catch (error) {
        console.error('PDF generation error:', error);
        showToast('Failed to generate PDF. See console for details.', 'error');
    }
}

// Utility function to handle responsive behavior
function handleResize() {
    if (window.innerWidth > 768 && sidebar.classList.contains('active')) {
        sidebar.classList.remove('active');
        document.body.classList.remove('sidebar-open');
    }
}

// Add resize listener
window.addEventListener('resize', handleResize);

// Add smooth scrolling for internal links
document.addEventListener('click', function(e) {
    if (e.target.matches('a[href^="#"]')) {
        e.preventDefault();
        const target = document.querySelector(e.target.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    }
});

// Add loading state management
function showLoading() {
    sectionsContainer.innerHTML = '<div class="loading"><i class="fas fa-spinner fa-spin"></i> Loading...</div>';
}

function hideLoading() {
    const loading = document.querySelector('.loading');
    if (loading) {
        loading.remove();
    }
}

// Performance optimization: Lazy load sections
function lazyLoadSections() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    });
    
    document.querySelectorAll('.cheat-section').forEach(section => {
        observer.observe(section);
    });
}

// Call lazy loading after sections are generated
document.addEventListener('sectionsLoaded', lazyLoadSections);

// Dispatch custom event when sections are loaded
function dispatchSectionsLoaded() {
    const event = new CustomEvent('sectionsLoaded');
    document.dispatchEvent(event);
}

// Update generateSections to dispatch the event
const originalGenerateSections = generateSections;
generateSections = function(sections) {
    originalGenerateSections(sections);
    setTimeout(dispatchSectionsLoaded, 100);
};