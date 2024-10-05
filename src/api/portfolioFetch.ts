// src/api/portfolioFetch.ts
async function portfolioFetch() {
    const options = {
        headers: {
            Authorization: `Bearer f91674e4d34924c2540afe25841dd460f853380e83669fa14fc4380bbe59b246177ec2bfd6cbe5936b6b723ba89015b1711d8e9fec9dee2fdb7b5badf9a4bc8854602cbe36b49f5d5c91bec11e57226f661303ccb4e4ba4ebe0eeedb6c846bf03376d601728d5290fc54244c3ba542de7c2dbd5c2979197bd17ea2c662e3779c`,
        }
    };

    try {
        const response = await fetch(`http://127.0.0.1:1337/api/portfolios?populate=*`, options);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const result = await response.json();
        return result;
    } catch (error) {
        console.error('Error fetching portfolios:', error);
        throw error; // Проброс ошибки для обработки в компоненте
    }
}

export default portfolioFetch;
