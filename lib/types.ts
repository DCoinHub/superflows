import { Database } from "./database.types";

export type Action = Database["public"]["Tables"]["actions"]["Row"];

export type ActionPlusApiInfo = Action & {
  api_host: string;
  auth_header: string;
  auth_scheme: string | null;
  headers: Database["public"]["Tables"]["fixed_headers"]["Row"][];
};

export type ActionTag = Database["public"]["Tables"]["action_tags"]["Row"];

export type Api = Database["public"]["Tables"]["apis"]["Row"];

export type ActionTagJoin = ActionTag & { actions: Action[] };

export type DBChatMessage =
  Database["public"]["Tables"]["chat_messages"]["Row"];

export type ConversationsJoinMessages =
  Database["public"]["Tables"]["conversations"]["Row"] & {
    chat_messages: DBChatMessage[];
  };

export type Profile = Database["public"]["Tables"]["profiles"]["Row"];

export type Organization = Database["public"]["Tables"]["organizations"]["Row"];

export type IsPaid = Database["public"]["Tables"]["is_paid"]["Row"];

type FinetunedModels = Database["public"]["Tables"]["finetuned_models"]["Row"];

export type OrgJoinIsPaid = Organization & { is_paid: IsPaid[] };

export type OrgJoinIsPaidFinetunedModels = OrgJoinIsPaid & {
  finetuned_models: FinetunedModels[];
};

export type HeadersInsert =
  Database["public"]["Tables"]["fixed_headers"]["Insert"];
