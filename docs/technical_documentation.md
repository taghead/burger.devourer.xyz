# Technical Document

The technical document contains documentation of actual programming components and the instructions to recreate the entire project. With every stable development its contents will be updated. For simplicity sake, if a change can be edited in rather than appended it would be good to do so.

## Preparing development environment

1. Create a GitHub repository and clone it then open the folder in a terminal.

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
## Component and Services Development
🍉 = Component | 🥭 = Service
### 🍉 body
This component is located in [/src/app/body](/src/app/body)

### 🍉 footer 
This component is located in [/src/app/footer](/src/app/footer)

###  🍉header 
This component is located in [/src/app/header](/src/app/header)

### 🍉 login-dialog 
This component is located in [/src/app/login-dialog](/src/app/login-dialog)

### 🥭 supabase
This service is located in [/src/app/](/src/app/) as [/src/app/supabase.service](/src/app/supabase.service) and [/src/app/supabase.spec.service](/src/app/supabase.spec.service)
