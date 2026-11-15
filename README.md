# Gallery – Image Sharing Application

Gallery is a full-stack image-sharing web application that allows users to upload images with captions and view their posts in a gallery-style feed. It uses React for the frontend and Node.js, Express.js, and MongoDB for the backend.

## ✨ Features

- **Image Upload:** Upload images directly through the application.
- **Captions:** Add captions to images before sharing them.
- **Cloud Storage:** Images are uploaded and stored using ImageKit.
- **Gallery Feed:** View uploaded images along with their captions.
- **Database Integration:** Store and retrieve post information using MongoDB.
- **Responsive UI:** Clean interface built with Tailwind CSS.
- **Client-side Routing:** Navigate between post creation and gallery feed.

## 🛠️ Tech Stack

### Frontend
- React.js
- React Router DOM
- Tailwind CSS
- Axios
- Lucide React
- Vite

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- Multer
- ImageKit
- dotenv
- CORS

## 📁 Project Structure

```text
Gallery/
│
├── backend/
│   ├── src/
│   │   ├── db/
│   │   │   └── db.js
│   │   ├── models/
│   │   │   └── note.model.js
│   │   ├── services/
│   │   │   └── storage.service.js
│   │   └── app.js
│   │
│   ├── server.js
│   └── package.json
│
├── frontend/
│   └── project-FE/
│       ├── src/
│       │   ├── App.jsx
│       │   ├── Post.jsx
│       │   ├── Feed.jsx
│       │   └── main.jsx
│       │
│       └── package.json
│
└── README.md
```

## ⚙️ Installation and Setup

### 1. Clone the Repository

```bash
git clone https://github.com/Ritik-9/Gallery.git
```

```bash
cd Gallery
```

### 2. Setup Backend

Navigate to the backend directory:

```bash
cd backend
```

Install dependencies:

```bash
npm install
```

Create a `.env` file inside the backend directory:

```env
Mongo_URI=your_mongodb_connection_string
ImageKit_Private_Key=your_imagekit_private_key
```

Start the backend server:

```bash
node server.js
```

The backend server runs on:

```text
http://localhost:3000
```

### 3. Setup Frontend

Open another terminal and navigate to the frontend directory:

```bash
cd frontend/project-FE
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open the local URL provided by Vite in your browser.

## 🔗 API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| POST | `/create-post` | Upload an image and create a post |
| GET | `/posts` | Retrieve all uploaded posts |

### POST `/create-post`

Accepts multipart form data containing:

- `img`: Image file
- `caption`: Image caption

The uploaded image is stored using ImageKit, and its URL along with the caption is saved in MongoDB.

### GET `/posts`

Fetches all posts stored in the MongoDB database, including their image URLs and captions.

## 🔐 Environment Variables

The backend requires the following environment variables:

| Variable | Description |
|---|---|
| `Mongo_URI` | MongoDB connection string |
| `ImageKit_Private_Key` | ImageKit private API key |

**Note:** Never expose your private keys or commit your `.env` file to GitHub.

## 🚀 Future Improvements

- User authentication and authorization.
- Delete and edit posts.
- Like and comment functionality.
- Image preview before uploading.
- Search and filter functionality.
- User-specific galleries.

## 👨‍💻 Author

**Ritik Paras**

- GitHub: [Ritik-9](https://github.com/Ritik-9)
- LinkedIn: [Ritik Paras](https://www.linkedin.com/in/ritik-paras-675906388/)

---

⭐ If you find this project interesting, consider giving the repository a star!