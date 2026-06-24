import { Project } from "../types/project";

export const projectList: Project[] = [
  {
    slug: "synth-ai",
    title: "Synth AI",
    githubLink: "https://github.com/ganimalqudhaifi/synth-ai",
    demoLink: "https://synth-ai.ganimalqudhaifi.my.id",
    imagePath: "/project-synth-ai.png",
    description:
      "AI-powered platform that integrates multiple functionalities",
    techStack: ["nextjs", "langchain", "mongodb", "notion"],
    content: `# SynthAI

**SynthAI** is a cutting-edge AI-powered platform that integrates multiple functionalities, including:

- AI conversational capabilities.
- Summarization from YouTube transcripts.
- Retrieval-Augmented Generation (RAG) applications with enhanced self-reflection capabilities, enabling correction of poor-quality retrievals or generations.
- Integration with **Notion**, supporting RAG for pages and databases.
- Dynamic UI generation with real-time data streaming.

Built with **Next.js** and **LangChain**, SynthAI demonstrates the power of modern web frameworks and AI tools working seamlessly together.

---

## Features

### 1. AI Chat

An intelligent chatbot that provides contextual, meaningful, and interactive conversations using advanced AI language models.

### 2. YouTube Transcript Summarization

Extracts and summarizes key points from YouTube video transcripts, providing concise and accessible insights.

### 3. RAG Application

Harnesses retrieval-augmented generation (RAG) for advanced search and question-answering capabilities with custom datasets. Includes self-reflection mechanisms for improving retrieval quality and generation accuracy.

### 4. Notion Integration

Seamlessly integrates with Notion, enabling RAG for pages and databases to streamline workflows and enhance productivity.

### 5. Dynamic UI with Data Streaming

Generates user interfaces dynamically, featuring real-time data streaming for interactive and responsive visualizations.

---

## Tech Stack

- **Framework**: Next.js
- **AI Framework**: LangChain
- **Language Model**: OpenAI GPT (GPT-4o Mini/Standard)
- **Data Handling**: MongoDB / Vector Databases (for RAG)
- **API Integration**: Notion API, YouTube Data API (for transcript loading)
- **Styling**: Tailwind CSS, Shadcn UI
- **State Management**: Langgraph (leveraging graph-based state management)

---

## Installation

1. **Clone the repository**:

   \`\`\`bash
   git clone https://github.com/ganimalqudhaifi/synthai.git
   cd synthai
   \`\`\`

2. **Install dependencies**:

   \`\`\`bash
   npm install
   \`\`\`

3. **Set up environment variables**:
   Create a \`.env.local\` file in the root directory and configure the following:

   \`\`\`plaintext
   OPENAI_API_KEY=your_openai_api_key
   NOTION_INTEGRATION_TOKEN=your_weather_api_key
   MONGODB_ATLAS_URI=your_mongodb_url
   MONGODB_ATLAS_DB_NAME=your_mongodb_database_name
   MONGODB_ATLAS_COLLECTION_NAME=your_mongodb_collection_name
   \`\`\`

4. **Run the development server**:
   \`\`\`bash
   npm run dev
   \`\`\`
   Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Usage

1. **AI Chat**:

   - Engage with the intelligent chatbot directly on the homepage for contextual and interactive conversations.

2. **YouTube Summarization**:

   - Provide a YouTube video URL, and the platform will extract and summarize the key points from the transcript.

3. **RAG Application**:

   - Upload a custom dataset or connect to external sources, then ask domain-specific questions. The RAG system includes self-reflection to improve the accuracy of retrievals and responses.

4. **Notion Integration**:

   - Connect your Notion workspace to perform RAG on pages and databases, enhancing your workflow and productivity.

5. **Dynamic UI with Data Streaming**:
   - Visualize real-time data dynamically through an intuitive and responsive user interface.

---

## Contribution

We welcome contributions! To contribute:

1. Fork the repository.
2. Create a feature branch: \`git checkout -b feature-name\`.
3. Commit your changes: \`git commit -m "Add feature"\`.
4. Push to the branch: \`git push origin feature-name\`.
5. Open a Pull Request.

---

## License

This project is licensed under the [MIT License](LICENSE).

---

## Contact

For questions or collaboration, reach out at:

- **Email**: ganimalqudhaifi@gmail.com
- **GitHub**: [ganimalqudhaifi](https://github.com/ganimalqudhaifi)`,
  },
  {
    slug: "financial-records",
    title: "Financial Records",
    githubLink: "https://github.com/ganimalqudhaifi/financial-records",
    demoLink: "https://financial-records.ganimalqudhaifi.my.id",
    imagePath: "/project-financial-records.png",
    description:
      "A web application that can track financial transactions in real-time",
    techStack: ["nextjs", "firebase", "tailwindcss"],
    content: `# Financial Records App Showcase

## Overview

The **Financial Records App** is a comprehensive solution designed to help users manage their financial transactions effectively. Built using modern technologies like [Next.js](https://nextjs.org/), React, Redux, and Firebase, along with a sleek interface from Tailwind CSS, this application provides a powerful yet user-friendly experience for tracking personal finances.

## Key Features

### 1. **User Authentication**

Secure user sign-up and login functionalities leverage Firebase Authentication, ensuring that your sensitive financial data is protected.

### 2. **Account Management**

Create and manage multiple financial accounts seamlessly. Users can specify initial balances and keep track of their funds in one place.

### 3. **Transaction Records**

Effortlessly add, edit, delete, and view your financial transactions. Keep a clear record of spending habits and income sources.

### 4. **Advanced Search & Filters**

Quickly navigate through extensive transaction records using powerful search options and filters by time range or categories, making it easy to find specific entries.

### 5. **Pagination**

The app includes customizable pagination, allowing users to navigate through their records smoothly, enhancing usability.

### 6. **Interactive Data Visualization**

Visualize your financial data with stunning interactive charts. Understand trends and insights at a glance, making informed financial decisions easier than ever.

### 7. **Demo Mode**

Experience the full functionality of the app without signing up. The demo mode offers preloaded data so you can explore features before committing to registration.

### 8. **Responsive Design**

Access your financial records from any device. The application is fully responsive, ensuring a great user experience on desktops, tablets, and smartphones.

## Tech Stack

The app is powered by a robust tech stack, featuring:

- **Framework**: [Next.js](https://nextjs.org/) for server-side rendering and seamless routing.
- **Language**: TypeScript for improved maintainability and developer experience.
- **State Management**: [Redux Toolkit](https://redux-toolkit.js.org/) for efficient state management.
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) for a modern and customizable UI.
- **Database & Authentication**: [Firebase](https://firebase.google.com/) for secure storage and user authentication.

## Getting Started

Getting started is simple and straightforward. Clone the repository, install the dependencies, set up your Firebase environment variables, and run the application with a few commands. The initial setup is streamlined to help you focus on developing or exploring the application without hassle.

## Project Structure

The application is organized with components, hooks, and context in a modular structure, making it easy for developers to navigate the codebase. Each section of the app is clearly defined, whether it’s UI components, API routes, or state management through Redux.

## API Integration

The app includes well-defined API routes that facilitate authentication and user management, allowing for secure user interactions when logging in, registering, or retrieving user information.

## Conclusion

The **Financial Records App** not only serves as a practical tool for financial management but also showcases the power of modern web development technologies. Whether you are a developer looking to contribute or a user wanting to simplify your financial tracking, this app has the tools and features to meet your needs.

Explore the project further on [GitHub](https://github.com/ganimalqudhaifi/financial-records.git). Join us in making financial management more accessible and efficient!`,
  },
  {
    slug: "rains-karya-multindo",
    title: "Rains Karya Multindo",
    githubLink:
      "https://github.com/ganimalqudhaifi/freelance-rains-karya-multindo",
    demoLink: "https://rains-km.co.id/",
    imagePath: "/project-rains-karya-multindo.png",
    description:
      "A company profile website for construction, interior, and business services",
    techStack: ["nextjs", "tailwindcss"],
    content: `# 🏗️ Rains Karya Multindo – Company Profile Website

A modern and responsive company profile website built for **Rains Karya Multindo**, a multi-service company specializing in construction, event organizing, creative media, and procurement services.

---

## 🌐 Live Demo

🔗 https://rains-km.co.id/

## 📂 Repository

🔗 https://github.com/ganimalqudhaifi/freelance-rains-karya-multindo

---

## 📌 Overview

This project was developed to establish a strong digital presence for Rains Karya Multindo. The website is designed to clearly communicate the company’s services, build credibility, and attract potential clients through a professional and modern interface.

The platform highlights the company's expertise across multiple industries, combining functionality with a clean and user-friendly design.

---

## 🎯 Key Features

- 🏠 **Homepage (Hero Section)**
  Engaging introduction with clear value proposition and call-to-action.

- 🏢 **About Section**
  Company background, vision, and mission to build trust and credibility.

- 🛠️ **Services Showcase**
  Detailed presentation of all services:
  - Civil Construction
  - Interior Construction
  - Electrical Construction
  - Event Organizer
  - Procurement Services
  - Creative Studio & Agency

- 📊 **Company Statistics**
  Highlights achievements such as completed projects and successful events.

- 🤝 **Client Section**
  Displays trusted partners and clients.

- 🖼️ **Portfolio**
  Showcases completed projects across different service categories.

- 📞 **Contact Section**
  Includes address, phone, email, and social media integration.

---

## 🧠 Purpose of the Project

- Build a **professional company image**
- Improve **client trust and conversion**
- Provide a **centralized platform** for showcasing services and portfolio
- Support business growth in the **digital era**

---

## 🛠️ Tech Stack

- **Next.js** – React framework for performance and SEO
- **Tailwind CSS** – Utility-first CSS for modern UI design

---

## 💡 Highlights

- Fully responsive design across devices
- Clean and structured layout for better user experience
- Business-oriented design focusing on conversion
- Optimized for performance and accessibility

---

## 📍 Company Information

**Rains Karya Multindo**
Jl. Jaya 25 No.2B1, RT.3/RW.10
Cengkareng Barat, Jakarta Barat
DKI Jakarta 11730

📞 0821-3800-0629
📧 rains.km.management@gmail.com
📧 rainskaryamultindo@gmail.com

---

## 🚀 Author

**Ganim Alqudhaifi**
Frontend Developer

---

## 📄 License

This project is created for client purposes and may contain proprietary content.`,
  },
  {
    slug: "sudeci-exportir-indonesia",
    title: "Sudeci Exportir Indonesia",
    githubLink:
      "https://github.com/ganimalqudhaifi/freelance-sudeci-exportir-indonesia",
    demoLink: "https://www.sudeciexportir.id/",
    imagePath: "/project-sudeci-exportir.png",
    description:
      "A bilingual export company website connecting local products to global markets",
    techStack: ["nextjs", "tailwindcss"],
    content: `# 🌍 Sudeci Exportir Indonesia – Company Profile Website

A professional and bilingual company profile website built for **PT. Sudeci Exportir Indonesia**, an export company focused on connecting Indonesian local products with global markets.

---

## 🌐 Live Demo

🔗 https://www.sudeciexportir.id/

## 📂 Repository

🔗 https://github.com/ganimalqudhaifi/freelance-sudeci-exportir-indonesia

---

## 📌 Overview

This project was developed to establish a strong international digital presence for PT. Sudeci Exportir Indonesia. The website is designed to showcase export commodities, build trust with global buyers, and present a clear and professional export process.

The platform emphasizes credibility, product quality, and seamless communication between local producers and international clients.

---

## 🎯 Key Features

- 🏠 **Homepage (Hero Section)**
  Clear value proposition as a trusted export partner with strong call-to-action.

- 🏢 **About Section**
  Highlights company mission, vision, and commitment to quality, sustainability, and global trade.

- ⭐ **Why Choose Us**
  Key strengths including:
  - High-quality sourcing from local producers
  - Export expertise & compliance
  - Competitive pricing
  - Transparent and professional service
  - Certified and trusted products
  - Support for local economy

- 📦 **Product Showcase**
  Featured export commodities:
  - Charcoal Briquettes
  - Banana Leaves
  - Wood Pellets
  - Lime Leaves
  - Bay Leaves

- ❓ **FAQ Section**
  Answers common questions about export processes, MOQ, shipping, and partnerships.

- 📞 **Contact Section**
  Includes business address, phone number, and email for international inquiries.

---

## 🧠 Purpose of the Project

- Build **global trust and credibility** for export business
- Showcase **Indonesian commodities** to international buyers
- Simplify **export communication and inquiries**
- Support **local producers** through digital exposure

---

## 🛠️ Tech Stack

- **Next.js** – React framework for performance and SEO optimization
- **Tailwind CSS** – Modern and responsive UI styling

---

## 💡 Highlights

- Bilingual-ready for international audience
- Clean, professional, and conversion-focused design
- Structured product presentation for global buyers
- Optimized for performance and accessibility

---

## 📍 Company Information

**PT. Sudeci Exportir Indonesia**
H. Inen Street No. 31, RW. 9
Lubang Buaya, Cipayung
East Jakarta 13810, Indonesia

📞 +62 82124027842
📧 admin@sudeciexportir.id

---

## 🚀 Author

**Ganim Alqudhaifi**
Frontend Developer

---

## 📄 License

This project was developed for client purposes and may contain proprietary business content.`,
  },
  {
    slug: "discover-videos",
    title: "Discover Videos",
    githubLink: "https://github.com/ganimalqudhaifi/discover-videos",
    demoLink: "https://discover-videos.ganimalqudhaifi.my.id",
    imagePath: "/project-discover-videos.png",
    description:
      "A web application that integrate with third party API and oAuth login",
    techStack: ["nextjs", "firebase", "tailwindcss"],
    content: `# **Discover Videos**

## **Description**

A modern web application designed to manage tasks effectively, leveraging Next.js and TypeScript for a seamless user experience.

## **Key Features**

- User Authentication
- Real-time Updates
- Responsive Design

## **Tech Stack**

- **Frontend**: Next.js, React, TypeScript
- **Backend**: Node.js, Express
- **Database**: Firebase/Firestore
- **Styling**: Tailwind CSS

## **Getting Started**

To explore this project locally, you can follow the steps below:

1. **Clone the Repository**:

   \`\`\`bash
   git clone https://github.com/ganimalqudhaifi/discover-videos.git
   cd project-name
   \`\`\`

2. **Install Dependencies**:

   \`\`\`bash
   npm install
   \`\`\`

3. **Run the Development Server**:
   \`\`\`bash
   npm run dev
   \`\`\`
   Access it at [http://localhost:3000](http://localhost:3000).

## **Project Structure**

A well-organized structure that includes:

- \`/app\` or \`/pages\`
- \`/components\`
- \`/styles\`
- \`/utils\`
- \`/public\`
- \`/api\`

## **Contributing & License**

Contributions are welcomed! Please fork the repository, make changes, and submit a pull request. This project is licensed under the [MIT License](LICENSE).`,
  },
];
