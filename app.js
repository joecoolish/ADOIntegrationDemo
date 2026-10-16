const products = [
  { id: "rainbow", name: "The Rainbow Stacker", category: "Builders", price: 32, age: "3+ years", description: "Seven arches. Endless possibilities.", color: "peach", badge: "PLAYROOM FAVORITE", art: "rainbow" },
  { id: "train", name: "The Wanderlust Express", category: "Explorers", price: 48, age: "3+ years", description: "Next stop: wherever they imagine.", color: "sage", badge: "", art: "train" },
  { id: "robot", name: "Hello, Little Robot", category: "Dreamers", price: 28, age: "3+ years", description: "A big-hearted friend for little adventures.", color: "lavender", badge: "MEET YOUR NEW PAL", art: "robot" },
  { id: "blocks", name: "The Tiny Town Blocks", category: "Builders", price: 42, age: "3+ years", description: "Build a neighborhood. Dream up a world.", color: "butter", badge: "", art: "blocks" },
  { id: "rocket", name: "The Moonbeam Rocket", category: "Explorers", price: 36, age: "3+ years", description: "For countdowns and out-of-this-world ideas.", color: "blue", badge: "LITTLE ADVENTURES", art: "rocket" },
  { id: "flowers", name: "The Daydream Garden", category: "Dreamers", price: 24, age: "3+ years", description: "A little patch of make-believe sunshine.", color: "pink", badge: "", art: "flowers" },
];

const basket = new Map();
const currency = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });
let category = "all";
let toastTimer;
const productGrid = document.querySelector("#products");
const search = document.querySelector("#search");
const sort = document.querySelector("#sort");
const dialog = document.querySelector("#quote-dialog");

function renderProducts() {
  const query = search.value.trim().toLowerCase();
  const visible = products.filter((product) =>
    (category === "all" || product.category === category) &&
    `${product.name} ${product.description} ${product.category}`.toLowerCase().includes(query)
  );
  if (sort.value === "price-asc") visible.sort((a, b) => a.price - b.price);
  if (sort.value === "price-desc") visible.sort((a, b) => b.price - a.price);
  if (sort.value === "name") visible.sort((a, b) => a.name.localeCompare(b.name));
  productGrid.replaceChildren();
  for (const product of visible) {
    const card = document.createElement("article");
    card.className = "product-card";
    // Only the fixed catalogue data is interpolated; user input is never rendered as HTML.
    card.innerHTML = `
      <div class="product-art ${product.color}">
        ${product.badge ? `<span class="product-badge">${product.badge}</span>` : ""}
        <svg viewBox="0 0 300 230" role="img" aria-label="${product.name} illustration"><use href="assets/toys.svg#${product.art}"></use></svg>
        <span class="age-label">${product.age}</span>
      </div>
      <div class="product-heading"><h3>${product.name}</h3><span>${currency.format(product.price)}</span></div>
      <p>${product.description}</p>
      <button class="add-button" type="button" aria-label="Add ${product.name} to sample basket">Add to sample basket <span aria-hidden="true">+</span></button>`;
    card.querySelector("button").addEventListener("click", () => {
      basket.set(product.id, (basket.get(product.id) || 0) + 1);
      updateBasket();
      const toast = document.querySelector("#toast");
      toast.textContent = `${product.name} added to your sample basket.`;
      toast.classList.add("visible");
      clearTimeout(toastTimer);
      toastTimer = setTimeout(() => toast.classList.remove("visible"), 3000);
    });
    productGrid.append(card);
  }
  document.querySelector("#results-count").textContent = `${visible.length} ${visible.length === 1 ? "toy" : "toys"} to spark something wonderful`;
  document.querySelector("#empty-state").hidden = visible.length !== 0;
}

function updateBasket() {
  const list = document.querySelector("#basket-items");
  list.replaceChildren();
  let count = 0;
  let total = 0;
  for (const [id, quantity] of basket) {
    const product = products.find((item) => item.id === id);
    count += quantity;
    total += product.price * quantity;
    const item = document.createElement("li");
    const text = document.createElement("span");
    text.textContent = `${product.name} × ${quantity} — ${currency.format(product.price * quantity)}`;
    const remove = document.createElement("button");
    remove.type = "button";
    remove.className = "remove-button";
    remove.textContent = "Remove";
    remove.setAttribute("aria-label", `Remove ${product.name} from sample basket`);
    remove.addEventListener("click", () => {
      basket.delete(id);
      updateBasket();
      const nextButton = list.querySelector("button");
      (nextButton || document.querySelector("#quote-form input")).focus();
    });
    item.append(text, remove);
    list.append(item);
  }
  document.querySelector("#basket-count").textContent = count;
  document.querySelector("#basket-total").textContent = count
    ? `Illustrative retail total: ${currency.format(total)} (not a wholesale quote)`
    : "Your basket is empty. Add a toy to preview a sample request.";
  document.querySelector("#quote-form button").disabled = count === 0;
  document.querySelector("#quote-status").textContent = "";
}

for (const filter of document.querySelectorAll(".filter")) {
  filter.addEventListener("click", () => {
    category = filter.dataset.category;
    for (const button of document.querySelectorAll(".filter")) {
      const active = button === filter;
      button.classList.toggle("active", active);
      button.setAttribute("aria-pressed", String(active));
    }
    renderProducts();
  });
}
search.addEventListener("input", renderProducts);
sort.addEventListener("change", renderProducts);
for (const id of ["open-basket", "open-quote"]) {
  document.getElementById(id).addEventListener("click", () => {
    updateBasket();
    dialog.showModal();
  });
}
document.querySelector("#close-dialog").addEventListener("click", () => dialog.close());
dialog.addEventListener("close", () => {
  document.querySelector("#quote-form").reset();
  document.querySelector("#quote-status").textContent = "";
});
document.querySelector("#quote-form").addEventListener("submit", (event) => {
  event.preventDefault();
  if (basket.size === 0) return;
  document.querySelector("#quote-status").textContent = "Demo complete! Your sample request preview is ready. Nothing was sent or saved; no order has been placed.";
  event.currentTarget.reset();
});
renderProducts();
updateBasket();
