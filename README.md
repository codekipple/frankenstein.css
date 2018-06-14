![frankenstein](https://farm3.staticflickr.com/2147/1538953234_59b4799eab_m.jpg)

[Image source](https://www.flickr.com/photos/tom-margie/1538953234/)

# frankenstein.css

I have enjoyed using various css frameworks but there are always parts I don't need. **frankenstein.css** is my own personnel css framework.

It's unashamedly a mish (monster) mash of other css frameworks that i find useful when building websites (I will endeavor to give credit to which frameworks i stole from).

## Features

### Namespaces

The tactic of namespacing parts of the css has been talked about by various people. This css is following the namespace guideline as set out by [Harry Robberts](http://csswizardry.com/2015/03/more-transparent-ui-code-with-namespaces/).

#### BEM

BEM like class names have been used, read more about that in Harry Robbert's article [MindBEMding – getting your head ’round BEM syntax](http://csswizardry.com/2013/01/mindbemding-getting-your-head-round-bem-syntax/)

### ITCSS
The CSS architecture follows a specific structure as set out by Harry Roberts in his [talk on ITCSS](https://www.youtube.com/watch?v=1OKZOV-iLj4)

### OCSS
Object orientated CSS principles are used. The '3.objects' folder contains all the objects.
[OCSS](https://github.com/stubbornella/oocss/wiki) was created by Nicole Sullivan.

## Why not just use an existing framework?

Frameworks are great and I use them all the time. They are especially great for prototyping and learning. With that said when I'm building a new site I've come to prefer to know every single line of CSS I use. I like to be able to justify every line and know the reason for it.

There are different parts in all of the CSS frameworks I've tried that I've liked so restricting myself to using only one framework was not working out so well thus frankenstein was born (created, muhaha).

## Should i use this framework?

No.

I reserve the right to chop and change the framework as I see fit to suite the way I'm currently working.

I would recommend just browsing through the framework and using it as a learning tool or to create your own **frankenstein**.

## Who did you steal from most?

* [inuit.css](https://github.com/csswizardry/inuit.css/)
* [SUIT](https://github.com/suitcss/suit)

## Dependencies
Sass for preprocessing. I would also recommend something like [autoprefixer](https://github.com/ai/autoprefixer). I'm using **autoprefixer** myself so all CSS is included prefix free because **autoprefixer** is adding them in for me.

* **Sass**
* **autoprefixer**

## Compiling and running this repo
* `npm install`
* `npm run watch`
