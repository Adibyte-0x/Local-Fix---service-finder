# LocalFix — Local Service Finder

**LocalFix** is a responsive web-based platform designed to help users discover, compare, and request services from local professionals.

The project provides a simple interface for finding service providers such as electricians, plumbers, mechanics, carpenters, AC repair technicians, and cleaning professionals.

## Features

### Service Discovery

* Search for local service providers by category.
* Select from multiple service categories.
* Enter a city or locality to search for nearby professionals.
* Use the current-location option through a mocked location system.

### Service Categories

The platform currently supports:

* Electricians
* Plumbers
* Mechanics
* Carpenters
* AC Repair
* Cleaning

### Provider Search and Filtering

Users can:

* View available service providers.
* Sort providers by:

  * Rating
  * Distance
  * Price
* Filter providers by verification status.
* Set a maximum distance.
* Filter providers based on minimum rating.

### Provider Profiles

Each provider has a dedicated profile containing:

* Provider name
* Service category
* Rating and reviews
* Distance
* Experience
* Availability
* Starting price
* Description
* Services offered
* Recent reviews
* Additional provider information

### Service Request System

The project includes a multi-step service request process:

1. Select the required date.
2. Select a preferred time period.
3. Describe the service requirement.
4. Enter the service address.
5. Review the request details.
6. Confirm the request.
7. Generate a unique request ID.

### User Dashboard

After logging in, users can:

* View their active service requests.
* Track request IDs.
* Check request status.
* Access the Trust and Safety section.

### Authentication

The project includes a demonstration login system with:

* Customer login
* Provider login interface
* Demo authentication
* Automatic dashboard access after login

> Authentication is currently implemented as a frontend demo and does not use a backend authentication system.

### Responsive Design

The website is designed to work across different screen sizes and includes:

* Desktop navigation
* Mobile navigation menu
* Responsive search interface
* Responsive provider cards
* Responsive profile layouts
* Mobile-friendly booking modal

## Technology Stack

### Frontend

* HTML5
* CSS3
* JavaScript
* CSS Grid
* CSS Flexbox

### Libraries

* [Lucide Icons](https://lucide.dev/)
* Google Fonts — Inter
* UI Avatars API

## Project Structure

```text
LocalFix/
│
├── index.html
├── styles.css
├── script.js
└── README.md
```

## Application Architecture

LocalFix follows a lightweight **Single Page Application (SPA)** approach using vanilla JavaScript.

The application contains multiple views:

```text
Home
  │
  ├── Search
  │     ├── Filters
  │     ├── Sorting
  │     └── Provider Results
  │
  ├── Provider Profile
  │
  ├── Service Booking
  │     ├── Date & Time
  │     ├── Service Details
  │     └── Confirmation
  │
  ├── Login
  │
  └── User Dashboard
```

The application state is maintained through a centralized JavaScript `state` object, while the `app` object handles navigation, rendering, searching, booking, authentication, and dashboard functionality.

## How to Run

No build tools or package installation are required.

### 1. Clone the Repository

```bash
git clone <your-repository-url>
```

### 2. Navigate to the Project Directory

```bash
cd LocalFix
```

### 3. Open the Website

Open `index.html` in a web browser.

For the best development experience, use **Visual Studio Code with the Live Server extension**.

## Demo Flow

A typical user flow is:

```text
Open LocalFix
      ↓
Select a Service
      ↓
Search for Professionals
      ↓
Apply Filters / Sorting
      ↓
View Provider Profile
      ↓
Request a Service
      ↓
Select Date & Time
      ↓
Enter Service Details
      ↓
Confirm Request
      ↓
Receive Request ID
      ↓
Login
      ↓
Track Request in Dashboard
```

## Current Implementation

This version uses **mock data** instead of a backend database.

Provider information, ratings, prices, availability, and service requests are stored in JavaScript objects and application state.

The project is therefore intended primarily as a **frontend prototype and demonstration application**.

## Future Improvements

The following features can be added in future versions:

* Backend API integration
* Real user authentication
* Database integration
* Real-time provider availability
* Real geolocation and distance calculation
* Provider registration and verification
* Online booking management
* Payment integration
* Real-time messaging between customers and providers
* Provider dashboard
* Review and rating submission
* Service request notifications
* Advanced search and filtering
* Map-based provider discovery
* Secure authentication and authorization

## Project Objective

The objective of LocalFix is to demonstrate how a digital platform can simplify the process of discovering and requesting local services.

The project focuses on improving:

* Service discoverability
* User convenience
* Provider visibility
* Comparison of local professionals
* Trust and verification awareness
* Service request management

## Team

**LocalFix** was created by:

* **Aditya**
* **Ashwini**
* **Ziyan**

## License

This project is developed for educational and demonstration purposes.
