This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

### Components

Components are built based on [Atomic Design Principles](https://atomicdesign.bradfrost.com/chapter-2/) and are classified into the appropriate folders:

1.  atoms (@components/atoms)
2.  molecules (@components/molecules)
3.  organisms (@components/organisms)
4.  templates (@components/templates)
5.  pages (src/pages) (please note that all pages need to be labelled as [name].page.tsx, as Next has been configured to only render for these pages in the pages folder)

### Styles

The project uses [Sass Pre-processor](https://sass-lang.com/) to leverage the power of Sass and promote re-usability of styles within the app through mixins, improve readability using nested classess.

The styles for the component stays within the component folder and uses Sass modules. However, having sass module for every component is not mandatory unless the style changes cannot be achieved/creates complexity by using utility classes.

The utility classess are provided by [Bulma](https://bulma.io/) which has many useful utility classess, some of them are:

1.  [Responsive Mixins](https://bulma.io/documentation/utilities/responsive-mixins/)
2.  [Helpers](https://bulma.io/documentation/helpers/)
3.  [Layout](https://bulma.io/documentation/layout/)

The files in these components have no logic. All the presentatio n layer logic needs to be separated into Custom hooks

#### ClassNames

The project uses (classnames)[https://www.npmjs.com/package/classnames] to dynamically manage the classes added to a component

### Storybook

1.  To run Storybook locally, enter command `yarn storybook`.
2.  To find our hosted instance of Storybook, please visit:
3.  Supporting documentation can be found: [Storybook Docs]('https://storybook.js.org/docs/react/writing-stories/introduction')

Storybook is a page / component design tool used to help build and document components, as well as demo them before being integrated into a live system. Storybook and Next.js pair together very well, allowing us to design and document whole pages if we need to.

#### To create a story:

1.  Find the `/stories` path.
2.  Create a story using this filename `ComponentName.stories.tsx`.
3.  Follow the sample within the `components/atoms/button/button.stories.tsx` path to get an understanding of how we can structure and implement stories, making use of Storybooks features.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
