import { LangCache } from "@redis-ai/langcache";

const apiKey = process.env.LANGCACHE_API_KEY;

export const langCache = new LangCache({
  serverURL: "https://aws-us-east-1.langcache.redis.io",
  cacheId: "5b634320dc074866b1d369cfd02aef10",
  apiKey: apiKey,
});
