# @typescript-eslint/require-await
## Reproduction

```sh
npm i
npm run lint
```

## Result

```sh
% npm run lint

> lint
> eslint './**/*.@(?(m|c)@(j|t)s|@(j|t)sx)'


Oops! Something went wrong! :(

ESLint: 8.34.0

TypeError: Cannot read properties of undefined (reading 'type')
Occurred while linting /xxx/moist/src/main.ts:1
    at Array.<anonymous> (/xxx/moist/node_modules/esquery/dist/esquery.min.js:1:29469)
    at /xxx/moist/node_modules/esquery/dist/esquery.min.js:1:29985
    at /xxx/moist/node_modules/esquery/dist/esquery.min.js:1:30512
    at Function.b.matches (/xxx/moist/node_modules/esquery/dist/esquery.min.js:1:34848)
    at NodeEventGenerator.applySelector (/xxx/moist/node_modules/eslint/lib/linter/node-event-generator.js:296:21)
    at NodeEventGenerator.applySelectors (/xxx/moist/node_modules/eslint/lib/linter/node-event-generator.js:324:22)
    at NodeEventGenerator.enterNode (/xxx/moist/node_modules/eslint/lib/linter/node-event-generator.js:340:14)
    at CodePathAnalyzer.enterNode (/xxx/moist/node_modules/eslint/lib/linter/code-path-analysis/code-path-analyzer.js:795:23)
    at /xxx/moist/node_modules/eslint/lib/linter/linter.js:1153:32
    at Array.forEach (<anonymous>)
```

