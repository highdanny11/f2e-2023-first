import { z } from "zod";

export const publicServerSchma = z.object({
  username: z.string().min(1, {message: '必填'}),
	phone: z.string().min(1, {message: '必填'}),
  email: z.string().min(1, {message: '必填'}).email({message: '格式錯誤'}),
	message: z.string().min(1, {message: '必填'}),
})