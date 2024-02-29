const fechingData = async () => {
    const fech = await fetch(`https://openapi.programming-hero.com/api/ai/tools`);
    const res = await fech.json();
    const data = res.data.tools;
    showingData(data);
};

function start() {
    fechingData();

}

const loadImage = (url) => {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => resolve(url);
        img.onerror = () => reject("image not found");
        img.src = url;
    });
};

const showingData = async (data) => {
    const container = document.querySelector(".container");
    for (const item of data) {
        let featuresList = "";
        for (const feature of item.features) {
            featuresList += `<li>${feature}</li>`;
        }

        try {
            const imageUrl = await loadImage(item.image);
            const div = document.createElement("div");
            div.classList = "card card-compact w-96 bg-white shadow-xl";
            div.innerHTML = `
                <figure><img class='h-[30vh]' src="${imageUrl}" alt="Shoes" /></figure>
                <div class="card-body">
                    <h2 class="card-title">Features</h2>
                    <div class="list my-3 border-b-2 border-e-gray-500 pb-3">
                        <ol>${featuresList}</ol >
                                </div >
                <div class="card-actions justify-between">
                    <div class="text">
                        <div class="name font-bold">${item.name}</div>
                        <div class="date">${item.published_in}</div>
                    </div>
                    <button class=" btn bg-orange-500 text-black rounded-full  border-none text-xl  hover:bg-orange-500" onClick="showPopUp('${item.id}')">></button>
                </div>
                </div > `;
            container.appendChild(div);
        } catch (error) {
            console.error("Error loading image:", error);
        }
    }
};

const popup = document.getElementById("popup")
const showPopUp = async (id) => {
    popup.style.display = "block"

    const fech = await fetch(`https://openapi.programming-hero.com/api/ai/tool/${id}`);
    const res = await fech.json();
    const data = res.data;
    console.log(data);

    const cont = document.getElementById("cont")

    let featuresList = "";

    for (const key in data.features) {
        const feature = data.features[key];
        featuresList += `<li>${key}: ${feature.feature_name}</li>`;
    }

    let integration = ''
    for (const item of data?.integrations) {
        integration += `<li>${item}</li>`
    }

    const container = `
    <!-- left  -->
    <div class="left border-2 border-[#e28181d4] p-6 rounded-lg w-[50%]">
        <h1 class="text-black font-bold text-center">
           ${data.description}
        </h1>
        <div class="flex justify-between gap-4 text-black my-6">
            <div class="px-6 py-2 bg-white rounded-lg">
                <p class='font-bold text-blue-700 flex-nowrap'>${data.pricing[0].plan}</p>
                <p class='text-green-700'>${data.pricing[0].price}</p>
            </div>
            <div class="px-6 py-2 bg-white rounded-lg">
                <p class='font-bold text-blue-700 flex-nowrap'>${data.pricing[1].plan}</p>
                <p class='text-green-700'>${data.pricing[1].price}</p>
            </div>
            <div class="px-6 py-2 bg-white rounded-lg">
                <p class='font-bold text-blue-700 flex-nowrap'>${data.pricing[2].plan}</p>
                <p class='text-green-700'>${data.pricing[2].price}</p>
            </div>
        </div>

        <div class="fes flex justify-between text-black">
            <div class="left">
                <h1 class="font-bold">Features</h1>
                <ul>${featuresList}</ul>
            </div>
            <div class="right">
                <h1 class="font-bold">Integrations</h1>
                <ul>${integration}</ul>
            </div>
        </div>
    </div>

    <!-- right -->
    <div class="rigth text-black">
        <img class="h-[30vh] w-[50vh] rounded-lg mx-auto"
            src="${data.image_link[0]}"
            alt="">
        <h1 class="font-bold text-center my-4 text-xl">
            ${data.input_output_examples[0].input}
        </h1>
        <p class="text-center w-[80%] mx-auto">
            ${data.input_output_examples[0].output}
        </p>
    </div>
    `
    cont.innerHTML = container

}



const closePopUp = () => {
    const cross = document.getElementById("cross")
    popup.style.display = "none"
}



