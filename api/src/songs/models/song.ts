import { Schema } from "mongoose"

export const SongSchema = new Schema(
    {
        name: String,
        updated: { type: Date, default: Date.now }
    }
)