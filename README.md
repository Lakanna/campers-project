# TravelTrucks - Camper Rental Frontend

## Project Overview

TravelTrucks is a frontend web application designed for a camper rental company. This project focuses on creating an intuitive user interface that allows users to explore, filter, and book campers for their travel needs. The application integrates with a backend API to fetch camper data, supports user interaction with reviews, and enables camper bookings.

## Key Features

- **Home Page**: Includes a banner with a call-to-action button leading to the catalog.
- **Catalog Page**: Displays all available campers with filtering options, such as location, body type, and additional features like air conditioning or a kitchen.
- **Camper Details Page**: Shows detailed information about a specific camper, including reviews and a booking form.
- **Favorites Functionality**: Users can add campers to their favorites list, which persists after page reloads.
- **Dynamic Filtering**: Filters campers directly on the backend to ensure accurate results.
- **Pagination**: Includes a "Load More" button for fetching additional campers.
- **Booking Form**: Allows users to submit a booking request and displays a confirmation notification upon success.
- **Reviews Section**: Displays user reviews with a five-star rating system for each camper.

## Technologies Used

- **Frontend Framework**: React with Vite bundler.
- **State Management**: Redux.
- **Routing**: React Router.
- **HTTP Requests**: Axios.
- **CSS Styling**: CSS Modules.

## Project Setup

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd traveltrucks
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Open your browser and navigate to:

http://localhost:5173

## API Endpoints

The application interacts with the following API:

- **GET /campers**: Fetches all campers with filtering options (performed on the backend).
- **GET /campers/:id**: Fetches detailed information about a specific camper by ID.

## Deployment

The application is deployed on **Vercel**. You can visit the live version of the project here:

**[Live Demo](https://campers-project.vercel.app/)**

## How to Use

1. **Browse Campers**: Navigate to the catalog to view available campers.
2. **Filter Campers**: Use the filtering options to find a camper that meets your needs.
3. **View Camper Details**: Click the "Show more" button to see detailed information about a camper.
4. **Add to Favorites**: Save campers to your favorites list by clicking the "Favorite" button.
5. **Book a Camper**: Use the booking form on the camper details page to submit a reservation.

## Project Features and Code Quality

- Clean and well-structured code adhering to the DRY principle.
- Semantic and valid HTML markup.
- Cursor styling for all clickable buttons.
- Proper head section with metadata for SEO and accessibility.

---

## Author

**Hanna Lakus**  
[GitHub Profile](https://github.com/Lakanna)
