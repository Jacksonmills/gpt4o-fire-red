import { openai } from '@ai-sdk/openai';
import { CoreMessage, streamText } from 'ai';
import dotenv from 'dotenv';
import * as readline from 'node:readline/promises';
import kleur from 'kleur';
import { systemPrompt } from './system';

dotenv.config();

const terminal = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const messages: CoreMessage[] = [
  { role: 'system', content: systemPrompt },
  { role: 'user', content: 'Start the game' }
];

async function main() {
  const result = await streamText({
    model: openai('gpt-4o'),
    system: systemPrompt,
    messages,
  });

  let fullResponse = '';
  process.stdout.write(kleur.cyan('\nAssistant:\n'));
  for await (const delta of result.textStream) {
    fullResponse += delta;
    process.stdout.write(delta);
  }
  process.stdout.write('\n\n');

  messages.push({ role: 'assistant', content: fullResponse });
  while (true) {
    const userInput = await terminal.question(kleur.green('You: '));
    messages.push({ role: 'user', content: userInput });

    const result = await streamText({
      model: openai('gpt-4o'),
      system: systemPrompt,
      messages,
    });

    let fullResponse = '';
    process.stdout.write(kleur.cyan('\nAssistant:\n'));
    for await (const delta of result.textStream) {
      fullResponse += delta;
      process.stdout.write(delta);
    }
    process.stdout.write('\n\n');

    messages.push({ role: 'assistant', content: fullResponse });
  }
}

main().catch(console.error);
