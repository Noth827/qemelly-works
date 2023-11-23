function openDetailsModal(projectName) {
  var modal = document.getElementById("details-modal");
  var title = document.getElementById("project-details-title");
  var detailsContent = document.getElementById("project-details-content");

  // Set project details content based on the project name
  if (projectName === "here_is_one_button") {
    title.textContent = "Here is One Button";
    detailsContent.innerHTML =
      "開発期間: 4日間<br>" +
      "開発ポイント: インタラクティブミュージックを採用。";
  } else if (projectName === "circla") {
    title.textContent = "Circla";
    detailsContent.innerHTML =
      "開発期間: 1カ月<br>" +
      "開発ポイント: UniRx等のライブラリを採用し、適所にMVPを導入。<br>" +
      "ロジックをできるだけPureC#で実装し、設計の分かりやすさを重視。<br>" +
      "レポジトリ（Script）: <a href='https://github.com/Noth827/Circla_Scripts'>リンク（GitHub）</a>";
  }

  modal.style.display = "block";

  setTimeout(() => {
    modal.style.opacity = 1;
  }, 50);

  // Prevent the default link behavior
  event.preventDefault();
}

function closeDetailsModal() {
  var modal = document.getElementById("details-modal");

  modal.style.opacity = 0;

  setTimeout(() => {
    modal.style.display = "none";
  }, 500);
  modal.style.display = "none";
}
