export const fetchCats = async () => {
    try{
        const response = await fetch("http://localhost:3000/cats");
        if (!response.ok){
            throw new Error("Failed to fech cats");
        }
        return await response.json();
    } catch (error){
        console.error("Error fetching data:", error);
        return [];
    }
};