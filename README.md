# Timothy Williams' Portfolio Website
This project is a portfolio website created to give a little bit of insight into who I am, what technologies I work with, and what projects I have completed. However, the site can be adapted to the needs of anyone as it utilizes a CMS backend that can be created and changed by anyone.

## Table of Contents
- [Tech Stack](#tech-stack)
- [Installation and Setup](#installation-and-setup)
- [Setup](#setup)
  (optional)
- [Deployment](#deployment)
- [Contributors](#contributors)

## Tech Stack
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Sanity](https://img.shields.io/badge/S-Sanity-red)
![Next JS](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)

#### Installation and Setup
* Fork and clone github repo onto local machine
* Firstly, install the sanity cli globally, run:
```bash
npm install -g @sanity/cli
```
* cd into the sanity folder and run:
```bash
npm install
```
* Then, go back and cd into the App folder to do the same.
* Then, create a .env file and copy the contents of env.example over
* Go to sanity.io and create an account
* Navigate back into the sanity folder
* When you try to do anything through the sanity command line, it should have you login using the account you just created and attach the sanity project to one in your account, you'll have to create one to attach it to.
* Still in the sanity folder run:
```bash
npm run dev
```
* Then, visit https://localhost:3333/ to checkout your newly created Sanity studio.
* Upload all the data you want!
* Navigate back into the App folder and go into the .env file and change the project id to the project id of your corresponding project on sanity.io. And if you'd like you can put production for the dataset.
* Then, run:
```bash
npm run dev
```
* this will start your next.js server in dev mode and you'll see all the information you uploaded

#### Deployment
* First, install the vercel cli globally by running:
```bash
npm i -g vercel
```
* Then, go into you sanity folder and run the command:
```bash
npm run deploy
```
* This will deploy your sanity project so that it no longer has to run from your local machine.
* You can close out of any local sanity hosts, because it is now all deployed.
* Navigate to your project on sanity.io and click on the sanity studio button. There is your studio all set up and deployed.
* Now, you can either deploy through vercel by going to the website and walking through their tutorial online, or you can deploy through the command line. and walk through the deployment that way. I will show some command line for this one.
* So, go into your App folder on your local repo and run:
```bash
vercel deploy
```
* This will pull up their command line deployment. You can also do this in the root directory, but you would just end up choosing the App folder as the location of the deployment anyways, so either works.
* Then, walk through their tutorial selecting ./ for the root folder to deploy and adding the necessary environment variables and voila, It is deployed!
* If you want now, you can connect a domain to the deployment through DNS or custom name servers, Vercel's website is extremely informative about those connections.

## Contributors
<a href="https://github.com/Bornean-Orangutan/Ratings-and-Reviews-API/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=Bornean-Orangutan/Ratings-and-Reviews-API" />
</a>
