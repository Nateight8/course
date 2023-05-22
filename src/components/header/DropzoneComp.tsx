import { useState } from "react";
import { useS3Upload } from "next-s3-upload";
import Image from "next/image";
import { useFormikContext } from "formik";
import { string } from "zod";
interface Props {
  // setFieldValue: () => void;
}

export default function UploadComponent({}: Props) {
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

      {/* <Image src="/images/1.jpg" alt="" fill className="" /> */}
      {imageUrl && (
        <Image alt="" fill src={imageUrl} className="object-cover" />
      )}
    </div>
  );
}

// {
//   /* <div className="absolute z-40 flex h-full w-full items-center justify-center bg-black/50 transition-all duration-700 ease-in-out hover:bg-black/70">
// <p className="capitalize text-stone-200">
//   Drag and drop or click to add jpeg
// </p>
// </div> */
// }
