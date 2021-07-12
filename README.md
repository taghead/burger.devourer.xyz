# taghead.xyz
[![Build Angular](https://github.com/taghead/taghead.xyz/actions/workflows/main.yml/badge.svg)](https://github.com/taghead/taghead.xyz/actions/workflows/main.yml)

This web application is hosted on *https://taghead.xyz/*. Hosting a web application improves our knowledge on Angular.js, sass-lang and ClickUp. 
As the project develops and becomes more fleshed out, features will be tackled one at a time. The main objective is to learn and possibly achieving an appealing product. 

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
  
### 1.4. Setting up the Development Environment

Cloning the repository is a prerequisite to set-up the environment. Once completed, run `npm install` where [package.json](/package.json) is located. This will download the required nodejs dependencies.

```powershell
git clone https://github.com/taghead/taghead.xyz.git
cd .\taghead.xyz\
npm install --only=dev
```

## 2. Configuring secrets

### 2.1 Supabase Backend ( User Authentication )

User authentication is done through supabase.io, enabling this requires their provided API KEY and URL to be applied to [/src/environments/environment.ts](/src/environments/environment.ts) and [/src/environments/environment.prod.ts](/src/environments/environment.prod.ts).

```javascript
export const environment = {
  production: false,
  supabase_url: 'URL Here',
  supabase_key: 'API Key here'
};
```

## 3. Additional Information

#### 3.1.1. Angular development commands
- `ng serve` runs a dev server. Changes will automatically be reflected on `http://localhost:4200/`.
- `ng generate component component-name` to generate a new component.
- `ng build` to build the project. Build will be stored in `dist/`. Using the `--prod` flag will result in a production build.
- `ng test` perform [Karma](https://karma-runner.github.io) unit tests.
- `ng e2e` perform [Protractor](http://www.protractortest.org/) end-to-end tests.

Read more at [/docs/angular_readme.md](/docs/angular_readme.md)

Angular documentation is available on their official website. [https://angular.io](https://angular.io).

#### 3.1.2. TypeScript topics of interest
The following is covered in the [/docs/typescript_refresher.md](/docs/typescript_refresher.md) document. Reviewing these documents will aid you in understanding the basics. 

| <ul> <li>Type Annotations</li> <li>Type Assertions</li> <li>Arrow Functions</li> <li>Interfaces</li> <li>Objects</li> </ul> |<ul> <li>Classes</li> <li>Constructors</li> <li>Access Modifiers</li> <li>Properties</li> <li>Modules</li> </ul>|
| :------------ |:--------------|
