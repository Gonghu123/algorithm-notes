document.getElementById('search').addEventListener('input', function () {
    const keyword = this.value.toLowerCase();
    document.querySelectorAll('li').forEach(item => {
        const text = item.textContent.toLowerCase();
        item.style.display = text.includes(keyword) ? 'block' : 'none';
    });
});
