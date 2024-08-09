# Week 6 end of week project 

## Goals 

 Implement the useState hook.
   
 Use useEffect effectively.
   I used useEffect 
 Return JSX from a source other than App.jsx, for example, by using components.
 Apply setInterval to execute periodic tasks within the application.
 Use the .map() function to render lists of items in the application dynamically.
 Use logic to manage the purchase and application of upgrade items within the game.

## Streach Goals
 Use local storage to save and retrieve game data.
 Use the Upgrades API to manage upgrades.
 Style the application excellently.

### My journy 
## click button component 
I used useState Hook to set the state of my pulse animation and a useEffect to timeout the animation by returning the useState back to it's false boolean state in the click button component 
## upgrades component 
I used the useState hook to show and hide the upgrades with a button I called upgrade shop again with a boolean state. 
I also used the useState to set the state of the upgrade buttons and the useEffect for the async function that calls the on the Upgrades API. 
I also used my own array to set the state of the title and picture of each button and, 
I used the .map function to create each upgrade button using data from both my array and the Upgrades API.  
## API  
I imported the click button and upgrades components and added them to the API file I used the useState to set the state of the click count and the Atoms per secound by either the data in local storage or the initial value and created a useEffect hook to create an interval timer that increases the click count by the atoms per second every second and and sets the local storage every 500ms I discovered that if I set the local storage to record the click value every 1000ms it only updated every 2000ms and if set to around 750ms skips a beat every 3rd second roughly 
the timer also has a clear interval function once it has completed its process. 

I worked hard on the UI styling using animations, show/Hide, hover, text shadow, box shadow in addition to the many other CSS functions I designed it as a mobile-first app and created a media style for a landscape view, however this proved to be a problematic feature when trying to style the app for larger desktop screens as these are in a landscape orientation If I had of not used it the app scales well when in portrait mode and the screen with is extended. I thought I had resolved the issues that I was having when I noticed some of my content was not centred in the page it took 3 attempts to resolve what should have been a simple problem this is the first project that I have had to debug CSS     

I was not able to introduce the equivalent of a clear interval function when calling the API however, and discovered that the function kept repeating itself. After further reading, I found that I could have done this by using a boolean useState to determine if the data had been received and a useMemo hook to hold the data until the upgrade buttons had been generated but unfortunately I didn't have time to implement this correctly making the app less efficient than I would have liked.      

I do feel that I have reached all the goals set as well as all the stretch goals 
lighthouse reveals 
100 performance 
91 accessibility 
96 Best Practices 
91 SEO 
dispite the API constantly reloading. 










# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
