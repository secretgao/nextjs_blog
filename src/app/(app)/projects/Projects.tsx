import codeCopyIcon from '@/assets/products/codecopy.png';
import resumeIcon from '@/assets/products/resume.png';
import React from 'react';
import 红鲤鱼与绿鲤鱼与驴BlogIcon from '~/public/logo.png';
import { ProjectCard } from './ProjectCard';

export function Projects(): React.ReactElement {
	const projects: ProjectItem[] = [
		{
			id: '1',
			url: 'http://hlyyllyyl.com/',
			icon: 红鲤鱼与绿鲤鱼与驴BlogIcon,
			name: '红鲤鱼与绿鲤鱼与驴 的个人博客',
			description: '基于 Next.js 创建的博客网站，',
			tags: ['个人']
		},
		{
			id: '2',
			url: 'https://www.laoyujianli.com',
			icon: resumeIcon,
			name: '老鱼简历',
			description:
				'很好用的写简历平台，能够下载 PDF PNG格式的简历，当然也可以分享在线简历链接，支持各种格式文件导入简历，接入了 AI 帮忙快速写简历，还能看到一些实时的求职动态。可以体验一下，如果使用有任何问题，欢迎 联系我',
			tags: ['公司']
		},
		{
			id: '3',
			url: 'https://www.codecopy.cn',
			icon: codeCopyIcon,
			name: '代码小抄',
			description: '一个方便的代码片段记录工具',
			tags: ['公司']
		}
	];

	return (
		<ul
			role="list"
			className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
		>
			{projects.map((project) => (
				<ProjectCard project={project} key={project.id} />
			))}
		</ul>
	);
}
