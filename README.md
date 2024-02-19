# Wine Web Application

This is a web application for managing and showcasing a collection of wines. It allows users to browse and purchase wines, as well as administrators to add, update, and delete wines from the database.

## Features

- View a curated selection of wines on the home page carousel.
- Browse wines by type and view details on the shop page.
- Admin interface to manage wines:
  - Add new wines
  - Update existing wines
  - Delete wines

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Pug (template engine)
- Bootstrap (front-end framework)

## Getting Started

To get started with this project, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/MilinVaniyawala/wine_web_application.git
   ```
2. Install dependencies
   ```bash
   cd wine_web_application
   npm install
   ```
3. Set up environment variables
   - Create a .env file in the root directory of the project.
   - Add your MongoDB connection URL to the .env file:
   ```
   DB_URL=mongodb+srv://username:password@your-mongodb-url/wines
   ```
4. Start the server:
   ```
   npm start
   ```
5. Visit http://localhost:8888 in your browser to view the application.

### Sample MongoDB Data

Here's a sample document from the MongoDB collection:

```json
{
  "_id": {
    "$oid": "65cefa03d4fc7a193246a267"
  },
  "name": "Tom Gore Cabernet Sauvignon",
  "type": "Red Wine",
  "price": "19.95",
  "size": "750",
  "imageURL": "https://aem.lcbo.com/content/dam/lcbo/products/4/5/1/3/451336.jpg.thumb.1280.1280.jpg"
}
```

### Image Credits

- Wine bottle images are sourced from the LCBO website.
- Images used in the home page carousel are obtained from Unsplash.

### Folder Structure

- controllers: Contains route handlers for different routes.
- models: Defines the schema and interacts with the MongoDB database.
- public: Static assets such as CSS, JavaScript, and images.
- views: Pug templates for rendering HTML pages.
- index.js: Entry point of the application.

### Contributing

Contributions are welcome! If you find any issues or have suggestions for improvement, feel free to open an issue or create a pull request.

### License

This project is licensed under the MIT License.

```

This `README.md` file provides detailed instructions on how to install, use, and contribute to the MV Wines project. It also includes information about dependencies and licensing. You can customize it further as needed for your project.

```

```

```
