document.addEventListener('DOMContentLoaded', function() {
    // 主题切换
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    
    function toggleTheme() {
        if (body.getAttribute('data-theme') === 'dark') {
            body.removeAttribute('data-theme');
            localStorage.setItem('theme', 'light');
        } else {
            body.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
        }
    }

    themeToggle.addEventListener('click', toggleTheme);

    // 加载保存的主题
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        body.setAttribute('data-theme', 'dark');
    }

    // 获取元素
    const scrollProgress = document.getElementById('scrollProgress');
    const progressNumber = document.getElementById('progressNumber');
    const sections = document.querySelectorAll('section[id]');
    const tocItems = document.querySelectorAll('.toc-item');

    // 更新进度条和目录高亮
    function updateProgress() {
        if (!scrollProgress || !progressNumber) return; // 添加检查

        const winScroll = window.pageYOffset;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        
        scrollProgress.style.width = scrolled + "%";
        progressNumber.textContent = Math.round(scrolled) + "%";
        
        // 更新目录高亮
        let currentSection = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (winScroll >= sectionTop - 60) {
                currentSection = section.getAttribute('id');
            }
        });

        tocItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('href').slice(1) === currentSection) {
                item.classList.add('active');
            }
        });
    }

    // 添加滚动监听
    window.addEventListener('scroll', updateProgress);
    // 初始化进度
    updateProgress();

    // 点击目录项平滑滚动
    tocItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 60,
                    behavior: 'smooth'
                });
            }
        });
    });

    // 返回顶部按钮
    const backToTop = document.getElementById('backToTop');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
    });

    backToTop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // 标签筛选
    const tags = document.querySelectorAll('.tag');
    const articles = document.querySelectorAll('.post-card');

    tags.forEach(tag => {
        tag.addEventListener('click', () => {
            // 移除所有标签的active类
            tags.forEach(t => t.classList.remove('active'));
            // 添加当前标签的active类
            tag.classList.add('active');

            const category = tag.dataset.tag;
            
            articles.forEach(article => {
                if (category === 'all' || article.dataset.category === category) {
                    article.style.display = 'block';
                } else {
                    article.style.display = 'none';
                }
            });
        });
    });

    // 搜索功能
    const searchInput = document.getElementById('searchInput');
    
    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        
        articles.forEach(article => {
            const title = article.querySelector('h2').textContent.toLowerCase();
            const excerpt = article.querySelector('.excerpt').textContent.toLowerCase();
            
            if (title.includes(searchTerm) || excerpt.includes(searchTerm)) {
                article.style.display = 'block';
            } else {
                article.style.display = 'none';
            }
        });
    });

    // 移动端菜单
    const mobileMenu = document.getElementById('mobileMenu');
    const navLinks = document.querySelector('.nav-links');
    
    mobileMenu.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        mobileMenu.classList.toggle('active');
    });
}); 