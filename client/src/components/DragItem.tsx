import React, { useCallback } from "react";
import { Box, styled, Typography } from "@mui/material";
import { useDropzone } from "react-dropzone";
import { useAppDispatch, useAppSelector } from "../hooks/commonHooks";
import { useUpload } from "../hooks/uploadHook";
import { CloudUpload } from "@mui/icons-material";
import { imgUploadProgSelector } from "../store/selectors/collectionSelector";
import ProgressLoader from "./Loaders/ProgressLoader";
import { useTranslation } from "react-i18next";
import { updatedCollectionSelector } from "../store/selectors/mainSelectors";

const StyledContainer = styled(Box)(({ theme }) => ({
  flex: 1,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: theme.spacing(5),
  borderWidth: 2,
  borderRadius: theme.spacing(2),
  borderColor: theme.palette.info.main,
  borderStyle: "dashed",
  backgroundColor: theme.palette.divider,
  color: theme.palette.mode,
  outline: "none",
  transition: "border .24s ease-in-out",
}));

const StyledBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: theme.spacing(2),
}));

const DragItem: React.FC = () => {
  const dispatch = useAppDispatch();
  const { t } = useTranslation();
  const { uploadFile } = useUpload();
  const imageUploadProgress = useAppSelector(imgUploadProgSelector);

  const onDrop = useCallback((acceptedFiles: any) => {
    uploadFile(acceptedFiles[0]);
  }, []);

  const { getRootProps, getInputProps, isDragReject } = useDropzone({
    onDrop,
    multiple: false,
    accept: { "image/png": [".png"], "image/jpeg": [".jpg", ".jpeg"] },
  });

  return (
    <StyledContainer {...getRootProps()}>
      <input id="collectionImgage" type="file" {...getInputProps()} />
      {imageUploadProgress > 0 ? (
        <Typography textAlign="center">
          <ProgressLoader value={imageUploadProgress} />
        </Typography>
      ) : isDragReject ? (
        <Typography textAlign="center">{t("uploadErrorMessage")}</Typography>
      ) : (
        <StyledBox>
          <Typography textAlign="center" sx={{ position: "relative" }}>
            {t("dragDrop")}
          </Typography>
          <CloudUpload />
        </StyledBox>
      )}
    </StyledContainer>
  );
};

export default DragItem;
