# Job Indeed Clone

## Overview

The Job Indeed Clone is a web application that replicates key features of job search platforms like Indeed. It utilizes **Next.js** with **TypeScript** for the frontend, **Firebase** for backend services and authentication, and **Material-UI** for user interface design and styling.

## Features

- **User Authentication**: Secure sign-up, login, and logout functionalities with Firebase Authentication.
- **Job Listings**: Browse, search, and filter job postings by various criteria.
- **Job Posting**: Allows employers to create and manage job listings.
- **User Dashboard**: Personalized dashboard for managing job applications and receiving job recommendations.
- **Responsive Design**: Optimized for both desktop and mobile devices.

## Tech Stack

- **Frontend**:
  - [Next.js](https://nextjs.org/): Framework for server-rendered React applications.
  - [TypeScript](https://www.typescriptlang.org/): Typed JavaScript for improved code quality.
  - [Material-UI](https://mui.com/): Component library for responsive and modern UI elements.

- **Backend**:
  - [Firebase](https://firebase.google.com/): Provides authentication, database, and storage services.

## Getting Started

### Prerequisites

- Node.js (v14.x or later)
- npm or yarn
- Firebase account

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/nav-commits/job-indeed-clone.git
    ```

2. Navigate to the project directory:

    ```bash
    cd job-indeed-clone
    ```

3. Install dependencies:

    ```bash
    npm install
    # or
    yarn install
    ```

4. Set up Firebase:

    - Create a Firebase project at [Firebase Console](https://console.firebase.google.com/).
    - Obtain your Firebase configuration object from the Firebase console.
    - Create a `.env.local` file in the root directory and add your Firebase configuration.

5. Start the development server:

    ```bash
    npm run dev
    # or
    yarn dev
    ```

6. Open your browser and navigate to [http://localhost:3000](http://localhost:3000) to view the application.

## Contributing

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Commit your changes (`git commit -am 'Add new feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Create a new Pull Request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

