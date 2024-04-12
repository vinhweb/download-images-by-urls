'use client'
import JSZip from "jszip";
import {saveAs} from "file-saver";
import {Button} from "@/components/ui/button";
import {Textarea} from "@/components/ui/textarea";

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form"
import { toast } from "@/components/ui/use-toast"
import {Fragment} from "react";

const FormSchema = z.object({
	urls: z
		.string()
		.min(10, {
			message: "Ít nhất 10 ký tự",
		})
		.max(10000, {
			message: "Không được vượt quá 10000 ký tự",
		}),
})

export default function DownloadImages(){
	const form = useForm<z.infer<typeof FormSchema>>({
		resolver: zodResolver(FormSchema),
	})

	function onSubmit(data: z.infer<typeof FormSchema>) {
		let arr : string[] = []

		try {
			arr = data.urls.trim()
				.replaceAll('\'', '')
				.replaceAll('"', '')
				.replaceAll('[', '')
				.replaceAll(']', '')
				.replaceAll('\n', ',')
				.replaceAll(';', ',')
				.split(',')
				.map(n=>n.trim())
				.filter(n=>n)
		} catch (e) {
			form.setError('urls', {message: 'Format của text chưa đúng'})
			return
		}

		arr = Array.from(new Set(arr))

		toast({
			title: "🎶 Bắt đầu tải các link ảnh bạn submit, vui lòng chờ...",
			description: (
				<pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">
	          {data.urls}
          </code>
        </pre>
			),
		})

		downloadAllImages(arr).then(() => toast({
			title: '👌 Đã tải thành công',
			variant: "default"
		})).catch((e) => {
			toast({
				title: '⁉️ Có lỗi xảy ra',
				variant: "destructive"
			})
			console.log(e)
		})
	}

	const imageUrlToBase64 = async (url: string) => {
		const data = await fetch(url);
		const blob = await data.blob();
		return new Promise((resolve, reject) => {
			const reader = new FileReader();
			reader.readAsDataURL(blob);
			reader.onloadend = () => {
				const base64data = reader.result;
				resolve(base64data);
			};
			reader.onerror = reject;
		});
	};

	async function downloadAllImages(image_urls: string[]){
		const zip = new JSZip()
		for (let i = 0; i < image_urls.length; i++) {
			const file: any = await imageUrlToBase64(image_urls[i])
			zip.file(`image_${i}.png`, file.replace(/^data:image\/(png|jpg|jpeg);base64,/, ""), {base64: true})
		}

		zip.generateAsync({type:"blob"}).then(function(content) {
			saveAs(content, "edm8.zip");
		});
	}
	return(
		<Fragment>
			<Form {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)} className="grid w-full gap-2">
					<FormField
						control={form.control}
						name="urls"
						render={({ field }) => (
							<FormItem>
								<FormControl>
									<Textarea
										placeholder={
											`Điền link hình ảnh vào đây, phân tách nhau bởi dấu ',' hoặc ';' hoặc 'xuống dòng'`
										}
										className="resize-none"
										required
										rows={10}
										{...field}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<Button type={'submit'}>Tải hình ảnh</Button>
				</form>
			</Form>
		</Fragment>
	)
}
