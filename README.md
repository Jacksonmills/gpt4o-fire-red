![A_game_cartridge_style_logo_for_a_text-based_adven_resized (1)](https://github.com/Jacksonmills/gpt4o-fire-red/assets/19780885/a494a935-605f-4374-8786-c73edcc6a4d4)
# GPT-4o Game Emulator

This project uses the GPT-4o model to emulate text-based versions of various games. The AI responds to user inputs to simulate a fully playable text-based version of the game, emulating as close to the original as possible from start to end.

## Features

- Emulate various games in a text-based format
- Detailed descriptions of game states and options
- Interactive and immersive experience

## Prerequisites

- Node.js
- pnpm (Package manager)

## Getting Started

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Jacksonmills/gpt4o-fire-red.git
   cd gpt4o-fire-red
   ```

2. Install dependencies:

   ```bash
   pnpm i
   ```

3. Create a `.env` file in the root of your project and add your OpenAI API key:

   ```
   OPENAI_API_KEY=your-openai-api-key
   ```

### Running the Emulator

1. Start the emulator:

   ```bash
   pnpm exec tsx index.ts
   ```

2. Follow the prompts to interact with the AI and play the text-based game.

## Usage

- The emulator will start with an initial prompt.
- Type your commands to interact with the game.
- The AI will respond with the next steps in the game.

## Contributing

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add some feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Create a new Pull Request.

## License

This project is licensed under the MIT License

## Acknowledgements

- Thanks to OpenAI for the GPT-4o model.
- Inspired by classic text-based adventure games.
- Special thanks to [Jared Palmer](https://twitter.com/jaredpalmer) and [Lars Grammel](https://twitter.com/lgrammel) for the inspiration with the Node.js AI chatbot and sharing the idea.
- Thanks to [Victor Taelin](https://twitter.com/VictorTaelin) for sharing the system prompt.
