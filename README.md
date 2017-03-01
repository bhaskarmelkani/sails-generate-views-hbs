# sails-generate-views-hbs

A `views-hbs` generator for use with the Sails command-line interface.

Certain generators are installed by default in Sails, but they can be overridden.  Other generators create entirely new things.  Check the [Sails docs](http://sailsjs.org/#!documentation) for information on installing generator overrides / custom generators and information on building your own generators.

[![Dependency Status](https://david-dm.org/bhaskarmelkani/sails-generate-views-hbs/status.svg?style=flat)](https://david-dm.org/bhaskarmelkani/sails-generate-views-hbs)&nbsp;&nbsp;&nbsp;&nbsp;[![npm version](https://img.shields.io/npm/v/sails-generate-views-hbs.svg)](https://badge.fury.io/js/sails-generate-views-hbs)&nbsp;&nbsp;&nbsp;&nbsp;[![GitHub issues](https://img.shields.io/github/issues/bhaskarmelkani/sails-generate-views-hbs.svg)](https://github.com/bhaskarmelkani/sails-generate-views-hbs/issues)

### 1. Installation

```sh
$ npm install sails-generate-views-hbs
```


### 2. Usage

##### On the command line

```sh
$ sails generate views-hbs
```


### 3. Configuration in sails.
#####File to update:- config/views.js
Update the file as follows.

```js
module.exports.views = {

engine: {
    ext: 'handlebars',
    fn: require("consolidate").handlebars
  },

layout: 'layouts/layout',

partials: 'partials/'

};
```

That is it. Now sails should compile the handlebars files and serve it to you.

### Development

To get started quickly and see this generator in action, ...

Also see `CONTRIBUTING.md` for more information on overriding/enhancing existing generators.



### Questions?

See `FAQ.md`.



### More Resources

- [Stackoverflow](http://stackoverflow.com/questions/tagged/sails.js)
- [#sailsjs on Freenode](http://webchat.freenode.net/) (IRC channel)
- [Twitter](https://twitter.com/sailsjs)
- [Professional/enterprise](https://github.com/balderdashy/sails-docs/blob/master/FAQ.md#are-there-professional-support-options)
- [Tutorials](https://github.com/balderdashy/sails-docs/blob/master/FAQ.md#where-do-i-get-help)
- <a href="http://sailsjs.org" target="_blank" title="Node.js framework for building realtime APIs."><img src="https://github-camo.global.ssl.fastly.net/9e49073459ed4e0e2687b80eaf515d87b0da4a6b/687474703a2f2f62616c64657264617368792e6769746875622e696f2f7361696c732f696d616765732f6c6f676f2e706e67" width=60 alt="Sails.js logo (small)"/></a>


### License

**[MIT](./LICENSE)**
&copy; 2017 [balderdashy](http://github.com/balderdashy) & contributors

As for [Sails](http://sailsjs.org)?  It's free and open-source under the [MIT License](http://sails.mit-license.org/).

![image_squidhome@2x.png](http://i.imgur.com/RIvu9.png)
