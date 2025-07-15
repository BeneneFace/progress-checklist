const listEl = document.getElementById('list');
const pctEl  = document.getElementById('percent');

function updateProgress() {
  const items = listEl.querySelectorAll('li');
  if (!items.length) return pctEl.textContent = '0%';
  const done = listEl.querySelectorAll('li.completed').length;
  pctEl.textContent = Math.round(done/items.length*100)+'%';
}

document.getElementById('addBtn').onclick = () => {
  const input = document.getElementById('newItem');
  const text = input.value.trim();
  if (!text) return;
  const li = document.createElement('li');
  li.textContent = text;
  li.onclick = () => {
    li.classList.toggle('completed');
    updateProgress();
  };
  listEl.appendChild(li);
  input.value = '';
  updateProgress();
};
