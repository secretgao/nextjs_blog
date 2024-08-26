import { Container } from '@/components/Container';
import { type Metadata } from 'next';
import { Projects } from './Projects';
const technologyList = [
	'HTML',
	'CSS',
	'JavaScript',
	'React',
	'Next.js',
	'tailwindcss',
	'TypeScript',
	'node',
	'Nest.js',
	'vite',
	'webpack',
	'php',
	'rust',
	'go',
	'python'
];
const title = '我的项目';
const description =
	'我在工作和自己学习过程中开发的一些项目，包括的技术有：' +
	technologyList.join(',') +
	'等等。';
export const metadata = {
	title,
	description,
	openGraph: {
		title,
		description
	},
	twitter: {
		title,
		description,
		card: 'summary_large_image'
	}
} satisfies Metadata;

export default function ProjectsPage() {
	return (
		<Container className="mt-16 sm:mt-32">
			<header className="max-w-2xl">
				<h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
					我的项目
				</h1>
				<p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
					这是我在开发和维护的项目，有<b>公司项目，公司的项目就不方便写在这里了</b>，也有<b>个人项目</b>	
				</p>
				<br/>
					
					<li>用rust写的一个秒级定时任务github代码: <a href='https://github.com/secretgao/rust_timer' style={{ color: 'blue' }}>rust 秒级定时任务</a></li>	
					<li>用vue php写的企业站 github代码： <a href='https://github.com/secretgao/fastadmin' style={{ color: 'blue' }}>代码</a>；企业站访问链接：<a href='https://www.welldebon.com/#/' style={{ color: 'blue' }}>访问</a></li>	
					<li>nextjs和nestjs 写的前后端分离项目 github代码： <a href='https://github.com/secretgao/nextjs_car' style={{ color: 'blue' }}>nextjs_car</a> <a href='https://github.com/secretgao/nestjs_car' style={{ color: 'blue' }}>nestjs_car</a></li>	
			</header>
			<div className="mt-16 sm:mt-20">
				<Projects />
			</div>
		</Container>
	);
}

export const revalidate = 3600;
