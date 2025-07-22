from fastapi import APIRouter
from app.config import settings

router = APIRouter()

@router.get("/test", status_code=200)
async def get_test():

   
    """Returns a hello world message.

    **Returns:**
    - str: hello world message.
    """
    return settings.TEST_URL
