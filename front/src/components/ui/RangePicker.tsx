import { FC } from "react";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import { useTranslation } from "react-i18next";
import DatePicker from "react-multi-date-picker";
import "react-multi-date-picker/styles/colors/green.css";
import { RangePickerProps } from "src/types/components/ui";
// import { PERSIAN_WEEKDAYS } from "src/utils/dates";

const RangePicker: FC<RangePickerProps> = (props) => {
  const { t } = useTranslation();
  return (
    <DatePicker
      range
      rangeHover
      dateSeparator={t(["rangePicker-To"])}
      calendar={persian}
      locale={persian_fa}
      calendarPosition="bottom-center"
      inputClass="input input-primary-theme w-full text-center bg-inherit text-sm"
      placeholder={t(["rangePicker-TimeRange"])}
      //   weekDays={PERSIAN_WEEKDAYS} it can be customized
      className="green text-xs"
      containerClassName="w-full"
      value={props.value}
      onChange={props.onChange}
    />
  );
};

export default RangePicker;
