import React, { useEffect } from "react";
import "ress";
import { ConfigProvider, Layout, Space, Typography } from "antd";
const { Content, Header } = Layout;
import DetailDrawer from "../../components/DetailDrawer";
import TaskList from "../../components/TaskList";
import TaskAddForm from "../../components/TaskAddForm";
import jaJP from "antd/locale/ja_JP";
import "dayjs/locale/ja";
import { useAtomValue, useSetAtom } from "jotai";
import { DrawerOpenAtom, SelectedIdAtom } from "../../atoms/atoms";
import styles from "../..//styles/Index.module.css";
import Sidebar from "../../components/Sidebar";
import { useRouter } from "next/router";

type Pramas = {
  title: string;
  selected: string;
  today: boolean;
};

const ListPage: React.FC = () => {
  const router = useRouter();
  const setSelectedId = useSetAtom(SelectedIdAtom);
  const setDrawerOpen = useSetAtom(DrawerOpenAtom);
  const { filter } = router.query;
  const params: Pramas =
    filter === "today"
      ? {
          title: "今日のタスク",
          selected: "today",
          today: true,
        }
      : {
          title: "全てのタスク",
          selected: "all",
          today: false,
        };

  const drawerOpen = useAtomValue(DrawerOpenAtom);

  useEffect(() => {
    window.electron.onOpenTask((_event, id) => {
      setSelectedId(id);
      setDrawerOpen(true);
      router.push("/list/today");
    });
  }, []);

  return (
    <ConfigProvider locale={jaJP}>
      <Header className={styles.header} />
      <Layout className={styles.pageLayout}>
        <Sidebar className={styles.leftContent} selected={params.selected} />
        <Layout className={styles.centerLayout}>
          <Content className={styles.addTaskFormContent}>
            <Typography.Title level={2}>{params.title}</Typography.Title>
            <TaskAddForm />
          </Content>
          <Content className={styles.listContent}>
            <Space direction="vertical" style={{ display: "flex" }}>
              <TaskList today={params.today} filter="incompleted" />
              <TaskList today={params.today} filter="completed" />
            </Space>
          </Content>
        </Layout>
        <Content
          className={`${styles.rightContent} ${
            drawerOpen ? "" : styles.rightContentClose
          }`}
        >
          <DetailDrawer />
        </Content>
      </Layout>
    </ConfigProvider>
  );
};
export default ListPage;
