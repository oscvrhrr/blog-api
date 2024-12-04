## Auth
| Description | Method      | URL |
| ----------- | ----------- | ---- |
| login user      |  POST      | /auth/login | 
| sign up user    |  POST      | /auth/signup|

## Users
| Description | Method      | URL |
| ----------- | ----------- | ---- |
| get all users | GET | /users
| get current user data | GET | /users/me |
| get a specific user | GET | /users/:id |
| get a users posts | GET | /users/:id/posts
| delete account | DELETE | /users/:id |

## Posts
| Description | Method      | URL |
| ----------- | ----------- | ---- |
| create a post   |  POST      | /posts | 
| comment on post |  POST      | /posts/:id/comments|
| get all posts | GET | /posts
| get a post | GET | /posts/:id |
| delete a post | DELETE | /posts/:id/ |