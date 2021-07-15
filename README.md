# -autoMention

Autocomplete plugins tends to be always customizable, so you can always implement your own features. If you want an input where you write whatever you want and add an autocomplete when the user types an special character, isn't so easy to implement with an existent plugin as most of them doesn't offer such feature. If you are looking for not exactly an autocomplete that shows a dropdown for every character you type but for something specific, you may be looking for a plugin like AtWho.js !

### 1. Include AtWho.js

Every developer knows Github and it's useful issues system, well , atwho.js is an autocompletion library to autocomplete mentions, smileys etc. just like you do in the Github website on any textarea. At.js depends on the [Caret.js library](https://github.com/ichord/Caret.js), that provides an accurate handling of the cursor position during any of the events triggered by the library.

Having said that, to use the library you will need specifically at least:

1. jQuery >= 1.7.0.
2. [Caret.js](https://github.com/ichord/Caret.js) (You can use Component or Bower to install it), [or download a copy of the minified code here](https://github.com/ichord/Caret.js/tree/master/dist).
3. [AtWho.js](https://github.com/ichord/At.js.git). The autocomplete works on textareas elements on Chrome, Safari, Firefox, IE7+ (maybe IE6) and if you use it inside contentEditable elements in Chrome, Safari, Firefox, IE9+. For more information about this library, please don't forget to [visit the official repository at Github here](https://github.com/ichord/At.js). The most known features of the plugin are:

    * Support IE 7+ for textarea.
    * Supports HTML5 [contentEditable](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Content_Editable) elements (NOT including IE 8)
    * Can listen to any character and not just '@'. Can set up multiple listeners for different * characters with different behavior and data
    * Listener events can be bound to multiple inputors.
    * Format returned data using templates
    * Keyboard controls in addition to mouse
    * Custom data handlers and template renderers using a group of configurable callbacks
    * Supports AMD

### Download or Clone

Or you can [download the repo](https://github.com/shahajahancse/-autoMention/archive/refs/heads/master.zip) or clone it localy with this command:

```shell
git clone git@github.com:shahajahancse/-autoMention.git
```

You can then copy the files in the `js and css` directory to your project.

```html
<link rel="stylesheet" href="css/jquery.atwho.css" />
<script type="text/javascript" src="js/jquery.caret.js"></script>
<script type="text/javascript" src="js/jquery.atwho.js"></script>
<script type="text/javascript" src="js/main.js"></script>
```
You will need to include at least 3 JS files and 1 CSS file to make the plugin work, the basic CSS style that can be found on the repository

The `js/main.js` is Example file. So this file customize to your need.
That's it! Now you are ready to initialize autoMention.

### Basic user autocomplete
The most used example, is the user mention autocomplete that can be triggered when the user types `@`, then the autocomplete shows up and the user can either select the user from the list or just type its name until it's filtered, then pressing either ENTER, TAB or Click the item is selected.

If you are willing to implement multiple autocompletes inside a single input, you can achieve as long as every initializer uses a different at property e.g `:`, `!`, `@` etc.

### Demo
`Live Example [here](https://shahajahancse.github.io/-autoMention/).
Play with the following fiddle that implements an useful autocomplete to write emojis, mention some user and Country:
