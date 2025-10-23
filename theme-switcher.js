// Theme Switcher JavaScript for Gaming Universe

// Define themes
const themes = [
    { id: 'cyber-neon', name: 'Cyber Neon' },
    { id: 'inferno-red', name: 'Inferno Red' },
    { id: 'electric-blue', name: 'Electric Blue' },
    { id: 'toxic-green', name: 'Toxic Green' },
    { id: 'galaxy-purple', name: 'Galaxy Purple' }
];

// DOM elements
const themeSwitcher = document.getElementById('themeSwitcher');
const themeTooltip = document.getElementById('themeTooltip');

// Get current theme from localStorage or default to cyber-neon
let currentTheme = localStorage.getItem('gamingUniverseTheme') || 'cyber-neon';

// Apply theme on page load
document.documentElement.setAttribute('data-theme', currentTheme);
updateTooltip(currentTheme);

// Add event listener to theme switcher button
if (themeSwitcher) {
    themeSwitcher.addEventListener('click', switchTheme);
}

// Switch to next theme
function switchTheme() {
    // Find current theme index
    const currentIndex = themes.findIndex(theme => theme.id === currentTheme);
    
    // Get next theme (cycle back to first if at end)
    const nextIndex = (currentIndex + 1) % themes.length;
    const nextTheme = themes[nextIndex];
    
    // Apply new theme
    document.documentElement.setAttribute('data-theme', nextTheme.id);
    currentTheme = nextTheme.id;
    
    // Update tooltip
    updateTooltip(nextTheme.id);
    
    // Save to localStorage
    localStorage.setItem('gamingUniverseTheme', nextTheme.id);
    
    // Add animation effect
    if (themeSwitcher) {
        themeSwitcher.style.animation = 'none';
        setTimeout(() => {
            themeSwitcher.style.animation = 'pulse 0.5s ease';
        }, 10);
    }
    
    // Apply theme to all elements including navbar
    applyThemeToElements(nextTheme.id);
}

// Apply theme to specific elements
function applyThemeToElements(themeId) {
    // This function ensures all elements update properly
    // The CSS variables should handle most of this automatically
    // but we can add specific overrides here if needed
    
    // Force a reflow to ensure all elements update
    document.body.style.transition = 'none';
    void document.body.offsetWidth; // Trigger reflow
    document.body.style.transition = '';
}

// Update tooltip text
function updateTooltip(themeId) {
    const theme = themes.find(t => t.id === themeId);
    if (themeTooltip && theme) {
        themeTooltip.textContent = theme.name;
    }
}

// Add pulse animation to styles if not already present
const style = document.createElement('style');
style.textContent = `
    @keyframes pulse {
        0% {
            transform: scale(1);
            box-shadow: 0 0 15px rgba(0, 243, 255, 0.5);
        }
        50% {
            transform: scale(1.1);
            box-shadow: 0 0 25px rgba(0, 243, 255, 0.8);
        }
        100% {
            transform: scale(1);
            box-shadow: 0 0 15px rgba(0, 243, 255, 0.5);
        }
    }
`;
document.head.appendChild(style);