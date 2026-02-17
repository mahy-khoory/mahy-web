export async function submitCustomerComplaint(data) {
  const response = await fetch(
    "http://localhost:5000/api/forms/customer-complaint",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }
  );

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || "Submission failed");
  }

  return response.json();
}
