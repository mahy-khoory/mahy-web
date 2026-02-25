export async function api(url, body) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}${url}`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    }
  );

  const data = await res.json();
  if (!res.ok) throw data;
  return data;
}