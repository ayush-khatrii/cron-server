import dotenv from "dotenv";

dotenv.config();
const apiUrl = process.env.API_BASE_URL;
console.log("🚀 apiUrl:", apiUrl);
console.log(`Full URL: ${apiUrl}/api/blog`);
export async function publishBlogs() {
  const res = await fetch(`${apiUrl}/api/blog`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${process.env.CRON_JOB_SECRET}`,
    },
  });

  if (!res.ok) {
    console.error(res.error);
  }

  const data = await res.json();
  return data;
}

export async function publishNews() {
  const res = await fetch(`${apiUrl}/api/news`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${process.env.CRON_JOB_SECRET}`,
    },
  });

  if (!res.ok) {
    console.error(res.error);
  }

  const data = await res.json();
  return data;
}
