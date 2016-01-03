# react-isomorphic

This is the demo of isomorphic webapp using React + NodeJS

ReactJS and NodeJS code written with ES6 and built with Babel and Webpack.

*Reference*: https://24ways.org/2015/universal-react/

---

### What is Isomorphic?

Isomorphic? No, I am not talking about "isomorphic" in mathematics, but what I am talking about is very similar in idea. I am talking about Javascript web application that is rendered on both server-side and client-side, and it produces the same result.

Isomorphic Javascript web application gets rendered on the web server, then the rendered bundle of HTML + CSS + JS (+ data if any) is piped down to the client browser and is displayed. Once on the client browser, the pre-rendered web application is display, the client JS bundle will be downloaded and executed and takes over the rendering and functioning of the web application from the point the server discontinued.

It is a kind of hybrid between traditional server-side rendering web application written in PHP or ASP.NET or JSP, and client-side rendering web application written in JS frameworks such as AngularJS 1.x or BackboneJS or EmberJS.

### Benefit of Isomorphic?

Before isomorphic JS innovation, there are only two choices: either a web app that is server-side render only (and can work even for clients with JS disabled), or a web app that is client-side rendered only (and cannot work for clients with JS disabled or limited JS capabilities, such as mobile devices).

Server-side rendering web app written in technologies like ASP.NET, JSP or PHP, plus jQuery and AJAX API calls has a problem: whenever the user would like to go to another page, it needs to send a request to the server and the whole thing gets reloaded.

Client-side rendering web app written in technologies like AngularJS 1.x, BackboneJS and so on has a problem: the very first time when a user requests for the web app takes a huge amount of time to download a big JS bundle and others necessary stuff and RESTful API calls to start rendering the web app and get it works.

Isomorphic JS solves the long-time problems of the traditional JS frameworks, bringing the good parts together from both server-side rendering and client-side rendering: code re-use, first-time loading time, work with JS disabled and SEO.

##### Code Re-use

Isomorphic JS use the same code base for both client and server. In fact, the client code is a subset bundle of the server's, containing only the necessary code to pick up and continue rendering the web application from where the server left off. Therefore, developers only need to write the code once in one place, then the building process will take care of taking the correct subset to make the client bundle.

##### Fast first-time loading

Traditional JS web application always consumes a significant amount of time for the first-time loading, since it has to download everything it needs before starting to render things, plus the time for calling and receiving data from subsequent REST API calls. Lots of efforts have been made to solve this issue, such as using on-demand loading modules, like RequireJS, or a cheating method of including a small amount of data needed to render the app. Isomorphic JS solves the issue in a nice way: render the app right on the server and inject necessary data into, then pipe all down to client, so when client receive the bundle, it has everything it needs to display the page right away without any further API calls or JS bundle download.

##### Still work with JS-disabled clients

With JS disabled, traditional client-side rendering web app which relies entirely on JS to do magic things will fail completely. A web app written in isomorphic JS, in such cases, will silently fall back to server-side rendering and continue to work without any problem.

##### SEO friendly

Because any web request will receive full rendered HTML just like a normal server-side rendered web page and not a bunch of JS bundle in case of traditional JS, it also helps the web application become friendly to search engines (most of search engines still expects static HTML content).

### Why isomorphic with ReactJS + NodeJS?

I have been playing around and using AngularJS in production for the past two years working as a full stack web developer. I see that AngularJS, despite being very magic and powerful, lacks of isomorphic capability (AngularJS 2.x will solve this, but it is still in very early alpha phase at the moment) and has performance issue with its digest circle and a little bit of conservative (everything has to be done in AngularJS way or else disaster would very likely to happen, sooner or later!). I see that ReactJS render faster than AngularJS. And last but not least, I would like to try ReactJS!!

Rendering ReactJS on the server can be done using NodeJS or Ruby on Rails. But because I am a full stack web developer and has been sticking with JS for a while, so I choose to go with NodeJS. (In engineering a web application system, there are things for considering on which server-side technology is best fitited. NodeJS is not one-thing-fit-all, so be alert!)

##### Reading List

1. http://isomorphic.net/
2. https://24ways.org/2015/universal-react/