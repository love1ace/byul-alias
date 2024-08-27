# byul-alias

**byul-alias** is a simple git alias manager.

![npm](https://img.shields.io/npm/v/byul-alias)
![license](https://img.shields.io/npm/l/byul-alias)

## Installation

You can install **byul-alias** using your preferred package manager:

### npm

```bash
npm install byul-alias
```

### Yarn

```bash
yarn add byul-alias
```

### pnpm

```bash
pnpm add byul-alias
```

### Bun

```bash
bun add byul-alias
```
## Setup error
If the `byul-alias.yml` file hasn’t been created, run:
```bash
node node_modules/byul-alias/dist/setup.mjs
```
Or, you can manually create the `byul-alias.yml` file and add this code:

```json
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
# You can define your own shortcuts, like setting `co` to `commit`.
        
git-alias:
  co: checkout
  br: branch
  ci: commit
  st: status
  cm: commit -m
```

## Usage

### Define Your Git Aliases

Customize your Git Aliases by editing the `byul-alias.yml` file. Here’s an example configuration:

```yaml
git-alias:
  co: checkout
  br: branch
  ci: commit
  st: status
  cm: commit -m
```
This setup ensures that your Git aliases are consistently applied across your project.

### Install and Apply Aliases

Once your Git Aliases are configured, install and apply them effortlessly with:

```bash
npx byul-alias install
npx byul-alias add
```

**Byul-alias** automatically configures and applies your Git aliases with ease.

## Contributing

We welcome contributions to **byul-alias**! Whether it's reporting a bug, suggesting an enhancement, or submitting a pull request, your input is valued.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

For any questions, suggestions, or feedback, please contact [love1ace](mailto:lovelacedud@gmail.com).
