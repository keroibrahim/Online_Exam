import express from 'express';
import { createAdmin, getAllAdmins, getAdminById, updateAdmin, deleteAdmin } from '../Admin/Controller';
const router = express.Router();

// Route to create a new admin
router.post('/admins', createAdmin);

// Route to get all admins
router.get('/admins', getAllAdmins);

// Route to get an admin by ID
router.get('/admins/:id', getAdminById);

// Route to update an admin
router.put('/admins/:id', updateAdmin);

// Route to delete an admin
router.delete('/admins/:id', deleteAdmin);

export default router;
