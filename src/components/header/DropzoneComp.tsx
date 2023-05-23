import { useState } from "react";
import { useS3Upload } from "next-s3-upload";
import Image from "next/image";
import { useFormikContext } from "formik";

export default function UploadComponent() {
  const [imageUrl, setImageUrl] = useState<null | string>();
  const { uploadToS3 } = useS3Upload();
  const { setFieldValue } = useFormikContext();

  const handleFileChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0] as File;

    const { url } = await uploadToS3(file);

    setImageUrl(url);
    setFieldValue("image", url);
  };

  return (
    <div className="relative  h-[30vh] w-full  border border-dashed border-border">
      <div className="absolute inset-0 z-50">
        <input
          type="file"
          onChange={handleFileChange}
          className="h-full w-full opacity-0"
        />
      </div>

      {imageUrl && (
        <Image alt="" fill src={imageUrl} className="object-cover" />
      )}
    </div>
  );
}
