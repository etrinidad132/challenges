Table users {
  id uuid [pk]
  first_name text
  last_name text
  email text [unique]
  // TODO: rename to phone
  preferred_phone text [null]
  is_admin boolean [default: false]
  address1 text [null]
  address2 text [null]
  city text [null]
  state text [null]
  country text [null]
  postal_code text [null]
  created_at datetime [default: `GETUTCDATE()`]
  updated_at datetime [default: `GETUTCDATE()`]
}

Table contacts {
  id uuid [pk]
  name text
  email text
  phone text [null]
  address1 text [null]
  address2 text [null]
  city text [null]
  state text [null]
  country text [null]
  postal_code text [null]
  is_customer boolean
  created_at datetime [default: `GETUTCDATE()`]
  updated_at datetime [default: `GETUTCDATE()`]
  
  Indexes {
    is_customer
  }
}

Table interaction_histories {
  id uuid [pk]
  contact_id uuid
  contacted_by_user_id uuid
  contacted_at datetime
  contact_type text
  notes text
  
  Indexes {
    contact_id
    contacted_by_user_id
  }
}

// > many-to-one; < one-to-many; - one-to-one
Ref: contacts.id < interaction_histories.contact_id
Ref: users.id < interaction_histories.contacted_by_user_id

Table campaigns {
  id uuid [pk]
  campaign_type text
  starts_at datetime
  ends_at datetime
  name text
  description text
  notes text
  is_active boolean [default: false]
}

Table campaign_contacts {
  id uuid [pk]
  contact_id uuid
  campaign_id uuid
  sent_at datetime
  responded_at datetime
  response text
  
  Indexes {
    contact_id
    campaign_id
  }
}

// > many-to-one; < one-to-many; - one-to-one
Ref: contacts.id < campaign_contacts.contact_id
Ref: campaigns.id < campaign_contacts.campaign_id

Table tasks {
  id uuid [pk]
  creator_id uuid
  type text
  title text
  description text
  primary_assignee_id uuid
  assignees []
  priority text
  status text
  location text
  phone_number integer
  conference_number integer
  video_meeting_url text
  contact_id uuid
  
  Indexes {
    contact_id
    primary_assignee_id
    creator_id
  }
}

Ref: contacts.id < tasks.contact_id
Ref: users.id < tasks.creator_id
Ref: users.id < tasks.primary_assignee_id
Ref: users.id < tasks.assignees