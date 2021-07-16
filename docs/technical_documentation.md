# Technical Document

The technical document contains documentation of actual programming components, with every stable development the contents will be updated.

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

5. 
