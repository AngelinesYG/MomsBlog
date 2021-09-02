<!-- AUTO-GENERATED-CONTENT:START (STARTER) -->

## Moms Blog 
# Description 
  Practicing learning Gatsby, GraphQL, and Contentful by building a small re-make of a previous project intended for moms to vent about their experiences as moms by blogging about it. 

1.  **Initial build and setup.**
    The initial set up was somewhat challenging. Though I followed the tutorial step by step, there was something wrong with the version and the way gatsby was installed on my machine. I kept encountering EACCESS errors for any and every function I performed. Including a simple save of a file or install of a package. 

    To try to fix this I google several different solutions, including changing computer permissions, changing root to user, etc. But nothing worked. For the duration of the project I had to simply "sudo" before running any commands in terminal, even just simply saving a file. As long as I was able to "sudo", the rest of the project fell into place. 
2.  **Problems/bugs encountered.**
    Aside from the EACCESS problem, there was a huge problem with creating pages due to changes and compatability in different versions of node, npm, gatsby, and several of the plugins installed. There seemed to have been a change in how pages are created and that caused a plethora of errors that remain unresolved a this time. 
3.  **Approact to fixing problems/bugs.**
    I googled the errors specifically by copying and pasting them into google search. I found several different solutions for both the EACCESS error and the creating pages error. That is where I learned to change my computer's permissions and downgrade several packages and versions of node/npm. However, none of these worked. The documentation and other articles seemed to also be a little outdated and none of the suggested solutions worked. 

    For the EACCESS error I simply resorted to solve that (or get around it) by typing 'sudo' before every terminal command and to save/create files. 

    For the pages error I tried several different things. As mentioned above, I tried downgrading packages and versions. I tried moving the file from 'templates' to 'pages' which seemed to have gotten rid of the error, but did not fix it. I tried adjusting the query (though it worked in graphql), but that still did not work. In order to temporarily fix the creating new pages issue, I simply hardcoded the blogs into the file and linked to that file as a new page. 

    Another major error was getting the application deployed to Netlify. For the same reasons. The outdated or not compatable versions of packages and plugins. To solve this I, again, googled the error and found that I could and should specify the versions in Netlify using environmental variables. Additionally, for some reason, it did not like a empty file I had and once I added the variable and got rid of the file, it deployed without issues. 

    These are the articles/documentation I looked at: 
    **Gatsby Tutorial Generating Pages**
    https://www.youtube.com/watch?v=L32Vx_bEZhA 
    https://www.youtube.com/results?search_query=creating+dynamic+pages+gatsby+using+slug+method 
    **Node.js and npm Docs**
    https://docs.npmjs.com/downloading-and-installing-node-js-and-npm
    **Gatsby Docs**
    https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/#introduction 
    https://www.gatsbyjs.com/docs/add-page-metadata/ 
    https://www.gatsbyjs.com/docs/how-to/querying-data/static-query/ 
    https://www.gatsbyjs.com/docs/programmatically-create-pages-from-data/ 
    

    **Other Related Docs**
    https://spectrum.chat/gatsby-js/general/the-graphql-query-in-the-non-page-component-will-not-be-run~c8d84104-bda5-486f-a6bd-b121f4ffcfe7
    https://github.com/eggheadio/gatsby-starter-egghead-blog/blob/master/gatsby-node.js 
    https://github.com/gatsbyjs/gatsby/issues/25293 
    https://dev.to/megfh/what-i-learned-from-the-100daysofgatbsy-challenge-4p70 
    https://stackoverflow.com/questions/67115732/error-cannot-find-module-gatsby-plugin-image-graphql-utils 
    https://ittone.ma/ittone/node-js-netlify-deploy-error-cannot-find-module-gatsby-plugin-image-graphql-utils/
    https://answers.netlify.com/t/netlify-noob-minified-react-error-130/3032 
    https://www.gatsbyjs.com/docs/how-to/previews-deploys-hosting/deploying-to-netlify 

    **Node.js and npm Docs**
    **Node.js and npm Docs**
    **Node.js and npm Docs**
    **Node.js and npm Docs**


4.  **What went well.**
    What went well was the fact that Gatsby seemed pretty simple and aside from those two errors, everything else went very smoothly. The regular pages were created with no problem and I was even able to add emojis. I liked learning the new technoligies and GraphQL and Contentful were also pretty simple to understand. 

5.  **Future Improvements.**
    Future improvements would be to do some more research into how pages are created with the new versions and try to get them incorporated. 
    Another improvement would be to make the app more the way it's intended and add authentication so that mothers can actually got and write their blogs. 

<p align="center">
  <a href="https://www.gatsbyjs.com">
    <img alt="Gatsby" src="https://www.gatsbyjs.com/Gatsby-Monogram.svg" width="60" />
  </a>
</p>
<h1 align="center">
  Gatsby's hello-world starter
</h1>

Kick off your project with this hello-world boilerplate. This starter ships with the main Gatsby configuration files you might need to get up and running blazing fast with the blazing fast app generator for React.

_Have another more specific idea? You may want to check out our vibrant collection of [official and community-created starters](https://www.gatsbyjs.com/docs/gatsby-starters/)._

## 🚀 Quick start

1.  **Create a Gatsby site.**

    Use the Gatsby CLI ([install instructions](https://www.gatsbyjs.com/docs/tutorial/part-0/#gatsby-cli)) to create a new site, specifying the hello-world starter.

    ```shell
    # create a new Gatsby site using the hello-world starter
    gatsby new my-hello-world-starter https://github.com/gatsbyjs/gatsby-starter-hello-world
    ```

1.  **Start developing.**

    Navigate into your new site’s directory and start it up.

    ```shell
    cd my-hello-world-starter/
    gatsby develop
    ```

1.  **Open the source code and start editing!**

    Your site is now running at `http://localhost:8000`!

    _Note: You'll also see a second link: _`http://localhost:8000/___graphql`_. This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby tutorial](https://www.gatsbyjs.com/tutorial/part-five/#introducing-graphiql)._

    Open the `my-hello-world-starter` directory in your code editor of choice and edit `src/pages/index.js`. Save your changes and the browser will update in real time!

## 🚀 Quick start (Gatsby Cloud)

Deploy this starter with one click on [Gatsby Cloud](https://www.gatsbyjs.com/cloud/):

[<img src="https://www.gatsbyjs.com/deploynow.svg" alt="Deploy to Gatsby Cloud">](https://www.gatsbyjs.com/dashboard/deploynow?url=https://github.com/gatsbyjs/gatsby-starter-hello-world)

## 🧐 What's inside?

A quick look at the top-level files and directories you'll see in a Gatsby project.

    .
    ├── node_modules
    ├── src
    ├── .gitignore
    ├── .prettierrc
    ├── gatsby-browser.js
    ├── gatsby-config.js
    ├── gatsby-node.js
    ├── gatsby-ssr.js
    ├── LICENSE
    ├── package-lock.json
    ├── package.json
    └── README.md

1.  **`/node_modules`**: This directory contains all of the modules of code that your project depends on (npm packages) are automatically installed.

2.  **`/src`**: This directory will contain all of the code related to what you will see on the front-end of your site (what you see in the browser) such as your site header or a page template. `src` is a convention for “source code”.

3.  **`.gitignore`**: This file tells git which files it should not track / not maintain a version history for.

4.  **`.prettierrc`**: This is a configuration file for [Prettier](https://prettier.io/). Prettier is a tool to help keep the formatting of your code consistent.

5.  **`gatsby-browser.js`**: This file is where Gatsby expects to find any usage of the [Gatsby browser APIs](https://www.gatsbyjs.com/docs/reference/config-files/gatsby-browser/) (if any). These allow customization/extension of default Gatsby settings affecting the browser.

6.  **`gatsby-config.js`**: This is the main configuration file for a Gatsby site. This is where you can specify information about your site (metadata) like the site title and description, which Gatsby plugins you’d like to include, etc. (Check out the [config docs](https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/) for more detail).

7.  **`gatsby-node.js`**: This file is where Gatsby expects to find any usage of the [Gatsby Node APIs](https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/) (if any). These allow customization/extension of default Gatsby settings affecting pieces of the site build process.

8.  **`gatsby-ssr.js`**: This file is where Gatsby expects to find any usage of the [Gatsby server-side rendering APIs](https://www.gatsbyjs.com/docs/reference/config-files/gatsby-ssr/) (if any). These allow customization of default Gatsby settings affecting server-side rendering.

9.  **`LICENSE`**: This Gatsby starter is licensed under the 0BSD license. This means that you can see this file as a placeholder and replace it with your own license.

10. **`package-lock.json`** (See `package.json` below, first). This is an automatically generated file based on the exact versions of your npm dependencies that were installed for your project. **(You won’t change this file directly).**

11. **`package.json`**: A manifest file for Node.js projects, which includes things like metadata (the project’s name, author, etc). This manifest is how npm knows which packages to install for your project.

12. **`README.md`**: A text file containing useful reference information about your project.

## 🎓 Learning Gatsby

Looking for more guidance? Full documentation for Gatsby lives [on the website](https://www.gatsbyjs.com/). Here are some places to start:

- **For most developers, we recommend starting with our [in-depth tutorial for creating a site with Gatsby](https://www.gatsbyjs.com/tutorial/).** It starts with zero assumptions about your level of ability and walks through every step of the process.

- **To dive straight into code samples, head [to our documentation](https://www.gatsbyjs.com/docs/).** In particular, check out the _Guides_, _API Reference_, and _Advanced Tutorials_ sections in the sidebar.

## 💫 Deploy

[Build, Deploy, and Host On The Only Cloud Built For Gatsby](https://www.gatsbyjs.com/products/cloud/)

Gatsby Cloud is an end-to-end cloud platform specifically built for the Gatsby framework that combines a modern developer experience with an optimized, global edge network.

<!-- AUTO-GENERATED-CONTENT:END -->
