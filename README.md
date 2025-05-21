# Wildlife Photo Network

A system that uses computer vision to identify wildlife in photos, retrieve their scientific taxonomic information, and visualize these relationships as an interactive network graph.

## Features (Planned)

- Wildlife detection in photos using computer vision
- Taxonomic classification and information retrieval
- Interactive network visualization of species relationships
- Photo metadata management and organization

## Project Structure

```
wlrs/
├── backend/
│   ├── api/          # FastAPI application and endpoints
│   ├── ml/           # Machine learning models and inference
│   ├── taxonomy/     # Taxonomic data services
│   └── graph/        # Network graph generation
├── data/
│   ├── uploads/      # Uploaded photos
│   ├── models/       # ML model files
│   └── taxonomy/     # Taxonomic data cache
└── frontend/         # React application
```

## Getting Started

### Prerequisites

- Python 3.8+
- Node.js 16+
- npm or yarn

### Backend Setup

1. Create and activate a virtual environment:
   ```bash
   python3 -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```

2. Install Python dependencies:
   ```bash
   pip install -r requirements.txt
   ```

3. Start the backend server:
   ```bash
   uvicorn backend.api.main:app --reload
   ```

The API will be available at `http://localhost:8000`

### Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Start the development server:
   ```bash
   npm start
   # or
   yarn start
   ```

The frontend will be available at `http://localhost:3000`

## Development

- Backend API documentation is available at `http://localhost:8000/docs`
- The project uses FastAPI for the backend and React for the frontend
- D3.js is used for graph visualization
- TensorFlow is used for wildlife detection

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.