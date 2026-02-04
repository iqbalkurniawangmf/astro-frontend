const STRAPI_URL = import.meta.env.PUBLIC_STRAPI_URL;

export async function fetchStrapi(endpoint: string) {
  const res = await fetch(`${STRAPI_URL}/api${endpoint}`);

  if (!res.ok) {
    throw new Error(`Strapi error ${res.status}`);
  }

  return res.json();
}
