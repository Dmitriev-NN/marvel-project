const postData = async (url, data) => {
  let res = await fetch(url, {
    method: 'post',
    headers: { 'Content-type': 'application/json' },
    body: data,
  });

  return await res.json();
};

async function getResource(url) {
  let res = await fetch(url);

  if (!res.ok) {
    throw new Error(`Couldn't fetch ${url}, status ${res.status}`);
  }

  return await res.json();
}

export { postData };
export { getResource };
