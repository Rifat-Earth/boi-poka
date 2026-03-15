import Swal from "sweetalert2";

const toGetData = () => {
    const storeBookSTR = localStorage.getItem('readList')
    if (storeBookSTR) {
        const storedBookData = JSON.parse(storeBookSTR)
        return storedBookData
    } else {
        return [];
    }
}

const addToStoredDB = (id) => {
    const storedData = toGetData()
    if (storedData.includes(id)) {
        Swal.fire({
            title: "Already added this book!",
            icon: "error",
            draggable: true
        });
    } else {
        storedData.push(id)
        const data = JSON.stringify(storedData)
        localStorage.setItem("readList", data)
        Swal.fire({
            title: "Successfully added this book!",
            icon: "success",
            draggable: true
        });
    }
}

export { addToStoredDB, toGetData };