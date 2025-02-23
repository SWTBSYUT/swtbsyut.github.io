document.addEventListener("DOMContentLoaded", function () {
    const newsList = [
        { date: "2025-02-24", title: "ワールドの新機能！", description: "ログイン部屋やSpecial Event室や個室ができました！"},
        { date: "2025-02-24", title: "バグ修正", description: "色々なバグを修正しました" },
        { date: "2025-02-20", title: "お金システム完成！", description: "貢献度(Money)システムができました。なのでホームページに買取・販売価格を作りました。"},
        { date: "2025-02-20", title: "ホームページ公開！", description: "ホームページを公開しました！" }
    ];

    const newsContainer = document.getElementById("news-list");
    const pastNewsContainer = document.getElementById("past-news-list");

    const today = new Date().toISOString().split("T")[0]; // 今日の日付（YYYY-MM-DD）

    newsList.forEach(news => {
        let listItem = document.createElement("li");
        listItem.classList.add("news-item");

        let newsTitle = document.createElement("h3");
        newsTitle.textContent = `${news.title} (${news.date})`;
        listItem.appendChild(newsTitle);

        let newsDescription = document.createElement("p");
        newsDescription.textContent = news.description;
        listItem.appendChild(newsDescription);

        // 過去のお知らせは「過去のお知らせ一覧」へ
        if (news.date < today) {
            pastNewsContainer.appendChild(listItem);
        } else {
            newsContainer.appendChild(listItem);
        }
    });

    // ハンバーガーメニューの開閉処理
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    menuToggle.addEventListener("click", function () {
        navLinks.classList.toggle("active");
    });
});
