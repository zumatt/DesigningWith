# Designing With: A New Educational Module to Integrate Artificial Intelligence, Machine Learning and Data Visualization in Design Curricula.
This repository will contain the work in progress for the published website under https://designingwithai.ch/

The under development website is hosted on netlify at this link https://designingwith.netlify.app/

Here is the status of the netlify webserver

[![Netlify Status](https://api.netlify.com/api/v1/badges/3af51e68-c0db-4761-96f4-3b96f9f960f9/deploy-status)](https://app.netlify.com/sites/designingwith/deploys)

## General style
On the main css folder (https://github.com/zumatt/DesigningWith/tree/development/assets/css) you can find the file `main.css`.
Inside this file there are all the variables for colors and font sizes.
Moreover, are already setted up all the styles for the body, ::selection, text styles (e.g. h1, h2, p), innerGlow effect and the relatives seettings for the mobile version.
Be sure to work with the following variables inside every .css file and always connect the file `main.css` in every page.
Here you have an overview of every variable available on the entire website:
```
:root{
    /* Colors */
    --mainTextColor: black;
    --backgroundColor: #f5f5f5;
    --violetColor: #B777F7;
    --darkGreyColor: #A1A1A1;
    --lightBlueColor: #72DAFB;
    --greenColor: #8CD782;
    --yellowColor: #EDAB2C;
    --redColor: #ED672C;
    --blueColor: #5B99F4;
    --whiteColor: #FFFFFF;
    /* Font size */
    --mainTextSize: 29px;
    --h2TextSize: 48px;
    --pTextSize: 29px;
    --captionFontSize: 22px;
    --menuFontSize: 29px;
    /* Font size mobile */
    --mainTextSizeMobile: 16px;
    --h2TextSizeMobile: 25px;
    --pTextSizeMobile: 16px;
    --captionFontSizeMobile: 16px;  
    --menuFontSizeMobile: 22px;
    /* Inner Glow sizes */
    --blur: 60px;
    --spread: 2px;
    --blurHover: 80px;
    --spreadHover: 40px;
}
```
If you need to add more variables, you are free to add them.
If the variable concern only one page, please include it in the local .css file
