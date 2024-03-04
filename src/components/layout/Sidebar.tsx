import { Layout, Menu } from "antd";
import { adminPaths } from "../../routes/admin.routes";
import { sidebarItemsGenerator } from "../../utils/sidebarItemsGenerator";
const { Sider } = Layout;

const Sidebar = () => {
   return (
      <Sider
         breakpoint="lg"
         collapsedWidth="0"
         onBreakpoint={(broken) => {
            console.log(broken);
         }}
         onCollapse={(collapsed, type) => {
            console.log(collapsed, type);
         }}
      >
         <div
            style={{
               color: "white",
               height: "3.8rem",
               display: "flex",
               justifyContent: "center",
               alignItems: "center",
            }}
         >
            <h1>PH University</h1>
         </div>
         <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={["4"]}
            items={sidebarItemsGenerator(adminPaths, "admin")}
         />
      </Sider>
   );
};

export default Sidebar;