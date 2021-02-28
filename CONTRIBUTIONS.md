Contributions are made by members of this repository as a member please ensure your are following the established criteria. If there is clarification required create an issue using the label *question*.

## Requesting a feature 

Create a issue requesting using the label *feature* and provide details. No formailties required.

Once the feature is approved it will become available on clickup for the asignee to tackle.

## Getting Assigned to a feature 

If you are not assigned to a feature head over to the clickup board and look for a feature that does not have an assignee. Create a issue and use the label *assign* providing details on the feature and asignee.

## Working on an feature

To tackle a feature you are assigned to begin by cloning the repository.

Head over to the Project Board on Clickup click on the task (or subtask) then click the github icon. This will automatically generated code snippits for you.

Start off by running the *Create & Checkout a new branch*. Example.

`git checkout -b "CU-32u7m4_Create-Development-Environment_Andrew"`

Then use *Link a single commit* as reference for your commits, you may change the message but ensure the TaskID and - remain the same. Example. 

`git commit -m "CU-32u7m4 - Create Development Environment"` 

`git commit -m "CU-32u7m4 - Made Dev Environment"`

Once done create a pull request 

## Pull Request Process
- Either Git ignore or remove dependencies. 
- Increase the version numbers in package.json.