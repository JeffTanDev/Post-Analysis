// script.js
function applyFilters() {
    // 获取筛选条件
    const maxCount = document.getElementById('maxCount').value;
    const selectedTag = document.getElementById('tags').value;

    // 根据筛选条件获取数据 (此处假设有个函数fetchData来模拟数据获取)
    const filteredData = fetchData(maxCount, selectedTag);

    // 显示到页面上
    displayBubbles(filteredData);
}

function displayBubbles(data) {
    const container = document.querySelector('.bubble-container');
    container.innerHTML = ''; // 清空现有内容

    data.forEach(user => {
        const bubble = document.createElement('div');
        bubble.className = 'bubble';
        bubble.innerHTML = `<img src="${user.avatar}" alt="${user.name}">`;
        container.appendChild(bubble);
    });
}

// 示例函数，需要替换为实际的数据获取逻辑
function fetchData(maxCount, tag) {
    // 返回示例数据，实际应从服务器获取
    return [
        { name: '用户1', avatar: 'path/to/avatar1.png' },
        { name: '用户2', avatar: 'path/to/avatar2.png' }
        // 根据maxCount和tag过滤数据
    ];
}
