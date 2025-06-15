const loginServices = require('../services/Login.services');

const Controller = {
  signup: async (req, res) => {
    try {
      const { username, email, password } = req.body;
      const newUser = await loginServices.signup(username, email, password);
      if (newUser.error) {
        return res.status(newUser.statuscode || 500).json({ error: newUser.error });
      }
      res.status(201).json({ newUser });
    } catch (err) {
      console.log(err);
      return res.status(500).json({ error: 'error in signup controller' });
    }
  },

  signin: async (req, res) => {
    try {
      const { email, password } = req.body;
      const user = await loginServices.signin(email, password);

      if (user.error) {
        return res.status(user.statuscode || 401).json({ error: user.error });
      }

      // If login success, respond with user data (or a token if you use JWT)
      res.status(200).json(user);
    } catch (err) {
      console.log(err);
      return res.status(500).json({ error: 'error in signin controller' });
    }
  },
};

module.exports = Controller;
