import { FieldErrorType } from "../shared/types";

export const getValidationMessage = (type: FieldErrorType) => {
  switch (type) {
    case "required":
      return "This field is required";

    // case "pattern":
    //   return "Incorrect email";

    case "minLength":
      return "Mininimal length is 5";

    case "maxLength":
      return "Maximum length is 20";

    default:
      return "Incorrect field value";
  }
};
