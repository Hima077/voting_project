const usersController = require("../controller/users.controller");

var express = require("express");

var router = express.Router();

//user registration

router.post("/register", usersController.register);
/**
 * @swagger
 * /users/register:
 *   post:
 *      description: User Registration
 *      tags:
 *          - users
 *      parameters:
 *          - in: body
 *            name: User
 *            description: User data
 *            schema:
 *              type: object
 *              required:
 *                 - firstName
 *                 - lastName
 *                 - emailId
 *                 - password
 *                
 *              properties:
 *                  firstName:
 *                      type: string
 *                      minLength: 1
 *                      maxLength: 45
 *                      
 *                  lastName:
 *                      type: string
 *                      minLength: 1
 *                      maxLength: 45
 *                     
 *                  emailId:
 *                      type: string
 *                      minLength: 1
 *                      maxLength: 100
 *                     
 *                  password:
 *                      type: string
 *                      minLength: 1
 *                      maxLength: 45
 * 
 *                     
 *      responses:
 *          '200':
 *              description: Registered successfully
 *          '400':
 *              description: Kindly fill the details correctly
 *          
 */

//login

router.post("/login", usersController.login);
/**
 * @swagger
 * /users/login:
 *   post:
 *      description: Used to login user
 *      tags:
 *          - users
 *      parameters:
 *          - in: body
 *            name: User
 *            description: User login
 *            schema:
 *              type: object
 *              required:
 *                 - emailId
 *                 - password
 *                
 *              properties:
 *                  emailId:
 *                      type: string
 *                      minLength: 1
 *                      maxLength: 100
 *                     
 *                  password:
 *                      type: string
 *                      minLength: 1
 *                      maxLength: 45
 * 
 *                 
 *      responses:
 *          '200':
 *              description: Login successfully
 *          '400':
 *              description: Invalid credentials
 *         
 */

//adding query

 router.post("/addquery", usersController.addquery);
 /**
  * @swagger
  * /query/addquery:
  *   post:
  *      description: adding query
  *      tags:
  *          - query
  *      parameters:
  *          - in: body
  *            name: query
  *            description: query data
  *            schema:
  *              type: object
  *              required:
  *                 - queryName
  *                 - queryStartDate 
  *                 - queryEndDate
  *                
  *                
  *              properties:
  *                  queryName:
  *                      type: string
  *                      minLength: 1
  *                      maxLength: 45
  *                      
  *                  queryStartDate:
  *                      type: integer
  *                     
  *                  queryEndDate:
  *                      type:integer
  *      
  *                      
  * 
  *                     
  *      responses:
  *          '200':
  *              description: query added successfully
  *          '400':
  *              description: error
  *          
  */

 //adding options

 router.post("/addoptions", usersController.addoptions);

 /**
 
  * @swagger
 
  * /options/addoptions:
 
  *   post:
 
  *      description: Options Data
 
  *      tags:
 
  *          - options
 
  *      parameters:
 
  *          - in: body
 
  *            name: options
 
  *            description: Options data
 
  *            schema:
 
  *              type: object
 
  *              required:
 
  *                 - queryId
 
  *                 - optionId

 
  *                 - options
  
  *              properties:
 
  *                  queryId:
 
  *                      type: integer
 
  *                  optionId:
 
  *                      type: integer

 
  *                  options:
 
  *                      type: string

  *      responses:
 
  *          '200':
 
  *              description: Options Added successfully
 
  *          '400':
 
  *              description: Error
 
  *          
 
  */
 //voting 

 router.post("/castvote", usersController.castvote);
 /**
  * @swagger
  * /vote/castvote:
  *   post:
  *      description: casting vote
  *      tags:
  *          - vote
  *      parameters:
  *          - in: body
  *            name: vote
  *            description: voting data
  *            schema:
  *              type: object
  *              required:
  *                 - voteId
  *                 - queryId
  *                 - optionId
  *                 - userId
  *                 - totalVote
  *                
  *                
  *              properties:
  *                  voteId:
  *                      type: integer
  *                     
  *                  queryId:
  *                      type: integer
  *                     
  *                  optionId:
  *                      type:integer
  * 
  *                  userId:
  *                      type:integer
  * 
  *                  totalVote:
  *                      type:integer             
  *      responses:
  *          '200':
  *              description: vote casted successfully
  *          '400':
  *              description: error
  *          
  */

  //get all users

  router.get("/getAllUsers", usersController.getAllUsers);
  
  /**
   * @swagger
   * /details/getAllUsers:
   *   get:
   *      description: Get User Details
   *      tags:
   *          - details
   *          
   *      responses:
   *          '200':
   *              description: successfull
   *          '400':
   *              description: error
   *          
   */

//get all options

router.get("/getAlloption", usersController.getAlloption);
  
/**
 * @swagger
 * /details/getAlloption:
 *   get:
 *      description: Get option Details
 *      tags:
 *          - details
 *          
 *      responses:
 *          '200':
 *              description: successfull
 *          '400':
 *              description: error
 *          
 */

//get all query

router.get("/getAllquery", usersController.getAllquery);
  
/**
 * @swagger
 * /details/getAllquery:
 *   get:
 *      description: Get query Details
 *      tags:
 *          - details
 *          
 *      responses:
 *          '200':
 *              description: successfull
 *          '400':
 *              description: error
 *          
 */

//get id list(optionid and queryid)

router.get("/getIdlist", usersController.getIdlist);
  
/**
 * @swagger
 * /details/getIdlist:
 *   get:
 *      description: Get Id Details
 *      tags:
 *          - details
 *          
 *      responses:
 *          '200':
 *              description: successfull
 *          '400':
 *              description: error
 *          
 */


router.get("/gettotalvote", usersController.gettotalvote);
/**
 * @swagger
 * /vote/gettotalvote:
 *   get:
 *      description: get total vote
 *      tags:
 *          - vote
 *          
 *      responses:
 *          '200':
 *              description: successfull
 *          '400':
 *              description: error
 *          
 */



module.exports = router;
