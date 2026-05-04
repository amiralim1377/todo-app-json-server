// Renamed to 'apiFetch' to avoid collision with the global 'fetch'
const apiFetch = async (url: string, method: string, data?: any) => {
  const options: RequestInit = {
    method: method,
    headers: {
      "Content-Type": "application/json",
    },
  };

  // Only add body if data exists and method is not GET
  if (data && method.toUpperCase() !== "GET") {
    options.body = JSON.stringify(data);
  }

  const response = await fetch(url, options);

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return response.json();
};

export { apiFetch };
