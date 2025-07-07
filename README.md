# Flags Quiz

A simple web application that displays country flags and quizzes users on country names. Built with vanilla HTML, CSS, and JavaScript.

## Features

- Display random country flags
- Quiz users on country names
- Show detailed information about each country including:
  - Capital city
  - Continent
  - Government type
  - Official languages
- Track score (correct answers vs total attempts)
- Previous flag information display

## Deployment

This project is configured for easy deployment to Vercel:

1. **Fork or clone this repository**
2. **Connect to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Sign up/login with your GitHub account
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will automatically detect the configuration and deploy

3. **Manual deployment:**
   ```bash
   # Install Vercel CLI
   npm i -g vercel
   
   # Deploy
   vercel
   ```

## Local Development

To run the project locally:

```bash
# Install dependencies
npm install

# Start local server
npm start
```

Then open `http://localhost:3000` in your browser.

## Project Structure

```
flags/
├── flags.html          # Main application file
├── img/               # Country flag images
├── vercel.json        # Vercel deployment configuration
├── package.json       # Project metadata
└── README.md          # This file
```

## Credits

- **Code:** Jan Schupke (jan.schupke at gmail)
- **Flag Images:** [www.flagpictures.org](http://www.flagpictures.org/)
- **Year:** 2014

## License

MIT License
