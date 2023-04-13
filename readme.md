User authentication backend using Express JS
created by Lharasatie K A

Dpendencies:
- bcrypt
- cookie-parser
- dotenv
- fastest-validator
- mysql2
- sequelize
- nodemon

How to use this project:
1. Clone this project
2. In the terminal, realtively under this project directory, run command "npm install"
3. In the terminal run command "sequelize db:migrate"
4. In the terminal run command "sequelize db:seed:all"
5. Then finally, run the project using command npm start


Endpoints:
1. Sign Up
    - path: /v1/auth/signup
    - method: POST
    - authorization: not required
    - parameters:
        - email:
            * type: string
            * is mandatory: yes
        - password:
            * type: string
            * is mandatory: yes
        - confirmPassword:
            * type: string
            * is mandatory: yes
        - confirmPassword:
            * type: string
            * is mandatory: yes
        - fullname:
            * type: string
            * is mandatory: yes
        - username:
            * type: string
            * is mandatory: yes
2. Sign In
    - path: /v1/auth/signin
    - method: POST
    - authorization: not required
    - parameters
        - email:
            * type: string
            * is mandatory: no
        - password:
            * type: string
            * is mandatory: yes
        - username:
            * type: string
            * is mandatory: no
2. Retrieve several user
    - path: /v1/user/userlist
    - method: POST
    - authorization: bearer token
    - parameters
        - id:
            * type: number
            * is mandatory: no
        - email:
            * type: string
            * is mandatory: no
        - username:
            * type: string
            * is mandatory: no
        - fullname: 
            * type: string
            * is mandatory: no
        - access_token:
            * type: string
            * is mandatory: noe
        - signup_token:
            * type: string
            * is mandatory: no
        - limit:
            * type: number
            * is mandatory: yes
            * desc: for pagination purposes that represent numbers of data to be retreived (max 500/request)
        - offset:
            * type: number
            * is mandatory: yes
            * desc: for pagination purposes that represent number of records that should be skipped (in conjunction with the limit property)
        - order:
            * type: string
            * is_mandatory: no
            * desc: the value should be in the pattern of "pattern_sortOrder" (eg. id_desc). this value will define how the dataa should be sorted.
