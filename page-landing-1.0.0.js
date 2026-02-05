document.addEventListener('DOMContentLoaded', function() {
  const languageSelectMini = document.querySelector('.cp-language-select-mini');
  const languageSelectMiniList = document.querySelector('.language-select-mini-list');
  const languageTitle = document.getElementById('languageTitle');
  const languageListItems = document.querySelectorAll('.language-list-mini-item');
  
  // Get current country from URL
  const currentPath = window.location.pathname;
  const pathParts = currentPath.split('/').filter(part => part !== '');
  const currentCountry = pathParts.length > 0 ? pathParts[0] : '';
  
  // Get stored language from session storage
  const storedLanguage = sessionStorage.getItem('selectedLanguage');
  
  // Function to capitalize first letter
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
  }
  
  // Filter languages based on current country and count visible items
  let visibleLanguageCount = 0;
  languageListItems.forEach(item => {
    const availableCountries = item.getAttribute('data-language-country');
    
    if (currentCountry && availableCountries && availableCountries.split(' ').includes(currentCountry)) {
      // This language is available for current country
      item.style.display = '';
      visibleLanguageCount++;
    } else {
      // Hide this language
      item.style.display = 'none';
    }
  });
  
  // Calculate and set the height for the active state
  // Each item is 2rem (32px), minus 1 for the selected item
  const calculatedHeight = (visibleLanguageCount - 1) * 2; // in rem
  languageSelectMiniList.style.setProperty('--list-height', `${calculatedHeight}rem`);
  
  // Show selector only if more than 1 language available
  if (visibleLanguageCount > 1) {
    languageSelectMini.classList.remove('cc-hidden');
  }
  
  // On page load, update the displayed language and hide selected item
  if (storedLanguage) {
    // Find the matching language item in the list
    const matchingItem = Array.from(languageListItems).find(item => {
      const itemLanguage = item.getAttribute('data-language-select');
      return itemLanguage && itemLanguage.toLowerCase() === storedLanguage.toLowerCase();
    });
    
    if (matchingItem) {
      // Get the human-friendly text from .language-text
      const languageText = matchingItem.querySelector('.language-text');
      if (languageText) {
        languageTitle.querySelector('div').textContent = languageText.textContent;
      }
      
      // Mark this item as selected
      matchingItem.classList.add('cc-selected');
      
      // Remove selected class from all other items
      languageListItems.forEach(item => {
        if (item !== matchingItem) {
          item.classList.remove('cc-selected');
        }
      });
    }
  }
  
  // Toggle dropdown on click
  languageSelectMini.addEventListener('click', function(e) {
    // Don't toggle if clicking on a language item
    if (!e.target.closest('.language-list-mini-item')) {
      languageSelectMiniList.classList.toggle('cc-active');
    }
  });
  
  // Handle language item clicks
  languageListItems.forEach(item => {
    item.addEventListener('click', function(e) {
      e.stopPropagation(); // Prevent triggering the parent click
      
      const selectedLanguage = this.getAttribute('data-language-select');
      
      if (selectedLanguage) {
        // Store the new language in session storage
        sessionStorage.setItem('selectedLanguage', selectedLanguage.toLowerCase());
        
        // Close the dropdown
        languageSelectMiniList.classList.remove('cc-active');
        
        // Navigate to country page with new language
        if (currentCountry) {
          window.location.href = '/' + currentCountry + '/' + selectedLanguage.toLowerCase();
        }
      }
    });
  });
});
