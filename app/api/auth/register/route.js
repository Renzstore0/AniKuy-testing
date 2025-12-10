import { prisma } from "@/lib/prisma";
import { hash } from "bcryptjs";

export async function POST(req) {
  try {
    const body = await req.json();
    const { username, email, password } = body;

    if (!username || !email || !password) {
      return new Response(
        JSON.stringify({ message: "Semua field wajib diisi" }),
        { status: 400 }
      );
    }

    if (password.length < 6) {
      return new Response(
        JSON.stringify({ message: "Password minimal 6 karakter" }),
        { status: 400 }
      );
    }

    const existingEmail = await prisma.user.findUnique({ where: { email } });
    if (existingEmail) {
      return new Response(
        JSON.stringify({ message: "Email sudah terdaftar" }),
        { status: 400 }
      );
    }

    const existingUsername = await prisma.user.findUnique({
      where: { username }
    });
    if (existingUsername) {
      return new Response(
        JSON.stringify({ message: "Username sudah digunakan" }),
        { status: 400 }
      );
    }

    const passwordHash = await hash(password, 10);

    await prisma.user.create({
      data: {
        username,
        name: username,
        email,
        passwordHash
      }
    });

    return new Response(
      JSON.stringify({ message: "Registrasi berhasil" }),
      { status: 201 }
    );
  } catch (err) {
    console.error(err);
    return new Response(
      JSON.stringify({ message: "Terjadi kesalahan server" }),
      { status: 500 }
    );
  }
}