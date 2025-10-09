# App Marketplace – React Project

**App Marketplace** is a modern web application built with **React.js**, designed to simulate a real-world app store experience. Users can explore, search, install, and manage various apps, all within a clean and responsive interface. This project demonstrates advanced React concepts such as **routing, dynamic data loading, localStorage persistence, search filtering, sorting, and component-based architecture** — making it an excellent learning and portfolio project for front-end developers.

## 🚀 Key Features

* **Dynamic App Listing:**
  All available applications are fetched dynamically from a JSON file and displayed in a grid layout. Each app card showcases essential details such as title, rating, download count, and company name.

* **Search Functionality with Loading Animation:**
  Users can easily search for any app using the built-in search bar. A smooth loading animation appears during search input, providing a realistic feel of data fetching.

* **Detailed App View:**
  Clicking on any app navigates to its details page, showing comprehensive information such as description, ratings distribution, reviews, file size, and more. The layout is responsive and optimized for both desktop and mobile users.

* **Installation Management (LocalStorage):**
  The project simulates real app installation using browser localStorage. When a user installs an app, it’s stored locally and visible in the “Installed Apps” section. The **Install Now** button dynamically updates to **Installed** once clicked, preventing duplicate installations. Uninstalling restores it to the original state.

* **Sort and Manage Installed Apps:**
  Users can sort installed applications by download count (high-to-low or low-to-high). The **Uninstall** button removes the app instantly and triggers a toast notification for feedback.

* **Routing and Transitions:**
  Implemented using **React Router DOM**, the project includes smooth transitions with a custom **Loading** component that appears during route changes or data fetching.

* **Clean and Modern UI:**
  The UI is styled with **Tailwind CSS**, maintaining a professional aesthetic with a consistent color theme, spacing, and typography.

## 🧠 Tech Stack

* **Frontend:** React.js, Tailwind CSS
* **Routing:** React Router DOM
* **State Management:** React Hooks (useState, useEffect)
* **Storage:** LocalStorage API
* **Notifications:** React Toastify
* **Icons:** Lucide React

## 💡 Purpose

This project was built to practice real-world React skills — including routing, component reusability, UI optimization, and handling persistent data without a backend. It’s a great starting point for developers aiming to build interactive dashboards, marketplaces, or app listing platforms.

---

**Author:** Md Raiyan Sheikh
**Category:** React Projects / App Management Systems
**License:** MIT License
