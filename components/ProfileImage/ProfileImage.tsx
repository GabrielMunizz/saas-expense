"use client";

import { CldImage } from "next-cloudinary";
import React from "react";
import profileIcon from "@/public/profileIcon.png";
import Image from "next/image";

type ProfileImageProps = {
  profileImage: string | null;
};

const ProfileImage = ({ profileImage }: ProfileImageProps) => {
  return profileImage ? (
    <CldImage
      src={profileImage}
      alt="profile photo"
      className="rounded-full object-contain"
      width={150}
      height={75}
    />
  ) : (
    <Image
      src={profileIcon}
      alt="profile photo"
      className="rounded-full object-contain"
      width={150}
      height={75}
    />
  );
};

export default ProfileImage;
