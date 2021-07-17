# Technical Documentation

The technical document contains documentation of actual programming components and the instructions to recreate the entire project. With every stable development its contents will be updated. For simplicity sake, if a change can be edited in rather than appended it would be good to do so.

## Preparing development environment

1. Create a GitHub repository named taghead.xyz and clone it then open the folder in a terminal.

2. Download and Install :
   - [Node.js (with npm)](https://nodejs.org/en/download/) - Used for building, development and testing.
   - [Git](https://git-scm.com/downloads) - Used for collaborative software development

3. Add Angular modules and initialaize Angular application data.
  
    `npm install -g @angular/cli`

    Generate the Angular application by running `npx ng new tagheadxyz --directory ./` and then enter the following details when prompted.
    
      >Q: "Do you want to enforce stricter type checking and stricter bundle budgets in the workspace?" 
      >
      >A: `No`

      >Q: "Would you like to add Angular routing?"
      > 
      >A: `No`
    
      >Q: "Which stylesheet format would you like to use?"
      >
      >A: `Sass`

      Optional step: It is now safe to remove angular cli since it is now a package dependency. To do this run `npm uninstall -g @angular/cli`.

4. Modify npm package information by running `npm init` then entering the following details and where no details are provided press enter to assume default value.

    ```powershell
    package name: (tagheadxyz) taghead.xyz
    version: (0.0.0) 1.0.0
    entry point: (karma.conf.js) index.js
    git repository: (https://github.com/taghead/taghead.xyz/)
    keywords: Website taghead.xyz
    author: Taghead
    license: (ISC)
    ```

    When asked "Is this OK? (yes)" enter `yes`.

5. Install Angular Material module and setup Sass theming.
   
   Run `npm install @angular/material @angular/cdk --save`

   Add the following to [/src/styles.sass](/src/styles.sass)
   ```javascript
    @import '~@angular/material/theming'
    @include mat-core()

    $dark-primary: mat-palette($mat-blue-grey)
    $dark-accent:  mat-palette($mat-amber, A200, A100, A400)
    $dark-warn:    mat-palette($mat-deep-orange)
    $dark-theme:   mat-dark-theme(( color: ( primary: $dark-primary, accent: $dark-accent, warn: $dark-warn, )))

    @include angular-material-color($dark-theme)

    $background-color-primary: #1e1e1e
    $background-color-primary-transparent: #0000006e
    $text-color-primary: #FFFFFF
    $text-color-secondary: #ffe3d7

    $main-height: 75vh

    html
      //background-color: $background-color-primary-transparent
      background:
        image: url(https://image.freepik.com/free-vector/collection-handrawn-elements-fast-food_125540-314.jpg)
        position: centre

    body
      min-height: $main-height
      height: fit-content
      background-color: $background-color-primary-transparent

    footer
      background-color: $background-color-primary
      clear: both
      position: relative
      min-height: 10vh
      height: fit-content
    ```

## Supabase
[Supabase](https://supabase.io) is a PaaS service which is used for it's Authentication, Database and Storage backend.

#### Installing and preparing development environment
Supabase requires docker, docker-compose and the supabase-js module.

- (Optionally) Install [Docker Desktop](https://docs.docker.com/desktop/)
- Install [Docker](https://docs.docker.com/engine/install/)
- Install [Docker-compose](https://docs.docker.com/compose/install/)
- Add and install supbase-js as a dependency by running `npm install @supabase/supabase-js --save`
- Add and install supabase cli as a dev-dependency by running `npm install supabase --save-dev`
#### Supabase API credentials
Some services and components require credentials consisting of Supabases API URL and API Key.

There are two versions of credentials we will be obtaining, production and testing.


##### Production Credentials
Lets start by obtaining the production credentials, open up [https://supabase.io](https://supabase.io) and create a new project. 

Once the project is stood up navigate to `Settings > API` to retreive the production credentials and apply it to [/src/environments/environment.prod.ts](/src/environments/environment.prod.ts). Finally whitelist the domain/ip address the website is hosted on head over to `Authentication > Settings` and change fill both Site URL and Additional Redirect URLs to https://taghead.xyz.

```javascript
export const environment = {
  production: true,
  supabase_url: 'Your Supabase URL here',
  supabase_key: 'Your Supabase API Key here'
};
```

##### Local Testing Credentials
Run `npx supabase init` and use the following ports:

```
√ Port for Supabase URL: · 8000       
√ Port for PostgreSQL database: · 5432    
√ Port for email testing interface: · 9000
```

Once it finishes intializing you will be given local Supabase credentials
```powershell
Supabase URL: http://localhost:8000
Supabase Key (anon, public): eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJzdXBhYmFzZSIsImlhdCI6MTYwMzk2ODgzNCwiZXhwIjoyNTUwNjUzNjM0LCJyb2xlIjoiYW5vbiJ9.36fUebxgx1mcBo4s19v0SzqmzunP--hm_hep0uLX0ew
Supabase Key (service_role, private): eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJzdXBhYmFzZSIsImlhdCI6MTYwMzk2ODgzNCwiZXhwIjoyNTUwNjUzNjM0LCJyb2xlIjoic2VydmljZV9yb2xlIn0.necIJaiP7X2T2QjGeV-FhpkizcNTX8HjDDBAxpgQTEI
Database URL: postgres://postgres:postgres@localhost:5432/postgres
Email testing interface URL: http://localhost:9000
```
Apply the Supabase URL and Supabase Key (anon, public) to [/src/environments/environment.ts](/src/environments/environment.ts)

Modify the the start script in [/package.json](/package.json) to

`"start": "supabase start && ng serve && supabase stop"`.

Finally run `npm run start`

Note: To access the email testing server navigate to http://localhost:9000

## Component and Services Development
🍉 = Component | 🥭 = Service
### 🍉 body
This component is located in [/src/app/body](/src/app/body)

To generate this component run `npx ng g c body`

### 🍉 footer 
This component is located in [/src/app/footer](/src/app/footer)

To generate this component run `npx ng g c footer`

###  🍉header 
This component is located in [/src/app/header](/src/app/header)

To generate this component run `npx ng g c header`
### 🍉 login-dialog 
This component is located in [/src/app/login-dialog](/src/app/login-dialog)

To generate this component run `npx ng g c login-dialog`
### 🥭 supabase
This service is located in [/src/app/](/src/app/) as [/src/app/supabase.service](/src/app/supabase.service) and [/src/app/supabase.spec.service](/src/app/supabase.spec.service)

## Git Workflow
The git workflow is located in [/.github/workflows/main.yml](/.github/workflows/main.yml)
