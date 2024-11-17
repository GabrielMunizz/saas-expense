"use server";
import { v2 as cloudinary, UploadApiResponse } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true,
});

const uploadImage = async (formData: FormData): Promise<string> => {
  const file = formData.get("profileImage") as File;
  const arrayBuffer = await file.arrayBuffer();
  const buffer = new Uint8Array(arrayBuffer);
  const uploadedImage: UploadApiResponse = await new Promise(
    (resolve, reject) => {
      cloudinary.uploader
        .upload_stream({}, (error, result) => {
          if (error) {
            reject(error);
            return;
          }
          resolve(result as UploadApiResponse);
        })
        .end(buffer);
    },
  );

  return uploadedImage.secure_url;
};

export default uploadImage;
