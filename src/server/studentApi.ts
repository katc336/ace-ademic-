export { };
const express = require('express');
const studentRouter = express.Router();

const { requireUser } = require("./utils")

const jwt = require("jsonwebtoken")

require("dotenv").config();
const { JWT_SECRET } = process.env

const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();


import { Request, Response, NextFunction } from 'express';



module.exports = studentRouter;