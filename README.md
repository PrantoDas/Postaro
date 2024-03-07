# Postaro

This project simulates a small-scale **social media** application, allowing users to view a newsfeed of posts, see comments on posts, and comment on posts in real time. Designed primarily as a learning exercise, the application emphasizes the practical application of advanced JavaScript features without the complexities of user authentication or backend integration.


## Features

- **Newsfeed Viewing**: Users can browse through a list of posts by other users, mimicking a typical social media newsfeed experience.
- **Infinite Scroll**: Seamlessly load more posts as you scroll down the newsfeed, providing a continuous browsing experience without the need for pagination controls.
- **Comment Interaction**: Engage with posts by viewing and adding comments in real-time, enhancing the interactive experience.
- **No Authentication Required**: Simplified access by loading a static user ID, focusing on interaction and functionality without the need for login/sign-in mechanisms.

## Application Screenshots

- Newsfeed view showcasing user posts.
![Newsfeed View](https://github.com/PrantoDas/Postaro/blob/main/Screenshots/newsfeed.png)

- Newsfeed view showcasing user posts with comments.
![Comment Feature](https://github.com/PrantoDas/Postaro/blob/main/Screenshots/comments.png)

- [Video](https://youtu.be/O684r0SwI4w) demonstrating the infinite scroll feature.

- [Video](https://youtu.be/cb8EPaR2lfQ) demonstrating the adding new comments feature.


## Learning Focus

The development of this application centered around exploring and implementing various JavaScript features, including:

- **Template Literals**: Dynamically generating HTML content for user posts and comments.
- **Class Syntax**: Utilizing modern JavaScript classes for creating user, post, and comment entities.
- **Async/Await**: Managing asynchronous operations, such as simulating fetching posts and comments, to ensure a seamless user experience.
- **Arrow Functions**: Leveraging concise syntax for anonymous functions, particularly in event listeners and asynchronous code.
- **Generator Functions**: Implementing generators to facilitate the sequential loading of posts or comments upon user request.
- **IIFE (Immediately Invoked Function Expressions)**: Used for script initialization and to encapsulate variables, avoiding global scope pollution.
- **Modular Architecture**: Organizing code into modules for better maintainability, reusability, and separation of concerns, which aligns with modern JavaScript best practices.


## Technology Stack
- **JavaScript (ES6+)**: Core programming language.
- **Mockoon**: Used to mock backend APIs for posts and comments.
- **CSS3 & HTML5**: For structuring and styling the application.


## Getting Started

### Prerequisites

- Install [Mockoon](https://mockoon.com/) to simulate the backend API.

### Environment Setup

1. Clone the repository to your local machine.
2. Install Mockoon and import the provided `MockAPI\mockoon-mock-api.json` environment file.
3. Start the server in Mockoon and ensure it's using the port specified in `Scripts\APIService.baseUrl`.


### Running the Application

Open `index.html` in a browser to start interacting with the application. Explore the newsfeed, view comments, and add your comments to posts in real-time.

## Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

Distributed under the MIT License. See [LICENSE](https://github.com/PrantoDas/Postaro?tab=MIT-1-ov-file) for more information.

## Contact

Pranto Das - [Linkedin](https://www.linkedin.com/in/pranto-das/)
<br>
Project Link: [Postaro](https://github.com/PrantoDas/Postaro)

---
