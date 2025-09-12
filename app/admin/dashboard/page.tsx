import {getDBConnection} from "../../api/db"
import SideBar from "../components/sidebar";

export default async function AdminPanel(){
    const db_connection = await getDBConnection();
    
    return(
    <div>
        <SideBar/>
    </div>
    )
}