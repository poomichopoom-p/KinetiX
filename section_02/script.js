const products = [
  {
    brand: "Nike",
    model: "Pegasus 41",
    sub: "Rode Running - น้ำหนักเบา",
    price: 150,
    img: "https://images.adidas.com/is/image/adidas/B75807_01_standard.png",
  },
  {
    brand: "ADIDAS",
    model: "Ultraboost 23",
    sub: "Energy Return · เบาะนุ่ม",
    price: 180,
    img: "https://images.adidas.com/is/image/adidas/B75807_01_standard.png",
  },
  {
    brand: "ASICS",
    model: "Gel-Kayano 31",
    sub: "Stability · ซัพพอร์ตสูง",
    price: 160,
    img: "https://images.adidas.com/is/image/adidas/B75807_01_standard.png",
  },
];

function initApp() {
  const grid = document.getElementById("product-grid");
  grid.innerHTML = products
    .map(
      (p) => `
        <div class="product-card">
            <div class="image-wrapper">
                <img src="${p.img}" style="width: 80%; transform: rotate(-15deg);">
            </div>
            <div style="padding-top: 20px;">
                <span class="secondary-text">${p.brand}</span>
                <div class="h1-text" style="margin: 4px 0;">${p.model}</div>
                <div class="body-text" style="margin-bottom: 16px;">${p.sub}</div>
                
                <div style="display: flex; gap: 8px; margin-bottom: 24px;">
                    <button class="size-btn">38</button>
                    <button class="size-btn">40</button>
                    <button class="size-btn active">42</button>
                    <button class="size-btn">44</button>
                    <button class="size-btn">46</button>
                </div>

                <div style="display: flex; justify-content: space-between; align-items: center;">
                    <div>
                        <span class="h1-text" style="color: var(--volt-green);">${p.price}$</span>
                        <span class="body-text" style="font-size: 10px;">/day</span>
                    </div>
                    <button class="btn-rent">เช่าเลย</button>
                </div>
            </div>
        </div>
    `,
    )
    .join("");
}

window.onload = initApp;
