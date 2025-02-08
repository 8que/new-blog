   // 随机提示语配置
const loadingTexts = [
    '少女祈祷中',
    '正在召唤神秘力量',
    '资源加载中',
    '等待奇迹发生',
    '时空穿梭准备中',
    '正在连接次元之门',
    '加载结界展开中',
    '魔力填充中',
    '请稍候，正在施展加速魔法',
    '检测到可爱能量，正在加载'
];

// DOM加载完成后立即替换文字
document.addEventListener('DOMContentLoaded', () => {
    const textElement = document.querySelector('.loading-text');
    const randomIndex = Math.floor(Math.random() * loadingTexts.length);
    textElement.textContent = loadingTexts[randomIndex];
});

// 加载完成后隐藏动画
window.addEventListener('load', () => {
    setTimeout(() => {
        document.querySelector('.loading-overlay').style.opacity = '0';
        setTimeout(() => {
            document.querySelector('.loading-overlay').remove();
        }, 500);
    }, 1000);
});