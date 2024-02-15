const orgId = "d10aabbb-2f6c-4f57-9651-de5056b51562";
const apiKey = "3b2486bc22cac615fa1e";

const getToken = async () => {
  try {
    const response = await fetch("https://api.dyte.in/v1/auth/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        orgId,
        apiKey,
      }),
    });

    if (!response.ok) {
      throw new Error(`Error getting auth token: ${response.statusText}`);
    }

    const data = await response.json();
    const authToken = data.authToken;
    console.log("Auth token:", authToken);
    return authToken;
  } catch (error) {
    console.error(error);
  }
};

export const authToken = await getToken();