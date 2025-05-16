import { InferSchemaType, Schema, model, models } from 'mongoose'

const UserSchema = new Schema(
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
    },
    password: {
      type: String,
      required: [true, 'Please provide a password'],
      select: false, // Hide password by default
    },
  },
  {
    timestamps: true,
  }
)

export type UserSchemaType = InferSchemaType<typeof UserSchema>

const User = models?.users || model<UserSchemaType>('users', UserSchema)

export default User
