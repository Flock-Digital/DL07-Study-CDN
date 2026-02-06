document.addEventListener('DOMContentLoaded', function() {
	const loginContainer = document.querySelector('.cp-login-container');
	const translationEnabled = typeof ALLOW_TRANSLATION !== 'undefined' && ALLOW_TRANSLATION === true;

	setTimeout(() => {
		if (loginContainer) {
			loginContainer.classList.remove('u-a-fadein');
		}
	}, 500);

	function getCurrentCountry() {
		const currentPath = window.location.pathname;
		const pathParts = currentPath.split('/').filter(part => part !== '');

		if (pathParts.length > 0) {
			return pathParts[0];
		}

		return null;
	}

	function determineLanguage() {
		const currentCountry = getCurrentCountry();

		if (!translationEnabled) {
			if (currentCountry && COUNTRY_DEFAULTS[currentCountry]) {
				return COUNTRY_DEFAULTS[currentCountry];
			}
			return 'english';
		}

		const storedLanguage = sessionStorage.getItem('selectedLanguage');

		if (storedLanguage) {
			return storedLanguage;
		}

		if (currentCountry && COUNTRY_DEFAULTS[currentCountry]) {
			return COUNTRY_DEFAULTS[currentCountry];
		}

		return 'english';
	}

	function translatePasswordPage(language) {
		const translations = TRANSLATIONS.password;
		if (!translations || !translations[language]) {
			console.warn(`Password translations not found for ${language}`);
			return;
		}

		const pageTranslations = translations[language];

		document.querySelectorAll('[data-translate]').forEach(element => {
			const key = element.getAttribute('data-translate');
			if (pageTranslations[key]) {
				if (element.tagName === 'INPUT' && element.hasAttribute('placeholder')) {
					element.placeholder = pageTranslations[key];
				} else if (element.tagName === 'INPUT' && element.type === 'submit') {
					element.value = pageTranslations[key];
				} else if (element.tagName === 'LABEL') {
					element.textContent = pageTranslations[key];
				} else {
					element.innerHTML = pageTranslations[key];
				}
			}
		});
	}

	function setupPasswordValidation() {
		const passwordInput = document.querySelector('#pass');
		const submitButton = document.querySelector('input[type="submit"].w-password-page');

		if (!passwordInput || !submitButton) {
			console.warn('Password input or submit button not found');
			return;
		}

		function updateSubmitButton() {
			if (passwordInput.value.trim() === '') {
				submitButton.classList.add('cc-disabled');
			} else {
				submitButton.classList.remove('cc-disabled');
			}
		}

		updateSubmitButton();

		passwordInput.addEventListener('input', updateSubmitButton);

		submitButton.addEventListener('click', function(e) {
			if (passwordInput.value.trim() === '') {
				e.preventDefault();
				e.stopPropagation();
				return false;
			}
		});
	}

	const languageToUse = determineLanguage();
	translatePasswordPage(languageToUse);

	setupPasswordValidation();

});
