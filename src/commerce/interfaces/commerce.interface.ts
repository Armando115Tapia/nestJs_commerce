import { Document } from 'mongoose';

export interface Commerce extends Document {
  readonly name: string;
  readonly description: string;
  readonly imageURL: string;
  readonly createdAt: Date;
}
