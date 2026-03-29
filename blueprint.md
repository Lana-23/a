# Ancient Divination (VK Mini App)

## Overview

An immersive VK Mini App that allows users to explore a variety of ancient and mystical divination methods from different cultures. Each divination tool is presented as a unique, interactive web component. The application is styled according to VK Mini App design guidelines for a seamless, native user experience and supports both English and Russian languages.

## Project Structure

- `index.html`: The main entry point of the application. Contains the two-screen layout and VK Bridge script.
- `style.css`: Global styles for the application, aligned with VK Mini App design guidelines.
- `main.js`: The main JavaScript file that handles screen transitions, tab switching, language selection, and VK Bridge initialization.
- `components/`: A directory containing the web components for each divination method.
- `locales/`: A directory for internationalization (i18n) files.
- `blueprint.md`: This file, documenting the project's design and features.

## Features

- **VK Mini App Integration:** The application is integrated with the VK platform using `@vkontakte/vk-bridge`, allowing for a native-like experience within the VK client, including haptic feedback.
- **Two-Screen Layout:** The application features a two-screen layout. The first screen displays the divination choices, and the second screen shows the selected divination.
- **Multiple Divination Methods:** The application offers a variety of different divination experiences.
- **Web Component-Based:** Each divination method is encapsulated in its own web component, promoting modularity and maintainability.
- **Interactive UI:** Users can interact with each divination tool to receive a "reading."
- **Internationalization:** The application's text is translated into English and Russian.

## Design and Theming

The application is styled to align with the official VK Mini Apps design guidelines, ensuring a consistent and native user experience.

- **Theme:** A clean, light theme with a primary background color of `#EDEEF0`.
- **Typography:** Uses the standard system font stack (`-apple-system, system-ui, "Helvetica Neue", Arial, sans-serif`) for a native feel.
- **Color Palette:** Utilizes VK's color palette, with black (`#000`) for primary text, blue (`#4986CC`) for primary actions, and gray (`#818c99`) for secondary information.
- **Controls:** UI elements like buttons and selectors are styled with rounded corners and no shadows to match the flat design of the VK interface.

## Current Plan & Development History

### Recent Changes:

1.  **VK Mini App Conversion:** The application has been converted into a VK Mini App.
    - **Platform Integration:** Replaced the Telegram Web App script with the `@vkontakte/vk-bridge` library to enable integration with the native VK client.
    - **Initialization:** The application now initializes itself as a VK Mini App by sending the `VKWebAppInit` event.
    - **Styling Overhaul:** The entire stylesheet (`style.css`) was refactored to align with VK Mini App design guidelines. This includes a new light color scheme, system fonts, and updated styles for all UI components to create a seamless, native look and feel. The previous thematic styling for individual components has been removed in favor of a unified design.
    - **Haptic Feedback:** Updated haptic feedback calls to use `VKWebAppTapticImpactOccurred` via VK Bridge.
2.  **Bug Fix (Korean Pendulum):** Fixed an "undefined" error in the Korean Pendulum component. The component was referencing non-existent translation files. This was resolved by creating dedicated English (`locales/en/korean-pendulum.js`) and Russian (`locales/ru/korean-pendulum.js`) translation files and updating the main `locales/index.js` to include them.
3.  **Bug Fix (I-Ching & Language Switching):** Fixed a critical bug that prevented divination components from rendering when the language was switched or a new divination was selected. This was resolved by ensuring the `language` attribute was correctly passed to components on tab switch and standardizing translation keys.
4.  **Translation Refactoring:** Broke down monolithic translation files into smaller, modular files for each divination method.
5.  **Removed Components:** Removed several unused divination components.
6.  **Local Icons:** All divination icons are now stored locally.
7.  **Theme Updates:** Updated the color schemes for various divination methods (Note: these themes were removed during the VK Mini App conversion).
8.  **Caribbean Dice Rollback:** Reverted the Caribbean Dice component to a 2D implementation.
9.  **Two-Screen Layout:** Implemented a two-screen layout.