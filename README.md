# The Next Groove

[The Next Groove](https://github.com/facebook/create-react-app#readme) is an online music blog about beat-driven music. The blog content is written by Patrick Cardenas Mendez ([pat_cardenas@hotmail.com](mailto:pat_cardenas@hotmail.com)) and the website has been developed by Erick Cardenas Mendez ([LinkedIn](https://www.linkedin.com/in/erickcm/), [GitHub](https://github.com/travellingprog)).

This repository contains all the code and the content of the website, including the administrative portal. The tools used to create this website include:

- React (front-end framework)
- [Create React App](https://github.com/facebook/create-react-app) (build tool)
- [NetlifyCMS](https://www.netlifycms.org/) (extendable content management system that stores content in the repo)
- [Yarn](https://yarnpkg.com/) (dependency management)
- [Standard](https://standardjs.com/) (code linter)

In its present state, this application can **only** be deployed on Netlify, because it uses the Netlify Identity as an authentication service for the admin portal.


## License

**Not all files in this repository are covered by an open-source license**. In general, all the code and the CSS files are covered by an MIT license which is located at the root folder. On the other hand, pretty much all images and article text are provided with no license, and the authors retain their exclusive copyright over this content.

Files named LICENSE or NOLICENSE have been placed within some folders to indicate that their content (files and subfolders) is not covered by the MIT license found in the root folder.

One of the main reasons that this repository has been made public is to serve as a portfolio piece for the developer. However, the developer also hopes that this will serve as a good example to other developers, and wishes to contribute to the open-source community, even in a limited capacity.


## Installation

### Fork And Setup On Netlify

You should fork this repo and deploy the fork on Netlify, even if you're just going to be playing around with this application locally, because it's a requirement to log into the CMS portion of the application.

1. Fork and deploy with this button <!-- Markdown snippet -->
[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/netlify/netlify-statuskit)
2. Enable Netlify's [Git Gateway](https://www.netlify.com/docs/git-gateway/)
3. [Add users](https://www.netlify.com/docs/identity/#adding-users) for Netlify Identity

### Local Pre-Requirements

You need to install the following on your system before running this project locally.

- Node (see version in `.nvmrc`)
- Yarn (see version in `.yvmrc`)

It's recommended to set up Node using [nvm (Node Version Manager)](https://github.com/creationix/nvm). If nvm is present, you can install the correct Node version with a single command:

```sh
nvm use
```

It's also recommended to set up Yarn using [yvm (Yarn Version Manager)](https://github.com/tophat/yvm). If yvm is present, you can install the correct Yarn version with a single command:

```sh
yvm use
```

Once you have the correct version of Node and Yarn, you can install all the NPM package dependencies with

```sh
yarn
```

### Run The Site In Development Mode

The site is simply a front-end React application built using Create React App, except for the CMS (content management system). So, you can start it locally in dev mode by simply running the following command in terminal.

```
yarn start
```

That should launch the site at **[http://localhost:3001/](http://localhost:3001/)**. The content will not match the production site, because it originates from a different folder (`./public/cms-dev-content`).

### Run the CMS Locally

To use the CMS portion of the site, even locally, you need to deploy a fork of this application to Netlify. This is because the CMS portal uses Netlify's Git Gateway to authenticate users, even in development mode. Another consequence of Git Gateway is that the CMS portion of this application cannot be run offline.

See above for instructions on connecting the site with Netlify. Once you have set up, you'll be able to access the admin portal at **[http://localhost:3001/admin](http://localhost:3001/)**. The authentication UI is handled by the [Identity widget](https://github.com/netlify/netlify-identity-widget), so the first time you attempt use the admin, you'll be prompted to enter the URL of your Netlify site.


## Creating Development-Only Content With The CMS

1) Your fork of this repo will include a remote branch named **dev-content**. DO NOT DELETE THIS BRANCH. It's the destination branch for content created in "development" mode.

2) Create new content (e.g. a new article) with the CMS running locally.

For terminal environments that support Bash shell (MacOS, Linux, Windows Subsystem For Linux, etc.):

3) Make the bash script file **updateDevContent.sh** executable by running `chmod +x scripts/updateDevContent.sh`. You only need to do this once, and can skip this step on subsequent uses.

4) Run `yarn update-dev`.

For other terminal environments:

3) Run `git fetch origin dev-content`

4) Run `git checkout origin/dev-content -- public/cms-dev-content`

5) Run `yarn update-dev:generated`

The end result should be that you now have at least one new file inside the folder **public/cms-dev-content**.

At some point in the future, I'll explain why I've settled on this matter of using the CMS locally for development purposes. However, you might be able to piece it together by understanding that a) NetlifyCMS works by saving content to a *remote* git branch, b) we want to be able to create content locally without it showing up on the production site and c) looking at the admin config in **src/myPages/admin/config.js**.


## CMS Content vs "Generated" Content

This application has two types of content JSON files:

- JSON files describing content created by the CMS users, e.g. an article
- JSON files generated by **scripts/prepareGeneratedContent.js**, describing content that derives from that CMS content

An example of the latter is the JSON file that describes the content that will appear on the first page of the website's Mixes category section. For this page, we want to show the latest articles that contain an original mix in them. To achieve this, our script essentially reads through all the JSON files that describe articles, filters for the ones that have their "category" value set to "MIXES", and then selects only the latest of those articles. It then generates a new JSON file that contains the content of all those latest articles.

The generated data for the production site resides in the folder **public/cms-content/generated**, while for development it resides in the folder **public/cms-dev-content/generated**.


