# Frontend Mentor - Profile card component solution

This is a solution to the [Profile card component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/profile-card-component-cfArpWshJ). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)


## Overview

### The challenge


  - Build out the project to the designs provided

### Screenshot

![](/assets/images/business-card-fs.jpg)
#
![](/assets/images/business-card-mobile.jpg)
#
![](/assets/images/business-card-mobile-ls.jpg)


### Links

- Solution URL: [Here](https://replit.com/@DaveJH/BusinessCard-Explain#profile-card-component-main/jargon/README.md)
- Live Site URL: [Here](https://BusinessCard-Explain.davejh.repl.co)

## My process

#### This is the first HTML and CSS work I have done.

- Constructed a basic HTML structure to 'house' everything.
- Began styling from background first.  
  - Have learned about positioning, so used that to get everything looking ok.
  - Found some values gave funny results as I moved through HTML doc.
  - Persevered to get visual correct.
- Found mobile view was awful!
- Re-worked CSS to use relative values etc.
- Really looked into the interaction between everything.
  - Made mobile view much more pleasing (white footer bar intentional at bottom to show difference)
  - Added alternative photo for mobile view.
  - Set a message for landscape/too small height.
- Got very frustrated along the way.
- Added LinkedIn profile to link at bottom.


### Built with

- HTML
- CSS

Very early learning!

### What I learned

Really got to grips with the relationship between parent/child when using relative and absolute position.  Realised there are many other ways to style the text into the correct place.  Believe my work may give an OK looking end product but I am not certain it follows any normal formats!!


```html
<span id="likes" class="social bold">803K
  <span>Likes
  </span>
</span>
```
```css
.#image-ball {
  /* size and border and circle and image */
  height: 120px;
  width: 120px;
  border-radius: 65px;
  border: 5px solid white;
  background-image: url("../images/portrait.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  /* align within circle 'space' made above */
  background-position: -20px 0;
  /* set right edge [blank from image] color */
  background-color: #0f5050;
  /* allows 'fake floating' */
  position: absolute;
  /* sets position of ball */
  left: 90px;
  top: 60px;
  /* brings to front [renders before details] */
  z-index: 5;
}

```
```js

```


### Continued development

Better structure of content within the HTML document.  I think that would allow quicker styling and be far easier to work with!  Really enjoyed a first project but have a long way to go!

#### What is a favicon?!

Need to research this completely.

### Useful resources

- https://codeinstitute.net/
  - I am just starting a full stack developement diploma with these guuys.  So far, so good!


## Author

- Website - [LinkedIn](https://www.linkedin.com/in/davejhorrocks/)
- Frontend Mentor - [@DaveyJH](https://www.frontendmentor.io/profile/DaveyJH)


## Acknowledgments

I have to thank Code Institute, their course has been very well constructed so far and has give me a really great insight into coding.  Really looking forward to the year ahead after these first weeks.
