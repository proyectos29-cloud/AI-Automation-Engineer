# WideStep Landing Generator

A web-based automation tool designed for the rapid creation and management of listicle-style pre-landing pages (advertorials) derived from research inputs.

## Overview
This application functions as an end-to-end automation engine that converts product research data into high-conversion static pages. The system is architected to ensure brand consistency, visual quality, and streamlined marketing workflows.

## Technical Architecture & Highlights
*   **Core Runtime**: Built on **Node.js**, utilizing a lightweight server architecture for efficient content generation and dashboard management.
*   **Template Engine**: The generation module transforms raw research data into clean, responsive HTML styled with **Tailwind CSS**, optimized for fast loading and performance.
*   **CSS-First Resilience**: Implements a **CSS-only countdown timer** using `@keyframes` and pseudo-elements. By decoupling the countdown logic from JavaScript, the element remains fully functional even in restrictive environments with script blockers.
*   **Data Persistence**: Integrated **SQLite** database for local data management, providing a functional dashboard to browse, retrieve, and manage previously generated landing pages.

## Deployment Strategy
The application is built with production-grade standards:
*   **Containerization**: Includes a professional `Dockerfile` to ensure seamless deployment across any container-ready environment (VPS, Azure, AWS).
*   **Local-First Approach**: The architecture leverages a local database to ensure zero-latency responses, avoiding the "cold start" issues typical of serverless architectures.

## How to Run
1.  Ensure you have **Node.js** (v18 or higher) installed.
2.  Install the project dependencies:
    ```bash
    npm install
    ```
3.  Start the local server:
    ```bash
    node server.js
    ```
4.  Navigate to the local URL indicated in your terminal to access the generator and dashboard.

## Walkthrough
For a detailed demonstration of the technical orchestration, CSS logic, and page generation process, please refer to the video walkthrough:
[Insert Loom Link Here]