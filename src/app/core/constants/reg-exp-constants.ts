export class RegExpConstants {
  public static EMAIL_PATTERN: RegExp =
    /^([a-zA-Z0-9_+\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,})$/;

  public static PHONE_PATTERN: RegExp = /^[0-9]{3}-[0-9]{3}-[0-9]{4}$/;

  public static NPI_NUMBER_PATTERN = /^\d{10}$/;

  public static ZIP_CODE_PATTERN: RegExp = /^\d{5}$/;

  public static FAX_PATTERN: RegExp = /^[0-9()+\- ]+$/;

  public static SSN_PATTERN: RegExp = /^[0-9]{3}-[0-9]{2}-[0-9]{4}$/;
}
