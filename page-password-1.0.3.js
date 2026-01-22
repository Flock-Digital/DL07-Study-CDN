document.addEventListener('DOMContentLoaded', function() {
  const loginContainer = document.querySelector('.cp-login-container');
  // Check if translation is enabled
  const translationEnabled = typeof ALLOW_TRANSLATION !== 'undefined' && ALLOW_TRANSLATION === true;
  
  setTimeout(() => {
    if (loginContainer) {
      loginContainer.classList.remove('u-a-fadein');
    }
  }, 500); 
  
  // Function to get country from current URL
  function getCurrentCountry() {
    const currentPath = window.location.pathname;
    const pathParts = currentPath.split('/').filter(part => part !== '');
    
    // First part should be country code (e.g., /in or /in/bengali)
    if (pathParts.length > 0) {
      return pathParts[0];
    }
    
    return null;
  }
  
  // Function to determine which language to use
  function determineLanguage() {
    const currentCountry = getCurrentCountry();
    
    if (!translationEnabled) {
      // Translation disabled - ignore stored language, use country default only
      if (currentCountry && COUNTRY_DEFAULTS[currentCountry]) {
        return COUNTRY_DEFAULTS[currentCountry];
      }
      return 'english';
    }
    
    // Translation enabled - check for stored language
    const storedLanguage = sessionStorage.getItem('selectedLanguage');
    
    // Priority 1: If user has selected a language, use it (regardless of country validity)
    if (storedLanguage) {
      return storedLanguage;
    }
    
    // Priority 2: Use current country's default language
    if (currentCountry && COUNTRY_DEFAULTS[currentCountry]) {
      return COUNTRY_DEFAULTS[currentCountry];
    }
    
    // Priority 3: Fallback to english
    return 'english';
  }
  
  // Function to translate the page
  function translatePasswordPage(language) {
    const translations = TRANSLATIONS.password;
    if (!translations || !translations[language]) {
      console.warn(`Password translations not found for ${language}`);
      return;
    }
    
    const pageTranslations = translations[language];
    
    // Update all elements with data-translate attribute
    document.querySelectorAll('[data-translate]').forEach(element => {
      const key = element.getAttribute('data-translate');
      if (pageTranslations[key]) {
        // Check if it's an input element with placeholder
        if (element.tagName === 'INPUT' && element.hasAttribute('placeholder')) {
          element.placeholder = pageTranslations[key];
        } else if (element.tagName === 'LABEL') {
          // For labels, update text content
          element.textContent = pageTranslations[key];
        } else {
          // Regular element - update innerHTML
          element.innerHTML = pageTranslations[key];
        }
      }
    });
  }
  
  // PASSWORD VALIDATION FUNCTION
  function setupPasswordValidation() {
    const passwordInput = document.querySelector('#pass');
    const submitButton = document.querySelector('input[type="submit"].w-password-page');
    
    if (!passwordInput || !submitButton) {
      console.warn('Password input or submit button not found');
      return;
    }
    
    // Function to toggle submit button state
    function updateSubmitButton() {
      if (passwordInput.value.trim() === '') {
        submitButton.classList.add('cc-disabled');
      } else {
        submitButton.classList.remove('cc-disabled');
      }
    }
    
    // Set initial state (should be disabled on page load)
    updateSubmitButton();
    
    // Listen for input changes
    passwordInput.addEventListener('input', updateSubmitButton);
    
    // Prevent form submission if field is empty
    submitButton.addEventListener('click', function(e) {
      if (passwordInput.value.trim() === '') {
        e.preventDefault();
        e.stopPropagation();
        return false;
      }
    });
  }
  
  // Determine and apply language
  const languageToUse = determineLanguage();
  console.log('Password page using language:', languageToUse);
  console.log('Translation enabled:', translationEnabled);
  translatePasswordPage(languageToUse);
  
  // Setup password validation
  setupPasswordValidation();
  
});
