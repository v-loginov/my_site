document.getElementById('previewDesktopBtn').addEventListener('click', function (event) {
  event.preventDefault();
  let pagePreview = document.getElementById('page-preview');
  pagePreview.classList.remove('laptop', 'tablet', 'h-phone', 'phone');
});

document.getElementById('previewLaptopBtn').addEventListener('click', function (event) {
  event.preventDefault();
  let pagePreview = document.getElementById('page-preview');
  pagePreview.classList.remove('tablet', 'h-phone', 'phone');
  pagePreview.classList.add('laptop');
});

document.getElementById('previewTabletBtn').addEventListener('click', function (event) {
  event.preventDefault();
  let pagePreview = document.getElementById('page-preview');
  pagePreview.classList.remove('tablet');
  pagePreview.classList.add('tablet');
});

document.getElementById('previewPhoneHorizontalBtn').addEventListener('click', function (event) {
  event.preventDefault();
  let pagePreview = document.getElementById('page-preview');
  pagePreview.classList.remove('h-phone');
  pagePreview.classList.add('h-phone');
});

document.getElementById('previewPhoneBtn').addEventListener('click', function (event) {
  event.preventDefault();
  let pagePreview = document.getElementById('page-preview');
  pagePreview.classList.remove('laptop', 'tablet', 'h-phone');
  pagePreview.classList.add('phone');
});

$(window).on('scroll', function () {
    $('.count').each(function () {
        let $this = $(this);
        let rect = $this.get(0).getBoundingClientRect();
        if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
            let targetNumber = parseInt($this.attr('data-target'));

            $({ Counter: 0 }).animate({ Counter: targetNumber }, {
                duration: 2000, // Animation duration in milliseconds
                easing: 'swing', // Easing function (e.g., 'swing' or 'linear')
                step: function () {
                    $this.text(Math.ceil(this.Counter));
                }
            });
        }
    });
});