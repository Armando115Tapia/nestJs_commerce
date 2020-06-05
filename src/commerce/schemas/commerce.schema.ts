import { Schema } from 'mongoose';

export const CommerceSchema = new Schema({
  name: { type: String, required: true },
  description: String,
  imageURL: String,
  createdAt: { type: Date, default: Date.now },
});
