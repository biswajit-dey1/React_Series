# 🌓 React Theme Switcher

A sleek and modern React application demonstrating a robust theme switching mechanism using React Context API and Tailwind CSS for dynamic styling. This project offers a seamless user experience with real-time theme updates and responsive design.

## ✨ Key Features

* **Seamless Theme Switching:** Toggle between light and dark modes instantly.
* **Context-based State Management:** Utilizes React's Context API for efficient and global theme state management.
* **Tailwind CSS Dark Mode:** Leverages Tailwind CSS's `dark:` variant for effortless theme-aware styling.
* **Reusable Components:**
    * **Theme Toggle Button (`ThemeBtn`):** Provides an intuitive UI for theme control.
    * **Product Card (`Card`):** A dynamically styled component showcasing theme-aware elements like product image, title, rating, price, and an "Add to cart" button.
* **HTML Class Manipulation:** Dynamically adds/removes `dark` class on the `<html>` element for global theme activation.
* **Clean and Responsive UI:** Crafted with Tailwind CSS for a modern and adaptable design.

## 🚀 Technologies Used

* **React.js:** For building the user interface.
* **Tailwind CSS:** A utility-first CSS framework for rapid and responsive styling, including built-in dark mode support.
* **React Context API:** For global state management of the theme.

## 📁 Project Structure

## ⚙️ How Theme Implementation Works

The core of the theme switching functionality is built around these principles:

1.  **`ThemeContext` Definition (`context/theme.js`):**
    A `ThemeContext` is created with `createContext`, providing `themeMode` state (defaulting to "light") and functions (`darkTheme`, `lightTheme`) to update this state.

    ```javascript
    export const ThemeContext = createContext({
        themeMode: "light",
        darkTheme: () => {},
        lightTheme: () => {}
    });
    ```

2.  **`ThemeContext.Provider` (`App.jsx`):**
    The entire application is wrapped within `ThemeContext.Provider`. The `value` prop of the provider supplies the current `themeMode` and the `darkTheme`/`lightTheme` functions to all descendant components.

3.  **Theme State Management (`App.jsx`):**
    `App.jsx` maintains the `themeMode` state using `useState`. It also contains the logic to update this state and to manipulate the `class` attribute of the `<html>` element based on the `themeMode`. When `themeMode` is "dark", the `dark` class is added to `<html>`, activating Tailwind's dark mode.

4.  **`ThemeBtn` Component (`components/ThemeBtn.jsx`):**
    This component consumes the `ThemeContext` to access the `themeMode` and the `darkTheme`/`lightTheme` functions. It renders a toggle switch that, when interacted with, calls the appropriate theme function to update the global state.

5.  **`Card` Component (`components/Card.jsx`):**
    This component also consumes the `ThemeContext` to reactively apply styling based on the `themeMode`. Tailwind CSS classes with the `dark:` prefix are used to define styles that only apply when the `dark` class is present on the `<html>` element (e.g., `bg-white dark:bg-gray-800`).

## 👨‍💻 Getting Started

### Prerequisites

* Node.js (LTS version recommended)
* npm or Yarn

### Installation

1.  **Clone the repository:**

    ```bash
    git clone [https://github.com/biswajit-dey1/React_Series.git](https://github.com/biswajit-dey1/React_Series.git) # Assuming this is the correct repo containing the project
    cd React_Series/your-theme-switcher-project-folder # Navigate to the specific project folder if it's inside a monorepo
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    # OR
    yarn install
    ```

### Running the Application

1.  **Start the development server:**

    ```bash
    npm run dev
    # OR
    yarn dev
    ```

2.  Open your browser and navigate to `http://localhost:5173` (or the port indicated in your terminal).

## 📄 License

This project is open-sourced under the MIT License. See the [LICENSE](LICENSE) file for more information.

# 💰 Currency Converter

A user-friendly web application for converting currencies in real-time. This project demonstrates fetching exchange rates from an external API, dynamic UI updates, and robust error handling.

## ✨ Key Features

* **Real-time Exchange Rates:** Fetches up-to-date currency exchange rates from a reliable API (e.g., ExchangeRate-API, Open Exchange Rates).
* **Intuitive User Interface:** Clean and easy-to-use interface for selecting currencies and entering amounts.
* **Dynamic Conversion:** Instantly displays converted amounts as you type or select currencies.
* **Currency Dropdowns:** Populated dynamically with a comprehensive list of world currencies.
* **Error Handling:** Gracefully handles API errors or network issues.
* **Responsive Design:** Works well on various screen sizes.

## 🚀 Technologies Used

* **React.js:** For building the interactive UI.
* **[Your CSS Framework/Library, e.g., Tailwind CSS, Chakra UI, plain CSS Modules]:** For styling the application.
* **Fetch API / Axios:** For making HTTP requests to the currency exchange rate API.
* **[Name of Currency API, e.g., ExchangeRate-API.com]:** The external service providing exchange rates.

## 📁 Project Structure

## ⚙️ How It Works

1.  **API Integration:** The application makes a call to a currency exchange rate API to fetch the latest rates based on a selected base currency.
2.  **State Management:** React's `useState` and `useEffect` hooks are used to manage the input amount, selected `from` and `to` currencies, and the conversion result.
3.  **Dynamic Updates:** When the amount or selected currencies change, a re-calculation is triggered, and the UI updates to show the new converted value.
4.  **User Experience:** Clear input fields, dropdowns for currency selection, and immediate feedback provide a smooth conversion experience.

## 🔑 API Key (Important!)

This project relies on an external API for currency exchange rates. You will need to obtain your own API key and configure it in the application.

1.  **Sign up** at [Link to API Website, e.g., ExchangeRate-API.com](https://www.exchangerate-api.com/).
2.  **Get your API Key.**
3.  **Create a `.env` file** in the root of the project (if not already present).
4.  **Add your API key** to the `.env` file like this:
    ```
    VITE_API_KEY=YOUR_ACTUAL_API_KEY_HERE
    ```
    *(Note: The `VITE_` prefix is common for Vite projects. Adjust if using Create React App or Webpack.)*

## 👨‍💻 Getting Started

### Prerequisites

* Node.js (LTS version recommended)
* npm or Yarn

### Installation

1.  **Clone the repository:**
    ```bash
    git clone <repository_url>
    cd <your-currency-converter-folder>
    ```
2.  **Install dependencies:**
    ```bash
    npm install
    # OR
    yarn install
    ```
3.  **Configure API Key:** Follow the steps in the "API Key" section above.

### Running the Application

1.  **Start the development server:**
    ```bash
    npm run dev
    # OR
    yarn dev
    ```
2.  Open your browser and navigate to `http://localhost:5173` (or the port indicated in your terminal).

## 📄 License

This project is open-sourced under the MIT License. See the [LICENSE](LICENSE) file for more information.
