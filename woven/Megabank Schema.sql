CREATE TABLE "users" (
  "id" uuid PRIMARY KEY,
  "first_name" text,
  "last_name" text,
  "email" text UNIQUE,
  "preferred_phone" text,
  "is_admin" boolean DEFAULT false,
  "address1" text,
  "address2" text,
  "city" text,
  "state" text,
  "country" text,
  "postal_code" text,
  "created_at" datetime DEFAULT (GETUTCDATE()),
  "updated_at" datetime DEFAULT (GETUTCDATE())
);

CREATE TABLE "contacts" (
  "id" uuid PRIMARY KEY,
  "name" text,
  "email" text,
  "phone" text,
  "address1" text,
  "address2" text,
  "city" text,
  "state" text,
  "country" text,
  "postal_code" text,
  "is_customer" boolean,
  "created_at" datetime DEFAULT (GETUTCDATE()),
  "updated_at" datetime DEFAULT (GETUTCDATE())
);

CREATE TABLE "interaction_histories" (
  "id" uuid PRIMARY KEY,
  "contact_id" uuid,
  "contacted_by_user_id" uuid,
  "contacted_at" datetime,
  "contact_type" text,
  "notes" text
);

CREATE TABLE "campaigns" (
  "id" uuid PRIMARY KEY,
  "campaign_type" text,
  "starts_at" datetime,
  "ends_at" datetime,
  "name" text,
  "description" text,
  "notes" text,
  "is_active" boolean DEFAULT false
);

CREATE TABLE "campaign_contacts" (
  "id" uuid PRIMARY KEY,
  "contact_id" uuid,
  "campaign_id" uuid,
  "sent_at" datetime,
  "responded_at" datetime,
  "response" text
);

CREATE TABLE "tasks" (
  "id" uuid PRIMARY KEY,
  "creator_id" uuid,
  "type" text,
  "title" text,
  "description" text,
  "primary_assignee_id" uuid,
  "assignees" [],
  "priority" text,
  "status" text,
  "location" text,
  "phone_number" integer,
  "conference_number" integer,
  "video_meeting_url" text,
  "contact_id" uuid
);

ALTER TABLE "interaction_histories" ADD FOREIGN KEY ("contact_id") REFERENCES "contacts" ("id");

ALTER TABLE "interaction_histories" ADD FOREIGN KEY ("contacted_by_user_id") REFERENCES "users" ("id");

ALTER TABLE "campaign_contacts" ADD FOREIGN KEY ("contact_id") REFERENCES "contacts" ("id");

ALTER TABLE "campaign_contacts" ADD FOREIGN KEY ("campaign_id") REFERENCES "campaigns" ("id");

ALTER TABLE "tasks" ADD FOREIGN KEY ("contact_id") REFERENCES "contacts" ("id");

ALTER TABLE "tasks" ADD FOREIGN KEY ("creator_id") REFERENCES "users" ("id");

ALTER TABLE "tasks" ADD FOREIGN KEY ("primary_assignee_id") REFERENCES "users" ("id");

ALTER TABLE "tasks" ADD FOREIGN KEY ("assignees") REFERENCES "users" ("id");

CREATE INDEX ON "contacts" ("is_customer");

CREATE INDEX ON "interaction_histories" ("contact_id");

CREATE INDEX ON "interaction_histories" ("contacted_by_user_id");

CREATE INDEX ON "campaign_contacts" ("contact_id");

CREATE INDEX ON "campaign_contacts" ("campaign_id");

CREATE INDEX ON "tasks" ("contact_id");

CREATE INDEX ON "tasks" ("primary_assignee_id");

CREATE INDEX ON "tasks" ("creator_id");
