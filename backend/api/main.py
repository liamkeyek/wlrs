from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(
    title="Wildlife Recognition System",
    description="API for wildlife photo analysis and taxonomic network visualization",
    version="0.1.0"
)

# Configure CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # React default port
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
async def root():
    return {
        "status": "Wildlife Photo Network API is running",
        "version": "0.1.0"
    }

@app.get("/health")
async def health_check():
    return {"status": "ok"} 