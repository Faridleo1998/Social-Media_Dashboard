const $toggle = document.querySelector('#toggle');
const $body = document.querySelector('BODY');
const prefersDarkMode = window.matchMedia("(prefers-color-scheme: dark)");

const validateDarkMode = () => {
	const theme = localStorage.getItem('theme');
	if (theme === 'dark') {
		$body.classList.add('dark');
		return;
	} else if (theme === 'light') {
		$body.classList.remove('dark');
		return;
	}

	if (prefersDarkMode.matches) {
		$body.classList.add('dark');
	}
}

const changeMode = () => {
	if ($body.classList.contains('dark')) {
		document.body.classList.remove('dark');
		localStorage.setItem('theme', 'light');
	} else {
		$body.classList.add('dark');
		localStorage.setItem('theme', 'dark');
	}
}

validateDarkMode();

document.addEventListener('DOMContentLoaded', () => {
	$toggle.addEventListener('click', changeMode)
})