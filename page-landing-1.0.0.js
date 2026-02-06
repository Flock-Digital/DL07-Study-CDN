document.addEventListener('DOMContentLoaded', function() {
	const languageSelectMini = document.querySelector('.cp-language-select-mini');
	const languageSelectMiniList = document.querySelector('.language-select-mini-list');
	const languageTitle = document.getElementById('languageTitle');
	const languageListItems = document.querySelectorAll('.language-list-mini-item');

	const currentPath = window.location.pathname;
	const pathParts = currentPath.split('/').filter(part => part !== '');
	const currentCountry = pathParts.length > 0 ? pathParts[0] : '';

	const storedLanguage = sessionStorage.getItem('selectedLanguage');

	function capitalizeFirstLetter(string) {
		return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
	}

	let visibleLanguageCount = 0;
	languageListItems.forEach(item => {
		const availableCountries = item.getAttribute('data-language-country');

		if (currentCountry && availableCountries && availableCountries.split(' ').includes(currentCountry)) {
			item.style.display = '';
			visibleLanguageCount++;
		} else {
			item.style.display = 'none';
		}
	});


	const calculatedHeight = (visibleLanguageCount - 1) * 2;
	languageSelectMiniList.style.setProperty('--list-height', `${calculatedHeight}rem`);

	if (visibleLanguageCount > 1) {
		languageSelectMini.classList.remove('cc-hidden');
	}

	if (storedLanguage) {
		const matchingItem = Array.from(languageListItems).find(item => {
			const itemLanguage = item.getAttribute('data-language-select');
			return itemLanguage && itemLanguage.toLowerCase() === storedLanguage.toLowerCase();
		});

		if (matchingItem) {
			const languageText = matchingItem.querySelector('.language-text');
			if (languageText) {
				languageTitle.querySelector('div').textContent = languageText.textContent;
			}

			matchingItem.classList.add('cc-selected');

			languageListItems.forEach(item => {
				if (item !== matchingItem) {
					item.classList.remove('cc-selected');
				}
			});
		}
	}

	languageSelectMini.addEventListener('click', function(e) {
		if (!e.target.closest('.language-list-mini-item')) {
			languageSelectMiniList.classList.toggle('cc-active');
		}
	});

	languageListItems.forEach(item => {
		item.addEventListener('click', function(e) {
			e.stopPropagation();

			const selectedLanguage = this.getAttribute('data-language-select');

			if (selectedLanguage) {
				sessionStorage.setItem('selectedLanguage', selectedLanguage.toLowerCase());

				languageSelectMiniList.classList.remove('cc-active');

				if (currentCountry) {
					window.location.href = '/' + currentCountry + '/' + selectedLanguage.toLowerCase();
				}
			}
		});
	});
});
