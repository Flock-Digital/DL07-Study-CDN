document.addEventListener('DOMContentLoaded', function() {
	const searchInput = document.getElementById('countryName');
	const languageItems = document.querySelectorAll('.language-list-item');
	const selectButton = document.getElementById('btn-select-language');
	const backButton = document.getElementById('btn-select-country');
	const loader = document.getElementById('page-loader');
	const pageContent = document.getElementById('page-content');
	const unavailableMessage = document.getElementById('unavailable-message');
	const loginContainer = document.querySelector('.cp-login-container');

	const translationEnabled = typeof ALLOW_TRANSLATION !== 'undefined' && ALLOW_TRANSLATION === true;

	const currentPath = window.location.pathname;
	const pathParts = currentPath.split('/').filter(part => part !== '');
	const currentCountry = pathParts.length > 0 ? pathParts[0] : '';

	if (loader) loader.style.display = 'flex';
	if (pageContent) pageContent.style.display = 'none';

	let storedLanguage = null;
	let storedLanguageCountries = null;

	if (translationEnabled) {
		storedLanguage = sessionStorage.getItem('selectedLanguage');
		storedLanguageCountries = sessionStorage.getItem('selectedLanguageCountries');
	}

	setTimeout(() => {
		if (loginContainer) {
			loginContainer.classList.remove('u-a-fadein');
		}
	}, 500);

	function isLanguageValidForCountry(language, country, languageCountries) {
		if (!language || !country || !languageCountries) return false;
		const validCountries = languageCountries.split(' ');
		return validCountries.includes(country);
	}

	function translateLanguageSelectPage(language) {
		const translations = TRANSLATIONS.language_select;
		if (!translations || !translations[language]) {
			console.warn(`Language select translations not found for ${language}`);
			return false;
		}

		const pageTranslations = translations[language];

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

	function showUnavailableMessage(pageTranslations) {
		if (!unavailableMessage || !pageTranslations || !pageTranslations.unavailable_language) return;

		unavailableMessage.innerHTML = pageTranslations.unavailable_language;
		unavailableMessage.style.display = 'block';
	}

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

		return {
			count: visibleCount,
			singleItem: singleVisibleItem
		};
	}

	async function initialize() {
		const filterResult = filterLanguages();

		if (filterResult.count === 1 && filterResult.singleItem) {
			const languageSlug = filterResult.singleItem.getAttribute('data-language-select');
			const languageCountries = filterResult.singleItem.getAttribute('data-language-country');

			if (languageSlug) {
				const languageCode = languageSlug.toLowerCase();

				let shouldRedirect = true;

				if (translationEnabled) {
					shouldRedirect = !storedLanguage ||
						!storedLanguageCountries ||
						isLanguageValidForCountry(storedLanguage, currentCountry, storedLanguageCountries);
				}

				if (shouldRedirect) {
					sessionStorage.setItem('selectedLanguage', languageCode);
					sessionStorage.setItem('selectedLanguageCountries', languageCountries || '');

					setTimeout(() => {
						window.location.href = currentPath + '/' + languageCode;
					}, 2000);
					return;
				}
			}
		}

		let displayLanguage;
		let showUnavailable = false;

		if (!translationEnabled) {
			displayLanguage = COUNTRY_DEFAULTS[currentCountry] || 'english';
			showUnavailable = false;
		} else {
			if (storedLanguage) {
				if (isLanguageValidForCountry(storedLanguage, currentCountry, storedLanguageCountries)) {
					displayLanguage = storedLanguage;
					showUnavailable = false;
				} else {
					displayLanguage = storedLanguage;
					showUnavailable = true;
				}
			} else {
				displayLanguage = COUNTRY_DEFAULTS[currentCountry] || 'english';
			}
		}

		const pageTranslations = translateLanguageSelectPage(displayLanguage);

		if (translationEnabled && showUnavailable && pageTranslations) {
			showUnavailableMessage(pageTranslations);
		}

		updateButtonState(displayLanguage);

		setTimeout(() => {
			if (loader) loader.style.display = 'none';
			if (pageContent) pageContent.style.display = 'block';
		}, 500);
	}

	function updateButtonState(displayLanguage) {
		if (!selectButton) return;

		const activeItem = document.querySelector('.language-list-item.cc-active');
		const buttonText = selectButton.querySelector('div');
		const translations = TRANSLATIONS.language_select;

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


	function selectLanguage(item) {
		document.querySelectorAll('.language-list-item').forEach(langItem => {
			langItem.classList.remove('cc-active');
		});
		item.classList.add('cc-active');
		updateButtonState();
	}

	if (searchInput) {
		searchInput.addEventListener('input', function() {
			const searchTerm = this.value.toLowerCase();
			let visibleCount = 0;
			let lastVisibleItem = null;

			languageItems.forEach(item => {
				const languageName = item.getAttribute('data-language-select');
				const availableCountries = item.getAttribute('data-language-country');

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


	if (selectButton) {
		selectButton.addEventListener('click', function(e) {
			e.preventDefault();

			if (this.classList.contains('cc-disabled')) {
				return;
			}

			const activeItem = document.querySelector('.language-list-item.cc-active');

			if (activeItem) {
				const languageSlug = activeItem.getAttribute('data-language-select');
				const languageCountries = activeItem.getAttribute('data-language-country');

				if (languageSlug) {
					const languageCode = languageSlug.toLowerCase();

					sessionStorage.setItem('selectedLanguage', languageCode);
					sessionStorage.setItem('selectedLanguageCountries', languageCountries || '');

					if (loginContainer) {
						loginContainer.classList.add('u-a-fadeout');
					}

					setTimeout(() => {
						window.location.href = currentPath + '/' + languageCode;
					}, 1000);
				}
			}
		});
	}


	if (backButton) {
		backButton.addEventListener('click', function(e) {
			e.preventDefault();
			window.location.href = '/';
		});
	}

	initialize();
});
