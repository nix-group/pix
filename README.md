<h1 align="center">Welcome to <a href="https://gallery.nixs.com/" target="_blank">PIX</a> 👋</h1>
<p align="center">
  <img src="https://img.shields.io/badge/React-18.2.0-blue" height="25"/>
  <img src="https://img.shields.io/badge/Photoswipe--2.2.7-yellow" height="25"/>
  <img src="https://img.shields.io/badge/PhotoAlbum--2.2.2-orange" height="25"/>
</p>

## Contents

<ul>
  <li><a href="#project-overview" target="_blank">Project overview</a></li>
  <li><a href="#installation-and-setup-instructions" target="_blank">Installation and Setup Instructions</a></li>
  <li><a href="#available-scripts">Available Scripts</a></li>
</ul>

## Project overview

An application designed to view photos and videos from Google Drive.

Authorization is carried out using gmail account.
![Alt text](image-2.png)

You can view your photos and videos in a convenient format. All you have to do is go to your media folder.
![Alt text](image-1.png)

You can navigate through folders using the folder block. Folders can be sorted by date added and name. Navigation is also possible with the help of breadcrumbs.<br/>
You can copy the link to the current folder, so that for example, another user could also view media files (if access is configured for this user).
![Alt text](image-3.png)

In the media files section, you can see your photos and videos stored in the current folder. The total number of files is displayed (if there are more than 50 on the current page, then 50+, 100+, etc. will be indicated).<br/>
There is a view-layout change functionality:

-   Inline
-   Columns
-   Grid

![Alt text](image-4.png)
![Alt text](image-5.png)

When we opened the image, the functionality is available:

-   turning on / off thumbnails (by clicking on them, we can move to the image)
-   switching to full screen mode
-   starting a slide show
-   downloading the current image
-   copying the link to the current image

![Alt text](image-6.png)

## Installation and Setup Instructions

Clone down this repository. You will need `node` and `npm` installed on your machine. Install `yarn` package manager with the following command `npm i -g yarn`, and then in project folder run `yarn` to download the required dependencies.

Аfter installing the packages, you must create a `.env` file in the root of the project and fill in it according to the template given in the file `.env.example`.

Set up your Google Cloud project: <a href="https://developers.google.com/maps/documentation/android-sdk/cloud-setup" target="_blank">here</a>.

How to Enable Google Drive API on the Google Console: <a href="https://www.cybrosys.com/blog/how-to-enable-google-drive-api-on-the-google-console" target="_blank">here</a>

## Available Scripts`

In the project directory, you can run:

– `yarn dev` - runs the app in the development mode.

Open `http://localhost:8080` to view it in the browser. The page will reload if you make edits.

– `yarn build` - builds the app for production to the dist folder.

It optimizes the build for the best performance by minifying JavaScript, CSS, and HTML, resizing and optimizing images and so on. Your app is ready to be deployed!

– `yarn preview` - locally preview production build. You can see what your already built application looks like and correct the errors.
