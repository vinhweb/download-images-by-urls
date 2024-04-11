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
						<p className={'font-bold text-3xl'}>Vinh Nguyễn</p>
						<p className={''}>Tôi là Vinh, chuyên môn chính là làm website. Project này hoàn toàn free, bạn có thể check source code của nó <Link className={'text-indigo-600 underline'} href={'https://github.com/vinhweb/download-images-by-urls'} target={'_blank'}>tại đây</Link> </p>
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
					<h1 className={'text-2xl font-medium'}>Tool Download nhiều hình ảnh một lúc</h1>
					<p className={'text-gray-800 '}>Đây là một tool siêu đơn giản, giúp bạn download nhiều hình ảnh một lúc bằng đoạn văn bản chứa URLs hình ảnh mà bạn muốn tải về. Phân tách mỗi URL của ảnh bằng dấu <span className={'px-1 bg-yellow-300 text-black rounded'}>,</span> hoặc <span className={'px-1 bg-yellow-300 text-black rounded'}>;</span> hoặc <span className={'px-1 bg-yellow-300 text-black rounded'}>xuống dòng</span></p>
				</div>
				<DownloadImages/>

				<div className="mt-14 flex flex-col gap-4">
					<div className={'text-sm text-gray-800'}>
						<div>Ví dụ 01:</div>
						<pre className="mt-2 rounded-md bg-slate-950 p-4 overflow-x-auto">
		          <code className="text-white">https://picsum.photos/200/300?random=1, https://picsum.photos/200/300?random=2, https://picsum.photos/200/300?random=3</code>
		        </pre>
					</div>
					<div className={'text-sm text-gray-800'}>
						<div>Ví dụ 02:</div>
						<pre className="mt-2 rounded-md bg-slate-950 p-4 overflow-x-auto">
		          <code className="text-white">https://picsum.photos/200/300?random=1; https://picsum.photos/200/300?random=2; https://picsum.photos/200/300?random=3</code>
		        </pre>
					</div>
					<div className={'text-sm text-gray-800'}>
						<div>Ví dụ 03:</div>
						<pre className="mt-2 rounded-md bg-slate-950 p-4 overflow-x-auto">
		          <code className="text-white">
			          https://picsum.photos/200/300?random=1<br/>
			          https://picsum.photos/200/300?random=2<br/>
			          https://picsum.photos/200/300?random=3<br/>
							</code>
		        </pre>
					</div>
				</div>

			</div>
		</main>
	)
}
