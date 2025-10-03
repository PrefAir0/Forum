export const fetchCats = async () => {
    try {
        const response = await fetch("http://localhost:3000/cats");

        if (!response.ok) {
            throw new Error("Failed to fetch cats");
        }

        return await response.json();
    } catch (error) {
        console.error("Error fetching data:", error);
        return []; 
    }
};

export const addCat = async (name: string, age: number, breed: string) => {
    try {
        const response = await fetch("http://localhost:3000/cats", {
            method: "POST",
            headers: {
                "Content-Type": "application/json", 
            },
            body: JSON.stringify({ name, age, breed }),
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        return await response.json();
    } catch (error) {
        console.error("Error posting data:", error);
        return null; 
    }
};
