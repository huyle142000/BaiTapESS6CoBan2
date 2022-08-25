let dataGlasses = [
    { id: "G1", src: "./img/g1.jpg", virtualImg: "./img/v1.png", brand: "Armani Exchange", name: "Bamboo wood", color: "Brown", price: 150, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis ea voluptates officiis? " },
    { id: "G2", src: "./img/g2.jpg", virtualImg: "./img/v2.png", brand: "Arnette", name: "American flag", color: "American flag", price: 150, description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. In assumenda earum eaque doloremque, tempore distinctio." },
    { id: "G3", src: "./img/g3.jpg", virtualImg: "./img/v3.png", brand: "Burberry", name: "Belt of Hippolyte", color: "Blue", price: 100, description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit." },
    { id: "G4", src: "./img/g4.jpg", virtualImg: "./img/v4.png", brand: "Coarch", name: "Cretan Bull", color: "Red", price: 100, description: "In assumenda earum eaque doloremque, tempore distinctio." },
    { id: "G5", src: "./img/g5.jpg", virtualImg: "./img/v5.png", brand: "D&G", name: "JOYRIDE", color: "Gold", price: 180, description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error odio minima sit labore optio officia?" },
    { id: "G6", src: "./img/g6.jpg", virtualImg: "./img/v6.png", brand: "Polo", name: "NATTY ICE", color: "Blue, White", price: 120, description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit." },
    { id: "G7", src: "./img/g7.jpg", virtualImg: "./img/v7.png", brand: "Ralph", name: "TORTOISE", color: "Black, Yellow", price: 120, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim sint nobis incidunt non voluptate quibusdam." },
    { id: "G8", src: "./img/g8.jpg", virtualImg: "./img/v8.png", brand: "Polo", name: "NATTY ICE", color: "Red, Black", price: 120, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, unde enim." },
    { id: "G9", src: "./img/g9.jpg", virtualImg: "./img/v9.png", brand: "Coarch", name: "MIDNIGHT VIXEN REMIX", color: "Blue, Black", price: 120, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit consequatur soluta ad aut laborum amet." }
];
// khi click kính nào sẽ vào overlayimg để truyền các thuộc tính
//tạo sườn html chạy vòng lặp rồi lấy thuộc tính 
// avatar 
let vglassesList = document.getElementById("vglassesList");
let avatar = document.getElementById("avatar");
let glassesInfo = document.getElementById("glassesInfo");

let showGlassesList = () => {
    let content = "";
    dataGlasses.map((glasses) => {
        let { id, src } = glasses;
        content += `
        <div class="col-4 vglassesItems" onclick="changeGlass('${id}')">
        <img src="${src}" class ="img-fluid" alt="">
        </div>
        `
    })
    vglassesList.innerHTML = content
}
showGlassesList();
let changeGlass = (id) => {
    dataGlasses.map((glasses) => {
        let { virtualImg, brand, name, color, price, description } = glasses;
        if (glasses.id === id) {
            avatar.innerHTML = `
            <img src="${virtualImg}" class="img-fluid vglasses__img-glass">
        `
            glassesInfo.innerHTML = `
            <h2 style="color:white;font-size:24px">${name} - ${brand} (${color})<h2>
            <div>
            <span style="color:white;font-size:16px;background-color:red">$${price}</span>
            <span style="color:green;font-size:16px;" >Stocking</span>
            </div>
            <p style="color:white;font-size:14px">${description}</p>
            `
            glassesInfo.classList.add('d-block');
            avatar.querySelector('img').classList.add('d-block');

        }
    })
}
window.changeGlass = changeGlass;
let changeBtn = (boolean) => {
    if (boolean) {
        avatar.querySelector('img').classList.add('d-block');
        return;
    }
    avatar.querySelector('img').classList.remove('d-block');

}
window.changeBtn = changeBtn;
