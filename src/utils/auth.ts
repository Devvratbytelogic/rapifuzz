import * as jose from 'jose';

// Static secret key for JWT (in production, store this securely on the backend)
const SECRET_KEY = 'my-super-secret-key-1234567890'; 
const secret = new TextEncoder().encode(SECRET_KEY);

// Simulated user database (for demo purposes)
const users = [
  { username: 'Devvrat', password: 'Sarkar@123' },
];

// Generate JWT token
export async function generateToken(payload: { username: string }): Promise<string> {
  const jwt = await new jose.SignJWT(payload)
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime('1h') // Token expires in 1 hour
    .sign(secret);
  return jwt;
}

// Verify JWT token
export async function verifyToken(token: string): Promise<{ username: string } | null> {
  try {
    const { payload } = await jose.jwtVerify(token, secret);
    return payload as { username: string };
  } catch (error) {
    console.error('Token verification failed:', error);
    return null;
  }
}

// Authenticate user
export function authenticateUser(username: string, password: string): boolean {
  return users.some((user) => user.username === username && user.password === password);
}