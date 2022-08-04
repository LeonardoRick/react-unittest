# react-unittest

This project is a repo to save all different scenarios of unit tests that can be faced during development.

Walk through all .test.js files reading the comments to understand what scenarios that file approaches.

When adding a new scenario, add it here on the bellow list.

- App.js
  - Basic generated test that shows show .getByText works
- Greeting.js
  - Shows the difference between .getByText and .queryByText
  - Shows how to test a button click use userEvent
- Async.js
  - Test async calls explaining the difference between screen.find and screen.get
  - Shows how to set a timeout to async tests
  - Explain how to setup mocks on our API calls
