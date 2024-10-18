# Knowledge Cafe - Blog Platform

## Overview

**Knowledge Cafe** is a blog platform where users can explore various blogs, bookmark their favorite articles, and keep track of their reading time. The platform provides a simple and engaging interface to explore different blog topics and track how much time a user spends reading. 

Built with **React** and styled using **Tailwind CSS**, the app is designed to be responsive, user-friendly, and interactive.

## Features

- **Explore Blogs**: Browse through a variety of blog posts with relevant details such as title, cover image, author, reading time, and hashtags.
- **Bookmark Blogs**: Users can bookmark any blog for easy access later.
- **Mark as Read**: Users can mark a blog as "read," and once marked, the button becomes disabled to prevent re-marking.
- **Reading Time Tracker**: The platform keeps track of the total time users spend reading blogs.
- **Interactive UI**: The interface updates dynamically to reflect bookmarked and read statuses.

## Technologies Used

- **React**: JavaScript library for building interactive UIs.
- **Tailwind CSS**: Utility-first CSS framework for rapid styling.
- **Vite**: Fast build tool and development server for modern web projects.
- **PropTypes**: Used for type-checking props.
- **React Icons**: To provide scalable icons, including the bookmark icon.

## Project Structure

.
├── public
│   └── blogs.json      # Static data file containing blog entries
├── src
│   ├── components
│   │   ├── Blog.js             # Component for displaying individual blog information
│   │   ├── Blogs.js            # Component to map and render the list of blogs
│   │   ├── BookmarkList.js     # Component that shows bookmarked blogs
│   ├── App.js                  # Main application logic and state management
│   └── index.js                # Entry point for the app
├── README.md                   # Project documentation (this file)
└── package.json                # Project metadata and dependencies
