# taghead.xyz

This web application is hosted at the following website https://taghead.xyz/ The purpose of this is to obtain experience Angular.js, sass-lang and ClickUp. Features will be dealt with as they come due as this project is more fleshed out. Currently the main objective is to learn and achieve, secondary to this will be a appealing product. 

## 1. Getting Started

### 1.1. Dependencies 

- Download and Install [nodejs and npm installed](https://nodejs.org/en/download/). The intended version 12.18.3 but you may use what works.
- Download and Install [git](https://git-scm.com/downloads).
- Install Angular CLI `npm install -g @angular/cli`

### 1.2. Folder Structure

To better understand the Angular framework please review their documentation on:
- [Workspace configuration files](https://angular.io/guide/file-structure#workspace-configuration-files)
- [Developer Guilds](https://angular.io/guide/router)
- When needed refer to https://angular.io/ as a treasure trove of information.

### 1.3. Read the [CONTRIBUTIONS.md](/CONTRIBUTIONS.md)
  
### 1.4. Setting up Development Environment

A must is to clone the repository. Once done run `npm install` where [package.json](/package.json) is located this will download the required nodejs dependencies.

```powershell
git clone https://github.com/taghead/taghead.xyz.git
cd .\taghead.xyz\
npm install --only=dev
```

### 1.5. Tips 

#### 1.5.1. Angular
- `ng serve` runs a dev server. Changes will automatically be reflected on `http://localhost:4200/`.
- `ng generate component component-name` to generate a new component.
- `ng build` to build the project. Build will be stored in `dist/`. Using the `--prod` flag will result in a production build.
- `ng test` perform [Karma](https://karma-runner.github.io) unit tests.
- `ng e2e` perform [Protractor](http://www.protractortest.org/) end-to-end tests.

Read more at [/docs/angular_readme.md](/docs/angular_readme.md)

Angular documentation available on their official website [https://angular.io](https://angular.io).

#### 1.5.2. TypeScript

The following is covered in the [/docs/typescript_refresher.md](/docs/typescript_refresher.md) document. Please review is assistance is needed in the following documents. 
- Type Annotations
- Type Assertions
- Arrow Functions
- Interfaces
- Classes
- Constructors
- Access Modifiers
- Properties
- Modules
