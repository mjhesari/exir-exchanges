# Base Structure

This repository provides a standardized structure for all team projects, including folder organization, file naming conventions, and commenting guidelines, ensuring consistency and maintainability across our work.

# Front-end Project Folder Structure Template

## 1. app/

The **`app/`** directory in Next.js represents the core of the **App Router.**

- **[lang]**
    - **providers/** - Context providers for managing global state, themes, and other shared functionality across the application
    - **dictionaries/** - Language files and translations for internationalization support, including locale-specific content and UI strings

---

## 2. components/

Contains all components organized by feature or type.

- **layout/** - Layout-related components like headers, footers, and navigation
- **common/** - Reusable components used across multiple features
- **pages/** - Page-specific components and templates used as the base for different routes or views. Includes reusable page layouts and page-specific business logic.

---

## 3. utils/

Utility functions and helper modules for common operations.

- **api/** - API request handlers and data transformation functions
- **auth/** - Authentication utilities, middleware, and security-related functions for handling user authentication and authorization
- **functions/** - Shared utility functions and helper methods for common operations like data formatting, calculations, and transformations across the application
- **validation/** - Input validation and form handling helpers
- **data/** - Data utilities, constants, and static data structures used across the application, including mock data for development and testing purposes
- **config/ -** Configuration utilities and settings management, including environment variables, feature flags, and application-wide configuration parameters that control the behavior and functionality of different parts of the application

---

## 4. types/

Type definitions and interfaces for TypeScript development.

- **components-types.ts -** Type definitions for components, including props interfaces, state types, and component-specific type declarations to ensure type safety and better development experience
- **redux-types.ts -** Type definitions for Redux state, actions, and store configuration, including interfaces for the global state shape, action types, and selector return types to maintain type safety throughout the state management layer
- **utils-types.ts -** Type definitions for utility functions and helper modules, including interfaces and types for common operations, data transformations, and configuration settings to maintain consistency and type safety across utility functions

---

## 5. redux/

- **app/** - Core Redux store configuration and setup, including store creation, and root reducer composition
- **features/** - Feature-specific Redux slices containing reducers, actions, and selectors organized by functionality

---

## 6. public/

Static files that don't require processing.

- **images/ -**  Image assets like logos, icons, and other static images used throughout the application
- **styles/** - Global CSS files, custom styles, and theme-related stylesheets that define the visual appearance and layout of the application