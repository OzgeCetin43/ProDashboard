import React, { useState } from "react";

const SettingsTab: React.FC = () => {
  const [toggleEmail, setToggleEmail] = useState<boolean>(true);
  const [toggleSMS, setToggleSMS] = useState<boolean>(false);
  const [togglePush, setTogglePush] = useState<boolean>(false);

  return (
    <div className="flex flex-col gap-2 text-text-primary">
      <div className="flex flex-col gap-2">
        <div className="flex-1 flex flex-col gap-2 bg-bg-primary p-2 border border-border-color rounded-xs">
          <h3 className="font-bold">Personal Information</h3>
          <div className="flex flex-col gap-2">
            <div className="w-full flex flex-col gap-2">
              <label htmlFor="firstName" className="text-xs">
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                placeholder="Cameron"
                className="bg-bg-secondary p-2 rounded-xs border border-border-color outline-none text-text-primary placeholder:text-text-secondary"
              />
            </div>
            <div className="w-full flex flex-col gap-2">
              <label htmlFor="lastName" className="text-xs">
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                placeholder="Doe"
                className="bg-bg-secondary p-2 rounded-xs border border-border-color outline-none text-text-primary placeholder:text-text-secondary"
              />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="w-full flex flex-col gap-2">
              <label htmlFor="email" className="text-xs">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                placeholder="cameron.doe@gmail.com"
                className="bg-bg-secondary p-2 rounded-xs border border-border-color outline-none text-text-primary placeholder:text-text-secondary"
              />
            </div>
            <div className="w-full flex flex-col gap-2">
              <label htmlFor="phone" className="text-xs">
                Phone Number
              </label>
              <input
                type="text"
                id="phone"
                placeholder="+123 456 7890"
                className="bg-bg-secondary p-2 rounded-xs border border-border-color outline-none text-text-primary placeholder:text-text-secondary"
              />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="w-full flex flex-col gap-2">
              <label htmlFor="address" className="text-xs">
                Address
              </label>
              <input
                type="text"
                id="address"
                placeholder="Turkey, Izmir"
                className="bg-bg-secondary p-2 rounded-xs border border-border-color outline-none text-text-primary placeholder:text-text-secondary"
              />
            </div>
            <div className="w-full flex flex-col gap-2">
              <label htmlFor="city" className="text-xs">
                City
              </label>
              <input
                type="text"
                id="city"
                placeholder="Izmir"
                className="bg-bg-secondary p-2 rounded-xs border border-border-color outline-none text-text-primary placeholder:text-text-secondary"
              />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="w-full flex flex-col gap-2">
              <label htmlFor="country" className="text-xs">
                Country
              </label>
              <select
                id="country"
                className="bg-bg-secondary p-2 rounded-xs border border-border-color outline-none text-text-primary"
              >
                <option value="Turkey">Turkey</option>
                <option value="USA">USA</option>
                <option value="UK">UK</option>
                <option value="Germany">Germany</option>
                <option value="France">France</option>
              </select>
            </div>
            <div className="w-full flex flex-col gap-2">
              <label htmlFor="zip" className="text-xs">
                Zip Code
              </label>
              <input
                type="text"
                id="zip"
                placeholder="35000"
                className="bg-bg-secondary p-2 rounded-xs border border-border-color outline-none text-text-primary placeholder:text-text-secondary"
              />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="w-full flex flex-col gap-2">
              <label htmlFor="bio" className="text-xs">
                Bio
              </label>
              <textarea
                id="bio"
                placeholder="I am a fashion and graphic designer."
                className="bg-bg-secondary p-2 rounded-xs border border-border-color outline-none text-text-primary placeholder:text-text-secondary"
              ></textarea>
            </div>
          </div>
          <div className="flex items-center justify-end gap-2">
            <button className="bg-accent-primary hover:bg-accent-hover font-bold px-2 py-1 rounded-xs cursor-pointer text-white">
              Save Changes
            </button>
          </div>
        </div>
        <div className="flex-1 flex flex-col gap-2">
          <div className="flex flex-col gap-2 bg-bg-primary p-2 border border-border-color rounded-xs">
            <h3 className="font-bold">Notifications</h3>
            <div className="flex items-center justify-between">
              <p className="text-xs">Email Notifications</p>
              <div
                className={`w-10 h-5 rounded-full cursor-pointer relative ${toggleEmail ? "bg-accent-primary" : "bg-bg-tertiary"}`}
                onClick={() => setToggleEmail(!toggleEmail)}
              >
                <div
                  className={`absolute top-0.5 left-0.5 w-4 h-4 bg-white rounded-full ${toggleEmail ? "translate-x-5" : ""}`}
                ></div>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <p className="text-xs">SMS Notifications</p>
              <div
                className={`w-10 h-5 rounded-full cursor-pointer relative ${toggleSMS ? "bg-accent-primary" : "bg-bg-tertiary"}`}
                onClick={() => setToggleSMS(!toggleSMS)}
              >
                <div
                  className={`absolute top-0.5 left-0.5 w-4 h-4 bg-white rounded-full ${toggleSMS ? "translate-x-5" : ""}`}
                ></div>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <p className="text-xs">Push Notifications</p>
              <div
                className={`w-10 h-5 rounded-full cursor-pointer relative ${togglePush ? "bg-accent-primary" : "bg-bg-tertiary"}`}
                onClick={() => setTogglePush(!togglePush)}
              >
                <div
                  className={`absolute top-0.5 left-0.5 w-4 h-4 bg-white rounded-full ${togglePush ? "translate-x-5" : ""}`}
                ></div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2 bg-bg-primary p-2 border border-border-color rounded-xs">
            <h3 className="font-bold">Account Settings</h3>
            <div className="flex items-center justify-between">
              <p className="text-xs">Deactivate Account</p>
              <button className="text-xs bg-status-error text-white px-2 py-1 rounded-xs cursor-pointer hover:opacity-80">
                Deactivate
              </button>
            </div>
            <div className="flex items-center justify-between">
              <p className="text-xs">Delete Account</p>
              <button className="text-xs bg-status-error text-white px-2 py-1 rounded-xs cursor-pointer hover:opacity-80">
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsTab;
