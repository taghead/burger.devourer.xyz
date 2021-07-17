Contributions are made by members of this repository as a member, please ensure the established criteria is being followed. 
If clarification is required, create an issue using the label **question**.

## Important Instructions
The following commands will ensure that secrets don't get revealed to the public.

```powershell
git update-index --skip-worktree .\src\environments\environment.prod.ts
git update-index --skip-worktree .\src\environments\environment.ts
```

## Requesting a issue 

Request an issue using the label **feature** and provide details. No formailties required.

Once the feature is approved, it will become available on clickup for the assignee to tackle.

## Getting Assigned to a feature branch

If you are not assigned to a feature, head over to the clickup board and look for a feature that does not have an assignee. 

Create a issue and use the label *assign* providing details on the feature and assignee.

## Working on a feature branch

To get started, clone the repository to tackle an assigned feature.

Head over to the Project Board on Clickup > Click on the task/subtask > Click the github icon. 

This will automatically generated code snipits for you.

Begin by clicking on *Create & Checkout a new branch*. 

For Example:

`git checkout -b "CU-32u7m4_Create-Development-Environment_Andrew"`

Then use *Link a single commit* as a reference for your commits, the message can be changed. However, ensure the TaskID and - **remain** the same. 

For Example: 

`git commit -m "CU-32u7m4 - Create Development Environment"` 

`git commit -m "CU-32u7m4 - Made Dev Environment"`

Once done create a pull request. 

## Pull Request Process
- Either Git ignore or remove dependencies. 
- Increase the version numbers in package.json.
- Ensure the target branch is the main branch. Main will always contain the latests merged development code.

## Build and Tag Release
Create a pull request from development to release and tag the commit to initiate the git build workflow. 

example tagging. 

```bash
git add .; git commit -m "Release"; git push
git tag -a v0.1 -m "v0.1 Initial build workflow testing"
git push origin v0.1
```
