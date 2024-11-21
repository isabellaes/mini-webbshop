const url = "http://10.0.2.2:3000";

export async function getProducts() {
  try {
    const response = await fetch(`${url}/api/public/products`, {
      method: "GET",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Error fetching products: ", error);
    return [];
  }
}
