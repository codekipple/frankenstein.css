![frankenstein](https://farm3.staticflickr.com/2147/1538953234_59b4799eab_m.jpg)

[Image source](https://www.flickr.com/photos/tom-margie/1538953234/)

# frankenstein.css – 1.0.0-beta

I have enjoyed using various css frameworks but there are always parts i don't need. **frankenstein.css** is my own personnel css framework.

It's unashamedly a mish (monster) mash of other css frameworks that i find useful when building websites (I will endeavor to give credit to which frameworks i stole from) as well as things that are peculiar to my way of working.

## Goals

* BEM like class names
* Reduce CSS by using more classes in HTML.

## Why not just use an existing framework?

Frameworks are great and i use them all the time. They are especially great for prototyping and learning. With that said when i'm building a new site i've come to prefer to know every single line of css i use. I like to be able to justify every line and know the reason for it.

There are different parts in all of the css frameworks i've tried that i've liked so restricting myself to using only one framework was not working out so well thus frankenstein was born (created, muhaha).

## Should i use this framework?

No.

I reserve the right to chop and change the framework as i see fit to suite the way i'm currently working. I'll try to stick to [semvar](http://semver.org/) versioning but i think it will be hard as i will be adding and removing bits often.

I would recommend just browsing through the framework and using it as a learning tool or to create your own **frankenstein**.

## Who did you steal from most?

* [inuit.css](https://github.com/csswizardry/inuit.css/)
* [SUIT](https://github.com/suitcss/suit)

## Browser support

* Google Chrome (latest)
* Opera (latest)
* Firefox (latest)
* Safari (latest)
* Internet Explorer 8+

## Dependencies
Sass for preprocessing. I would also recommend something like [autoprefixer](https://github.com/ai/autoprefixer). I'm using **autoprefixer** myself so all css is included prefix free because **autoprefixer** is adding them in for me.

* **Sass 3.2**
* **autoprefixer**