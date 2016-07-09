# hamburger-icon-animate

*Minimalist CSS3 hamburger animation*

![Example GIF](hamburger-icon-animate.gif)

This is a little bit of code to add an animation to the hamburger icon. The bulk of the animation is powered by CSS3 keyframes and raw JavaScript is used to control when each animation is run.

## Install

**bower**

```
$ bower install hamburger-icon-animate --save
```

**npm**

```
$ npm install hamburger-icon-animate --save
```

## Usage

Now that you've installed the plugin, load the script via whichever method you prefer. If you are using bower you might do something like this:

```html
<link rel="stylesheet" href="/bower_components/hamburger-icon-animate/css/hamburger-icon-animate.css">
<script src="/bower_components/hamburger-icon-animate/js/hamburger-icon-animate.js"></script>
```

Define the hamburger like this:

```html
<div class="hia-hamburger">
  <div data-bar="1" class="hia-bar"></div>
  <div data-bar="2" class="hia-bar"></div>
  <div data-bar="3" class="hia-bar"></div>
</div>
```

Activate the hamburger like this:
```js
hamburgerIcon();
```

Take a look at the [example over here](example/index.html).


*Let me know of any issues or simply <a href="mailto:nymanchristine@gmail.com?Subject=hamburger" target="_top">say hi</a>.*
