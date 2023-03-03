import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { useAppDispatch } from "./commonHooks";
import {
  setImageUploadProgress,
  setImageUrl,
} from "../store/slices/collectionSlice";
import firebaseApp from "../utils/firebase";

export const useUpload = () => {
  const dispatch = useAppDispatch();

  const uploadFile = (file: any) => {
    const storage = getStorage(firebaseApp);
    const fileName = new Date().getTime() + file.name;
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        dispatch(setImageUploadProgress(Math.round(progress)));
        switch (snapshot.state) {
          case "paused":
            break;
          case "running":
            break;
          default:
            break;
        }
      },
      (error) => {},
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          dispatch(setImageUrl(downloadURL));
        });
      }
    );
  };

  return { uploadFile };
};
