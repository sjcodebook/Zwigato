import mongoose, { Schema, Document, Model } from 'mongoose'
import { hash, compare } from 'bcrypt'

// Define interfaces for TypeScript support
export interface IUser extends Document {
  name: string
  email: string
  password: string
  role: 'user' | 'admin'
  createdAt: Date
  updatedAt: Date
  comparePassword(candidatePassword: string): Promise<boolean>
}

// Define the schema
const userSchema = new Schema<IUser>(
  {
    name: {
      type: String,
      required: [true, 'Please provide a name'],
      trim: true,
    },
    email: {
      type: String,
      required: [true, 'Please provide an email'],
      unique: true,
      trim: true,
      lowercase: true,
      match: [/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/, 'Please provide a valid email'],
    },
    password: {
      type: String,
      required: [true, 'Please provide a password'],
      minlength: [6, 'Password should be at least 6 characters'],
      select: false, // Don't return password in queries by default
    },
    role: {
      type: String,
      enum: ['user', 'admin'],
      default: 'user',
    },
  },
  {
    timestamps: true, // Adds createdAt and updatedAt fields automatically
  }
)

// Pre-save hook to hash the password
userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next()

  try {
    this.password = await hash(this.password, 10)
    next()
  } catch (error: any) {
    next(error)
  }
})

// Method to compare password for login
userSchema.methods.comparePassword = async function (candidatePassword: string): Promise<boolean> {
  return await compare(candidatePassword, this.password)
}

// Create and export the model
// Prevent model recompilation when the model already exists (for Next.js HMR)
const User = (mongoose.models.User as Model<IUser>) || mongoose.model<IUser>('User', userSchema)

export default User
