# Planning Phase

## Frontend Website

- Component
    - Login Input Component
    - Account info display


## Backend Express Server

-  Endpoints
    - POST /user
        - {"username": "user", "password": "pass"}
        - {"user_id": uuid, "token": "jwt", "user": ...}

## Repository DDB
- User Table
    - Users
        - user_id: string
        - username: string
        - password: string
        - name: string

## Login Feature

- As a user with an account on my site, I can login with the correct credentials and see my account info