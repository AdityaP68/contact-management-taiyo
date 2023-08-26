# Taiyo Assignment

Welcome to the Contact Management System! This application allows you to manage your contacts, view analytics, and more.

## Installation

1. Clone this repository to your local machine using:

```
git clone https://github.com/AdityaP68/contact-management-taiyo.git

```

2. Navigate to the project directory:

```
cd contact-management-taiyo

```

3. Install the dependencies using npm or yarn:

```
npm install
# or
yarn add
```

4. Start the development server:

```
npm run dev

```


5. Open your browser and access the application at http://localhost:5173.

## Available Routes

- `/`: The Contacts page displays a list of all contacts. You can create, view, edit, and delete contacts from this page.

- `/create-contact`: This page allows you to create a new contact by providing the necessary details.

- `/view-contact/:id`: View the details of a specific contact.

- `/edit-contact/:id`: Edit the details of a specific contact.

- `/analytics`: The Analytics page displays visualizations of historical COVID-19 data and a map with country-wise case spread.

## APIs Used

- Historical COVID-19 Data API: Fetches historical COVID-19 data for data visualization.

- Country COVID-19 Data API: Fetches country-wise COVID-19 data for the map visualization.

## Technologies Used

- Vite: As a bundler
- Typescript: For typechecking
- Tailwind CSS: For a tailwind framework
- React v18+: Frontend library for building user interfaces.
- React Router v6+: For routing within the application.
- React-Redux: State management library for managing contacts.
- Redux Toolkit: State management library for managing contacts.
- Tanstack/React Query: For fetching and managing API data.
- Leaflet: For rendering interactive maps.
- Recharts: For creating data visualizations.



## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
