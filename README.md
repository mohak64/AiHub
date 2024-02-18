
# AiHub - https://ai-hub-atlan.vercel.app/

AiHub is a web application designed to provide a centralized platform for exploring and accessing various artificial intelligence resources, tools, and models. With a focus on enhancing user experience, AiHub leverages the latest technologies to ensure fast load times and efficient performance.

## Overview

![Performance](https://github.com/mohak64/AiHub/assets/117752286/3619b7ea-a7fb-4c09-adc8-a959cec30bac)

AiHub is built using the latest technologies, including Next.js 14.0.03 for server-side rendering and React for the client-side components. The application offers a comprehensive range of functionalities, catering to both basic and advanced user needs in the field of artificial intelligence.

## Features

- **Centralized Platform**: AiHub serves as a one-stop destination for AI enthusiasts, researchers, and developers to discover and access diverse AI resources.
- **Fast Load Times**: By utilizing server-side rendering and client-side components, AiHub optimizes load times, ensuring a seamless user experience.
- **Comprehensive Resource Repository**: Users can explore a wide range of AI tools, libraries, models, and datasets available on the platform.
- **Responsive Layout**: The interface is designed with a responsive layout, ensuring compatibility across various devices and screen sizes.
- **Code Quality**: The codebase follows best practices, ensuring readability, maintainability, and adherence to fundamental coding standards.

## Technology Stack

- **JavaScript Framework**: Next.js 14.0.03
- **Frontend**: React, Typescript, Tailwind CSS
- **Backend**: Node.js, MongoDB


## Performance
-Desktop
![Performance](https://github.com/mohak64/AiHub/assets/117752286/03f54cad-2631-4e94-bd90-3eba681687a7)

![Performance](https://github.com/mohak64/AiHub/assets/117752286/5bf93813-233f-4483-8164-d3d8e7975a19)

-Mobile
![mobile](https://github.com/mohak64/PuzzleArena/assets/117752286/d26b6033-8d79-49a1-ab79-a6f06ce1e289)


- **Page Load Time**: The page load time of AiHub is measured using Vercel Speed Insights and PageSpeed Insights. It ensures that users can access the platform swiftly without experiencing delays.
- **Optimizations**: Various optimizations have been implemented to enhance performance.

## Run Locally

To Run this project Locally

```bash
  git clone https://github.com/mohak64/AiHub.git
  cd AiHub
  npm install
  npm run build
  npm run dev
```
## Backend Access
- Repository: Access the backend repository https://github.com/mohak64/llm-backend
- Deployed Link: https://backendllm.onrender.com/api/llms?page=1
- This endpoint provides access to the API resources required by the AiHub frontend application. You can make requests to this endpoint to fetch data for rendering content on the frontend.

## Server-Side and Client-Side Rendering in Next.js for Performance Optimization

Next.js provides the flexibility to choose between server-side rendering (SSR) and client-side rendering (CSR) based on the specific needs of your application. Leveraging both SSR and CSR can significantly optimize performance and enhance user experience. Here's how:

### Server-Side Rendering (SSR)

Server-side rendering generates the HTML for each page on the server and sends it to the client, significantly reducing the time to first paint (TTFP) and improving perceived performance. Key benefits include:

- **Improved SEO**: Search engine crawlers can easily index content rendered on the server, leading to better search engine rankings and visibility.
  
- **Faster Initial Load**: Users receive pre-rendered HTML content from the server, reducing initial load times and improving time-to-interactive (TTI).

- **Enhanced Performance on Low-Powered Devices**: Devices with limited processing power benefit from receiving pre-rendered content, resulting in smoother browsing experiences.

### Client-Side Rendering (CSR)

Client-side rendering dynamically generates content in the browser, allowing for interactive and dynamic user interfaces. Key benefits include:

- **Dynamic Updates**: Client-side rendering enables dynamic content updates without full page reloads, providing a more interactive user experience.

- **Reduced Server Load**: Static assets and resources can be cached on the client-side, reducing the load on the server and improving scalability.

- **Personalized Content**: Client-side rendering facilitates personalized content delivery based on user interactions and preferences, enhancing user engagement.

### Hybrid Rendering

Next.js supports hybrid rendering, allowing you to combine SSR and CSR to optimize performance further:

- **Initial SSR**: Render critical content server-side for fast initial load times and improved SEO.

- **Subsequent CSR**: Transition to client-side rendering for dynamic content updates and interactive features, providing a seamless user experience.

By strategically leveraging both server-side and client-side rendering in Next.js, you can achieve optimal performance, improved SEO, and enhanced user experience for your application.


## Contribution

Contributions to AiHub are welcome! If you have any suggestions, bug reports, or feature requests, feel free to submit them through [GitHub Issues](https://github.com/mohak64/AiHub/issues). Additionally, you can contribute directly by forking the repository and submitting pull requests.

## License

AiHub is licensed under the [MIT License](LICENSE).
