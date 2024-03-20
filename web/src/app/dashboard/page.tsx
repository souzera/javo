"use client";

import React, { useEffect, useState } from "react";

import { Equipe, defaultEquipes } from "../../types/equipe";
import { Usuario, defaultUsuario } from "../../types/usuario";

import { Provider } from "react-redux";
import store from "../../redux/store";

import { EquipeSelectButton } from "../../components/Equipes/EquipeSelectButton";
import { DragableListChamado } from "../../components/Chamados/DragableListChamado";
import { CriarEquipeButton } from "../../components/Equipes/CriaEquipeButton";
import { LogoLetter } from "../../components/Logo/LogoLetter";
import { Avatar, Dropdown, Layout, MenuProps, Space } from "antd";
import { getEquipesByUser } from "../../services/equipe/get-equipes";
import { MdArrowDropDownCircle } from "react-icons/md";
import {
  TbLayoutSidebarLeftCollapse,
  TbLayoutSidebarLeftCollapseFilled,
} from "react-icons/tb";

import { getStorageAuth, removeStorageAuth } from "../../util/storage";
import CriarTicketButton from "../../components/Chamados/CriarTicketButton";
import { LogoIcon } from "../../components/Logo/LogoIcon";

const { Header, Footer, Sider, Content } = Layout;

const DashboardPage: React.FC = () => {
  //States

  const auth = getStorageAuth();
  const [currentUser, setCurrentUser] = useState<Usuario>(
    auth.currentUser || defaultUsuario
  );
  const [currentEquipes, setCurrentEquipes] =
    useState<Equipe[]>(defaultEquipes);

  const [collapsed, setCollapsed] = useState(false);

  useEffect(() => {
    if (currentUser) {
      console.log("currentUser logado");
      getEquipesByUser(currentUser.id_profile).then((response) => {
        setCurrentEquipes(response);
      });
    } else {
      console.log("currentUser não está logado");
    }
  }, []);

  const logout = () => {
    removeStorageAuth();
    window.location.href = "/login";
  };

  const items: MenuProps["items"] = [
    {
      label: <a href="#">Editar Perfil</a>,
      key: "0",
    },
    {
      label: <a href="#">Alterar Senha</a>,
      key: "1",
    },
    {
      type: "divider",
    },
    {
      label: <div onClick={logout}>Sair</div>,
      key: "3",
    },
  ];

  // Styles

  const bodyLayoutStyles: React.CSSProperties = {
    minHeight: "100vh",
    overflow: "hidden",
  };

  const childrenLayoutStyles: React.CSSProperties = {
    backgroundColor: "#09090b",
    overflow: "hidden",
  };

  const siderStyles: React.CSSProperties = {
    backgroundColor: "#09090b",
    display: "flex",
    overflow: "auto",
  };

  return (
    <>
      <Provider store={store}>
        <Layout style={bodyLayoutStyles}>
          <Layout style={childrenLayoutStyles}>
            <Sider
              width={collapsed ? "30vw" : "26vw"}
              style={siderStyles}
              trigger={null}
              collapsible
              collapsed={collapsed}
              className="bg-zinc-950"
            >
              <div className="container flex flex-col  h-full p-8 ">
                <div className="mb-4">
                  {collapsed ? (
                    <LogoIcon width={48} height={48} />
                  ) : (
                    <LogoLetter />
                  )}
                </div>
                <div className="flex flex-col gap-4 ">
                  <div className={collapsed? "flex flex-1": 'w-full'}>
                    <CriarEquipeButton isCollapsed={collapsed} />
                  </div>
                  <div>
                    {currentEquipes?.map((equipe) => {
                      let icon_equipe = undefined;
                      if (equipe.icon_url != "") {
                        icon_equipe = equipe.icon_url;
                      }
                      if (
                        equipe.icon_url ==
                        "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Circulo_branco.png/600px-Circulo_branco.png"
                      ) {
                        icon_equipe = undefined;
                      }
                      return (
                        <EquipeSelectButton
                          key={null}
                          id={equipe.id_equipe}
                          nome={equipe.nome}
                          avatar={icon_equipe}
                        />
                      );
                    })}
                  </div>
                </div>
              </div>
            </Sider>

            <Content className="bg-zinc-900 h-auto">
              <div className="flex justify-end items-center p-4 gap-4 -z-40 bg-transparent">
                <div className="w-full p-2">
                  <div className="flex text-white gap-4">
                    <button
                      className="border-2 border-white rounded-full p-2 hover:scale-105 transition ease-in-out duration-1000"
                      onClick={() => {
                        setCollapsed(!collapsed);
                        console.log(collapsed);
                      }}
                    >
                      {collapsed ? (
                        <TbLayoutSidebarLeftCollapseFilled size={24} />
                      ) : (
                        <TbLayoutSidebarLeftCollapse size={24} />
                      )}
                    </button>
                    <CriarTicketButton />
                  </div>
                </div>

                <div className="text-white text-xl flex flex-col justify-center items-end">
                  <span className="font-semibold text-lg ">
                    {currentUser.user}
                  </span>
                  <Dropdown
                    menu={{ items }}
                    trigger={["click"]}
                    className="font-medium text-xs flex justify-end items-center cursor-pointer"
                  >
                    <a onClick={(e) => e.preventDefault()}>
                      <Space className="text-right">
                        <MdArrowDropDownCircle />
                      </Space>
                    </a>
                  </Dropdown>
                </div>
                <Avatar size="large" src={currentUser.url_avatar} />
              </div>

              <div className="m-4">
                <DragableListChamado colunas={3} />
              </div>
            </Content>
          </Layout>

          <Footer className="bg-zinc-800 flex flex-1 justify-center items-center">
            <span className="flex justify-center items-center text-zinc-600">
              JaVo © Copyright 2024
            </span>
          </Footer>
        </Layout>
      </Provider>
    </>
  );
};

export default DashboardPage;
