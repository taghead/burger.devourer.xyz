# <p align="center"> :hamburger: taghead.xyz :hamburger: </p>
[![Build Angular](https://github.com/taghead/taghead.xyz/actions/workflows/main.yml/badge.svg)](https://github.com/taghead/taghead.xyz/actions/workflows/main.yml)

This web application live and hosted on https://taghead.xyz/. The focus of this repository is to expand our knowledge.

The stack
- Frontend: [Angular](https://angular.io/)
- Backend: [Supabase](https://Supabase.io/)
- Web Server: [Nginx](https://www.nginx.com/)

Additional Technologies:
- CSS preprocessor: [Sass-lang](https://sass-lang.com/)
- Project Management: [ClickUp](https://clickup.com/) following agile methodology

As the project develops and becomes more fleshed out, features will be tackled one at a time. The main objective is to learn and possibly achieving an appealing product. 

## 1. Overview

### 1.1. Dependencies 
Download and Install :
- [Node.js (with npm)](https://nodejs.org/en/download/) - Used for building, development and testing.
  - NodeJS Modules:
    - Angular CLI `npm install -g @angular/cli`
    - Typescript `npm install -g typescript`
- [Git](https://git-scm.com/downloads) - Used for collaborative software development

### 1.2. Read the [CONTRIBUTIONS.md](/CONTRIBUTIONS.md)
  
### 1.3. Setting up the Development Environment

Cloning the repository and installing node.js modules are prerequisites to set-up the development environment.

```powershell
git clone https://github.com/taghead/taghead.xyz.git
cd .\taghead.xyz\
npm install
```

### 1.4 Supabase Backend ( User Authentication )

User authentication is done through supabase.io, requiring an API KEY and URL to be applied to [/src/environments/environment.ts](/src/environments/environment.ts) and [/src/environments/environment.prod.ts](/src/environments/environment.prod.ts).

```javascript
export const environment = {
  // Add the following
  supabase_url: 'Your Supabase URL here',
  supabase_key: 'Your Supabase API Key here'
};
```

## 2. Additional Information
#### 2.1. Forgot TypeScript? 
Give the [/docs/typescript_refresher.md](/docs/typescript_refresher.md) a read. Hopefully, it will help you out.

#### 2.2. The project charter
Located in [/docs/project_charter.md](/docs/project_charter.md). It's nothing special, more so convention.
