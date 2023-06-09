# Salony - Backend

Salony is a web application that provides news about Polish celebrities. The backend part of the application is implemented using Python and the FastAPI framework. It utilizes Google authentication for user authentication. Data is scraped from the dywanik.pl website using Beautiful Soup. The backend exposes various endpoints through FastAPI for accessing and retrieving the scraped data. Additionally, logged-in users have the ability to add their own posts about celebrities.

## Technologies Used

- **Python**
- **FastAPI**
- **Beautiful Soup**
- **PostgreSQL**
- **SQLAlchemy**
- **JWT**

## Installation

To set up the backend part of Salony, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/kamczill/salony_.git

2. Navigate to the backend directory:

    ```bash
    cd salony_/backend

3. Install the dependencies:

    ```bash
    pip install -r requirements.txt

4. Set up the environment variables:

- Create a .env file in the backend directory.
- Specify the required environment variables in the .env file. For example:

    ```bash
    MONGODB_URI=your_mongodb_uri
    JWT_SECRET=your_jwt_secret

5. Start the backend server:

    ```bash
    uvicorn main:app --reload

The backend server will be running on the specified port, ready to handle API requests.


## Salony - Frontend

Salony provides a user-friendly frontend interface created using React. The design of the frontend is inspired by the dywanik.pl page. Users have the ability to log in to the application, view news and updates about Polish celebrities, and access a wealth of information. The frontend allows logged-in users to create their own news posts, complete with images. The intuitive interface ensures a seamless browsing experience and easy navigation throughout the application.

## Technologies Used
- **HTML**
- **CSS**
- **JavaScript**
- **React.js**
- **React Router**
- **Axios**
- **MUI**

## Installation
To set up the frontend part of Salony, follow these steps:

1. Clone the repository:

    ```bash
    git clone https://github.com/kamczill/salony_.git

2. Navigate to the frontend directory:

    ```bash
    cd salony_/frontend

3. Install the dependencies:

    ```bash
    npm install

4. Start the frontend server:

    ```bash
    npm start

The frontend application will be running on a specified port and can be accessed through a web browser.

## Contributing
Contributions to Salony are welcome! If you find any bugs or have suggestions for improvements, please feel free to open an issue or submit a pull request. Make sure to follow the project's code of conduct.

Before contributing, please review the contribution guidelines.

## License
This project is licensed under the MIT License.

## Acknowledgements
Salony relies on web scraping techniques and the data provided by the dywanik.pl website. Special thanks to the developers and maintainers of the technologies and libraries used in this project.