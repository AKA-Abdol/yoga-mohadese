import ButtonGroup from "../../components/ui/ButtonGroup";
import { FC } from "react";
import Users from "./Users";
import Terms from "./Terms";
import Tickets from "./Tickets";
import { useTranslation } from "react-i18next";

const Admin: FC = () => {
  const { t } = useTranslation();
  return (
    <ButtonGroup
      buttonNames={[
        `${t("pagesAdminIndex-users")}`,
        `${t("pagesAdminIndex-terms")}`,
        `${t("pagesAdminIndex-tickets")}`,
      ]}
      routes={["users", "terms", "tickets"]}
      data={[<Users />, <Terms />, <Tickets />]}
    />
  );
};
export default Admin;
