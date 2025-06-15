const User = require('../models/login.model');

const signup = async (username, email, password) => {
  try {
    const emailIsTaken = await User.emailIsTaken(email);
    if (emailIsTaken) {
      return { error: 'Email is already taken', statuscode: 409 };
    }

    const newUser = new User({ username, email, password });
    const user = await newUser.save();
    return user;
  } catch (error) {
    console.log('error in signup services', error);
    return { error: 'error in signup services', statuscode: 500 };
  }
};

const signin = async (email, password) => {
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return { error: 'Invalid email', statuscode: 401 };
    }

    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return { error: 'Invalid password', statuscode: 401 };
    }

    return user;
  } catch (error) {
    console.error(error);
    return { error: 'Something went wrong', statuscode: 500 };
  }
};

module.exports = {
  signup,
  signin,
};
