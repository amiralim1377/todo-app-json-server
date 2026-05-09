<div align="center">

# ✨ TaskMaster: Responsive Todo App

A beautiful, fully responsive Todo application built with modern web technologies.
Manage your daily tasks effortlessly with complete CRUD functionality and robust validation.

[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)]()
[![React](https://img.shields.io/badge/React_19-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)]()
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_v4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)]()
[![React Hook Form](https://img.shields.io/badge/React%20Hook%20Form-%23EC5990.svg?style=for-the-badge&logo=reacthookform&logoColor=white)]()
[![Zod](https://img.shields.io/badge/Zod-%233E67B1.svg?style=for-the-badge&logo=zod&logoColor=white)]()
[![Vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)]()
[![Axios](https://img.shields.io/badge/Axios-%235A29E4.svg?style=for-the-badge&logo=axios&logoColor=white)]()
[![JSON Server](https://img.shields.io/badge/JSON%20Server-%23000000.svg?style=for-the-badge&logo=json&logoColor=white)]()
[![ESLint](https://img.shields.io/badge/ESLint-4B32C3?style=for-the-badge&logo=eslint&logoColor=white)]()
[![Prettier](https://img.shields.io/badge/Prettier-F7B93E?style=for-the-badge&logo=prettier&logoColor=black)]()

[View Live Demo](#) <!-- Add your deployment link here -->

</div>

---

## 📸 Preview

<div align="center">
  <!-- Replace the URL below with a link to your actual screenshot -->
  <img src="/public/app-1.jpg" alt="App Screenshot" width="100%" style="border-radius: 8px;" />
</div>

---

## 🚀 Key Features

- **✍️ Complete CRUD:** Create, read, update, and delete tasks instantly.
- **📱 Fully Responsive:** Beautiful UI that adapts perfectly to mobile, tablet, and desktop screens.
- **🛡️ Bulletproof Validation:** Forms are secured and validated using **React Hook Form** and **Zod**.
- **⚡ Fast & Modern:** Lightning-fast development and build times powered by **Vite**.
- **🗄️ Mock API Integrated:** Uses `json-server` to simulate real-world backend interactions.

---

## 🛠️ Tech Stack

| Category           | Technologies                                |
| :----------------- | :------------------------------------------ |
| **Core**           | React 19, TypeScript, Vite                  |
| **Styling**        | Tailwind CSS v4, `clsx`, `tailwind-merge`   |
| **Forms & Schema** | React Hook Form, Zod, `@hookform/resolvers` |
| **Networking**     | Axios, `json-server` (Mock API)             |
| **Code Quality**   | ESLint, Prettier                            |

---

## 🚦 Getting Started

Follow these steps to set up the project locally on your machine.

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- Git

### 1. Clone & Install

````bash
# Clone the repository
git clone https://github.com/amiralim1377/todo-app-json-server.git

# Navigate into the project directory
cd json-server-api

# Install dependencies
npm install

### 2. Run the Application

This app uses a split-terminal setup to run the frontend and the mock database simultaneously.

> **Terminal 1: Start the Mock Backend**
>
```bash
> npm run json-server
>
````
