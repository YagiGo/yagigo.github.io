# A complete refactoring of the jQuery-Bootstrap centered resume page
This is a resume page originally composed with good-old jQuery, vanilla JavaScript and bootstrap almost three years ago.
We all know how that went down, so... I rewrote this thing with React, just like everyone likes nowadays.

[Check Page Here](https://yagigo.github.io/)

![overview](https://user-images.githubusercontent.com/18433596/151704095-02d0ab6c-ce04-4f18-8b95-e27c6cb288e2.PNG)

## Features
A complete rewrite from Bootstrap-jQuery based page to react-based SPA. All animations and elements are 
rewritten with react components.



Note: css parts have not been modularized yet.

## Dependencies
- Fontawesome: icons and fonts
- gh-pages: for hosting the page on github
- react-bootstrap: boostrap components for react.
- react-scroll: animation

## How to run this
you know the drills

`yarn`

`yarn start`

`yarn test`

`yarn build`

TODO: planning on using eslint with prettier for code styling check

## Deploy on GitHub
This project uses github-pages for automated deployment. To deploy, first run `yarn build`
and then `yarn deploy`. GitHub access token is required if not setup in advance.
## Credit
The style was forked from [here](https://github.com/StartBootstrap/startbootstrap-resume). Thanks for this simple and 
straightforward design :)
