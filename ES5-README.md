# Towers Watson Exchange Solutions JavaScript Style Guide

We are extending the [Airbnb](https://github.com/airbnb/javascript) Style Guide,
with overrides for things we do not plan to prescribe to.

## Table of Contents

1. [Usage](#usage)
  1. [With React Style](#with-react-style)
  1. [Without React Style](#without-react-style)
  1. [Es5](#es5)
1. [Rules](#rules)

## Usage

### With React Style

1. `npm install --save-dev eslint-config-exchange-solutions babel-eslint eslint-plugin-react`
2. add `"extends": "exchange-solutions"` to your .eslintrc

[ESNext Rule Documenation](https://github.com/TWExchangeSolutions/eslint-config-exchange-solutions);

### Without React Style

1. `npm install --save-dev eslint-config-exchange-solutions babel-eslint`
2. add `"extends": "exchange-solutions/base"` to your .eslintrc

[ESNext Rule Documenation](https://github.com/TWExchangeSolutions/eslint-config-exchange-solutions);

### ES5

1. `npm install --save-dev eslint-config-exchange-solutions`
2. add `"extends": "exchange-solutions/es5"` to your .eslintrc

See [Airbnb's Javascript ES5 styleguide](https://github.com/airbnb/javascript/tree/master/es5),
[Towers Watson Exchange Solutions
styleguide](https://github.com/TWExchangeSolutions/eslint-config-exchange-solutions)
and the [ESlint config
docs](http://eslint.org/docs/user-guide/configuring#extending-configuration-files)
for more information.

## Rules

**[⬆ back to top](#table-of-contents)**
