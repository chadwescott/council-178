# Kofc

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Publishing to GitHub pages

First build the project with the following command `ng build --prod --delete-output-path --base-href .`. The `--base-href` option is important to get the routing working properly on GitHub. If you set the `--base-href` option to the GitHub application name, i.e. `kofc-council-178` it duplicates the path in the url (`kofc-council-178/kofc-council-178`) and omitting the `--base-href` option causes GitHub pages to look for artifacts in the root and not find them.

Run `ngh --branch=master --dir=dist/kofc --repo=https://github.com/chadwescott/kofc-council-178.git`

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
