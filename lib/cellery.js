import { Queue } from "bullmq";
import { redis } from "./redis";

export const courseQueue = new Queue("user-processing", {
  connection: redis,
});