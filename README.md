# Storefront Application

A modern e-commerce storefront built with React 19, Vite, and Tailwind CSS v4. This single-page application fetches, displays, sorts, and filters catalog data in real time from the public Fake Store API. It is optimized for responsiveness, clean code architecture, and high rendering performance.

## Features

### 1. Responsive UI and Modular Component Structure
* **Component Reusability**: The user interface is broken down into small, isolated, and highly reusable components such as `SearchBar`, `FilterTabs`, `SortDropdown`, `ProductCard`, `EmptyState`, and `ErrorState`.
* **Clean Architecture**: The project follows a strict logical directory structure separating components, custom UI elements, custom hooks, and API utilities.
* **Fluid Responsiveness**: Built with a mobile-first approach using Tailwind CSS. The product catalog automatically scales from a 1-column grid on mobile to a 2-column grid on tablets, and up to a 4-column grid on desktop monitors.

### 2. Data Fetching and State Resiliency
* **Centralized API Client**: Network interactions are managed via a dedicated Axios instance configured with base configurations and explicit timeouts to prevent hanging requests.
* **Declarative Custom Hook**: A custom `useFetch` hook isolates the asynchronous data lifecycle, handling loading indicators and tracking network exceptions natively.
* **Graceful Error Recovery**: The application intercepts network failures and displays an interactive error state showing error status codes with a retry action to minimize friction.

### 3. Real-Time Interactivity
* **Instant Filter Matching**: Client-side query comparisons update the product feed instantly as text inputs change.
* **Multi-Criteria Sorting**: Offers seamless sorting capabilities, allowing users to arrange data by featured relevance, price scaling, or consumer rating metrics.
* **Zero-Result fallbacks**: Dedicated empty states handle unmatched parameters gracefully to guide users back to active browsing.

---

## Tech Stack and Libraries

* **Framework**: React 19
* **Build Tool**: Vite
* **Styling Engine**: Tailwind CSS v4
* **HTTP Client**: Axios (chosen for its robust request/response interception, timeout management, and cleaner syntax compared to the native Fetch API)
* **Iconography**: Lucide React (chosen for its extensive, lightweight, and customizable SVG icon set)
* **Loading Indicators**: React Loader Spinner (provides crisp, configurable animations that align with the minimalist theme)

---

## Technical Optimizations (The "Pro" Challenge)

### Debounced Search Query Inputs
To prevent expensive data processing and UI updates on every individual keystroke, a custom `useDebounce` hook intercepts search entries. It delays the evaluation of state variations by 300ms, protecting the list from unnecessary rendering cycles during active typing.

### Memoized Computations and Strict Component Updates
* Heavy operations, such as matching item categories or recalculating the sorted list arrangement, are wrapped in `useMemo` blocks to safeguard runtime caching unless source arrays change.
* The `ProductCard` component leverages `React.memo` to skip re-rendering when parent state adjustments occur independently of the product's immutable data.

### Viewport Image Loading Performance
To enhance the Largest Contentful Paint metric, layout configurations dynamically evaluate the indexing position of rendered products. The first 4 catalog items are assigned an eager loading property to fill critical viewport frames immediately, while subsequent items use lazy loading configurations alongside asynchronous decoding to avoid blocking main thread performance.

---

## Installation and Setup

Ensure you have Node.js installed on your local environment. This project uses `pnpm` for package management.

### 1. Clone the Repository
```bash
git clone <repository-url>
cd storefront
