# ReactJS - Template Jediael


Main libs:
- React + Mobx
- Material UI
- Styled Components
- Webpack
- Formik
- Lottie
- React Toastify
- Solidarity
- Commitzen and Commitlint
- Reactotron

## Install dependencies
Run on root project:

`yarn` ou `npm install`


## Edit: Bug em lib [Validations](https://www.npmjs.com/package/@platformbuilders/validations) 

In a Lib `@platformbuilders/validations` There is a bug generated during the installation. To solve and compile the project, just follow the steps below:

1 - Go to directory `./node_modules/@platformbuilders/validations/dist/index.es.js` , fetch lines 1 and 3 of the file and replace the import  @fnando/cpf and @fnando/cnpj to @platformbuilders/validations.


## Start

To start the project:

`yarn start` or `npm run start`


##Architecture

## Dependências Core

These are the main dependencies of the project, which need to be understood at least minimally to understand how this architecture works.

- [React](https://reactjs.org/)
- [Mobx](https://mobx.js.org/)
- [Styled Components](https://www.styled-components.com/)
- [Material UI](https://material-ui.com/)

### Stores

The `stores` are responsible for storing the application state. Any type of information that can be used in more than one container or component must be stored in a store. They are also responsible for making external requests through `services`, which handle external requests and error handling. No store should handle errors; this is the responsibility of the service and the container that started the request.

[Mobx](https://mobx.js.org/) is being used to deal with stores. Just use the `inject` and `observer` decorators where you want to inject a store and watch your changes (usually in `containers`).

### Scenes

These are the screens that have their own routes. They are always split between `container` and `component`. The container (index.js) makes the connection with the `stores`, and is responsible for all the Scene logic and for passing the information from the store to the interface. The `component` (Scene name) is responsible for the visual interface.

## Components

All visual components are declared in this folder. Buttons, checkbox, inputs. Components responsible for “behaviour” are also declared, even without having an interface, as in the case of `FormContainer`, which encapsulates form behaviors coming from Formik to all `children` that are passed as props.

## Utils/Modules
To facilitate a possible dependency migration, all dependencies are declared in the modules file and then imported pointing to this file.

### Commits

Commit patterns:
`<type>(scope): <description>`

The types can be as follows:
`feat: new feature`
`fix: bug`
`chore: A change that is neither a new feature nor a bug.`

To help with the commit process, it is recommended to use the following package:
`yarn global add commitizen`

Then it must be started once:
`commitizen init cz-conventional-changelog --save-dev --save-exact --yarn`

From now on, to commit the following syntax can be used:
`git add .`
`git cz` (Rather than git commit -m "...")

Just follow the CLI instructions.

## Features

New features to implement:

- [ ] Create a new validation lib
- [ ] Docker
- [ ] Jes
- [x] Lint
- [x] Prettier
- [x] ReactJS review rules
- [ ] PRs review rules
- [x] Commits review rules
- [x] Commitzen
- [ ] Update dependencies
- [ ] Refactoring some old points. 
