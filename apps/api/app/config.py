from enum import Enum
from pydantic_settings import BaseSettings, SettingsConfigDict


class Environment(str, Enum):
    DEVELOPMENT = "dev"
    PRODUCTION = "prod"


class Settings(BaseSettings):
    APP_ENV: Environment = Environment.DEVELOPMENT
    TEST_URL: str

    model_config = SettingsConfigDict(
        env_file=".env",
    )


# Global settings instance
settings = Settings()