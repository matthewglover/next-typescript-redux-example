const names: Array<string> = ['Barry', 'Larry', 'Kyle', 'Bradley'];

export function pickName(): string {
  return names[Math.floor(Math.random() * names.length)];
}
