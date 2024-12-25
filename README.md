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
- **Modern Animation**: The website is animated by Framer Motion, including revealing animations, hover effects, interactive UI elements, and horizontal slides using Swiper. 

**PS**: Framer Motion was recently renamed to [**Motion**](https://motion.dev/blog/framer-motion-is-now-independent-introducing-motion) in November 2024. 

## Technologies Used

- **Main**: React | Vite | TypeScript | Tailwind CSS | Framer Motion ([Motion](https://github.com/motiondivision/motion))
- **APIs**: [DEV](https://dev.to/) | [ZeroBounce](https://www.zerobounce.net/?campaignid=1070376639&groupid=51898694789&adid=357518452232&gad_source=1&gclid=CjwKCAiAgoq7BhBxEiwAVcW0LMdzKjcZ8BMVprGFfN1mfI5fHrDwWLAH0lVsd5-JWTMw6h_i8Yf6eBoCxIsQAvD_BwE) | [EmailJS](https://www.emailjs.com/)
- **Other Libraries and Tools**: Axios | Postman | [Dotenv](https://github.com/motdotla/dotenv) | [React Hook Form](https://github.com/react-hook-form/react-hook-form) | [Zod](https://github.com/colinhacks/zod) |  [Swiper](https://github.com/nolimits4web/swiper) | [react-icons](https://github.com/react-icons/react-icons) | [react-icon-cloud](https://github.com/teaguestockwell/react-icon-cloud) | [cobe](https://github.com/shuding/cobe) | [react-vertical-timeline](https://github.com/stephane-monnot/react-vertical-timeline)  [typewriterjs](https://github.com/tameemsafi/typewriterjs) | etc.

## Installation
- Prerequisites: npm is installed on your local machine.

1. Clone the repo: 
```
git clone https://github.com/Ryo-samuraiJP/StarWars-Portfolio.git
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
- Framer Motion (Motion)
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
