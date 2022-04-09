# Tale-js
Tale-js is an interactive story maker, that allows you to write a story using JavaScript logic controls.

There are a few requirements:
```
// For formatting purposes
<script src="https://cdnjs.cloudflare.com/ajax/libs/markdown-it/12.3.0/markdown-it.min.js" integrity="sha512-q1tclxbgrDhFhGp/i9mnxITl2FQ3TCfwNj0mZ1r2USwj9WNXBpQ1au4HOBdAq8LXXWFIcsW+5dsdFHyVdk10AQ==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.3.1/styles/default.min.css">
<script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.3.1/highlight.min.js"></script>

//include Tale
<script src = "tale.js"></script>

//Load your book file
load_book("book.json")
```

# Documentation
Tale-js interacts with 2 page elements, an element which displays your text (markdown formatted) called #page, and the body background image (to set chapter themes). You need a #page element, so text can be printed to the user.

## Formatting
Tale-js books are in JSON, with a key for each chapter/location. JSON does not allow multi-lined strings. Your JavaScript will have to be minified into a single string.

The start of the book is called `index`. That's where Tale-js will begin when first opening your book file.

## functions

Tale-js uses several short functions to for ease of use.

### Printing
Printing to the #page element is quite simple. All you do is use the ```.out()``` method on your string. Your string is processed for markdown, before being shown to the user.

### Input
Ask the user questions with ```input(value, placeholder)```. Answers provided by your users are stored in localStorage under the value you've provided.

### Background
Tale-js lets you set the mood for a certain chapter by changing the body background of the page you're on via ```background(url)```.

### Clear
```clear()``` clears all text in the #page element.

### Goto
You may change pages at any time with the ```goto(page)``` function. Just make sure your book actually contains the page.

### Storage
Tale-js offers direct access to storage with short functions: get and set

#### Set
```set(key, value)``` sets a key in localstorage to the given value.

#### Get
```get(key)``` returns said value.
