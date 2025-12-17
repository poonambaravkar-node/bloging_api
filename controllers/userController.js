const User = require('../models/User');
const Role = require('../models/Role');

exports.getProfile = async (req, res) => {
  res.json({
    id: req.user._id,
    name: req.user.name,
    email: req.user.email,
    role: req.user.role.name
  });
};

// Get all users
// http://localhost:5000/api/users/admin/users?role=admin 
// if role is not provided, it will return all users
// if role is provided, it will return all users with the role

exports.getAllUsers = async (req, res) => {
  try {
    let filter = {};
    if (req.query.role && req.query.role.trim() !== '') {
      const roleDoc = await Role.findOne({ name: req.query.role });
      console.log("roleDoc", roleDoc);
      if (roleDoc) {
        filter.role = roleDoc._id;
      } else {
        return res.status(400).json({ message: 'Role not found' });
      }
    }
    console.log("filter", filter);
    console.log("req.query.role", req.query.role);
    
    const users = await User.find(filter).populate('role', 'name');
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


// exports.getAllUsers = async (req, res) => {
//   try {
//     // Find the admin role's ObjectId
//     const adminRole = await Role.findOne({ name: 'admin' });
//     if (!adminRole) {
//       return res.status(404).json({ message: 'Admin role not found' });
//     }
//     // Find users with the admin role
//     const admins = await User.find({ role: adminRole._id }).populate('role', 'name');
//     res.json(admins);
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// };
