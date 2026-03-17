const API_BASE = process.env.NEXT_PUBLIC_BASE_URL || "";

const isFile = (value) =>
  typeof File !== "undefined" && value instanceof File;

const isBlob = (value) =>
  typeof Blob !== "undefined" && value instanceof Blob;

const isFileList = (value) =>
  typeof FileList !== "undefined" && value instanceof FileList;

const isFileLike = (value) => isFile(value) || isBlob(value);

function appendFormValue(formData, key, value) {
  if (value === undefined || value === null) return;

  if (isFileList(value)) {
    Array.from(value).forEach((file) => formData.append(key, file));
    return;
  }

  if (isFileLike(value)) {
    formData.append(key, value);
    return;
  }

  if (value instanceof Date) {
    formData.append(key, value.toISOString());
    return;
  }

  if (Array.isArray(value)) {
    value.forEach((item) => {
      if (item === undefined || item === null) return;

      if (isFileLike(item)) {
        formData.append(key, item);
      } else if (item instanceof Date) {
        formData.append(key, item.toISOString());
      } else if (typeof item === "object") {
        formData.append(`${key}[]`, JSON.stringify(item));
      } else {
        formData.append(key, String(item));
      }
    });
    return;
  }

  if (typeof value === "object") {
    formData.append(key, JSON.stringify(value));
    return;
  }

  formData.append(key, value);
}

function buildComplaintFormData(payload) {
  if (payload instanceof FormData) {
    return payload;
  }

  const formData = new FormData();

  Object.entries(payload || {}).forEach(([key, value]) => {
    appendFormValue(formData, key, value);
  });

  return formData;
}

function getComplaintEndpoint() {
  if (!API_BASE) {
    throw new Error("NEXT_PUBLIC_BASE_URL is not configured");
  }

  return API_BASE.endsWith("/")
    ? `${API_BASE}api/forms/customer-complaint`
    : `${API_BASE}/api/forms/customer-complaint`;
}

export async function submitCustomerComplaint(payload) {
  const formData = buildComplaintFormData(payload);

  const response = await fetch(getComplaintEndpoint(), {
    method: "POST",
    body: formData,
  });

  if (!response.ok) {
    let errorMessage = "Submission failed";

    try {
      const errorBody = await response.json();
      errorMessage = errorBody?.message || errorMessage;
    } catch {
      // Ignore response bodies we cannot parse
    }

    throw new Error(errorMessage);
  }

  return response.json();
}
