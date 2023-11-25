import React from "react";
import {
  CampaignForm,
  CreateEmail,
  ShowEmails,
  SubscriberForm,
  SubscribersGroups,
} from "./components/index";
export default function Home() {
  return (
    <div className="flex justify-center">
      <div className="container">
        <SubscriberForm />
        <SubscribersGroups />
        <CreateEmail />
        <ShowEmails />
        <CampaignForm />
      </div>
    </div>
  );
}
