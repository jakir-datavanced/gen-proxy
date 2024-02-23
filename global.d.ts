import { Database as DB } from "@/lib/database.types";

declare global {
  type Database = DB;

  type Article = DB["public"]["Tables"]["articles"]["Row"];
  type Profile = DB["public"]["Tables"]["profiles"]["Row"];

  type ArticleWithAuthor = Article & {
    author: Profile;
    likes: number;
    user_has_liked_article: boolean;
  };

  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: "development" | "production";
      NEXT_PUBLIC_SUPABASE_URL: string;
      NEXT_PUBLIC_SUPABASE_ANON_KEY: string;
      NEXT_PUBLIC_BASE_URL: string;
      NEXT_PUBLIC_BASE_API_URL: string;
    }
  }
}
