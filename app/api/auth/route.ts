import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { getDBConnection } from "../db";

export async function POST(req: Request) {
  try {
    const { action, username, email, password, emailOrUsername } =
      await req.json();

    const db = await getDBConnection();

    if (action === "register") {
      if (!username || !email || !password) {
        return NextResponse.json(
          { error: "All fields are required" },
          { status: 400 }
        );
      }

      const [existing] = await db.query(
        "SELECT * FROM users WHERE user_name = ? OR user_email = ?",
        [username, email]
      );

      if ((existing as any[]).length > 0) {
        return NextResponse.json(
          { error: "Username or email already exists" },
          { status: 400 }
        );
      }

      const hashedPassword = await bcrypt.hash(password, 10);

      await db.query(
        "INSERT INTO users (user_name, user_email, user_password) VALUES (?, ?, ?)",
        [username, email, hashedPassword]
      );

      return NextResponse.json(
        { message: "User registered successfully" },
        { status: 201 }
      );
    }

    if (action === "login") {
      if (!emailOrUsername || !password) {
        return NextResponse.json(
          { error: "Email/Username and password are required" },
          { status: 400 }
        );
      }

      const [rows] = await db.query(
        "SELECT * FROM users WHERE user_email = ? OR user_name = ?",
        [emailOrUsername, emailOrUsername]
      );

      const users = rows as any[];
      if (users.length === 0) {
        return NextResponse.json(
          { error: "Invalid credentials" },
          { status: 401 }
        );
      }

      const user = users[0];
      const isPasswordValid = await bcrypt.compare(
        password,
        user.user_password
      );

      if (!isPasswordValid) {
        return NextResponse.json(
          { error: "Invalid credentials" },
          { status: 401 }
        );
      }

      const response = NextResponse.json({
        message: "Login successful",
        user: { id: user.id, username: user.user_name, email: user.user_email },
      });

      response.cookies.set({
        name: "userdata",
        value: JSON.stringify({
          id: user.id,
          username: user.user_name,
          email: user.user_email,
        }),
        httpOnly: true,
        path: "/",
        maxAge: 60 * 60 * 24,
      });

      return response;
    }

    return NextResponse.json({ error: "Invalid action" }, { status: 400 });
  } catch (error) {
    console.error("Auth Error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
