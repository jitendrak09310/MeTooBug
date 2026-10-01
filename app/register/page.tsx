"use client";

import { useActionState } from "react";
import { registerUser } from "./actions";
import { error } from "console";

const initialState = {
  error: "",
  success: "",
};

export default function RegisterPage() {
  const [state, formAction, isPending] = useActionState(
    registerUser,
    initialState,
  );
  return (
    <main>
      <h1>Create Account</h1>

      <form action={formAction}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Enter Your name"
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>

          <input
            id="email"
            name="email"
            type="email"
            placeholder="Enter Your email"
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            id="password"
            name="password"
            type="password"
            placeholder="Enter your password"
            required
          />
        </div>

        <button type="submit" disabled={isPending}>
          {isPending ? "Creating Account..." : "Create Account"}
        </button>
        {state.success && <p>{state.success}</p>}
      </form>
    </main>
  );
}
