import { Avatar, AvatarImage } from "@/components/ui/avatar"
import {badgeVariants} from "@/components/ui/badge";
import Link from "next/link";
import DownloadImages from "@/components/homepage/download-images";

export default function HomePage(){
	return (
		<main className={'min-h-screen'}>
			<div className="container my-20 max-w-5xl">
				<div className={'flex flex-col lg:flex-row gap-10 items-center'}>
					<Avatar className={'h-40 w-40'}>
						<AvatarImage src="/images/avatar-500.jpg" />
					</Avatar>

					<div className={'flex flex-col gap-4'}>
						<p className={'font-bold text-3xl'}>Vinh Nguyen</p>
						<p className={''}>I have been building personal/professional web projects for more than 4 years. Currently, I am working as a freelancer for full-stack web development. This project is completely free, you can check its source code <Link className={'text-indigo-600 underline'} href={'https://github.com/vinhweb/download-images-by-urls'} target={'_blank'}>here</Link> </p>
						<div className={'flex flex-wrap gap-2'}>
							<Link href={'https://www.youtube.com/@vinhwebit'} className={badgeVariants({ variant: "secondary" })}>Youtube</Link>
							<Link href={'https://www.facebook.com/vinhstinghubt/'} className={badgeVariants({ variant: "secondary" })}>Facebook</Link>
							<Link href={'https://github.com/vinhweb/'} className={badgeVariants({ variant: "secondary" })}>Github</Link>
						</div>
					</div>
				</div>
			</div>

			<div className="container my-20 max-w-5xl">
				<div className={'mb-6'}>
					<h1 className={'text-2xl font-medium'}>Download multiple images at once</h1>
					<p className={'text-gray-800 '}>This is a super simple tool that helps you download multiple images at once using text containing the URLs of the images you want to download.
						Separate each image URL with a <span className={'px-1 bg-yellow-300 text-black rounded'}>,</span> or <span className={'px-1 bg-yellow-300 text-black rounded'}>;</span> Either <span className={'px-1 bg-yellow-300 text-black rounded'}>line break</span> or <span className={'px-1 bg-yellow-300 text-black rounded'}>array</span> is fine
					</p>
				</div>
				<DownloadImages/>

				<div className="mt-14 flex flex-col gap-4">
					<div className={'text-sm text-gray-800'}>
						<div>Example 01:</div>
						<pre className="mt-2 rounded-md bg-slate-950 p-4 overflow-x-auto">
		          <code className="text-white">https://picsum.photos/200/300?random=1, https://picsum.photos/200/300?random=2, https://picsum.photos/200/300?random=3</code>
		        </pre>
					</div>
					<div className={'text-sm text-gray-800'}>
						<div>Example 02:</div>
						<pre className="mt-2 rounded-md bg-slate-950 p-4 overflow-x-auto">
		          <code className="text-white">https://picsum.photos/200/300?random=1; https://picsum.photos/200/300?random=2; https://picsum.photos/200/300?random=3</code>
		        </pre>
					</div>
					<div className={'text-sm text-gray-800'}>
						<div>Example 03:</div>
						<pre className="mt-2 rounded-md bg-slate-950 p-4 overflow-x-auto">
		          <code className="text-white">
			          https://picsum.photos/200/300?random=1<br/>
			          https://picsum.photos/200/300?random=2<br/>
			          https://picsum.photos/200/300?random=3<br/>
							</code>
		        </pre>
					</div>
					<div className={'text-sm text-gray-800'}>
						<div>Example 04:</div>
						<pre className="mt-2 rounded-md bg-slate-950 p-4 overflow-x-auto">
		          <code className="text-white">
		          [<br/>
			          &quot;https://picsum.photos/200/300?random=1&quot;,<br/>
			          &quot;https://picsum.photos/200/300?random=2&quot;,<br/>
			          &quot;https://picsum.photos/200/300?random=3&quot;<br/>
		          ]
							</code>
		        </pre>
					</div>
				</div>

			</div>
		</main>
	)
}
