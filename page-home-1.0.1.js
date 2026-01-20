document.addEventListener('DOMContentLoaded', function() {
  const languageSelectMini = document.querySelector('.cp-language-select-mini');
  const languageSelectMiniList = document.querySelector('.language-select-mini-list');
  const languageTitle = document.getElementById('languageTitle');
  const languageListItems = document.querySelectorAll('.language-list-mini-item');
  
  // Get current page from URL
  const currentPath = window.location.pathname;
  const pathParts = currentPath.split('/').filter(part => part !== '');
  const currentCountry = pathParts.length > 0 ? pathParts[0] : '';
  const isHomepage = currentPath === '/' || currentPath === '';
  
  // Check if translation is enabled
  const translationEnabled = typeof ALLOW_TRANSLATION !== 'undefined' && ALLOW_TRANSLATION === true;
  
  // Get stored language only if translation is enabled
  let storedLanguage = null;
  let displayLanguage = 'english';
  
  if (translationEnabled) {
    storedLanguage = sessionStorage.getItem('selectedLanguage');
    displayLanguage = storedLanguage || 'english';
  }
  
  // Function to get current language
  function getCurrentLanguage() {
    if (!translationEnabled) return 'english';
    return sessionStorage.getItem('selectedLanguage') || 'english';
  }
  
  // Function to update button text based on selection state
  function updateButtonText(language, page = 'home') {
    const selectButton = document.getElementById('btn-select-country');
    if (!selectButton) return;
    
    const buttonText = selectButton.querySelector('div');
    if (!buttonText) return;
    
    const translations = TRANSLATIONS[page];
    if (!translations || !translations[language]) return;
    
    const activeItem = document.querySelector('.country-list-item.cc-active');
    
    if (activeItem) {
      buttonText.textContent = translations[language].button_enabled;
      selectButton.classList.remove('cc-disabled');
    } else {
      buttonText.textContent = translations[language].button_disabled;
      selectButton.classList.add('cc-disabled');
    }
  }
  
  // Function to translate the page
  function translatePage(language, page = 'home') {
    if (!translationEnabled) return; // Skip translation if disabled
    
    const translations = TRANSLATIONS[page];
    if (!translations || !translations[language]) {
      console.warn(`Translations not found for ${language} on ${page}`);
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
        } else {
          // Regular element - update innerHTML
          element.innerHTML = pageTranslations[key];
        }
      }
    });
    
    // Update button text based on current state
    updateButtonText(language, page);
  }
  
  // ============================================
  // LANGUAGE SELECTOR SETUP (only if enabled)
  // ============================================
  
  if (translationEnabled) {
    // Filter languages based on current country and count visible items
    let visibleLanguageCount = 0;
    
    if (isHomepage) {
      // On homepage, show all languages
      languageListItems.forEach(item => {
        item.style.display = '';
        visibleLanguageCount++;
      });
      
      // Translate the homepage on load
      translatePage(displayLanguage, 'home');
    } else {
      // On country pages, filter by country
      languageListItems.forEach(item => {
        const availableCountries = item.getAttribute('data-language-country');
        
        if (currentCountry && availableCountries && availableCountries.split(' ').includes(currentCountry)) {
          item.style.display = '';
          visibleLanguageCount++;
        } else {
          item.style.display = 'none';
        }
      });
    }
    
    // Calculate and set the height for the active state
    const calculatedHeight = (visibleLanguageCount - 1) * 2; // in rem
    if (languageSelectMiniList) {
      languageSelectMiniList.style.setProperty('--list-height', `${calculatedHeight}rem`);
    }
    
    // Show selector only if more than 1 language available
    if (visibleLanguageCount > 1 && languageSelectMini) {
      languageSelectMini.classList.remove('cc-hidden');
    }
    
    // Update displayed language and hide selected item
    if (languageTitle) {
      if (storedLanguage) {
        // User has previously selected a language - show that
        languageListItems.forEach(item => {
          const itemLanguage = item.getAttribute('data-language-select');
          if (itemLanguage && itemLanguage.toLowerCase() === storedLanguage.toLowerCase()) {
            const displayName = item.querySelector('.language-title div').textContent;
            languageTitle.querySelector('div').textContent = displayName;
            item.classList.add('cc-selected');
          } else {
            item.classList.remove('cc-selected');
          }
        });
      } else {
        // No language stored - show English as default
        languageListItems.forEach(item => {
          const itemLanguage = item.getAttribute('data-language-select');
          if (itemLanguage && itemLanguage.toLowerCase() === 'english') {
            const displayName = item.querySelector('.language-title div').textContent;
            languageTitle.querySelector('div').textContent = displayName;
            item.classList.add('cc-selected');
          } else {
            item.classList.remove('cc-selected');
          }
        });
      }
    }
    
    // Toggle dropdown on click
    if (languageSelectMini) {
      languageSelectMini.addEventListener('click', function(e) {
        if (!e.target.closest('.language-list-mini-item')) {
          languageSelectMiniList.classList.toggle('cc-active');
        }
      });
    }
    
    // Handle language item clicks
    languageListItems.forEach(item => {
      item.addEventListener('click', function(e) {
        e.stopPropagation();
        
        const selectedLanguage = this.getAttribute('data-language-select');
        const languageCountries = this.getAttribute('data-language-country');
        
        if (selectedLanguage) {
          const languageCode = selectedLanguage.toLowerCase();
          
          // Store the language and its supported countries in session storage
          sessionStorage.setItem('selectedLanguage', languageCode);
          sessionStorage.setItem('selectedLanguageCountries', languageCountries || '');
          
          // Close the dropdown
          if (languageSelectMiniList) {
            languageSelectMiniList.classList.remove('cc-active');
          }
          
          if (isHomepage) {
            // On homepage: translate the page instead of navigating
            translatePage(languageCode, 'home');
            
            // Update the displayed language
            if (languageTitle) {
              const displayName = this.querySelector('.language-title div').textContent;
              languageTitle.querySelector('div').textContent = displayName;
            }
            
            // Update selected state
            languageListItems.forEach(listItem => {
              listItem.classList.remove('cc-selected');
            });
            this.classList.add('cc-selected');
          } else {
            // On country pages: navigate to country/language
            if (currentCountry) {
              window.location.href = '/' + currentCountry + '/' + languageCode;
            }
          }
        }
      });
    });
  } else {
    // Translation disabled - hide language selector
    if (languageSelectMini) {
      languageSelectMini.style.display = 'none';
    }
  }
  
  // ============================================
  // COUNTRY SELECTOR CODE (on homepage only)
  // ============================================
  
  if (isHomepage) {
    const searchInput = document.getElementById('countryName');
    const countryItems = document.querySelectorAll('.country-list-item');
    const selectButton = document.getElementById('btn-select-country');
    
    // Function to update button state
    function updateButtonState() {
      const activeItem = document.querySelector('.country-list-item.cc-active');
      const buttonText = selectButton ? selectButton.querySelector('div') : null;
      
      if (selectButton && buttonText) {
        if (translationEnabled) {
          // Use translations
          const currentLanguage = getCurrentLanguage();
          const translations = TRANSLATIONS.home;
          
          if (translations[currentLanguage]) {
            if (activeItem) {
              selectButton.classList.remove('cc-disabled');
              buttonText.textContent = translations[currentLanguage].button_enabled;
            } else {
              selectButton.classList.add('cc-disabled');
              buttonText.textContent = translations[currentLanguage].button_disabled;
            }
          }
        } else {
          // Use hardcoded English text
          if (activeItem) {
            selectButton.classList.remove('cc-disabled');
            buttonText.textContent = 'Enter';
          } else {
            selectButton.classList.add('cc-disabled');
            buttonText.textContent = 'Select your country';
          }
        }
      }
    }
    
    // Function to handle country selection
    function selectCountry(item) {
      // Remove cc-active from all items
      document.querySelectorAll('.country-list-item').forEach(countryItem => {
        countryItem.classList.remove('cc-active');
      });
      
      // Add cc-active to the item itself
      item.classList.add('cc-active');
      
      updateButtonState();
    }
    
    // Search functionality
    if (searchInput) {
      searchInput.addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase();
        let visibleCount = 0;
        let lastVisibleItem = null;
        
        countryItems.forEach(item => {
          const countryName = item.getAttribute('data-country').toLowerCase();
          
          if (countryName.includes(searchTerm)) {
            item.style.display = '';
            visibleCount++;
            lastVisibleItem = item;
          } else {
            item.style.display = 'none';
          }
        });
        
        // If only one item visible, auto-select it
        if (visibleCount === 1 && lastVisibleItem) {
          selectCountry(lastVisibleItem);
        } else if (visibleCount !== 1) {
          // Remove selection if multiple or no items visible
          document.querySelectorAll('.country-list-item').forEach(countryItem => {
            countryItem.classList.remove('cc-active');
          });
          updateButtonState();
        }
      });
    }
    
    // Click handler for country items
    countryItems.forEach(item => {
      item.addEventListener('click', function() {
        if (this.classList.contains('cc-active')) {
          // If already active, deselect it
          this.classList.remove('cc-active');
        } else {
          // Otherwise select this country
          selectCountry(this);
        }
        
        updateButtonState();
      });
    });
    
    // Button click handler
    if (selectButton) {
      selectButton.addEventListener('click', function(e) {
        const activeItem = document.querySelector('.country-list-item.cc-active');
        
        if (activeItem) {
          const countrySlug = activeItem.getAttribute('data-country-slug');
          
          if (countrySlug) {
            let redirectUrl = '/' + countrySlug;
            
            if (translationEnabled) {
              // Get stored language and its supported countries
              const storedLanguage = sessionStorage.getItem('selectedLanguage');
              const storedLanguageCountries = sessionStorage.getItem('selectedLanguageCountries');
              
              // Append language if stored AND valid for this country
              if (storedLanguage && 
                  storedLanguageCountries && 
                  storedLanguageCountries.split(' ').includes(countrySlug)) {
                redirectUrl = '/' + countrySlug + '/' + storedLanguage;
              }
            }
            // If translation disabled, always go to just /country
            
            window.location.href = redirectUrl;
          }
        } else {
          // Prevent navigation if no country selected
          e.preventDefault();
        }
      });
    }
    
    // Initialize button state on page load
    if (selectButton) {
      updateButtonState();
    }
  }
});
