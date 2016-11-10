# GL Ryan Jewellers

This a a very lightweight static website for Ryan Jewellers that is all browser based.

The goal is to create a stylish static website that requires no hosting.
All content is client-based.

For usual suspects that require server components like email, I suggest
redirecting to the social media sites of the company and allowing them to handle
that aspect.

in a word... simples.

## Demo

To see this working live goto [http://glryan-jewellers.github.io/](http://glryan-jewellers.github.io/)

## Local Development

To develop locally this site uses nodejs to serve up the static site.
... or your own technique to serve it up, it's just a client side app.

Install node and run the following commands.

``` bash
npm install
npm start
```

Open browser on address http://localhost:8900/

## Deployment

Any changes made to the master branch will be avalable on http://glryan-jewellers.github.io/

To make this site live. It needs to be routed from www.ryanjewellers.ie to github.
This is managed in Amazons Route53 where I have the DNS set up.
