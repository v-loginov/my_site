document.getElementById('previewDesktopBtn').addEventListener('click', function(event) {
  event.preventDefault();
  let pagePreview = document.getElementById('page-preview');
  pagePreview.classList.remove('laptop', 'tablet', 'h-phone', 'phone');
});

document.getElementById('previewLaptopBtn').addEventListener('click', function(event) {
  event.preventDefault();
  let pagePreview = document.getElementById('page-preview');
  pagePreview.classList.remove('tablet', 'h-phone', 'phone');
  pagePreview.classList.add('laptop');
});

document.getElementById('previewTabletBtn').addEventListener('click', function(event) {
  event.preventDefault();
  let pagePreview = document.getElementById('page-preview');
  pagePreview.classList.remove('tablet');
  pagePreview.classList.add('tablet');
});

document.getElementById('previewPhoneHorizontalBtn').addEventListener('click', function(event) {
  event.preventDefault();
  let pagePreview = document.getElementById('page-preview');
  pagePreview.classList.remove('h-phone');
  pagePreview.classList.add('h-phone');
});

document.getElementById('previewPhoneBtn').addEventListener('click', function(event) {
  event.preventDefault();
  let pagePreview = document.getElementById('page-preview');
  pagePreview.classList.remove('laptop', 'tablet', 'h-phone');
  pagePreview.classList.add('phone');
});