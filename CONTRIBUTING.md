# contributing

**by contributing to `contribution-heatmap`, you are automatically considered to allow your code to be licensed under the MIT license of this repository.**

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

an important thing to note is the code status behind patch, minor and major versions.

-   patch: backward compatible bug fixes
-   minor: backward compatible new features
-   major: changes that break backward compatibility

you can read more about semantic versioning [here](https://docs.npmjs.com/about-semantic-versioning).

currently I am not following semantic versioning, but this will not be the case after release `v1.0.0`.

## commit style

please follow [conventional commit messages](https://www.conventionalcommits.org/en/v1.0.0/) style. it is, so says conventionalcommits.org:

> A specification for adding human and machine readable meaning to commit messages

an example is the message below (taken from [this gist](https://gist.github.com/joshbuchea/6f47e86d2510bce28f8e7f42ae84c716)):

```
feat: add hat wobble
^--^  ^------------^
|     |
|     +-> summary in present tense.
|
+-------> type: feat, fix, docs, style, refactor, test, or chore.
```

i hereby enclose the definitions of the types:

-   feat: new feature for the user, not a new feature for build script
-   fix: bug fix for the user, not a fix to a build script
-   docs: changes to the documentation
-   style: formatting, missing semi colons, etc; no production code change
-   refactor: refactoring production code, eg. renaming a variable
-   test: adding missing tests, refactoring tests; no production code change
-   chore: updating grunt tasks etc; no production code change
