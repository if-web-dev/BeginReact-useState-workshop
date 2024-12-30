# Image Elevator

**Image Elevator** is a simple and interactive React project designed to help learners practice the `useState` hook as part of the **BeginReact** course by [Melvyn](https://mlv.sh/). This project demonstrates the basics of managing and manipulating state in a React application while providing a fun and functional image customization tool.

## Project Overview

Image Elevator allows users to:

- Upload images from their device.
- Customize image settings, including:
  - **Padding**: Add or remove space around the image.
  - **Shadow**: Apply a shadow effect to the image.
  - **Radius**: Adjust the border radius for rounded corners.
- Download the customized image in PNG format.
- View a live preview of the changes applied to the image.

## Purpose

This project serves as a hands-on workshop for learning how to use the `useState` hook in React, helping beginners understand how state can be managed and updated dynamically in a React application.

## Features

1. **State Management**:
   - Learn how to manage and update state using the `useState` hook.
   - Real-time state updates for customizing images.

2. **Image Upload and Processing**:
   - Upload an image and immediately preview it with the selected settings.
   - Download the edited image as a PNG file.

3. **Interactive User Interface**:
   - Responsive design for desktop and mobile.
   - Intuitive controls for image customization.

## Installation

To run this project locally, follow these steps:

1. Clone the repository:
```bash
   git clone https://https://github.com/if-web-dev/BeginReact-useState-workshop
   cd beginreact-usestate-workshop
```

2. Install dependencies
```bash
   npm install
```

3. Start the development server:
```bash
   npm run dev
```

4. Open the app in your browser at http://localhost:3000

## Project Strucure

Here’s an overview of the key files and folders:

1. components/ImageGenerator.jsx: Handles the rendering of the image preview with the selected settings.

2. components/Settings.jsx: Allows users to adjust image settings such as padding, shadow, and radius.

3. components/ImageEditor.jsx: Manages the overall image upload, customization, and download functionality.

4. utils/render-png.js: A utility function for generating and exporting the final image in PNG format.

## Scripts

1. Start the development server.
```bash
   npm run dev
```

2. Build the project for production.
```bash
   npm run build
```
3. Serve the built project in production mode.
```bash
   npm start
```

## Purpose of This Workshop

This project is part of the BeginReact course by Melvyn, focused on React fundamentals. The key takeaway from this workshop is mastering the useState hook and understanding how to apply it in real-world scenarios

## About Melvyn

This project is part of the [BeginReact](https://codelynx.dev/beginreact) course created by [Melvyn](https://mlv.sh/), a developer and instructor passionate about teaching React and JavaScript in an interactive and beginner-friendly way.