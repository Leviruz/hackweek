import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { TbTargetArrow } from "react-icons/tb";
import { FaCalendarAlt, FaHistory, FaUserAlt } from "react-icons/fa";
import { SidebarStyle } from "./styles";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="container">
      <SidebarStyle>
        <AiOutlineMenu className="icon" size={40} onClick={toggleSidebar} />

        {isOpen && (
          <div
            style={{ width: "300px", height: "100vh", background: "#545660" }}
          >
            <div className="calendar">
              <FaCalendarAlt size={35} style={{ color: "#fff" }} />
              <p>Acompanhamento de reuniões</p>
            </div>

            <div className="meetings">
              <TbTargetArrow size={35} style={{ color: "#fff" }} />
              <p>Acompanhamento de metas</p>
            </div>
            <div className="history">
              <FaHistory size={35} style={{ color: "#fff" }} />
              <p>Histórico de reuniões</p>
            </div>
            {/* Conteúdo da sidebar */}
          </div>
        )}
        <div
          className="history_icon"
          style={{ marginLeft: isOpen ? "200px" : 0 }}
        >
            <FaUserAlt/>
          {/* Conteúdo principal */}
        </div>
      </SidebarStyle>
    </div>
  );
};

export default Sidebar;
