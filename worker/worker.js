const apiUrl = process.env.API_BASE_URL;

export async function publishBlogs() {
  const res = await fetch(`${apiUrl}/blogs`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${process.env.CRON_JOB_SECRET}`,
    },
  });

  if (!res.ok) {
    throw new Error(`Cron failed: ${res.status}`);
  }

  const data = await res.json();
  return data;
}

export async function publishNews() {
  const res = await fetch(`${apiUrl}/news`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${process.env.CRON_JOB_SECRET}`,
    },
  });

  if (!res.ok) {
    throw new Error(`Cron failed: ${res.status}`);
  }

  const data = await res.json();
  return data;
}
