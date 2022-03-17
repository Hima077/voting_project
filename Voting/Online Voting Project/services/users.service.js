const db = require("../config/db.config");

//user registration
exports.register = (data, callback) => {
  db.query(
      `INSERT INTO users(firstName , lastName, emailId, password) VALUES (?,?,?,?)`,
      [data.firstName, data.lastName, data.emailId, data.password],
    (error, results, fields) => {
      if (error) {
        return callback(error);
      }
      return callback(null, `Registration successful`);
    }
  );
};

//user login
exports.login = (data, callback) => {
    db.query(
      `SELECT userId FROM users WHERE emailId = ? AND password = ?`,
      [data.emailId, data.password],
    
      (error, results, fields) => {
        if (error) {
          return callback(error);
        }
        if (results.length > 0) {
          return callback(null, "Login success");
        } 
        else {
          return callback("Invalid credentials");
        
        }
      }
    );
  };

//adding query
  exports.addquery = (data, callback) => {
    db.query(
        `INSERT INTO query(queryName, queryStartDate, queryEndDate) VALUES (?,?,?)`,
        [data.queryName, data.queryStartDate, data.queryEndDate],
      (error, results, fields) => {
        if (error) {
          return callback(error);
        }
        return callback(null, `query added successfully`);
      }
    );
  };

  //adding options

  exports.addoptions = (data, callback) => {
    db.query(
        `INSERT INTO options(queryId, optionId, options) VALUES (?,?,?)`,
        [data.queryId, data.optionId, data.options],
      (error, results, fields) => {
        if (error) {
          return callback(error);
        }
        return callback(null, `Options added successfully`);
      }
    );
  };

  //voting

  exports.castvote = (data, callback) => {
    db.query(
        `INSERT INTO vote(voteId, queryId, optionId, userId, totalVote) VALUES (?,?,?,?,?)`,
        [data.voteId, data.queryId, data.optionId, data.userId, data.totalVote],
      (error, results, fields) => {
        if (error) {
          return callback(error);
        }
        return callback(null, `vote casted successfully`);
      }
    );
  };


//get all users
exports.getAllUsers = (data, callback) => {

  db.query(
  
    'select firstName,lastName from users ',
   
       (error, results, fields) => {
      if (error) {
        return callback(error);
      }
      return callback( null,results);
    }
   );
};
  

//get all options
exports.getAlloption = (data, callback) => {

  db.query(
  
    'select optionId, options, queryId from options ',
   
       (error, results, fields) => {
      if (error) {
        return callback(error);
      }
      return callback( null,results);
    }
   );
};

//get all query
exports.getAllquery = (data, callback) => {

  db.query(
  
    'select queryId, queryName from query ',
   
       (error, results, fields) => {
      if (error) {
        return callback(error);
      }
      return callback( null,results);
    }
   );
};

//get id list
exports.getIdlist = (data, callback) => {

  db.query(
  
    'select queryId,optionId from vote where userId = 2 ',
   
       (error, results, fields) => {
      if (error) {
        return callback(error);
      }
      return callback( null,results);
    }
   );
};

//get total vote
exports.gettotalvote = (data, callback) => {

  db.query(
  
    'select count (optionId) as totalVote from vote',
   [],
       (error, results, fields) => {
      if (error) {
        return callback(error);
      }
      return callback( null,results);
    }
   );
};




 


