<img src="https://knowscount-1304485449.cos.ap-shanghai.myqcloud.com/assets/React%20App%20Screenshot.svg" align="right" width="80" height="80" />

# contribution-heatmap

> a react contribution heatmap calendar component.

do feel free to mark the repo by starring it—but I must warn you **it is still in early stages of development** and **you should not try it yet for your project, yet**. below lies some useful links to, hopefully, get you to know this component better:

-   [simple react example](http://contribution-heatmap-example.vercel.app/) | [source code](https://github.com/KnowsCount/contribution-heatmap-example)
-   [storybook preview](https://contribution-heatmap.vercel.app/)
-   [npm link](https://www.npmjs.com/package/contribution-heatmap)

## 📌 reporting bugs

feel free to post any, **but please check [issues](https://github.com/KnowsCount/contribution-heatmap/issues) before posting**.

## 🤤 usage

to install the library as a dependency to your project, run

```bash
yarn add contribution-heatmap
# or, according to your preference
npm install contribution-heatmap
```

import the library in your project like below, and you can get started using it directly.

<!-- prettier-ignore-start -->

```tsx
// simply import the library, no css-imports needed
import { Heatmap } from "contribution-heatmap"
// and then ... just use it like you would any components
export const YourComponent = () => <Heatmap />
```

<!--prettier-ignore-end -->

more details on props will come soon. I am making progress, albeit rather slowly—many things are happening lately.

## 🙋‍♂️ contributing

because of the very fact that the repository is still in early stages of development, resolving issues, implementing features or even just eliminating the simplest bugs like typos in the repository will be highly appreciated 🎉. also, feel free to share your ideas in the [discussions page](https://github.com/KnowsCount/contribution-heatmap/discussions).

here I list some starter scripts to run for making contributions to the repo; for the detailed version please go to [CONTRIBUTING.md](./CONTRIBUTING.md).

### 🛠 install dependencies

```
yarn
```

### 🔨 get storybook up and running for previewing

```
yarn storybook
```

### 📦 compiles and minifies for production

```
yarn build
```
