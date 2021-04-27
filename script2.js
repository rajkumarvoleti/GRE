var items = document.querySelectorAll(".item");
var content = document.querySelectorAll(".description");
items = [...items];
content = [...content];
for (let i = 0; i < items.length; i++) {
  const ele = items[i];
  ele.addEventListener("click", function () {
    const des = content[i];
    des.classList.toggle("active");
  });
}
