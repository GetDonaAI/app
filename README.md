# DONA AI

A modern React Native application built with Expo, featuring AI-powered assistance and a clean, professional interface.

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ (LTS recommended)
- npm or yarn
- Expo CLI (`npm install -g @expo/cli`)
- iOS Simulator (for iOS development) or Android Studio (for Android development)

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd adhd
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm start
   ```

4. **Run on your preferred platform**

   ```bash
   # iOS Simulator
   npm run ios

   # Android Emulator
   npm run android

   # Web browser
   npm run web
   ```

## 📁 Project Structure

```
dona-ai/
├── app/                    # Expo Router pages (file-based routing)
│   ├── index.tsx          # Login screen
│   └── _layout.tsx        # Root layout
├── src/                   # Source code
│   ├── components/        # Reusable UI components
│   ├── hooks/            # Custom React hooks
│   ├── services/         # API calls, external services
│   ├── utils/            # Utility functions
│   ├── constants/        # App constants
│   ├── types/            # TypeScript type definitions
│   └── assets/           # Images, fonts, etc.
├── components/            # Shared components (Expo Router)
├── constants/             # App-wide constants
├── hooks/                 # Shared hooks
├── .vscode/              # VS Code workspace settings
├── .husky/               # Git hooks
└── README.md
```

## 🛠️ Development

### Available Scripts

- `npm start` - Start the Expo development server
- `npm run ios` - Run on iOS simulator
- `npm run android` - Run on Android emulator
- `npm run web` - Run in web browser
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint issues automatically
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check code formatting

### Code Quality

This project uses several tools to maintain code quality:

- **ESLint** - Code linting with TypeScript support
- **Prettier** - Code formatting
- **Husky** - Git hooks for pre-commit checks
- **lint-staged** - Run linters on staged files only

### TypeScript

The project is fully configured with TypeScript:

- Strict type checking enabled
- Path mapping configured for clean imports
- Use `@/` prefix for absolute imports from the root
- Use `@/src/` prefix for imports from the src directory

Example:

```typescript
import { User } from '@/src/types';
import { COLORS } from '@/src/constants';
import { formatDate } from '@/src/utils';
```

## 🤝 Contributing

We welcome contributions! Please follow these guidelines:

### Getting Started

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Run the linter and formatter:
   ```bash
   npm run lint:fix
   npm run format
   ```
5. Commit your changes (`git commit -m 'Add amazing feature'`)
6. Push to the branch (`git push origin feature/amazing-feature`)
7. Open a Pull Request

### Code Style

- Use TypeScript for all new code
- Follow the existing code style (enforced by ESLint and Prettier)
- Write meaningful commit messages
- Add comments for complex logic
- Use meaningful variable and function names

### Pull Request Process

1. Ensure all checks pass (linting, formatting, tests)
2. Provide a clear description of your changes
3. Include screenshots for UI changes
4. Update documentation if needed

## 📱 Features

- **Cross-platform** - Runs on iOS, Android, and Web
- **TypeScript** - Full type safety
- **Expo Router** - File-based routing
- **Modern UI** - Built with React Native components
- **Handjet Font** - Custom typography with [Handjet font family](https://fonts.google.com/specimen/Handjet)
- **Overused Grotesk Font** - Professional typography for body text and UI elements
- **Development Tools** - Hot reload, debugging support

## 🔧 Configuration

### Environment Variables

Create a `.env` file in the root directory for environment-specific variables:

```env
API_URL=https://api.example.com
DEBUG=true
```

### VS Code

The project includes VS Code workspace settings for optimal development experience:

- Auto-formatting on save
- ESLint integration
- TypeScript support
- Recommended extensions

## 🎨 Typography

This project uses two custom font families:

- **Handjet** - Used for headings, titles, and brand elements
- **Overused Grotesk** - Used for body text, UI elements, and secondary content

See the documentation for detailed usage:

- [Handjet Font Guide](docs/HANDJET_FONT.md)
- [Overused Grotesk Font Guide](docs/OVERUSED_GROTESK_FONT.md)

## 📚 Learn More

- [Expo Documentation](https://docs.expo.dev/)
- [React Native Documentation](https://reactnative.dev/)
- [TypeScript Documentation](https://www.typescriptlang.org/)
- [Expo Router Documentation](https://expo.github.io/router/)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Expo team for the amazing development platform
- React Native community for continuous improvements
- All contributors who help make this project better

---

**Happy coding! 🎉**
