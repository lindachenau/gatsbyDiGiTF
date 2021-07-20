---
template: post
title: "My Perfect JAMstack "
slug: perfect-jamstack
socialImage: /media/jamstack.png
draft: true
date: 2021-07-09T08:57:30.051Z
description: "React is a great frontend library for creating customised modern
  UI. AWS Amplify offers Authentication, storage, api and function services.
  Gatsby is a powerful React-based and GraphQL powered static site generator.
  Netlify CMS provides a SPA for creating and maintaining static content. When
  you publish the content, the data (markdown and media) are pushed to your
  Github project repository from which you can host your website on any static
  site hosting providers such as Amplify, Netlify and Vercel etc.. "
category: Web App
tags:
  - JAMstack
  - Amplify
  - Gatsby
  - Netlify
  - CMS
---
I started learning web development in 2019. Although I've benn SW/HW engineer for more than 20+ years, the concept of "full stack" was only a term I saw often in job recruitment ads. Not knowing where to start, I took several hand-on courses on Plural Sight. My first project was a static website and I was asked to use Wordpress (one of the most popular LAMP stacks). It was a good starting point to learn and practice PHP, HTML, CSS and a bit of JS. The only challenging part was using CSS tricks to match the layout design. 

The second project was a booking web app. I researched a few popular frameworks such as React, Angular and Laravel. I took several introductory courses to get the flavour of each. React 16.8 (The first Hooks stable release) was out at that time and Samer Buna (a Plural Sight instructor) convinced me that React functional components are the future. Hooks make React component life cycle so much easier to manage. After deciding using React, CRA framework seemed a a good starting point for my first PWA project. Thanks to the rich React ecosystem from which I obtained UI components (Material UI) and a major functional component (react-big-calendar). I also used AWS lambda functions to implement APIs to talk to 3rd party backend services and some support functions such as sending emails, reminder SMS and automatic booking cancellations. Thanks to Fernando Medina Corey who introduced me to serverless framework on Plural Sight and I experienced the benefit of infrastructure as code for the first time.

After my second project, I decided to use my personal website as a play ground to learn and try different React frameworks. I saw a lot of raves about Next.JS and Gatsby. To give them a try, I created a very simple personal website design using CRA first as a comparison. Converting the design to Next.JS was straightforward enough. However the build of Next.JS had a very annoying component jumping from the edge of the page to the centre on first page loading. The same component from CRA build appears at the page centre on first loading. To learn Gatsby, I needed to overcome my fear about GraphQL. A Gatsby introductory course by Marcelo Pastorino on Plural Sight helped me to get through the hurdle. It is easier to learn through good examples. I managed to get going and expanded Marcelo Pastorino's demo project into my website. At that point I really saw the advantages of using Gatsby for a static site. 

My third project was a booking website for a medical practice. The website has some static contents and also serves as a booking app for booking appointments on the medical SW for general practices. Gatsby is a perfect fit for this project. Amplify provided all my backend needs. I used Cognito for user authentication and API (GraphQL) for user's multi-patient appointment management system. When I finished the project, I realised that it was nearly impossible to maintain the static content defined in markdown format by the practice non-technical stuff. To solve this problem, I looked a few headless CMS and tried Netlify CMS and Contentful. I decided on Netlify CMS because it's free and simple.

This is my journey from LAMP Stack to JAM Stack. On the way I found my perfect combination.