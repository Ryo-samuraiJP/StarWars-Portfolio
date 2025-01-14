# StarWars Portfolio
[StarWars Portfolio](https://www.ryoichihomma.me/) is a modern animated web portfolio themed-on Star Wars that showcases my skills, projects, work experience, tech blogs, educational background, and certifications. 

## Table of Contents
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)


## Features 
- **Contact Form**: A robust contact form using React Hook Form and Zod for data validation.
- **Real-time Email Validation**: A real-time email address validation by fetching ZeroBounce API to visualize the status of the validation result and form submission, enhancing user experience and reliability.
- **Auto-reply System**: An auto-reply system using EmailJS REST API to ensure seamless communication.
- **Secured API Keys**: The API keys are stored in the Dotenv file to minimize the risk of exposing sensitive data to the client side, ensuring security. 
- **Tech Blog Showcase**: Integration with DEV Community API to display the latest blog posts, including likes (heart), comments, estimated reading time, and links.
- **Project Showcase**: Detailed information about various projects, including live links, demo videos, docs on GitHub repos, technologies used, etc.
- **Credential Showcase**: A timeline of professional and educational backgrounds with detailed descriptions, skills, and links to certifications.
- **Skill Showcase**: Modern user-friendly interface to showcase skills I'm familiar with and primary technologies I'm proficient in the most, including their percentages.
- **Full Responsive Design**: The website is fully responsive and works on mobile, tablet, laptop, and desktop devices.
- **Modern Animation**: The website is animated by Framer Motion, including revealing animations, loading screen like Star Wars opening scence, and scrolling slideshow using Swiper.

**PS**: Framer Motion was recently renamed to [**Motion**](https://motion.dev/blog/framer-motion-is-now-independent-introducing-motion) in November 2024. 

## Technologies Used

- **Main**: 
  
![React](https://img.shields.io/badge/React-20232a.svg?style=for-the-badge&logo=react&logoColor=61DAFB&logoSize=auto)
![Vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E&logoSize=auto)
![TypeScript](https://img.shields.io/badge/TypeScript-%20?style=for-the-badge&logo=TypeScript&logoColor=FFF&color=3178C6)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwind-css&logoColor=white&logoSize=auto)
![Framer Motion](https://custom-icon-badges.demolab.com/badge/Framer%20Motion-fff?style=for-the-badge&logo=framermotion&logoSize=auto)

- **APIs**: [DEV](https://dev.to/) | [ZeroBounce](https://www.zerobounce.net/?campaignid=1070376639&groupid=51898694789&adid=357518452232&gad_source=1&gclid=CjwKCAiAgoq7BhBxEiwAVcW0LMdzKjcZ8BMVprGFfN1mfI5fHrDwWLAH0lVsd5-JWTMw6h_i8Yf6eBoCxIsQAvD_BwE) | [EmailJS](https://www.emailjs.com/)
- **Other Tools and Open Source Libraries**: [axios](https://github.com/axios/axios) | [dotenv](https://github.com/motdotla/dotenv) | [swiper](https://github.com/nolimits4web/swiper) | [react hook form](https://github.com/react-hook-form/react-hook-form) | [zod](https://github.com/colinhacks/zod) | [typewriterjs](https://github.com/tameemsafi/typewriterjs) | [react-icon-cloud](https://github.com/teaguestockwell/react-icon-cloud) | [react-vertical-timeline](https://github.com/stephane-monnot/react-vertical-timeline) | [cobe](https://github.com/shuding/cobe) | [magicui](https://github.com/magicuidesign/magicui) | [animata](https://github.com/codse/animata) | [react-icons](https://github.com/react-icons/react-icons)

## Installation
- Prerequisites: Git is installed on your local machine.

1. Clone the repo: 
```
git clone https://github.com/your_username/StarWars-Portfolio.git
```

2. Install dependencies:
```
cd root_of_your_folder
npm install
```

### Key Dependencies 
- React
- Vite
- Tailwind CSS
- Framer Motion ([Motion](https://motion.dev/))
- Swiper
- Axios
- Dotenv

## Usage

1. Run the project:
```
npm run dev
```

2. Open your browser and navigate to:
```
http://localhost:5173/
```

## License
This project is licensed under the MIT License. See the [LICENSE](https://github.com/Ryo-samuraiJP/StarWars-Portfolio?tab=MIT-1-ov-file) file for details.
