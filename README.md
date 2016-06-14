# Towers Watson Exchange Solutions JavaScript Style Guide

[![Build Status](https://travis-ci.org/TWExchangeSolutions/eslint-config-exchange-solutions.svg?branch=master)](https://travis-ci.org/TWExchangeSolutions/eslint-config-exchange-solutions)

We are extending the [Airbnb](https://github.com/airbnb/javascript) Style Guide, with overrides for
things we do not plan to prescribe to.

## Table of Contents

1. [Usage](#usage)
  1. [With React Style](#with-react-style)
  1. [Without React Style](#without-react-style)
  1. [Es5](#es5)
1. [Rules](#rules)
  1. [Commas](#commas)

## Usage

### With React Style

1. `npm install --save-dev eslint-config-exchange-solutions babel-eslint eslint-plugin-react eslint-plugin-import eslint-plugin-jsx-a11y`
2. add `"extends": "exchange-solutions"` to your .eslintrc

### Without React Style

1. `npm install --save-dev eslint-config-exchange-solutions babel-eslint`
2. add `"extends": "exchange-solutions/base"` to your .eslintrc

### ES5 - [Rule Documenation](./blob/master/ES5-README.md)

1. `npm install --save-dev eslint-config-exchange-solutions`
2. add `"extends": "exchange-solutions/es5"` to your .eslintrc

See [Airbnb's Javascript styleguide](https://github.com/airbnb/javascript), [Towers Watson Exchange
Solutions styleguide](https://github.com/TWExchangeSolutions/eslint-config-exchange-solutions) and
the [ESlint config
docs](http://eslint.org/docs/user-guide/configuring#extending-configuration-files) for more
information.

## Rules

## Commas

- [1](#commas.1) <a name='commas.1'></a> Additional trailing comma: **Nope.**

> Airbnb [states] that this rule makes git diffs cleaner, though we don't really see any significant
> value in this especially for Arrays or Objects that only have one item.

```javascript
// bad const hero = { firstName: 'Dana', lastName: 'Scully', };

const heroes = [ 'Batman', 'Superman', ];

// good const hero = { firstName: 'Dana', lastName: 'Scully' };

const heroes = [ 'Batman', 'Superman' ];
```

**[⬆ back to top](#table-of-contents)**
