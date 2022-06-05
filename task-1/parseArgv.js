export function parseArgv() {
  const paramNames = {
    '-c': 'config',
    '--config': 'config',
    '-i': 'input',
    '--input': 'input',
    '-o': 'output',
    '--output': 'output',
  };
  const params = {};

  process.argv.slice(2).forEach((arg, i, args) => {
    if (!(i % 2)) {
      const name = paramNames[arg];
      if (!name) {
        throw new Error(`Parameter ${arg} is unknown`);
      }
      params[name] = args[i + 1];
    }
  });

  return params;
}
