// script.js

// Biến toàn cục để theo dõi trang hiện tại
let currentPageId = null;

// Hàm hiển thị trang
function showPage(pageId) {
    const pages = document.querySelectorAll('.page');
    if (pages.length > 0) {
        pages.forEach(page => {
            page.style.opacity = '0';
            setTimeout(() => {
                page.style.display = 'none';
            }, 300);
        });
        const details = document.querySelectorAll('.movie-detail');
        details.forEach(detail => {
            detail.style.opacity = '0';
            setTimeout(() => {
                detail.style.display = 'none';
                detail.classList.remove('active');
            }, 300);
        });
        const targetPage = document.getElementById(pageId);
        if (targetPage) {
            currentPageId = pageId; // Cập nhật trang hiện tại
            setTimeout(() => {
                targetPage.style.display = 'block';
                setTimeout(() => {
                    targetPage.style.opacity = '1';
                }, 10);
            }, 310);
        }
        const navLinks = document.querySelectorAll('.nav-menu a');
        navLinks.forEach(link => link.classList.remove('active'));
        if (event && event.target && event.target.tagName === 'A') {
            event.target.classList.add('active');
        }
    }
}

// Hàm hiển thị chi tiết phim
function showMovieDetail(movieId) {
    const pages = document.querySelectorAll('.page');
    if (pages.length > 0) {
        pages.forEach(page => {
            page.style.opacity = '0';
            setTimeout(() => {
                page.style.display = 'none';
            }, 300);
        });
        const detailPage = document.getElementById('detail-' + movieId);
        if (detailPage) {
            detailPage.classList.add('active');
            setTimeout(() => {
                detailPage.style.display = 'block';
                setTimeout(() => {
                    detailPage.style.opacity = '1';
                }, 10);
            }, 310);
        } else {
            console.error('Detail page not found for ID: detail-' + movieId);
        }
    }
}

// Hàm quay lại danh sách phim
function backToMovies() {
    const details = document.querySelectorAll('.movie-detail');
    if (details.length > 0) {
        details.forEach(detail => {
            detail.style.opacity = '0';
            setTimeout(() => {
                detail.style.display = 'none';
                detail.classList.remove('active');
            }, 300);
        });
        if (currentPageId) {
            const movieList = document.getElementById(currentPageId);
            if (movieList) {
                setTimeout(() => {
                    movieList.style.display = 'block';
                    setTimeout(() => {
                        movieList.style.opacity = '1';
                    }, 10);
                }, 310);
            } else {
                console.error('Movie list not found for ID: ' + currentPageId);
            }
        } else {
            console.error('No current page ID set');
        }
    }
}

// Thiết lập khi trang tải
document.addEventListener('DOMContentLoaded', function() {
    // Xác định trang hiện tại dựa trên URL
    const path = window.location.pathname;
    if (path.includes('phim-le.html')) {
        currentPageId = 'phim-le';
    } else if (path.includes('phim-rap.html')) {
        currentPageId = 'phim-rap';
    } else if (path.includes('thieu-nhi.html')) {
        currentPageId = 'thieu-nhi';
    } else if (path.includes('phim-bo.html')) {
        currentPageId = 'phim-bo';
    } else {
        currentPageId = document.querySelector('.page')?.id || 'phim-le'; // Mặc định
    }

    // Hiển thị trang hiện tại
    if (currentPageId) {
        showPage(currentPageId);
    }

    // Xử lý sự kiện click cho các liên kết điều hướng
    const navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            // Nếu liên kết trỏ đến trang hiện tại, ngăn chuyển hướng và gọi showPage
            if (href.includes(currentPageId + '.html') || (href === 'index.html' && currentPageId === 'phim-le')) {
                e.preventDefault();
                showPage(currentPageId);
            }
            // Các trang khác sẽ chuyển hướng bình thường
        });
    });
});