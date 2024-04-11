import { Avatar, AvatarImage } from "@/components/ui/avatar"
import {badgeVariants} from "@/components/ui/badge";
import Link from "next/link";
import DownloadImages from "@/components/homepage/download-images";

export default function HomePage(){
	return (
		<main className={'min-h-screen'}>
			<div className="container my-20 max-w-5xl">
				<div className={'flex gap-10 items-center'}>
					<Avatar className={'h-40 w-40'}>
						<AvatarImage src="/images/avatar-500.jpg" />
					</Avatar>

					<div className={'flex flex-col gap-4'}>
						<h1 className={'font-bold text-3xl'}>Vinh Nguyễn</h1>
						<p className={''}>Tôi là Vinh, năm nay xấp xỉ 28 tuổi. Tôi đã trải qua một số công việc khác nhau trong cuộc sống và chốt lại là làm IT, chuyên môn chính là làm website.</p>
						<div className={'flex flex-wrap gap-2'}>
							<Link href={'https://www.youtube.com/@vinhwebit'} className={badgeVariants({ variant: "secondary" })}>Youtube</Link>
							<Link href={'https://www.youtube.com/@vinhwebit'} className={badgeVariants({ variant: "secondary" })}>Facebook</Link>
							<Link href={'https://www.youtube.com/@vinhwebit'} className={badgeVariants({ variant: "secondary" })}>Github</Link>
						</div>
					</div>
				</div>
			</div>

			<div className="container my-20 max-w-5xl">
				<h2 className={'text-xl mb-6 font-medium'}>Download nhiều hình ảnh một lúc bằng mảng URL</h2>
				<DownloadImages/>
			</div>
		</main>
	)
}
