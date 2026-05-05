<div align="center">

# ✨ TaskMaster: Responsive Todo App

A beautiful, fully responsive Todo application built with modern web technologies.
Manage your daily tasks effortlessly with complete CRUD functionality and robust validation.

[![React](https://img.shields.io/badge/React_19-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)]()
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)]()
[![Vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)]()
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_v4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)]()

[View Live Demo](#) <!-- Add your deployment link here -->

</div>

---

## 📸 Preview

<div align="center">
  <!-- Replace the URL below with a link to your actual screenshot -->
  <img src="https://via.placeholder.com/800x400?text=Your+App+Screenshot+Here" alt="App Screenshot" width="100%" style="border-radius: 8px;" />
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
git clone https://github.com/yourusername/your-repo-name.git

# Navigate into the project directory
cd your-repo-name

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
