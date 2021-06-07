# courtcall-ui-v3

This application serves as the UI for v3 of our application.

## Packages and Libraries

- Vue - We are using VueJS 2.x for this release. Unfortunately, VueJS 3 support was still very much half baked when we started this application.
- Typescript - Our entire codebase is in Typescript. This allows us to catch more bugs and write cleaner code than we would be able to in JS
- Vuex - Vuex is the default Redux implementation for Vue. We will be making extensive use of it to store and convey states to different components.
- Sass/SCSS - We use SCSS styling in our application. Honestly we aren't doing anything crazy with it. We will mostly be using it for variables and nested styling
- Inversify - Unlike Angular, Vue does not have native dependency injection that can hold state. Mixins, for the record, are stateless. They also don't play well with typescript. As a result we use inversify for dependency injection. It has a lot of boilerplate, but ultimately gets the job done.
- Vuetify - vuetify is a component library based of Material Design. Despite being for Vue, it's arguably better than Google's official library for Angular. The one knock is that their datatables are fairly basic, but we're not doing anything ridiculous anyway
- @mdi/font - vuetify takes advantage of the open-source material design icon library
- vue-i18n - All text in this application goes through a translation matrix. This will allow us to swap out languages easier if we ever decide to expand internationally. vue-i18n is the library that accomplishes this
- vue-toastification - This is our toast library. We will use this for the various notifications that pop up. We will be routing all notifications through toastService so that we can apply consistent styles toasts.
- Eslint/Prettier - We use a combination of eslint and prettier for code formatting and linting. Compile time errors do most of the work, but please try to keep warnings in mind.

## Project setup

- Set your IDE to format on save
- Run `npm install`
- Run `npm run serve` and point your browser at `localhost:4200` to begin development

## Class Component Syntax

There are multiple ways to build a Vue application. We use typescript classes with component annotations. While the traditional Vue object pattern can be accessed via fields of the object inside the component annotation, it should be avoided unless absolutely necessary.

## Vuex

We use Vuex as out state management tool. To keep sanity, we create different modules for different parts of our state. Modules are expected to be namespaced to keep the state a bit more organized and prevent collisions between module fields. This does mean that getters will only have access to the state inside their module. The general rule of thumb to the creation of Vuex modules vs storing state on the component is this: If the data is updated via WSS from the backend or used in multiple places, create a Vuex module for it. Otherwise, hardcode the data in the object definition (seen with `background-option.ts`) or store data retrieved via RESTful API calls in the component itself.

## Vue-i18n

While there are no concrete plans to develop CourtCall in a non english-language format, product wanted to make sure it was possible should the need arise. As such, all text must run through a translation matrix. Instructions can be seen on vue-i18n's homepage, but in general the translation runs as such: `$t('path.to.translation)`. Furetheremore, translations are broken up on a per component level for ease of organization and readability within the code. You can find examples in `plugins/i18n/en-us`.

## Accessibility

By law, we are required to adhere to accessibility standards. However, this is extremely opaque considering we are a video application. As of now, there are no formal accessibility standards for this application. However, you should always include title tags and alt-text on images.

## Component Size

While some components will become large, you should do your best to keep component size to a minimum. This will allow us to maintain and build on the application in a much more sane way. For examples, look into the control bar component.

## Inversify Services

While Vue has native support via MixIns, they have some issues. Mixins cannot hold state. While some of our shared logic is stateless, others (such as background blur and our wss service) require state. Furetheremore, VueJS mixins don't appear to be type safe. As such, we use inversify to define services and inject them into vue components. Examples can be found in the `inversify` and `services` folder.

## PR Policy

Any developer is free to make as many feature branches (under `feature/x`) as they wish. However, all merges to master must be submitted via PR and approved by the UI Team Lead (Michael Sila). Developers are also encouraged to ask frequent questions should the need arise.
