# Foreman

## Usage

### External package managers

> Do not use package managers to install/remove dependencies.

**Example:**

```sh
# Bad
$ pnpm add -D example-lib

# Good
$ rush add --package example-lib
```

### Add dependencies

> Use `rush add` in specific project folder

```sh
# 'example-lib' is the npm package being added
$ rush add -p example-lib
# Add dep as a dev dep
$ rush add -p example-lib --dev
# Add dep for all packages in repo
$ rush add -p example-lib --all
# Specific version with tilde: "~1.2.3"
$ rush add -p example-lib@1.2.3
# Specific version with caret: "^1.2.3"
$ rush add -p example-lib@1.2.3 --caret
# Specfic versions made consistent thru out repo
$ rush add -p example-lib@1.2.3 -m
```

### Update project dependencies

> When to run `rush update`

- After `git pull` or `git clone`
- Manual **package.json** changes
  - Adding deps, removing deps, etc.
- Edits to **common/config** files

**Example:**

```sh
# Pull the latest changes from Git
$ git pull

# Install NPM packages as needed
$ rush update
```

Use `rush update --full` if you need all deps updated or dependency errors are causing `rush update` failures.

### Rebuild projects

> When to run `rush rebuild`

- After pulling changes
- After successfully completing a prior `rush build`

**Example:**

```sh
# Pull the latest changes from Git
$ git pull

# Install NPM packages as needed
$ rush update

# Then do a clean rebuild
$ rush rebuild
```

### Build projects

> When to run `rush build`

- Ready for build
- Incremental builds (build changed projects)

### Enable Git Hook

1. Create an **autoinstaller**
2. Navigate to `common/autoinstallers/rush-example`
3. Install dependencies
4. Update **autoinstaller**

**Example:**

```sh
# Creates 'common/autoinstallers/rush-example/package.json'
$ rush init-autoinstaller --name rush-example
# Changes directories
$ cd common/autoinstallers/rush-example
# Install deps for `package.json`
$ pnpm install example-npm-dep
# Update autoinstaller
$ rush update-autoinstaller --name rush-example
```
