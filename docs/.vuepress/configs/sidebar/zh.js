export const sidebarZh = {
    '/database/': [
        {
            text: '数据库 笔记',
            collapsible: true,
            children: [
                {
                    text: '关系数据库',
                    children: [
                        '/database/relational/README.md',
                    ],
                },
            ],
        },
    ],
    '/dotnet/': [
        {
            text: 'Dotnet 笔记',
            children: [
                {
                    text: '依赖注入',
                    collapsible: true,
                    children: [
                        {
                            text: 'DI容器',
                            children: [
                                '/dotnet/di/container/README.md',
                            ],
                        },
                    ],
                },
                {
                    text: '日志框架',
                    collapsible: true,
                    children: [
                        {
                            text: 'Serilog',
                            children: [
                                '/dotnet/log-framework/serilog/README.md',
                            ],
                        },
                        {
                            text: 'Nlog',
                            children: [
                                '/dotnet/log-framework/nlog/README.md',
                            ],
                        },
                    ],
                },
                {
                    text: '缓存',
                    collapsible: true,
                    children: [
                        {
                            text: '内存缓存',
                            children: [
                                '/dotnet/cache/memory/README.md',
                            ],
                        },
                    ],
                }
            ],
        },
    ],
    '/handy/': [
        {
            text: '随手笔记',
            collapsible: true,
            children: [
                '/handy/README.md',
                {
                    text: '谷歌浏览器',
                    collapsible: true,
                    children: [
                        '/handy/browser/google/private-link.md',
                    ],
                },
                {
                    text: 'edge浏览器',
                    collapsible: true,
                    children: [
                        '/handy/browser/edge/private-link.md',
                    ],
                },
            ],
        },
    ]
}