const CLIENT_ID = "40628"
const CLIENT_SECRET = "zmhrtwXLfDPNSdZCAV.egeHlnogSInvcFpdnxvQqmTE"
const API_KEY = 'dc9c763aa7514fc5b0f286fd9a5870c5'

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




