const usersService = require("../services/users.service");

//user register
exports.register = (req, res, next) => {
  // Validation 
  const data = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    emailId: req.body.emailId,
    password: req.body.password,
   
  };
  usersService.register(data, (error, results) => {
    if (error) {
      console.log(error);
      return res.status(400).send({ success: 0, data: "Email Already Exists" });
    }
    return res.status(200).send({
      success: 1,
      data: results,
    });
  });
};

//login
exports.login = (req, res, next) => {
    // Validation area
    const data = {
      emailId: req.body.emailId,
      password: req.body.password,
    };
    usersService.login(data, (error, results) => {
      if (error) {
        console.log(error);
        return res.status(400).send({ success: 0, data: "Invalid credentials" });
      }
      return res.status(200).send({
        success: 1,
        data: results,
      });
    });
  };

//adding query
  
exports.addquery = (req, res, next) => {
  // Validation 
  const data = {
    queryName: req.body.queryName,
    queryStartDate: req.body.queryStartDate,
    queryEndDate: req.body.queryEndDate,
    
   
  };
  usersService.addquery(data, (error, results) => {
    if (error) {
      console.log(error);
      return res.status(400).send({ success: 0, data: "Bad request" });
    }
    return res.status(200).send({
      success: 1,
      data: results,
    });
  });
};
//adding options

exports.addoptions = (req, res, next) => {
  // Validation
  const data = {

    queryId: req.body.queryId,

    optionId: req.body.optionId,

    options: req.body.options,


  };

  usersService.addoptions(data, (error, results) => {
    if (error) {
      console.log(error);
      return res.status(400).send({ success: 0, data: "Bad request" });
    }
    return res.status(200).send({
      success: 1,
      data: results,
    });
  });
}

//voting


exports.castvote = (req, res, next) => {
  // Validation
  const data = {
    voteId: req.body.voteId,

    queryId: req.body.queryId,

    optionId: req.body.optionId,

    userId: req.body.userId,

    totalVote: req.body.totalVote,


  };

  usersService.castvote(data, (error, results) => {
    if (error) {
      console.log(error);
      return res.status(400).send({ success: 0, data: "Bad request" });
    }
    return res.status(200).send({
      success: 1,
      data: results,
    });
  });
}

//get all users
exports.getAllUsers = (req, res, next) => {
  const data = {};
usersService.getAllUsers(data, (error, results) => {
  if (error) {
    console.log(error);
    return res.status(400).send({ success: 0, data: "Bad request" });
  }
  return res.status(200).send({
    success: 1,
    data: results,
  });
});
};


//get all options
exports.getAlloption = (req, res, next) => {
  const data = {};
usersService.getAlloption(data, (error, results) => {
  if (error) {
    console.log(error);
    return res.status(400).send({ success: 0, data: "Bad request" });
  }
  return res.status(200).send({
    success: 1,
    data: results,
  });
});
};

//get all query
exports.getAllquery = (req, res, next) => {
  const data = {};
usersService.getAllquery(data, (error, results) => {
  if (error) {
    console.log(error);
    return res.status(400).send({ success: 0, data: "Bad request" });
  }
  return res.status(200).send({
    success: 1,
    data: results,
  });
});
};

//get id list
exports.getIdlist = (req, res, next) => {
  const data = {};
usersService.getIdlist(data, (error, results) => {
  if (error) {
    console.log(error);
    return res.status(400).send({ success: 0, data: "Bad request" });
  }
  return res.status(200).send({
    success: 1,
    data: results,
  });
});
};



//get total votes
exports.gettotalvote = (req, res, next) => {
  const data = {};
usersService.gettotalvote(data, (error, results) => {
  if (error) {
    console.log(error);
    return res.status(400).send({ success: 0, data: "Bad request" });
  }
  return res.status(200).send({
    success: 1,
    data: results,
  });
});
};
