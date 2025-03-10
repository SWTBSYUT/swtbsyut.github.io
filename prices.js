const items = [
    { name: "ダイヤモンド", type: "鉱石", buy: 20, sell: 10 , image: "images/items/None.jpeg" },
    { name: "鉄インゴット", type: "鉱石", buy: 10, sell: 5 , image: "images/items/None.jpeg" },
    { name: "パン", type: "食料", buy: 5, sell: 2 , image: "images/items/None.jpeg" },
    { name: "金リンゴ", type: "食料", buy: 75, sell: 40 , image: "images/items/None.jpeg" },
    { name: "石炭", type: "鉱石", buy: 2, sell: 1 , image: "images/items/None.jpeg" },
    { name: "エメラルド", type: "鉱石", buy: 5, sell: 3 , image: "images/items/None.jpeg" },
    { name: "ネザライトインゴット", type: "鉱石", buy: 75, sell: 50 , image: "images/items/None.jpeg" },
    { name: "木材", type: "建築", buy: 2, sell: 1 , image: "images/items/None.jpeg" },
    { name: "ガラス", type: "建築", buy: 3, sell: 1 , image: "images/items/None.jpeg" },
    { name: "1回tpコマンド券", type: "券", buy: 500, sell: 200 , image: "images/items/None.jpeg" },
];

const tableBody = document.getElementById("itemTableBody");
const searchBox = document.getElementById("searchBox");
const priceFilter = document.getElementById("priceFilter");
const typeFilter = document.getElementById("typeFilter");

// テーブルを更新する関数
function updateTable() {
    const searchText = searchBox.value.toLowerCase();
    const priceRange = priceFilter.value;
    const typeRange = typeFilter.value;

    tableBody.innerHTML = ""; // 一旦リセット

    items.forEach(item => {
        // 検索フィルター（部分一致）
        if (!item.name.toLowerCase().includes(searchText)) return;

        // 価格フィルター
        if (
            (priceRange === "low" && item.buy > 100) ||
            (priceRange === "mid" && (item.buy < 100 || item.buy > 500)) ||
            (priceRange === "high" && item.buy < 500)
        ) return;

        // カテゴリフィルター
        if (typeRange !== "all" && item.type !== typeRange) return;

        const row = document.createElement("tr");
        row.innerHTML = `
            <td><img src="${item.image}" alt="${item.name}" style="width: 32px; height: 32px;"></td>
            <td>${item.name}</td>
            <td>${item.type}</td>
            <td>${item.buy}M</td>
            <td>${item.sell}M</td>
        `;
        tableBody.appendChild(row);
    });
}

// イベントリスナー
searchBox.addEventListener("input", updateTable);
priceFilter.addEventListener("change", updateTable);
typeFilter.addEventListener("change", updateTable);

// 初回テーブル更新
updateTable();

document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    // **ハンバーガーメニューの動作修正**
    menuToggle.addEventListener("click", function () {
        navLinks.classList.toggle("active");
    });

    window.addEventListener("resize", function () {
        if (window.innerWidth > 768) {
            navLinks.classList.remove("active");
        }
    });
});
