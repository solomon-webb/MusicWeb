# SoloVibe

SoloVibe is a static music discovery website built with HTML, CSS, and vanilla JavaScript. It provides a simple interface for exploring music, registering and logging in, browsing services, and contacting the team.

## Pages

- `index.html` - Login page
- `register.html` - Registration page
- `main.html` - Music dashboard and Audius search
- `service.html` - Music services and blog-style cards
- `contact.html` - Contact form, team information, and social links

## Project Structure

```text
.
├── asset/          # Local images and branding assets
├── index.html      # Login page
├── register.html  # Registration page
├── main.html      # Music dashboard
├── service.html   # Services page
├── contact.html   # Contact page
├── script.js      # Shared navigation, validation, audio, and toast logic
├── style.css      # Login and registration styles
├── main.css       # Dashboard styles
├── service.css    # Services page styles
└── contact.css    # Contact page styles
```

## Run Locally

No build tools or dependencies are required.

1. Open the project folder in VS Code.
2. Open `index.html` in a browser, or use a static server such as VS Code Live Server.
3. Log in or create an account from the registration page.

Using a local server is recommended because the music search uses the Audius API and browser security rules may restrict some functionality when opening files directly.

## Features

- Responsive multi-page layout
- Login and registration forms using browser local storage
- Password visibility toggle
- Toast notifications instead of browser alerts
- Audius music search and trending tracks
- Only one audio track can play at a time
- Contact links for Facebook, WhatsApp, and Telegram
- Shared local image assets in the `asset` folder

## External Services

The project uses these external resources:

- Audius API for music search and streaming
- Font Awesome for icons
- Google Fonts for typography

## Notes

This is a front-end demonstration project. Authentication data is stored in browser local storage and is not suitable for production use without a secure backend.
