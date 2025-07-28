function showPage(pageId) {
    // Không ẩn các trang nữa → để hiện đồng thời tất cả các mục phim

    // Ẩn tất cả chi tiết phim
    const details = document.querySelectorAll('.movie-detail');
    details.forEach(detail => detail.classList.remove('active'));

    // Cập nhật lớp 'active' cho navigation
    const navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach(link => link.classList.remove('active'));

    // Đánh dấu nav item đang được bấm
    event.target.classList.add('active');

    // Cuộn đến phần được chọn (nếu muốn smooth)
    const targetPage = document.getElementById(pageId);
    if (targetPage) {
        targetPage.scrollIntoView({ behavior: 'smooth' });
    }
}

function showMovieDetail(movieId) {
    // Ẩn tất cả các trang danh sách phim
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.style.display = 'none');

    // Hiện chi tiết phim được chọn
    const detailPage = document.getElementById('detail-' + movieId);
    if (detailPage) {
        detailPage.classList.add('active');
    }
}

function backToMovies() {
    // Ẩn tất cả các chi tiết phim
    const details = document.querySelectorAll('.movie-detail');
    details.forEach(detail => detail.classList.remove('active'));

    // Hiện lại tất cả các trang danh sách phim
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.style.display = 'block');
}

document.addEventListener('DOMContentLoaded', function () {
    // Hiển thị tất cả các trang phim khi load lần đầu
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.style.display = 'block');
});
