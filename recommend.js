document.addEventListener('DOMContentLoaded', function() {
    // 工具数据
    const toolsData = {
        '图像处理': [
            {
                name: '免扣图片网',
                icon: 'https://www.google.com/s2/favicons?domain=miankoutupian.com&sz=64',
                url: 'https://miankoutupian.com/',
                description: '专业的免扣图片素材网站，提供海量PNG透明背景图片下载，支持在线抠图'
            },
            {
                name: 'Bigjpg 图片放大',
                icon: 'https://www.google.com/s2/favicons?domain=bigjpg.com&sz=64',
                url: 'https://bigjpg.com/',
                description: '使用深度卷积神经网络的图片无损放大工具，可放大图片分辨率达到原有的2-16倍'
            },
            {
                name: 'Remove.bg',
                icon: 'https://www.google.com/s2/favicons?domain=remove.bg&sz=64',
                url: 'https://www.remove.bg/zh/upload',
                description: '智能AI抠图工具，一键去除图片背景，支持人物、产品、动物等多种场景'
            },
            {
                name: 'ACG-AI绘画',
                icon: 'https://www.google.com/s2/favicons?domain=ai-acg.com&sz=64',
                url: 'https://ai-acg.com/',
                description: '专注于动漫风格的AI绘画工具，支持多种二次元风格，可根据文字描述生成图像'
            },
            {
                name: 'Stability AI',
                icon: 'https://www.google.com/s2/favicons?domain=stability.ai&sz=64',
                url: 'https://stability.ai/',
                description: '领先的AI图像生成平台，提供多种艺术风格和高度可定制的图像生成服务'
            },
            {
                name: 'Adobe Firefly',
                icon: 'https://www.google.com/s2/favicons?domain=firefly.adobe.com&sz=64',
                url: 'https://firefly.adobe.com/',
                description: 'Adobe推出的AI创意工具，支持文生图、图片编辑、风格迁移等多种功能'
            },
            {
                name: '阿里巴巴矢量图',
                icon: 'https://www.google.com/s2/favicons?domain=iconfont.cn&sz=64',
                url: 'https://www.iconfont.cn/',
                description: '阿里巴巴矢量图标库，提供海量图标和插画资源，支持自定义颜色和大小'
            },
            {
                name: 'Everypixel',
                icon: 'https://www.google.com/s2/favicons?domain=everypixel.com&sz=64',
                url: 'https://www.everypixel.com/',
                description: '专业的图片搜索引擎，整合多个图库资源，支持高质量商用图片搜索'
            },
            {
                name: 'Google以图搜图',
                icon: 'https://www.google.com/s2/favicons?domain=images.google.com&sz=64',
                url: 'https://images.google.com/',
                description: '谷歌图片搜索服务，支持通过上传图片搜索相似图片，查找图片来源'
            },
            {
                name: '百度以图搜图',
                icon: 'https://www.google.com/s2/favicons?domain=graph.baidu.com&sz=64',
                url: 'https://graph.baidu.com/',
                description: '百度图片识别服务，支持多种搜索模式，包括相似图片、商品、表情包等'
            },
            {
                name: '爱给网',
                icon: 'https://www.google.com/s2/favicons?domain=aigei.com&sz=64',
                url: 'https://www.aigei.com/',
                description: '国内最大的数字音效素材网站，提供音效、配乐、声音特效等资源下载'
            },
            {
                name: 'cc0图片网',
                icon: 'https://www.google.com/s2/favicons?domain=cc0.cn&sz=64',
                url: 'https://www.cc0.cn/?ref=nav.haiyong.site',
                description: '谷歌图片搜索服务，支持通过上传图片搜索相似图片，查找图片来源'
            },
            {
                name: '赛博包浆',
                icon: 'https://www.google.com/s2/favicons?domain=app.container-z.art&sz=64',
                url: 'https://app.container-z.art/tools/patina/',
                description: '谷歌图片搜索服务，支持通过上传图片搜索相似图片，查找图片来源'
            },
            {
                name: '镝数图表',
                icon: 'https://www.google.com/s2/favicons?domain=dycharts.com&sz=64',
                url: 'https://dycharts.com/',
                description: '谷歌图片搜索服务，支持通过上传图片搜索相似图片，查找图片来源'
            },
        ],
        '音频处理': [
            {
                name: '爱给网',
                icon: 'https://www.google.com/s2/favicons?domain=aigei.com&sz=64',
                url: 'https://www.aigei.com/',
                description: '国内最大的数字音效素材网站，提供音效、配乐、声音特效等资源下载'
            },
            {
                name: 'ACGN文本转语音',
                icon: 'https://www.google.com/s2/favicons?domain=acgn.ttson.cn&sz=64',
                url: 'https://acgn.ttson.cn/',
                description: '专注于动漫角色声音的文本转语音工具，支持多种角色音色和情感表达'
            },
            {
                name: '记灵工具',
                icon: 'https://www.google.com/s2/favicons?domain=remeins.com&sz=64',
                url: 'https://remeins.com/index/app/text2voice ',
                description: '专注于动漫角色声音的文本转语音工具，支持多种角色音色和情感表达'
            },
            {
                name: 'Convertio音频转换',
                icon: 'https://www.google.com/s2/favicons?domain=convertio.co&sz=64',
                url: 'https://convertio.co/zh/audio-converter/',
                description: '专业的在线音频格式转换工具，支持300多种格式之间的相互转换'
            },
            {
                name: 'AConvert音频转换',
                icon: 'https://www.google.com/s2/favicons?domain=aconvert.com&sz=64',
                url: 'https://convertio.co/zh/audio-converter/',
                description: '专业的在线音频格式转换工具，支持300多种格式之间的相互转换'
            },
            {
                name: 'BPM检测器',
                icon: 'https://www.google.com/s2/favicons?domain=aconvert.com&sz=64',
                url: 'https://www.aconvert.com/cn/audio/',
                description: '准确的音乐节奏速度检测工具，支持上传音频文件自动分析BPM'
            },
            {
                name: 'Suno AI音乐创作',
                icon: 'https://www.google.com/s2/favicons?domain=suno.com&sz=64',
                url: 'https://suno.com/',
                description: 'AI音乐创作平台，可根据文字描述生成完整音乐作品，支持多种音乐风格'
            },
            {
                name: 'Uberduck',
                icon: 'https://www.google.com/s2/favicons?domain=uberduck.ai&sz=64',
                url: 'https://www.uberduck.ai/',
                description: '准确的音乐节奏速度检测工具，支持上传音频文件自动分析BPM'
            },
            {
                name: '在线人声分离',
                icon: 'https://www.google.com/s2/favicons?domain=vocalremover.media.io&sz=64',
                url: 'https://vocalremover.media.io/app/',
                description: '准确的音乐节奏速度检测工具，支持上传音频文件自动分析BPM'
            },
            {
                name: 'UVR5音频分离工具',
                icon: 'https://www.google.com/s2/favicons?domain=ultimatevocalremover.com&sz=64',
                url: 'https://ultimatevocalremover.com/',
                description: '准确的音乐节奏速度检测工具，支持上传音频文件自动分析BPM'
            },
        ],
        '视频处理': [
            {
                name: 'Unscreen 视频背景移除',
                icon: 'https://www.google.com/s2/favicons?domain=unscreen.com&sz=64',
                url: 'https://www.unscreen.com/',
                description: '专业的视频背景移除工具，无需绿幕即可实现视频抠像，支持批量处理'
            },
            {
                name: '可灵AI',
                icon: 'https://www.google.com/s2/favicons?domain=klingai.kuaishou.com&sz=64',
                url: 'https://klingai.kuaishou.com/',
                description: '快手推出的AI视频创作平台，支持一键生成短视频、数字人等多种功能'
            },
            {
                name: 'VoiceTransl 视频字幕生成和翻译工具',
                icon: 'https://www.google.com/s2/favicons?domain=github.com&sz=64',
                url: 'https://github.com/shinnpuru/VoiceTransl',
                description: '开源的离线AI视频字幕生成和翻译工具，支持多语言识别和翻译'
            },
            {
                name: 'greenvideo 抖音B站视频下载',
                icon: 'https://www.google.com/s2/favicons?domain=greenvideo.cc&sz=64',
                url: 'https://greenvideo.cc/',
                description: '高质量免费视频素材网站，提供创意视频片段下载，适合商业使用'
            },
            {
                name: 'Mazwai视频素材',
                icon: 'https://www.google.com/s2/favicons?domain=mazwai.com&sz=64',
                url: 'https://mazwai.com/',
                description: '高质量免费视频素材网站，提供创意视频片段下载，适合商业使用'
            },
            {
                name: 'Coverr视频素材',
                icon: 'https://www.google.com/s2/favicons?domain=coverr.co&sz=64',
                url: 'https://coverr.co/',
                description: '高质量免费视频素材网站，提供创意视频片段下载，适合商业使用'
            },
            {
                name: 'Mixkit视频素材',
                icon: 'https://www.google.com/s2/favicons?domain=mixkit.co&sz=64',
                url: 'https://mixkit.co/',
                description: '高质量免费视频素材网站，提供创意视频片段下载，适合商业使用'
            },
            {
                name: 'Videvo视频素材',
                icon: 'https://www.google.com/s2/favicons?domain=videvo.net&sz=64',
                url: 'https://www.videvo.net/',
                description: '高质量免费视频素材网站，提供创意视频片段下载，适合商业使用'
            },
        ],
        '文本处理': [
            {
                name: '幕布',
                icon: 'https://www.google.com/s2/favicons?domain=mubu.com&sz=64',
                url: 'https://mubu.com/home',
                description: '极简的大纲笔记工具，支持思维导图模式，帮助整理思路和知识管理'
            },
            {
                name: '智图',
                icon: 'https://www.google.com/s2/favicons?domain=zhimap.com&sz=64',
                url: 'https://zhimap.com/',
                description: '谷歌图片搜索服务，支持通过上传图片搜索相似图片，查找图片来源'
            },
            {
                name: '草料二维码',
                icon: 'https://www.google.com/s2/favicons?domain=cli.im&sz=64',
                url: 'https://cli.im/',
                description: '专业的二维码生成器，支持自定义样式、Logo添加、批量生成等功能'
            },
            {
                name: '求字体网',
                icon: 'https://www.google.com/s2/favicons?domain=qiuziti.com&sz=64',
                url: 'https://www.qiuziti.com/',
                description: '中文字体识别工具，支持图片文字提取和字体匹配，提供字体下载'
            },
            {
                name: '智能综述-青泥学术',
                icon: 'https://www.google.com/s2/favicons?domain=xueshuchuangxin.com&sz=64',
                url: 'https://www.xueshuchuangxin.com/AutoMaticanAlysis/AutoMaticanAlysis',
                description: '专业的二维码生成器，支持自定义样式、Logo添加、批量生成等功能'
            },
        ],
        '智能办公': [
            {
                name: 'PDF24 Tools',
                icon: 'https://www.google.com/s2/favicons?domain=tools.pdf24.org&sz=64',
                url: 'https://tools.pdf24.org/zh/',
                description: '免费的PDF在线工具集，支持PDF转换、合并、压缩、加密等多种功能'
            },
            {
                name: '超级PPT市场',
                icon: 'https://www.google.com/s2/favicons?domain=pptsupermarket.com&sz=64',
                url: 'https://www.pptsupermarket.com/',
                description: '海量PPT模板资源，包含各行业专业模板，支持在线预览和下载'
            },
            {
                name: 'Kimi PPT',
                icon: 'https://www.google.com/s2/favicons?domain=kimi.moonshot.cn&sz=64',
                url: 'https://kimi.moonshot.cn/',
                description: 'AI驱动的PPT生成工具，可根据文本内容自动生成精美PPT'
            },
            {
                name: '百度文库 PPT',
                icon: 'https://www.google.com/s2/favicons?domain=wenku.baidu.com&sz=64',
                url: 'https://kimi.moonshot.cn/',
                description: 'AI驱动的PPT生成工具，可根据文本内容自动生成精美PPT'
            },
            
        ],
        '其他工具': [
            {
                name: '包小盒',
                icon: 'https://www.google.com/s2/favicons?domain=baoxiaohe.com&sz=64',
                url: 'https://www.baoxiaohe.com/ ',
                description: '按需付费的GPU租用平台，支持多种型号显卡，适合AI训练和渲染'
            },
            {
                name: '柔造 周边定制',
                icon: 'https://www.google.com/s2/favicons?domain=rouzao.com&sz=64',
                url: 'https://rouzao.com/home',
                description: '按需付费的GPU租用平台，支持多种型号显卡，适合AI训练和渲染'
            },
            {
                name: 'Coolors调色板',
                icon: 'https://www.google.com/s2/favicons?domain=coolors.co&sz=64',
                url: 'https://coolors.co/palettes/trending',
                description: '专业的配色方案生成工具，提供流行配色方案，支持自定义调整'
            },
            {
                name: 'AutoDL显卡租用',
                icon: 'https://www.google.com/s2/favicons?domain=autodl.com&sz=64',
                url: 'https://www.autodl.com/home',
                description: '按需付费的GPU租用平台，支持多种型号显卡，适合AI训练和渲染'
            },
            {
                name: '硅基流动-开源模型API集成',
                icon: 'https://www.google.com/s2/favicons?domain=cloud.siliconflow.cn&sz=64',
                url: 'https://cloud.siliconflow.cn/i/w9tfvROq',
                description: '按需付费的GPU租用平台，支持多种型号显卡，适合AI训练和渲染'
            },
            {
                name: 'SD-WebUI 整合包 / 绘世启动器 / 训练器下载导航',
                icon: 'https://www.google.com/s2/favicons?domain=bilibili.com&sz=64',
                url: 'https://www.bilibili.com/opus/897873624905547794?spm_id_from=333.999.rich-text.link.click e',
                description: '按需付费的GPU租用平台，支持多种型号显卡，适合AI训练和渲染'
            },
            {
                name: 'AstrBot',
                icon: 'https://www.google.com/s2/favicons?domain=astrbot.app&sz=64',
                url: 'https://astrbot.app/',
                description: '跨平台AI聊天机器人框架，支持多种AI模型接入，可自定义对话场景'
            },
            {
                name: '喵版Yunzai-V3',
                icon: 'https://www.google.com/s2/favicons?domain=github.com&sz=64',
                url: 'https://github.com/yoimiya-kokomi/Miao-Yunzai?tab=readme-ov-file',
                description: '喵版Yunzai-V3 QQ机器人'
            },
            {
                name: 'EasyVtuber',
                icon: 'https://www.google.com/s2/favicons?domain=github.com&sz=64',
                url: 'https://github.com/yuyuyzl/EasyVtuber',
                description: '开源的图片转Live2D工具，可将静态图片转换为动态虚拟形象'
            },
            {
                name: '实时视频换脸',
                icon: 'https://www.google.com/s2/favicons?domain=github.com&sz=64',
                url: 'https://github.com/hacksider/Deep-Live-Cam',
                description: '按需付费的GPU租用平台，支持多种型号显卡，适合AI训练和渲染'
            },
        ]
    };

    const sidebar = document.getElementById('sidebar');
    const sidebarToggle = document.getElementById('sidebarToggle');
    const categoryItems = document.querySelectorAll('.category-header');
    const toolsGrid = document.getElementById('toolsGrid');

    // 侧边栏切换
    sidebarToggle.addEventListener('click', () => {
        sidebar.classList.toggle('collapsed');
    });

    // 分类点击处理
    categoryItems.forEach(item => {
        item.addEventListener('click', () => {
            // 移除其他分类的active状态
            categoryItems.forEach(cat => cat.classList.remove('active'));
            // 添加当前分类的active状态
            item.classList.add('active');
            
            // 获取分类名称
            const category = item.querySelector('span').textContent;
            // 显示该分类的工具
            displayTools(category);
        });
    });

    // 显示工具卡片
    function displayTools(category) {
        toolsGrid.innerHTML = '';
        const tools = toolsData[category] || [];
        
        tools.forEach(tool => {
            const card = document.createElement('div');
            card.className = 'tool-card';
            card.innerHTML = `
                <img src="${tool.icon}" alt="${tool.name}" class="tool-icon">
                <div class="tool-info">
                    <h3 class="tool-name">${tool.name}</h3>
                </div>
                <div class="tool-details">
                    <p>${tool.description}</p>
                    <small class="tool-url">${tool.url}</small>
                </div>
            `;
            
            card.addEventListener('click', () => {
                window.open(tool.url, '_blank');
            });
            
            toolsGrid.appendChild(card);
        });
    }

    // 默认显示第一个分类的工具
    categoryItems[0].click();
}); 