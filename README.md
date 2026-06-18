# Storefront Application (React + Vite)

A responsive single-page e-commerce storefront built with React, Vite, and Tailwind CSS v4. This client-side application demonstrates modular component architecture, custom hooks, and rendering optimizations to minimize re-renders when managing real-time filtering and sorting logic.

## Features

### 1. Component Structure and Reusability
* **Modular Codebase**: Organized into clear directories comprising `/components`, `/components/ui`, `/hooks`, and `/utils`.
* **Reusable Layout Components**: Elements are broken down into self-contained components including `SearchBar`, `FilterTabs`, `SortDropdown`, `StarRating`, `EmptyState`, and `ErrorState`.
* **Responsive Layout**: Designed with a mobile-first approach using Tailwind CSS. The catalog layout switches dynamically from 1 column on small phone displays to a 4-column configuration on large desktop viewports.

### 2. Data Fetching and State Resiliency
* **Centralized Axios Client**: Configured with a `baseURL` pointing to the Fake Store API and restricted to a 10000ms timeout window to safeguard against hanging connections.
* **Custom useFetch Hook**: Isolates data fetching code cleanly, managing `data`, `loading`, and `error` states automatically inside a reactive ecosystem.
* **Graceful Exception Recovery**: Captures status criteria and error communications natively, rendering an interactive warning layout that lets users trigger hard window reloads.

### 3. Real-Time Interactivity
* **Live Product Search**: Filters product collections client-side in real time based on user keyword entries.
* **Category Filtering**: A dynamically rendered tab engine matches structural entries across catalog indices, updating arrays accurately on command.
* **Multi-Criteria Sorting**: Empowers buyers to organize inventory details by basic featured indexing, ascending or descending price variations, or top consumer rating values.

---

## Technical Optimizations (The "Pro" Challenge)

### Debounced State Controls
To protect main compilation threads from handling computational sorting cycles on every single keystroke, a custom `useDebounce` hook buffers data mutations. The application delays array evaluations until typing actions stop for 300ms.

### Memoized Computations and Strict Component Tree Boundaries
* Heavy processing routines, such as parsing structural array data to extract distinct categories and ordering lists, are contained within `useMemo` hooks.
* The `ProductCard` component leverages `React.memo` to skip update cycles if parent component state triggers modifications that do not affect the product's unique data properties.

### Viewport Priority Image Loading
To optimize the Largest Contentful Paint (LCP) score, list iteration rules check array index positions. The first four catalog items use an `eager` loading attribute to display quickly, while lower cards default to `lazy` loading properties and asynchronous decoding to keep scrolling smooth.

---

## Tech Stack and Libraries

* **Framework Engine**: React 19
* **Build System**: Vite 8
* **Styling Preprocessor**: Tailwind CSS v4 & PostCSS
* **Network Client**: Axios (chosen for its robust timeout configurations and built-in error encapsulation properties)
* **Icon Library**: Lucide React

---

## Installation and Setup

Make sure Node.js is configured on your machine. This repository is optimized for `pnpm` execution.

### 1. Clone and Enter Project
```bash
git clone <repository-url>
cd storefront
```

### 2. Install Project Dependencies
```bash
pnpm install
```
### 3. Initialize Local Development Environment
```bash
pnpm dev
```
Open the provided local port URL inside your browser view to display the live application layout.

### 4. Build and Preview Production Deliverables
```bash
pnpm build
pnpm preview
```
---

## Challenges and Solutions

### Challenge 1: Redundant Item Re-renders During Active Search Typing
* **Problem**: Changing character entries inside search inputs mutated state variables on every stroke, forcing full array calculations and slowing down performance.
* **Solution**: Developed a dedicated custom `useDebounce` hook. The processing component waits until input pauses for 300ms before triggering filtering logic, reducing compute cycles.

### Challenge 2: Handling Image Loading and Cumulative Layout Shifts
* **Problem**: Unpredictable download times for image resources from public CDNs caused grid elements to jump around, hurting user experience metrics.
* **Solution**: Set explicit height restraints and structured centering flex grids inside card components. The layout sets early viewport images to download eagerly, while subsequent items use lazy loading configurations alongside asynchronous decoding to avoid blocking main thread performance.
