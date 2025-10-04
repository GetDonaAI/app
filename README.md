# DONA AI

Because your brain isn't broken — your tools are.

This project explores building digital tools that actually work for ADHD minds. It's based on the understanding that traditional productivity approaches often fail because they don't account for how ADHD brains function.

Instead of gamification and fake dopamine hits, this focuses on accountability systems and habits that align with ADHD research and real-world experiences.

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn
- Expo CLI (`npm install -g @expo/cli`)

### Installation

1. Clone the repository
   ```bash
   git clone <repository-url>
   cd adhd
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Start development server
   ```bash
   npm start
   ```

4. Run on device/emulator
   ```bash
   npm run ios     # iOS
   npm run android # Android
   npm run web     # Web
   ```

## Project Structure

```
├── app/                 # App screens (Expo Router)
│   ├── (auth)/          # Authentication screens
│   └── (tabs)/          # Tab navigation screens
├── src/
│   ├── components/      # Reusable components
│   ├── constants/       # App constants
│   └── ...
└── package.json
```

## Development

- `npm start` - Start Expo dev server
- `npm run lint` - Run linter
- `npm run format` - Format code

## Contributing

We welcome contributions! Please read our [CONTRIBUTING.md](CONTRIBUTING.md) guide to understand our process and get started.

We're open for Hacktoberfest! 🎉 Look for `hacktoberfest` labeled issues.

Happy Hacking 💜
