
function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = [1, 2, 3, 4, 5];
      resolve(data);
    }, 2000);
  });
}

async function getData() {
  try {
    const data = await fetchData();
    console.log(data);
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

getData();