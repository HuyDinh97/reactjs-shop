# HOW TO RUN PROJECT

yarn install\
yarn start

## HOW TO TEST PROJECT

yarn test

## COMMON PROBLEM AND FIX 
If you get error `[eslint] Plugin "react" was conflicted between ".eslintrc.js" and "BaseConfig`\
run `yarn dedupe` or `npx yarn-deduplicate && yarn` to solve the problem

## RULE TO CODE

1. Never directly push code to `master` branche, using git-flow instead\
2. To made a change, create a new branche and work from that and create a pull request.\
3. Always write test case for component