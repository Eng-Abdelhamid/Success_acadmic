function search() {
    const searchQuery = document.getElementById('search-bar').value;
    if (searchQuery) {
        alert("تم البحث عن: " + searchQuery);
        // يمكن إضافة منطق بحث هنا للانتقال إلى صفحة نتائج البحث.
    } else {
        alert("يرجى إدخال مصطلح البحث.");
    }
}