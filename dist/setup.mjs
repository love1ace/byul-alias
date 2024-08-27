import { writeFileSync, existsSync } from 'fs';
import { join } from 'path';

const projectRoot = process.env.INIT_CWD || process.cwd();
const filePath = join(projectRoot, 'byul-alias.yml');

const ymlContent = `
# Common Git Alias Shortcuts
# --------------------------
# You can customize these aliases however you like.
# Below are some of the most commonly used Git aliases:

# co: checkout    -> Switch branches or restore working tree files
# br: branch      -> List, create, or delete branches
# ci: commit      -> Record changes to the repository
# st: status      -> Show the working tree status
# lg: log --oneline --graph --decorate -> Show a graphical log of commits
# cm: commit -m   -> Record changes with an inline commit message
# a: add .        -> Stage all changes in the current directory

# Note: These are just examples.
# You can define your own shortcuts, like setting \`co\` to \`commit\`.

git-alias:
  co: checkout
  br: branch
  ci: commit
  st: status
  cm: commit -m
`;

if (!existsSync(filePath)) {
  writeFileSync(filePath, ymlContent.trim(), 'utf8');
}