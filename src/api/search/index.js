export function Search(text) {
  const url = "http://localhost:8080/search";
  const body = {
    search: text,
  };

  const params = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  };

  return fetch(url, params)
    .then((response) => {
      if (response.status === 201) {
        return response.json();
      } else if (response.status === 204) {
        return [];
      }
    })
    .then((result) => {
      return result;
    })
    .catch((err) => {
      return err;
    });
}
