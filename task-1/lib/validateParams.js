export function config(configString) {
  if (!configString) throw new Error('Please provide config parameter');

  const steps = configString.split('-')
  steps.forEach(step => {
    if (step.length > 2) throw new Error(`Error reading ${step}. Use this pattern {X[?Y]}`)
    const [cipher, flag] = step.split('')
    if (flag ?? (flag !== 0 || flag !== 1)) throw new Error(`Error reading config: ${cipher}${flag}. ${flag} is forbidden. Only 0 or 1 is possible`)
    if (cipher === 'A' && flag) throw new Error(`Flag ${flag} should not be passed with Atbash cipher`)
  })
}

export function input() {}

export function output() {}
