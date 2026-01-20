document.addEventListener('DOMContentLoaded', function() {
  const searchInput = document.getElementById('countryName');
  const languageItems = document.querySelectorAll('.language-list-item');
  const selectButton = document.getElementById('btn-select-language');
  const backButton = document.getElementById('btn-select-country');
  const loader = document.getElementById('page-loader');
  const pageContent = document.getElementById('page-content');
  const unavailableMessage = document.getElementById('unavailable-message');
  
  // Check if translation is enabled
  const translationEnabled = typeof ALLOW_TRANSLATION !== 'undefined' && ALLOW_TRANSLATION === true;
  
  // Get current country from URL
  const currentPath = window.location.pathname;
  const pathParts = currentPath.split('/').filter(part => part !== '');
  const currentCountry = pathParts.length > 0 ? pathParts[0] : '';
  
  // Show loader initially
  if (loader) loader.style.display = 'flex';
  if (pageContent) pageContent.style.display = 'none';
  
  // Get stored language info (only if translation enabled)
  let storedLanguage = null;
  let storedLanguageCountries = null;
  
  if (translationEnabled) {
    storedLanguage = sessionStorage.getItem('selectedLanguage');
    storedLanguageCountries = sessionStorage.getItem('selectedLanguageCountries');
  }
  
  // Check if stored language is valid for current country
  function isLanguageValidForCountry(language, country, languageCountries) {
    if (!language || !country || !languageCountries) return false;
    const validCountries = languageCountries.split(' ');
    return validCountries.includes(country);
  }
  
  // Function to translate page
  function translateLanguageSelectPage(language) {
    const translations = TRANSLATIONS.language_select;
    if (!translations || !translations[language]) {
      console.warn(`Language select translations not found for ${language}`);
      return false;
    }
    
    const pageTranslations = translations[language];
    
    // Update all elements with data-translate attribute
    document.querySelectorAll('[data-translate]').forEach(element => {
      const key = element.getAttribute('data-translate');
      if (pageTranslations[key]) {
        if (element.tagName === 'INPUT' && element.hasAttribute('placeholder')) {
          element.placeholder = pageTranslations[key];
        } else {
          element.innerHTML = pageTranslations[key];
        }
      }
    });
    
    return pageTranslations;
  }
  
  // Function to show unavailable message
  function showUnavailableMessage(pageTranslations) {
    if (!unavailableMessage || !pageTranslations || !pageTranslations.unavailable_language) return;
    
    unavailableMessage.innerHTML = pageTranslations.unavailable_language;
    unavailableMessage.style.display = 'block';
  }
  
  // Filter languages based on current country
  function filterLanguages() {
    let visibleCount = 0;
    let singleVisibleItem = null;
    
    languageItems.forEach(item => {
      const availableCountries = item.getAttribute('data-language-country');
      
      if (currentCountry && availableCountries && availableCountries.split(' ').includes(currentCountry)) {
        item.style.display = '';
        visibleCount++;
        singleVisibleItem = item;
      } else {
        item.style.display = 'none';
      }
    });
    
    return { count: visibleCount, singleItem: singleVisibleItem };
  }
  
  // Main initialization logic
  async function initialize() {
    // Filter languages for current country FIRST
    const filterResult = filterLanguages();
    
    // ONLY auto-redirect if there's exactly ONE language available
    if (filterResult.count === 1 && filterResult.singleItem) {
      const languageSlug = filterResult.singleItem.getAttribute('data-language-select');
      const languageCountries = filterResult.singleItem.getAttribute('data-language-country');
      
      if (languageSlug) {
        const languageCode = languageSlug.toLowerCase();
        
        // Check if we should redirect or show unavailable message
        let shouldRedirect = true;
        
        if (translationEnabled) {
          // Only check stored language if translation is enabled
          shouldRedirect = !storedLanguage || 
                          !storedLanguageCountries || 
                          isLanguageValidForCountry(storedLanguage, currentCountry, storedLanguageCountries);
        }
        // If translation disabled, always redirect
        
        if (shouldRedirect) {
          // Store the language
          sessionStorage.setItem('selectedLanguage', languageCode);
          sessionStorage.setItem('selectedLanguageCountries', languageCountries || '');
          
          // Show loader for 2 seconds then redirect
          setTimeout(() => {
            window.location.href = currentPath + '/' + languageCode;
          }, 2000);
          return; // Don't continue initialization
        }
        // If not redirecting, fall through to show page with unavailable message
      }
    }
    
    // If multiple languages available, show the selection page
    // Determine which language to display the page in
    let displayLanguage;
    let showUnavailable = false;
    
    if (!translationEnabled) {
      // Translation disabled - always use country default, no unavailable message
      displayLanguage = COUNTRY_DEFAULTS[currentCountry] || 'english';
      showUnavailable = false;
    } else {
      // Translation enabled - use existing logic
      if (storedLanguage) {
        // User has a stored language preference
        if (isLanguageValidForCountry(storedLanguage, currentCountry, storedLanguageCountries)) {
          // Stored language IS valid for this country - use it
          displayLanguage = storedLanguage;
          showUnavailable = false;
        } else {
          // Stored language is NOT valid for this country - show in their language with message
          displayLanguage = storedLanguage;
          showUnavailable = true;
        }
      } else {
        // No language stored - use country default
        displayLanguage = COUNTRY_DEFAULTS[currentCountry] || 'english';
      }
    }
    
    // Translate the page
    const pageTranslations = translateLanguageSelectPage(displayLanguage);
    
    // Show unavailable message if needed (only when translation enabled)
    if (translationEnabled && showUnavailable && pageTranslations) {
      showUnavailableMessage(pageTranslations);
    }
    
    // Initialize button states
    updateButtonState(displayLanguage);
    
    // Hide loader and show content after brief delay
    setTimeout(() => {
      if (loader) loader.style.display = 'none';
      if (pageContent) pageContent.style.display = 'block';
    }, 500);
  }
  
  // Function to update button state
  function updateButtonState(displayLanguage) {
    if (!selectButton) return;
    
    const activeItem = document.querySelector('.language-list-item.cc-active');
    const buttonText = selectButton.querySelector('div');
    const translations = TRANSLATIONS.language_select;
    
    // Use stored or default language for button text
    if (!displayLanguage) {
      if (translationEnabled) {
        displayLanguage = storedLanguage || COUNTRY_DEFAULTS[currentCountry] || 'english';
      } else {
        displayLanguage = COUNTRY_DEFAULTS[currentCountry] || 'english';
      }
    }
    
    if (activeItem && translations[displayLanguage]) {
      selectButton.classList.remove('cc-disabled');
      if (buttonText) buttonText.textContent = translations[displayLanguage].button_enabled;
    } else if (translations[displayLanguage]) {
      selectButton.classList.add('cc-disabled');
      if (buttonText) buttonText.textContent = translations[displayLanguage].button_disabled;
    }
  }
  
  // Function to handle language selection
  function selectLanguage(item) {
    document.querySelectorAll('.language-list-item').forEach(langItem => {
      langItem.classList.remove('cc-active');
    });
    item.classList.add('cc-active');
    updateButtonState();
  }
  
  // Search functionality
  if (searchInput) {
    searchInput.addEventListener('input', function() {
      const searchTerm = this.value.toLowerCase();
      let visibleCount = 0;
      let lastVisibleItem = null;
      
      languageItems.forEach(item => {
        const languageName = item.getAttribute('data-language-select');
        const availableCountries = item.getAttribute('data-language-country');
        
        // Only search through languages that are valid for this country
        if (languageName && currentCountry && availableCountries && availableCountries.split(' ').includes(currentCountry)) {
          if (languageName.toLowerCase().includes(searchTerm)) {
            item.style.display = '';
            visibleCount++;
            lastVisibleItem = item;
          } else {
            item.style.display = 'none';
          }
        }
      });
      
      if (visibleCount === 1 && lastVisibleItem) {
        selectLanguage(lastVisibleItem);
      } else if (visibleCount !== 1) {
        document.querySelectorAll('.language-list-item').forEach(langItem => {
          langItem.classList.remove('cc-active');
        });
        updateButtonState();
      }
    });
  }
  
  // Click handler for language items
  languageItems.forEach(item => {
    item.addEventListener('click', function() {
      if (this.classList.contains('cc-active')) {
        this.classList.remove('cc-active');
      } else {
        selectLanguage(this);
      }
      updateButtonState();
    });
  });
  
  // Button click handler
if (selectButton) {
  selectButton.addEventListener('click', function(e) {
    e.preventDefault();
    
    // Don't do anything if button is disabled
    if (this.classList.contains('cc-disabled')) {
      return;
    }
    
    const activeItem = document.querySelector('.language-list-item.cc-active');
    
    if (activeItem) {
      const languageSlug = activeItem.getAttribute('data-language-select');
      const languageCountries = activeItem.getAttribute('data-language-country');
      
      if (languageSlug) {
        const languageCode = languageSlug.toLowerCase();
        
        // Store selected language and its supported countries
        sessionStorage.setItem('selectedLanguage', languageCode);
        sessionStorage.setItem('selectedLanguageCountries', languageCountries || '');
        
        // Add fadeOut class to container
        const loginContainer = document.querySelector('.cp-login-container');
        if (loginContainer) {
          loginContainer.classList.add('fadeOut');
        }
        
        // Redirect after 1000ms
        setTimeout(() => {
          window.location.href = currentPath + '/' + languageCode;
        }, 1000);
      }
    }
  });
}
  
  // Back button handler
  if (backButton) {
    backButton.addEventListener('click', function(e) {
      e.preventDefault();
      // Go back to country selection (homepage)
      window.location.href = '/';
    });
  }
  
  // Initialize everything
  initialize();
});
