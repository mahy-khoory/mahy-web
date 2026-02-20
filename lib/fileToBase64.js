export const fileToBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () =>
      resolve({
        name: file.name,
        type: file.type,
        base64: reader.result,
      });
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });