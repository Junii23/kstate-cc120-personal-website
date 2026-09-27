$(document).ready(function() {
    $('#toggle-color-scheme').click(function() {
        toggleColorScheme();
    });
    resolveColorScheme();
})

function toggleColorScheme() {
    const isDarkMode = document.cookie.match("color-scheme=dark");
    if (isDarkMode) {
        document.cookie = "color-scheme=light";
    } else {
        document.cookie = "color-scheme=dark";
    }
    resolveColorScheme();
}

function resolveColorScheme() {
    const isDarkMode = document.cookie.match("color-scheme=dark");
    if (isDarkMode) {
        $('body').addClass('dark-mode');
    } else {
        $('body').removeClass('dark-mode');
    }
}