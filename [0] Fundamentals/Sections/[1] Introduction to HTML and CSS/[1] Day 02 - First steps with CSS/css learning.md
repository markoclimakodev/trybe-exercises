# CSS: A Styling Language for Web Development

CSS (Cascading Style Sheets) is a styling language used for the visual customization of a website. It serves to optimize the content of web pages and allow for a more user-friendly presentation.
<br>
<br>

# Complementing HTML

CSS complements HTML, which is only responsible for structuring and marking the main components of web pages. Therefore, to understand CSS, one must know HTML.

HTML creates the order of elements and the basic shape, like a skeleton, and CSS is what makes the website visually appealing, like the body and clothes we wear. Its creation was motivated precisely by the need for more styling and also by the limitation of applying customizations with HTML files.
<br>
<br>

# Visual Information

Style sheets work with a large set of visual information, such as:

- Fonts
- Colors
- Grids
- Positioning of elements
- Relationship between components
- Borders
- Margins
- Shadows

Before the creation of a styling language, if a developer wanted to change all of these things, they would have to edit the code of each HTML file individually. Since a website is usually composed of numerous files and pages, inserting small visual configurations into each of them consumed a very large amount of time and effort from teams.
<br>
<br>

# The Birth of CSS

In 1994, Håkon Wium Lie presented CSS as an organized tool that deals with the problem of time and effort consumption while styling web pages. It solves the problem in a simple and practical way.

CSS is an essential part of modern web development and is used alongside HTML and JavaScript to create engaging, responsive, and user-friendly web pages.

<br>
<br>

# Ways to add CSS to a web page

- Inline CSS: Inline CSS is added directly to an HTML element using the style attribute. For example, `<h1 style="color: red;">Hello World!</h1>` sets the color of the `<h1>` element to red. Inline CSS can be useful for making quick style changes, but it can make the HTML code harder to read and maintain.

- Internal CSS: Internal CSS is added to the head section of an HTML document using the `<style>` tag.

```html
<head>
  <style>
    p {
      color: red;
    }
  </style>
</head>
```

- External CSS: External CSS is added to an HTML document using a separate CSS file. The CSS file contains all the styles for the web page, and the HTML document references the CSS file using the `<link>` tag. For example:

```html
<head>
  <link rel="stylesheet" href="style.css" />
</head>
```


