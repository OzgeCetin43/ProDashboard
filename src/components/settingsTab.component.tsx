import React from "react";

const SettingsTab: React.FC = () => {
  return (
    <div className="flex flex-col justify-center gap-2">
      <form className="flex flex-col justify-center gap-2">
        <div className="flex flex-col md:flex-row items-center justify-between gap-2">
          <div className="w-full flex-1 flex flex-col justify-center gap-2">
            <label htmlFor="fullname">Full Name</label>
            <input
              type="text"
              id="fullname"
              defaultValue="Cameron Doe"
              className="w-full p-2 border border-neutral-700 rounded-xs outline-none bg-neutral-950"
            />
          </div>
          <div className="w-full flex-1 flex flex-col justify-center gap-2">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              defaultValue="@camerondoe"
              className="w-full p-2 border border-neutral-700 rounded-xs outline-none bg-neutral-950"
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between gap-2">
          <div className="w-full flex-1 flex flex-col justify-center gap-2">
            <label htmlFor="emailAddress">Email Address</label>
            <input
              type="email"
              id="emailAddress"
              defaultValue="cameron.doe@gmail.com"
              className="w-full p-2 border border-neutral-700 rounded-xs outline-none bg-neutral-950"
            />
          </div>
          <div className="w-full flex-1 flex flex-col justify-center gap-2">
            <label htmlFor="phoneNumber">Phone Number</label>
            <input
              type="tel"
              id="phoneNumber"
              placeholder="+123 456 7890"
              className="w-full p-2 border border-neutral-700 rounded-xs outline-none bg-neutral-950"
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between gap-2">
          <div className="w-full flex-1 flex flex-col justify-center gap-2">
            <label htmlFor="linkedIn">LinkedIn</label>
            <input
              type="text"
              id="linkedIn"
              placeholder="https://linkedin.com/in/camerondoe"
              className="w-full p-2 border border-neutral-700 rounded-xs outline-none bg-neutral-950"
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between gap-2">
          <div className="w-full flex-1 flex flex-col justify-center gap-2">
            <label htmlFor="github">Github</label>
            <input
              type="text"
              id="github"
              placeholder="https://github.com/camerondoe"
              className="w-full p-2 border border-neutral-700 rounded-xs outline-none bg-neutral-950"
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between gap-2">
          <div className="w-full flex-1 flex flex-col justify-center gap-2">
            <label htmlFor="dateOfBirth">Date of Birth</label>
            <input
              type="date"
              id="dateOfBirth"
              className="w-full p-2 border border-neutral-700 rounded-xs outline-none bg-neutral-950"
            />
          </div>
          <div className="w-full flex-1 flex flex-col justify-center gap-2">
            <label htmlFor="gender">Gender</label>
            <select
              id="gender"
              className="w-full p-2 border border-neutral-700 rounded-xs outline-none bg-neutral-950"
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between gap-2">
          <div className="w-full flex-1 flex flex-col justify-center gap-2">
            <label htmlFor="country">Country</label>
            <input
              type="text"
              id="country"
              defaultValue="Turkey"
              className="w-full p-2 border border-neutral-700 rounded-xs outline-none bg-neutral-950"
            />
          </div>
          <div className="w-full flex-1 flex flex-col justify-center gap-2">
            <label htmlFor="city">City</label>
            <input
              type="text"
              id="city"
              defaultValue="Izmir"
              className="w-full p-2 border border-neutral-700 rounded-xs outline-none bg-neutral-950"
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between gap-2">
          <div className="w-full flex-1 flex flex-col justify-center gap-2">
            <label htmlFor="preferredLanguage">Preferred Language</label>
            <select
              id="preferredLanguage"
              defaultValue="english"
              className="w-full p-2 border border-neutral-700 rounded-xs outline-none bg-neutral-950"
            >
              <option value="english">English</option>
              <option value="turkish">Turkish</option>
            </select>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between gap-2">
          <div className="w-full flex-1 flex flex-col justify-center gap-2">
            <label htmlFor="bio">Bio</label>
            <textarea
              id="bio"
              placeholder="Write something about yourself..."
              rows={12}
              className="w-full p-2 border border-neutral-700 rounded-xs outline-none bg-neutral-950 resize-none"
            ></textarea>
          </div>
        </div>
        <div className="flex flex-col justify-center gap-2">
          <h3 className="font-bold">Notifications</h3>
          <div className="flex flex-col justify-center gap-2">
            <div className="w-full flex items-center gap-2">
              <input
                type="checkbox"
                id="emailNotifications"
                defaultChecked={true}
                className="p-2 border border-neutral-700 rounded-xs outline-none bg-neutral-950"
              />
              <label htmlFor="emailNotifications">Email Notifications</label>
            </div>
            <div className="w-full flex items-center gap-2">
              <input
                type="checkbox"
                id="pushNotifications"
                className="p-2 border border-neutral-700 rounded-xs outline-none bg-neutral-950"
              />
              <label htmlFor="pushNotifications">Push Notifications</label>
            </div>
            <div className="w-full flex items-center gap-2">
              <input
                type="checkbox"
                id="smsAlerts"
                className="p-2 border border-neutral-700 rounded-xs outline-none bg-neutral-950"
              />
              <label htmlFor="smsAlerts">SMS Alerts</label>
            </div>
          </div>
        </div>
        <button
          type="submit"
          className="bg-sky-600 hover:bg-orange-600 p-2 rounded-xs cursor-pointer font-bold"
        >
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default SettingsTab;
