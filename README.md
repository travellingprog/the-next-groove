# The Next Groove

[The Next Groove](https://github.com/facebook/create-react-app#readme) is an online music blog about beat-driven music. The blog content is written by Patrick Cardenas Mendez ([pat_cardenas@hotmail.com](mailto:pat_cardenas@hotmail.com)) and the website has been developed by Erick Cardenas Mendez ([LinkedIn](https://www.linkedin.com/in/erickcm/), [GitHub](https://github.com/travellingprog)).

This repository contains all the code and the content of the website, including the administrative portal. The tools used to create this website include:

- React (front-end framework)
- Create React App (build tool)
- NetlifyCMS (extendable content management system that stores content in the repo)
- Yarn (dependency management)
- Standard (code linter)

In its present state, this application can **only** be deployed on Netlify, because it uses the Netlify Identity as an authentication service for the admin portal.

## License

**Not all files in this repository are covered by an open-source license**. In general, all the code and the CSS files are covered by an MIT license which is located at the root folder. On the other hand, pretty much all images and article text are provided with no license, and the authors retain their exclusive copyright over this content.

Files named LICENSE or NOLICENSE have been placed within some folders to indicate that their content (files and subfolders) is not covered by the MIT license found in the root folder.

One of the main reasons that this repository has been made public is to serve as a portfolio piece for the developer. However, the developer also hopes that this will serve as a good example to other developers, and wishes to contribute to the open-source community, even in a limited capacity.

## Installation

### Pre-Requirements

- Node (see package.json for version)
- Yarn (see package.json for version)
- Docker 18.06

### Run The Site Locally (Not the CMS)

Fork this repo

```
docker build . -t [some-name]
docker run -it --rm -p3001:3001 IMAGE COMMAND
```

Will start the server on 3001

### Run the CMS Locally


```
# Create file .env.development.local with:
REACT_APP_CMS_BACKEND_BRANCH=dev-content
```

On Netlify.com (at the time of writing):

- Create Profile
- Select "New Site From Git"
- Click "Connect to the Fork repo"
- Build Command: `yarn run build`
- Publish: `build`
- Enable Identity
- Identity->Invite Users
- Identity->Settings->Services->Enable Git Gateway

