import crypto from "crypto";
import multer from "multer";
import { extname, resolve } from "path";

export default {
	upload(folder: string) {
		return {
			storage: multer.diskStorage({
				destination: resolve(__dirname, "..", "..", folder),
				filename: (req, file, callback) => {
					const fileHash = crypto.randomBytes(16).toString("hex");
					const originalnameFormated = file.originalname
						.trim()
						.toLowerCase()
						.replace(/\s+/g, "-")
						.replace(/[^a-z0-9.-]/g, "");
					const fileName = `${fileHash}-${originalnameFormated}`;
					return callback(null, fileName);
				},
			}),
		};
	},
};
