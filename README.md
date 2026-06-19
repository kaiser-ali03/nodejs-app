# 🌸 Shiina API

<div align="center">
  <img src="https://files.catbox.moe/mbeerk.jpg" alt="Shiina API Banner" width="600"/>
  
  <p align="center">
    <strong>A free, simple and elegant REST API created by balxzzy for the common good</strong>
  </p>
  
  <p align="center">
    <img src="https://img.shields.io/badge/version-1.0.0-blue.svg" alt="Version"/>
    <img src="https://img.shields.io/badge/status-online-green.svg" alt="Status"/>
    <img src="https://img.shields.io/badge/node.js-18+-brightgreen.svg" alt="Node.js"/>
    <img src="https://img.shields.io/badge/license-MIT-yellow.svg" alt="License"/>
  </p>
</div>

> **The Ultimate Free Node.js REST API Starter Kit** 🚀
> 
> Perfect base template for building powerful APIs with AI integration, 
> canvas generation, and auto-documentation.

## Why Choose Shiina API Base?

✅ **100% Free & Open Source**  
✅ **Production Ready**  
✅ **AI Integration Built-in**  
✅ **Auto Swagger Documentation**  
✅ **Canvas & Image Generation**  
✅ **Hot Reload Development**  
✅ **Zero Configuration Setup**

---

## ✨ Features

- 🤖 **AI Integration** - Powered by LuminAI for smart responses
- 🎨 **Canvas Generation** - Create beautiful ship cards and graphics
- 🛠️ **Tools & Utilities** - Various helpful tools and generators
- 📚 **Auto Documentation** - Swagger JSON generation
- 🔄 **Hot Reload** - Automatic updates with nodemon
- 🌐 **RESTful API** - Clean and simple endpoints

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- npm or yarn package manager

### Installation

```bash
# Clone the repository
git clone https://github.com/balxz/sh-api-simple.git

# Navigate to project directory
cd sh-api-simple

# Install dependencies
npm install

# Start development server
node index.js # node .
```

### Usage

```bash
# Production mode
npm start

# Development mode with hot reload
npm run dev
```

The API will be available at `http://localhost:3000`

## 📁 Project Structure

```
shiina-api/
├── 📄 configs.js          # Global configuration and setup
├── 📄 index.js            # Main application entry point
├── 📄 nodemon.json        # Nodemon configuration
├── 📄 package.json        # Package dependencies
├── 📂 route/              # API route definitions
│   ├── 📂 ai/             # AI-related endpoints
│   │   └── lumini-ai.js   # LuminAI integration
│   ├── 📂 canvas/         # Image generation endpoints
│   │   └── ship.js        # Ship card generator
│   ├── 📂 ex/             # Example endpoints
│   │   └── example.js     # API usage examples
│   ├── 📄 index.js        # Route index
│   └── 📂 user/           # User-related endpoints
│       └── say.js         # Text generation tools
└── 📂 src/                # Source code directory
    ├── 📂 lib/            # Library modules
    │   ├── 📂 loader/     # Dynamic loaders
    │   │   ├── docs.js    # Documentation generator
    │   │   ├── router.js  # Route loader
    │   │   └── scrap.js   # Scraper loader
    │   └── 📂 scraper/    # Web scraping modules
    │       └── 📂 ai/
    │           └── aites.js # AI scraping utilities
    └── 📂 pages/          # Static pages
        ├── 📂 404/        # 404 error page
        ├── 📄 index.html  # Landing page
        ├── 📂 maintenance/ # Maintenance page
        └── 📂 sh/         # Special pages
```

## 🔗 API Endpoints

### 🤖 AI Services
- **GET** `/api/ai` - LuminAI chat completion
  - Parameters: `text` (required)
  - Example: `/api/ai?text=hello ai!`

### 🎨 Canvas Generation
- **GET** `/api/canvas/welcome` - Generate ship cards
  - Description: Create beautiful welcome cards

### 🛠️ Tools & Utilities
- **GET** `/api/tools/generate` - Text generation tool
  - Parameters: `text`, `url`, `size`, `nama`
  - Example: `/api/tools/generate?text=hello&nama=shiina`

### 📚 Examples
- **GET** `/example` - Basic API example
  - Returns sample response structure

## 🔧 Configuration

### Environment Setup

The API uses global configuration defined in `configs.js`:

```javascript
const SH = () => ({
    name: "SH - API",
    version: "1.0.0",
    description: "SHIINA is a free, simple REST API...",
    banner: "https://files.catbox.moe/mbeerk.jpg",
    status: "online",
    creator: "balxzzy"
})
```

### Route Structure

Each route follows this standard format:

```javascript
module.exports = {
    name: "route-name",
    path: "/api/endpoint",
    type: "get", // or "post",
    description: "Route description",
    tags: "category",
    hidden: false,
    isDisable: false,
    params: {
        // Required parameters
    },
    code: async (req, res, { axios, scrap }) => {
        // Route logic here
    }
}
```

## 📖 Auto Documentation

The API automatically generates Swagger JSON documentation with:
- Complete endpoint listing
- Parameter specifications
- Response examples
- Category organization
- Real-time status updates

Access the documentation at `http://localhost:3000/` endpoint.

## 🛡️ Security & Usage

- **Rate Limiting**: Please avoid DDoS attacks
- **Free Usage**: Available for everyone
- **Attribution**: Created by balxzzy
- **Support**: Contact pa424013@gmail.com

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 📞 Contact & Support

- **Creator**: balxzzy
- **Email**: pa424013@gmail.com
- **GitHub**: [@balxz](https://github.com/balxz)

---

<div align="center">
  <p>
    <strong>Made with ❤️ by Shiina Team</strong>
  </p>
  
  <p>
    <em>Feel free to use it, but please use it responsibly!</em>
  </p>
  
  <img src="https://files.catbox.moe/mbeerk.jpg" alt="Footer Image" width="400"/>
</div>
