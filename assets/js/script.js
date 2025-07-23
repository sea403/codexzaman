const display = document.getElementById('display');
const themeSwitch = document.getElementById('themeSwitch');
const themeIcon = document.getElementById('themeIcon');

function applyTheme() {
    const theme = localStorage.getItem('theme');
    if (theme === 'dark') {
        document.body.classList.add('dark-theme');
        themeIcon.src = 'assets/icons/sun.svg';
    } else {
        document.body.classList.remove('dark-theme');
        themeIcon.src = 'assets/icons/moon.svg';
    }
}

function toggleTheme() {
    const current = localStorage.getItem('theme');
    const newTheme = current === 'dark' ? 'light' : 'dark';
    localStorage.setItem('theme', newTheme);
    applyTheme();
}

applyTheme();

function append(value) {
    display.value += value;
}

function appendFunc(func) {
    display.value += func + '(';
}

function clearDisplay() {
    display.value = '';
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch (e) {
        display.value = 'Error';
    }
}
