# StreamVision - A YouTube-like Streaming App

StreamVision is a React-based web application that emulates the experience of streaming and viewing videos, similar to YouTube. It employs various features and technologies to create an engaging and dynamic user experience.

## Features 

- **Infinite Scrolling:** Videos are fetched and displayed using an infinite scrolling mechanism, allowing users to seamlessly explore an extensive video library.

- **Redux State Management:** Redux is utilized to efficiently manage the application's state, eliminating the need for repetitive API calls and ensuring a smooth user experience.

- **YouTube Suggestions:** The app incorporates YouTube-like video suggestions, enhancing content discoverability and user engagement.

- **Debounced Searching:** Search functionality is optimized with debouncing to prevent unnecessary API requests and provide a more responsive search experience.

- **Suggestion Caching:** Redux is leveraged to cache and manage video suggestions, enhancing app performance while avoiding cache overload by limiting it to 200 items.

- **Video Preview:** When hovering over video thumbnails for more than one second, a video preview feature is activated, allowing users to quickly sample video content.

- **Dynamic Comment Loading:** On the video's watch page, comments are fetched as the user scrolls down, creating an interactive and engaging comment section. Comments are continually loaded to ensure a seamless reading experience.

- **Comment Replies:** The comment section supports replies to comments, allowing for one-level deep comment threads, similar to YouTube.

- **Live Chat:** For demonstration purposes, the app includes live chats and multi-level comments, replicating the dynamic nature of user interactions on platforms like YouTube.

- **YouTube-Like Sidebar:** The application features a YouTube-inspired sidebar for easy navigation and content exploration.

## Demo

A live demo of StreamVision is available at [Demo Video]([https://youtube-ajayravi.netlify.app/watch?v=FS0R1jzBELc](https://www.youtube.com/watch?v=FS0R1jzBELc)).
A live version of StreamVision is available at [Demo Link]([https://youtube-ajayravi.netlify.app/watch?v=FS0R1jzBELc](https://youtube-ajayravi.netlify.app/)).

[![Alt text]()](https://youtube-ajayravi.netlify.app/watch?v=FS0R1jzBELc)


## Installation

To run StreamVision locally, follow these steps:

Clone the repository:
   
Install dependencies:

### `npm install`
Start the development server:

### `npm start`
The app will be accessible at http://localhost:3000.

Contributing
Contributions are welcome! If you'd like to enhance StreamVision or report issues, please open an issue or submit a pull request.

License
This project is licensed under the MIT License - see the LICENSE file for details.

Acknowledgments
This project was inspired by the user experience provided by YouTube.
Special thanks to the open-source community for their valuable contributions and libraries.
Happy streaming!
