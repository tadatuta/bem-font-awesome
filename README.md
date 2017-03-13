# bem-font-awesome

BEM port of [Font Awesome](http://fontawesome.io).

## Content
```
fa/
    fa.css # common styles
    _icon/
        fa_icon_500px.css
        fa_icon_address-book-o.css
        fa_icon_address-book.css
        fa_icon_adjust.css
        fa_icon_adn.css
        # and so on
```

## Installation

1. Add the library to project dependencies:
    ```
    npm i bem-font-awesome --save
    ```
2. Add it as [redefinition level](https://en.bem.info/methodology/key-concepts/#redefinition-level)

You're done :)

## Usage

### BEMJSON
```js
{ block: 'fa', mods: { icon: '500px' } }
```

### HTML
```html
<span class="fa fa_icon_500px"></span>
```
