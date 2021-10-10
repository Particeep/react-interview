# Movies app

Movies app developed with ReactJS using Redux Toolkit showing a list of movies, the user may filter them by type, like/dislike movies, and decide how many movies can be showed per page.

**⚠️ movies.js is in the src folder.**

**⚠️ A strong emphasis had been on producing a clean, well-structured code with isolated components and state management.**

Viewable here: **https://YHADJRABIA.github.io/movies-app/**

## Setup:

#### Installation:

From root folder

```
npm install
```

#### Use:

```
npm start
```

## Features:

- Fully responsive mobile-first app displaying a list of movies.
- Rating feature for each movie, leading to the update of the movie's like/dislike ratio.
- Filtering feature by movie category.
- Possibility to remove a movie, this will trigger a notification, if no more movies remain — an svg may be displayed.
- Pagination feature.
- Choosing how much movies to display per page.
- Loading animation to handle asynchronous actions when the promise is being resolved.
- Lazy-loading images for better performance (commented out, but can be enabled by removing the comments).

## Technologies:

- ReactJS (with hooks).
- Redux Toolkit.
- Sass using 7-1 pattern.
