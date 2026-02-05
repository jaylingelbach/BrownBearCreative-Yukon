node -e "
const { execSync } = require('child_process');
const files = execSync('git status --porcelain', { encoding: 'utf8' })
  .split('\n')
  .filter(Boolean)
  .map(line => line.slice(3).trim())
  .filter(p => p.endsWith('.tsx') || p.endsWith('.ts') || p.endsWith('.jsx') || p.endsWith('.js'));

for (const filePath of files) {
  // If the file is shown as renamed only by casing, git often won't list it cleanly.
  // This script targets files already in your working tree changes.
  const tmpPath = filePath + '.tmpcasefix';
  try {
    execSync(`git mv \"${filePath}\" \"${tmpPath}\"`);
    execSync(`git mv \"${tmpPath}\" \"${filePath}\"`);
  } catch (e) {
    // ignore failures; you may have deletions/untracked etc.
  }
}
console.log('Done. Now run: git status');
"
