document.addEventListener('DOMContentLoaded', function() {
	const languageSelectMini = document.querySelector('.cp-language-select-mini');
	const languageSelectMiniList = document.querySelector('.language-select-mini-list');
	const languageTitle = document.getElementById('languageTitle');
	const languageListItems = document.querySelectorAll('.language-list-mini-item');

	const currentPath = window.location.pathname;
	const pathParts = currentPath.split('/').filter(part => part !== '');
	const currentCountry = pathParts.length > 0 ? pathParts[0] : '';
	const isHomepage = currentPath === '/' || currentPath === '';

	const translationEnabled = typeof ALLOW_TRANSLATION !== 'undefined' && ALLOW_TRANSLATION === true;

	let storedLanguage = null;
	let displayLanguage = 'english';

	if (translationEnabled) {
		storedLanguage = sessionStorage.getItem('selectedLanguage');
		displayLanguage = storedLanguage || 'english';
	}

	function getCurrentLanguage() {
		if (!translationEnabled) return 'english';
		return sessionStorage.getItem('selectedLanguage') || 'english';
	}

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

	function translatePage(language, page = 'home') {
		if (!translationEnabled) return; // Skip translation if disabled

		const translations = TRANSLATIONS[page];
		if (!translations || !translations[language]) {
			console.warn(`Translations not found for ${language} on ${page}`);
			return;
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

		updateButtonText(language, page);
	}



	if (translationEnabled) {
		let visibleLanguageCount = 0;

		if (isHomepage) {
			languageListItems.forEach(item => {
				item.style.display = '';
				visibleLanguageCount++;
			});

			translatePage(displayLanguage, 'home');
		} else {
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

		const calculatedHeight = (visibleLanguageCount - 1) * 2; // in rem
		if (languageSelectMiniList) {
			languageSelectMiniList.style.setProperty('--list-height', `${calculatedHeight}rem`);
		}

		if (visibleLanguageCount > 1 && languageSelectMini) {
			languageSelectMini.classList.remove('cc-hidden');
		}

		if (languageTitle) {
			if (storedLanguage) {
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

		if (languageSelectMini) {
			languageSelectMini.addEventListener('click', function(e) {
				if (!e.target.closest('.language-list-mini-item')) {
					languageSelectMiniList.classList.toggle('cc-active');
				}
			});
		}

		languageListItems.forEach(item => {
			item.addEventListener('click', function(e) {
				e.stopPropagation();

				const selectedLanguage = this.getAttribute('data-language-select');
				const languageCountries = this.getAttribute('data-language-country');

				if (selectedLanguage) {
					const languageCode = selectedLanguage.toLowerCase();

					sessionStorage.setItem('selectedLanguage', languageCode);
					sessionStorage.setItem('selectedLanguageCountries', languageCountries || '');

					if (languageSelectMiniList) {
						languageSelectMiniList.classList.remove('cc-active');
					}

					if (isHomepage) {
						translatePage(languageCode, 'home');

						if (languageTitle) {
							const displayName = this.querySelector('.language-title div').textContent;
							languageTitle.querySelector('div').textContent = displayName;
						}

						languageListItems.forEach(listItem => {
							listItem.classList.remove('cc-selected');
						});
						this.classList.add('cc-selected');
					} else {
						if (currentCountry) {
							window.location.href = '/' + currentCountry + '/' + languageCode;
						}
					}
				}
			});
		});
	} else {
		if (languageSelectMini) {
			languageSelectMini.style.display = 'none';
		}
	}


	if (isHomepage) {
		const searchInput = document.getElementById('countryName');
		const countryItems = document.querySelectorAll('.country-list-item');
		const selectButton = document.getElementById('btn-select-country');

		function updateButtonState() {
			const activeItem = document.querySelector('.country-list-item.cc-active');
			const buttonText = selectButton ? selectButton.querySelector('div') : null;

			if (selectButton && buttonText) {
				if (translationEnabled) {
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

		function selectCountry(item) {
			document.querySelectorAll('.country-list-item').forEach(countryItem => {
				countryItem.classList.remove('cc-active');
			});

			item.classList.add('cc-active');

			updateButtonState();
		}

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

				if (visibleCount === 1 && lastVisibleItem) {
					selectCountry(lastVisibleItem);
				} else if (visibleCount !== 1) {
					document.querySelectorAll('.country-list-item').forEach(countryItem => {
						countryItem.classList.remove('cc-active');
					});
					updateButtonState();
				}
			});
		}

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

		if (selectButton) {
			selectButton.addEventListener('click', function(e) {
				const activeItem = document.querySelector('.country-list-item.cc-active');

				if (activeItem) {
					const countrySlug = activeItem.getAttribute('data-country-slug');

					if (countrySlug) {
						let redirectUrl = '/' + countrySlug;

						if (translationEnabled) {
							const storedLanguage = sessionStorage.getItem('selectedLanguage');
							const storedLanguageCountries = sessionStorage.getItem('selectedLanguageCountries');

							if (storedLanguage &&
								storedLanguageCountries &&
								storedLanguageCountries.split(' ').includes(countrySlug)) {
								redirectUrl = '/' + countrySlug + '/' + storedLanguage;
							}
						}

						window.location.href = redirectUrl;
					}
				} else {
					e.preventDefault();
				}
			});
		}

		if (selectButton) {
			updateButtonState();
		}
	}
});
