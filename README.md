# Flags Quiz

An interactive web application that tests users' knowledge of world flags and provides educational information about countries. Built with vanilla HTML, CSS, and JavaScript.

**Live Demo:** [https://flags-zeta-pink.vercel.app/](https://flags-zeta-pink.vercel.app/)

## ✨ Features

- **Interactive Quiz System**: Randomly displays country flags for user identification
- **Smart Answer Recognition**: Flexible matching system that accepts various answer formats
- **Comprehensive Country Information**: Detailed data including:
  - Capital cities
  - Continental classification
  - Government types
  - Official languages
- **Progress Tracking**: Real-time score monitoring (correct answers vs. total attempts)
- **Previous Flag Review**: Displays information about the most recently answered flag
- **Responsive Design**: Optimized for desktop and mobile devices
- **Modern UI**: Clean, intuitive interface with smooth animations

## 🚀 Quick Start

### Prerequisites

- **Node.js** (version 14 or higher)
- **npm** (included with Node.js)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd flags
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🛠️ Development

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm start` | Starts the development server |
| `npm run build` | No build step required (static site) |

### Development Features

- **Live Reloading**: Automatic page refresh on file changes
- **Static File Serving**: Efficient serving of all project assets
- **Cross-Browser Compatibility**: Tested across modern browsers
- **Network Access**: Available on local network for mobile testing

### Project Structure

```
flags/
├── index.html         # Main application file
├── package.json       # Project configuration and dependencies
├── vercel.json        # Vercel deployment configuration
└── README.md          # Project documentation
```

## 🌐 Deployment

This project is optimized for deployment on Vercel with zero configuration required.

### Automatic Deployment

1. **Fork or clone this repository**
2. **Connect to Vercel:**
   - Visit [vercel.com](https://vercel.com)
   - Sign up/login with your GitHub account
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will automatically detect the configuration and deploy

### Manual Deployment

```bash
# Install Vercel CLI globally
npm install -g vercel

# Deploy to Vercel
vercel
```

## 🎯 How to Play

1. **View the current flag** displayed in the main section
2. **Enter the country name** in the input field
3. **Submit your answer** by clicking "Check Answer" or pressing Enter
4. **Review the results** and learn about the country's details
5. **Track your progress** with the score counter
6. **Continue playing** with new random flags

## 📊 Technical Details

- **Frontend**: HTML5, CSS3, and JavaScript (ES6+)
- **Server**: Static file serving with `serve` package
- **Deployment**: Vercel platform
- **Images**: Flag images are loaded dynamically from [Flagcdn.com](https://flagcdn.com/) using ISO 3166-1 alpha-2 country codes. This ensures always up-to-date, high-quality flag images without the need for local storage. See [Flagcdn.com - API & CDN](https://flagcdn.com/) for more info.
- **Fonts**: Inter font family for modern typography
- **Responsive**: Mobile-first design approach

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Development**: [Jan Schupke](mailto:jan@schupke.io)
- **Flag Images**: [Flagcdn.com](https://flagcdn.com/) (powered by [Flagpedia.net](https://flagpedia.net/))
- **Original Project**: 2014
