from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.routers import test

def init_app():
    # Create the FastAPI app instance
    _app = FastAPI()
    
    # Include the test router
    _app.include_router(test.router)

    # Add CORS middleware
    _app.add_middleware(
        CORSMiddleware,
        allow_origins=["*"],
        allow_credentials=True,
        allow_methods=["*"],
        allow_headers=["*"],
    )

    return _app


app = init_app()
