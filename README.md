# NotesHub API

Welcome to the **NotesHub API**, an advanced backend solution for managing notes, tags, and users. Built with Node.js, Knex, and SQLite, this API ensures robust data handling and seamless integration with the NotesHub SPA.

![NotesHub API](https://github.com/user-attachments/assets/027bcb61-6481-4888-a898-e3e0eacf754e)

## Endpoints

### 1. Notes

Manage notes efficiently with a comprehensive set of endpoints.

```
/notes
```

#### Methods:

- **GET**: Retrieve all user's notes or a specific note using query parameters.
  - Requires a Bearer Token from the `/sessions` endpoint.
- **POST**: Create a new note in the database.
  - Requires a Bearer Token from the `/sessions` endpoint.
- **DELETE**: Delete a note by passing the note ID as query parameters.
  - Requires a Bearer Token from the `/sessions` endpoint.

### 2. Tags

List and manage tags associated with notes.

```
/tags
```

#### Methods:

- **GET**: Retrieve all user-created tags.
  - Requires a Bearer Token from the `/sessions` endpoint.

### 3. Users

Create and update user information.

```
/users
```

#### Methods:

- **PATCH**: Add or update the user's avatar.
  - Requires a Bearer Token from the `/sessions` endpoint.
- **POST**: Register a new user in the database.
- **PUT**: Update existing user data.
  - Requires a Bearer Token from the `/sessions` endpoint.

### 4. Sessions

Generate a Bearer Token for user authentication.

```
/sessions
```

#### Methods:

- **POST**: Create a Bearer Token to authenticate the user.

### 5. Files

Manage user avatars.

```
/files
```

#### Methods:

- **GET**: Retrieve a user's avatar.

## How to Use

Follow these steps to set up and run the NotesHub API on your local machine or server.

### 1. Clone the Repository

```bash
git clone https://github.com/dcarminatti/noteshub-api.git
```

### 2. Install Dependencies

Navigate to the project directory and install the required dependencies.

```bash
npm install
```

### 3. Add Environment Variables

Create a `.env` file in the root directory and add the required properties from the `.env.example` file.

### 4. Start the API

Run the setup script and start the server.

```bash
npm run setup
npm start
```

## Credits

NotesHub API was designed and developed by **[Diogo Carminatti](https://github.com/dcarminatti)**.
