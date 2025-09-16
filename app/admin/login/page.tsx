"use client";

import React, { useState } from "react";

export default function Login() {
  const [form, setForm] = useState({
    emailOrUsername: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch("/api/auth", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({...form, action: "login"}),
    });

    const data = await res.json();
    alert(data.message);
    if(data.message === "Login successful"){
         window.location.href = '/admin/dashboard';
    }
  };

  return (
    <section className="dark:bg-black dark:text-white bg-white h-screen flex flex-col justify-center items-center gap-5">
      <h1 className="text-5xl font-bold">CMS - Roytours</h1>
      <div className="w-full">
        <form className="max-w-md mx-auto px-5" onSubmit={handleSubmit}>
          

          <div className="mb-5">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Your email
            </label>
            <input
              onChange={handleChange}
              type="email"
              id="emailOrUsername"
              value={form.emailOrUsername}
              placeholder="someone@example.com"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
              required
            />
          </div>

          <div className="mb-5">
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Your password
            </label>
            <input
              onChange={handleChange}
              type="password"
              id="password"
              value={form.password}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
              required
            />
          </div>

          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5"
          >
            Login
          </button>
        </form>
      </div>
      <div>
        <p>Powered by cloudwave</p>
      </div>
    </section>
  );
}
