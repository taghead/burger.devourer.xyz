# <p align="center"> :hamburger: taghead.xyz :hamburger: </p>
[![Build Angular](https://github.com/taghead/taghead.xyz/actions/workflows/main.yml/badge.svg)](https://github.com/taghead/taghead.xyz/actions/workflows/main.yml) [![https://taghead.xyz](https://img.shields.io/website-up-down-green-red/http/taghead.xyz.svg )](https://taghead.xyz)
# <p align="center"> ![v0.15 Preview](docs/img/previews/v0.15/v0.15_Desktop.gif) </p>

This web application live and hosted on https://taghead.xyz/. The focus of this repository is to expand our knowledge.

The stack
- Frontend: [Angular](https://angular.io/)
- Backend: [Supabase](https://Supabase.io/)
- Web Server: [Nginx](https://www.nginx.com/)

Additional Technologies:
- CSS preprocessor: [Sass-lang](https://sass-lang.com/)
- Project Management: [ClickUp](https://clickup.com/) following agile methodology

As the project develops and becomes more fleshed out, features will be tackled one at a time. The main objective is to learn and possibly achieving an appealing product. 

Feature List
- [ ] User Management
- [ ] User Generated Content
- [ ] Upload Video Links
- [ ] Voting System
- [ ] User Feedback System

## 1. Building/Development

Download and Install :
- [Node.js (with npm)](https://nodejs.org/en/download/) - Used for building, development and testing.
- [Git](https://git-scm.com/downloads) - Used for collaborative software development

Clone the repository and install node.js modules.

```powershell
git clone https://github.com/taghead/taghead.xyz.git
cd .\taghead.xyz\
npm install
```
#### 1. Building
Lets start by obtaining the production credentials, open up [https://supabase.io](https://supabase.io) and create a new project. 

Once the project is stood up navigate to `Settings > API` to retreive the production credentials and apply it to [/src/environments/environment.prod.ts](/src/environments/environment.prod.ts). Finally whitelist the domain/ip address the website is hosted on head over to `Authentication > Settings` and change fill both Site URL and Additional Redirect URLs to your domain.

```javascript
export const environment = {
  // Edit the following
  supabase_url: 'Your Supabase URL here',
  supabase_key: 'Your Supabase API Key here'
};
```

Running the command `npm run build-prod` will build to the folder /dist.

#### 2. Development
Run `npx supabase init` and use the default ports. Once it finishes intializing you will be given local Supabase credentials. Apply the Supabase URL and Supabase Key (anon, public) to [/src/environments/environment.ts](/src/environments/environment.ts).

```javascript
export const environment = {
  // Edit the following
  supabase_url: 'Your Supabase URL here',
  supabase_key: 'Your Supabase API Key here'
};
```

Finally run `npm run start`

This will serve the website on http://localhost:4200 and emulate Supabase. 

Supabase email emulation server is on http://localhost:9000.

## 3. Additional Information
#### 3.1. Forgot TypeScript? 
Give the [/docs/typescript_refresher.md](/docs/typescript_refresher.md) a read. Hopefully, it will help you out.

#### 3.2. The project charter
Located in [/docs/project_charter.md](/docs/project_charter.md). It's nothing special, more so convention.

#### 3.3 Contributing 
Read the [CONTRIBUTIONS.md](/CONTRIBUTIONS.md)
