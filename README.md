# Full-Stack StarWars Portfolio

[Full-Stack StarWars Portfolio](https://www.ryoichihomma.me/) is a personal portfolio website that showcases my skills, projects, work experience, tech blog on DEV Community, educational background, and certifications. 

## Table of Contents
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)


## Features 
- **Tech Blog Showcase**: Integration with DEV Community API to display the latest blog posts, including likes (heart), comments, estimated reading time, and links.
- **Contact Form**: A functional contact form with email validation using ZeroBounce API and an auto-reply system using EmailJS, visualizing the status of the email validation and form submission.
- **Project Showcase**: Detailed information about various projects, including live links, demo videos, docs on GitHub repos, technologies used, etc.
- **Credential Showcase**: A timeline of professional and educational backgrounds with detailed descriptions, skills, and links to certifications.
- **Full Responsive Design**: The website is fully responsive and works on mobile, tablet, laptop, and desktop devices.
- **Modern Animation**: The website is animated using Framer Motion and Swiper, including revealing animations, hover effects, interactive UI elements, and horizontal slides. 

**PS**: Framer Motion was recently renamed to [**Motion**](https://motion.dev/blog/framer-motion-is-now-independent-introducing-motion) in November 2024. 

## Technologies Used

- **Frontend**: React | Vite | TypeScript | Tailwind CSS | Framer Motion ([Motion](https://github.com/motiondivision/motion)) | [Swiper](https://github.com/nolimits4web/swiper)
- **Backend**: Node.js | Express.js
- **APIs**: [ZeroBounce](https://www.zerobounce.net/?campaignid=1070376639&groupid=51898694789&adid=357518452232&gad_source=1&gclid=CjwKCAiAgoq7BhBxEiwAVcW0LMdzKjcZ8BMVprGFfN1mfI5fHrDwWLAH0lVsd5-JWTMw6h_i8Yf6eBoCxIsQAvD_BwE) | [DEV](https://dev.to/)
- **Other Libraries and Tools**: Axios | Postman | [React Hook Form](https://github.com/react-hook-form/react-hook-form) | [Zod](https://github.com/colinhacks/zod) | [EmailJS](https://github.com/eleith/emailjs) | [react-icons](https://github.com/react-icons/react-icons) | [react-icon-cloud](https://github.com/teaguestockwell/react-icon-cloud) | [cobe](https://github.com/shuding/cobe) | [react-vertical-timeline](https://github.com/stephane-monnot/react-vertical-timeline) | [dotenv](https://github.com/motdotla/dotenv) | [cors](https://github.com/expressjs/cors) | [typewriterjs](https://github.com/tameemsafi/typewriterjs) | etc.

## Installation

- Prerequisites: Node.js and npm installed on your local machine.

1. Clone the repo: 
```
git clone https://github.com/Ryo-samuraiJP/New-Portfolio.git
```

2. Install dependencies for the frontend:
```
cd root_of_your_folder
npm install
```

3. Install dependencies for the backend:
```
cd backend
npm install
```

## Usage

### Running the project

1. Start the backend server:
```
cd backend
npm start
```

Ensure you receive the message "Server is running on port 3000" in your terminal. If you skip this, the email validation and auto-reply system don't run and the form submission fails. 

2. Start the frontend server: 
```
cd root_of_your_folder
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173/`.

### Key Dependencies 

- Frontend:
  - React
  - Vite
  - TypeScript
  - Tailwind CSS
  - Framer Motion (Motion)
  - Swiper

- Backend: 
  - Node.js
  - Express.js
  - Axios
  - dotenv
  - cors
 

## License
This project is licensed under the MIT License. See the [LICENSE](https://github.com/Ryo-samuraiJP/New-Portfolio?tab=MIT-1-ov-file) file for details.

