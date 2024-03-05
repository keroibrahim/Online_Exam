// still modifying on it 

const express = require('express');
const router = express.Router();
const adminController = require('../Admin/controller');

// Create a new admin
router.post('/', adminController.createAdmin);

// Retrieve all admins
router.get('/', adminController.getAllAdmins);

// Retrieve an admin by ID
router.get('/:id', adminController.getAdminById);

// Update an admin
router.put('/:id', adminController.updateAdmin);

// Delete an admin
router.delete('/:id', adminController.deleteAdmin);

module.exports = router;
