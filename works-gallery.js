// Добавляйте сюда фотографии из images/works в нужном порядке.
const workPhotos = [
  'work-01.jpg', 'work-02.jpg', 'work-03.jpg', 'work-04.jpg',
  'work-05.jpg', 'work-06.jpg', 'work-07.jpg', 'work-08.jpg',
  'work-09.jpg', 'work-10.jpg', 'work-11.jpg', 'work-12.jpg',
  'work-13.jpg', 'work-14.jpg', 'work-15.jpg', 'work-16.jpg'
];
const grid = document.getElementById('works-grid');
const more = document.getElementById('works-more');
const end = document.getElementById('works-end');
const empty = document.getElementById('works-empty');
if (grid && more && end && empty) {
  let visible = 0;
  let photos = [];
  let exhausted = false;
  const columns = () => getComputedStyle(grid).gridTemplateColumns.split(' ').filter(Boolean).length;
  function render() {
    photos.forEach((image, i) => { image.hidden = i >= visible; });
    more.hidden = exhausted || photos.length === 0;
    end.hidden = !exhausted;
    empty.hidden = photos.length > 0;
  }
  function showRow() {
    visible = Math.min(photos.length, visible + columns());
    if (visible >= photos.length) exhausted = true;
    render();
  }
  more.addEventListener('click', showRow);
  Promise.all(workPhotos.map((name, i) => new Promise(resolve => {
    const img = new Image();
    img.alt = `Пример работы типографии «Копилефт» ${i + 1}`;
    img.decoding = 'async';
    img.onload = () => resolve(img);
    img.onerror = () => resolve(null);
    img.src = `images/works/${encodeURIComponent(name)}`;
  }))).then(results => {
    photos = results.filter(Boolean);
    photos.forEach(image => { image.hidden = true; grid.appendChild(image); });
    if (photos.length) showRow(); else render();
  });
}