import jwt from "jsonwebtoken";
import { cookies } from "next/headers";

export async function GET() {
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;

  if (!token) {
    return Response.json({ user: null }, { status: 200 });
  }

  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET as string);
    return Response.json({ user: payload }, { status: 200 });
  } catch (error) {
    return Response.json({ user: null, message: "Invalid token" }, { status: 401 });
  }
}
