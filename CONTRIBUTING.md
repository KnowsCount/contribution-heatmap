# Contributing

**By contributing to `contribution-heatmap`, you agree that your contributions will be licensed under its MIT license.**

as said in [README.md](https://github.com/KnowsCount/contribution-heatmap/blob/main/README.md#%EF%B8%8F-contributing), resolving issues or eliminating bugs in the repository will be highly appreciated 🎉. also, feel free to share your ideas in the [discussions page](https://github.com/KnowsCount/contribution-heatmap/discussions).

below will be rules one has to follow when contributing to the repository:

## Useful Commands

```bash
# install deps
yarn

# run storybook (for preview)
yarn storybook

# building (patch - minor - major)
# running these will automatically change the version number, so you dont have to worry about it anymore.
yarn build:patch
yarn build:minor
yarn build:major
# if anything goes wrong you can still run
yarn build

# testing
yarn test

# lint code (prettier)
yarn lint
```

## Commit Style

please follow [conventional commit messages](https://www.conventionalcommits.org/en/v1.0.0/) style. it is, so says conventionalcommits.org:

> A specification for adding human and machine readable meaning to commit messages

an example is the message below (taken from this [gist](https://gist.github.com/joshbuchea/6f47e86d2510bce28f8e7f42ae84c716)):

```
feat: add hat wobble
^--^  ^------------^
|     |
|     +-> summary in present tense.
|
+-------> type: chore, docs, feat, fix, refactor, style, or test.
```

i hereby enclose the definitions of the types:

-   feat: new feature for the user, not a new feature for build script
-   fix: bug fix for the user, not a fix to a build script
    docs: changes to the documentation
-   style: formatting, missing semi colons, etc; no production code change
-   refactor: refactoring production code, eg. renaming a variable
-   test: adding missing tests, refactoring tests; no production code change
-   chore: updating grunt tasks etc; no production code change
