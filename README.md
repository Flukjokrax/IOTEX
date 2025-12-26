# IoTeX Delegate Forge

An interactive, high-fidelity dashboard and AI assistant designed to streamline the onboarding and management process for IoTeX Delegate nodes. This application serves as a comprehensive educational hub for node operators, investors (endorsers), and community developers.

## 🚀 Features

- **Interactive Bootstrap Guide**: A step-by-step walkthrough for initializing an IoTeX Full Node, complete with copyable CLI commands.
- **AI Node Assistant**: Powered by **Gemini 3 Flash**, providing real-time technical support for configuration, specs, and network governance queries.
- **Reward Analytics Engine**: A sophisticated yield calculator using `recharts` to simulate staking scenarios, commission revenue, and cumulative growth projections.
- **Portal Configuration Tutorials**: Deep dives into the official IoTeX Staking Portal, covering Delegate profile creation and Endorsement workflows.
- **Advanced Infrastructure Modules**: Technical guides on High Availability (HA) setups, Edge Proxies (Envoy), Kubernetes orchestration, and Gravity Chain binding.
- **Developer Hub**: A quick-start section for L1 development, featuring smart contract deployment guides and JavaScript interaction snippets.

## 🛠️ Technology Stack

- **Frontend**: React 19, TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Charts**: Recharts
- **AI Integration**: Google Gemini API (@google/genai)
- **Deployment**: ESM-based module system (no build step required for local preview)

## 📦 Project Structure

```text
.
├── components/          # React functional components for each module
│   ├── Assistant.tsx    # AI Chat interface
│   ├── Layout.tsx       # Main navigation and cinematic layout
│   ├── RewardCalculator.tsx # Yield simulation engine
│   └── ...              # Module-specific documentation components
├── services/            # API and business logic
│   └── gemini.ts        # Gemini AI integration service
├── types.ts             # Global TypeScript interfaces and enums
├── constants.ts         # Configuration data and system prompts
├── App.tsx              # Main application router/state
├── index.html           # Entry point with Tailwind and ESM Import Map
└── index.tsx            # React mounting logic
```

## 🚦 Getting Started

1. **Environment Variables**: The application requires a valid `API_KEY` for the Gemini AI Assistant. This is expected to be provided in the execution environment.
2. **Local Development**:
   - Since the project uses ESM modules directly from CDNs via an import map in `index.html`, you can serve the root directory using any local web server (e.g., `npx serve .`).
   - Ensure your browser supports ES6 modules.

## 🛡️ Security Note

The **IoTeX Delegate Forge** is an educational tool. When performing actual on-chain actions:
- Never share your **Operator Private Key** or **Profile Private Key**.
- Always verify smart contract addresses and official URLs (iotex.io, stake.iotex.io).
- Use hardware wallets for Profile and Rewards accounts whenever possible.

## 🌐 Resources

- [Official IoTeX Documentation](https://docs.iotex.io)
- [Staking Portal](https://stake.iotex.io)
- [Developer Discord](https://iotex.io/devdiscord)

---
*Built for the IoTeX Ecosystem.*
