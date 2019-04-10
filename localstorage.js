
 loadData = (key) => {
    try {
        const serializedData = localStorage.getItem(key);
        if (serializedData === null) {
            return undefined;
        }
        return JSON.parse(serializedData);
    } catch (err) {
        return undefined;
    }
 };
 saveData = (data, key) => {
    try {
        const serializedData = JSON.stringify(data);
        localStorage.setItem(key, serializedData);
    } catch {
        // ignore write errors
        console.log("An error occured saving the data")
    }
};
 clearData = (data, key) => {
     try {
         const serializedData = JSON.stringify(data);
         localStorage.removeItem(key, serializedData);
     } catch {
         // ignore write errors
         console.log("An error occured saving the data")
     }
 };
module.exports =  {
    loadData,
    saveData
}

