import bcrypt from "bcrypt";

export const register = async (req, res) => {
  //db operations
  const { username, email, password } = req.body;

  // hash the password
  const hashedPassword = await bcrypt.hash(password, 10);
  console.log(hashedPassword);

  // create a new user and save to database
};

export const login = (req, res) => {
  //db operations
};

export const logout = (req, res) => {
  //db operations
};
