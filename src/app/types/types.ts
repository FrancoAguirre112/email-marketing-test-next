export interface UsersType {
    user_id: number;
    username: string;
    email: string;
    password: string;
  }

  export interface entityType {
    entity_id: number;
    name: string;
  }

  export interface groupsType {
    group_id: number;
    name: string;
  }

  export interface campaignsType {
    campaign_id: number;
    name: string;
    sched_time: string;
    status: string;
    data: string;
  }

  export interface subscribersType {
    sub_id: number;
    email: string;
    name: string;
  }

  export interface emailsType {
    email_id: number;
    subject: string;
    from: string;
    content: string;
  }

  // Relational tables types

  export interface user_entityType {
    user_id: number;
    entity_id: number;
  }

  export interface entity_groupsType {
    entity_id: number;
    group_id: number;
  }

  export interface entity_campaignsType {
    entity_id: number;
    campaign_id: number;
  }

  export interface subscribers_groupsType {
    sub_id: number;
    group_id: number;
  }

  export interface groups_campaingsType {
    group_id: number;
    campaign_id: number;
  }

  export interface campaings_emailsType {
    campaign_id: number;
    email_id: number;
  }

 
 


  
