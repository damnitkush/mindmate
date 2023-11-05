import React from "react";

const ChatContacts = () => {
  const contacts = ["Kush", "Mayank", "Saksham", "Akansha", "Tanisha"];
  return (
    <div className=" flex flex-col gap-4 w-1/4">
      {contacts.map((contact) => {
        return (
          <div className="px-6 py-8 bg-gradient-to-l bg-primary-50 from-transparent to-primary-100 rounded-3xl hover:bg-primary-200 transition-all cursor-pointer font-medium">
            {contact}
          </div>
        );
      })}
    </div>
  );
};

export default ChatContacts;
