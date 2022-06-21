const CLIENT_ID = ""
const CLIENT_SECRET = ""
const API_KEY = ''

authUrl = "https://www.bungie.net/en/oauth/authorize"
authRedirectUrl = `${authUrl}?response_type=code&client_id=${CLIENT_ID}`

async function fetchText() {
    let response = await fetch(authRedirectUrl);
    let data = await response.text();
    console.log(data);
}

//fetchText();

// App Window
localStorage.setItem('tabbed', true);
window.open(authRedirectUrl);
window.addEventListener('storage', function(e) {
    if(localStorage.getItem('tabbed') && localStorage.getItem('tabbed')) {
        // Reload authorization code from LocalStorage
        localStorage.removeItem('tabbed');
    }
});

// Authorize/Redirect Window
if (localStorage.getItem('tabbed')) {
    // Save authorization code to LocalStorage and close the tab
    window.close();
}




