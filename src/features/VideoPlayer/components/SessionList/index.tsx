import { FC } from "react";
import SessionItem from "./SessionItem";

const SessionList: FC = () => {
    return (
        <div className={`h-full w-full flex flex-row py-sm overflow-x-auto`}>
            <SessionItem />
            <SessionItem />
            <SessionItem />
        </div>
    )
}

export default SessionList;